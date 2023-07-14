FROM node:16.13.2-alpine AS base

FROM base AS builder
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app
COPY . .
RUN npm install -g turbo
RUN turbo prune --scope=@personal/external --docker


FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/package-lock.json ./package-lock.json
RUN npm ci
COPY --from=builder /app/out/full/ .
RUN npm install -g turbo
RUN turbo run build --filter=@personal/external...
RUN npm prune --production

FROM base AS runner
WORKDIR /app
COPY --from=installer /app/ .
ENV NODE_ENV=production
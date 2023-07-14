## Bootstrapping the application

```shell
npm install
```

## Running npm script for a specific workspace

```shell
# Run the test script for the packages/multiply workspace
npm run test --workspace=packages/multiply
```

## Building and running Docker applications

### External
```shell
docker build -t internal -f ./services/external/Dockerfile .
docker run -p 3001:3001 external node services/external/src/index.js

curl 'localhost:3001/todos/3'
# Response: some json
```

### Internal
```shell
docker build -t internal -f ./services/internal/Dockerfile .
docker run -p 3000:3000 internal node services/internal/dist/main.js

curl 'localhost:3000?number=10'
# Response: 11
```

## Notes

- (not sure if this is true) `npm install` creates symlinks. You can first run `npm install` and then `npm run build` and it will correctly symlink the dist folder to root level node_modules. 


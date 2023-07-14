import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { add1 } from "@personal/add1";

@Controller()
export class MainController {
  @Get()
  get(@Query('number', ParseIntPipe) number: number): number {
    return add1(number);
  }
}

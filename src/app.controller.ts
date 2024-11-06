import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  @Get('factorial/:number')
  calculateFactorial(@Param('number', ParseIntPipe) number: number): { factorial: number | string } {
    const result = this.factorial(number);
    return { factorial: result };
  }

  // Helper function to calculate factorial
  private factorial(num: number): number | string {
    if (num < 0) return "Factorial not defined for negative numbers";
    if (num === 0 || num === 1) return 1;
    return num * this.factorial(num - 1);
  }
}

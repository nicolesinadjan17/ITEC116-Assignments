import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments123')
export class AssignmentController {

  @Get('fibonacci/:n')
  getFibonacci(@Param('n') n: string): { sequence: number[] } {
    const count = parseInt(n, 10);

    if (isNaN(count) || count < 1) {
      throw new Error("Parameter 'n' must be a positive integer.");
    }

    const sequence = this.calculateFibonacci(count);
    return { sequence };
  }

  private calculateFibonacci(n: number): number[] {
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }
}
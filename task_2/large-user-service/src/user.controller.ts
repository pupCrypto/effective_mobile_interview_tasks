import { Controller, Post } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller('users/solve-problems')
export class UsersController {
  constructor(private service: UsersService) {}

  @Post()
  async solveProblems() {
    return await this.service.solveProblems();
  }
}

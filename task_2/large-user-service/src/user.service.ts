import { Injectable } from '@nestjs/common';
import User from './users.model';

@Injectable()
export class UsersService {
  async solveProblems() {
    const updated = await User.update(
      { has_problems: false },
      {
        where: {
          has_problems: true,
        },
        returning: true,
      },
    );
    console.log(updated);
    const [count, ..._] = updated;
    return { status: 'ok', solved_users_problems: count };
  }
}

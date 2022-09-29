import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to backend!' };
  }

  getArray(): Array<Object> {
    return [
      {
        id: 1,
        title: 'Post 1',
      },
      {
        id: 2,
        title: 'Post 2',
      },
      {
        id: 3,
        title: 'Post 3',
      },
    ];
  }
}

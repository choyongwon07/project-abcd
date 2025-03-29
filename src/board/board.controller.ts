import { Get, Controller } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Controller('board')
export class BoardController {
  private postsFilePath = path.join(__dirname, '../../data.json');

  @Get('/')
  getAllPosts() {
    const data = fs.readFileSync(this.postsFilePath, 'utf-8');
    return JSON.parse(data);
  }
}

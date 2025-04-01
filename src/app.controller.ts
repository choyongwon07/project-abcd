import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  home() {
    return 'Welcome to my movie API';
  }
}

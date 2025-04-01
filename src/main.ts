import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //클래스에 정의되지 않은 속성은 무시한다.
      forbidNonWhitelisted: true, //클래스에 정의되지 않은 속성이 들어오면 에러를 발생시킨다.
      transform: true, //유저들이 보낸거를 원하는 타입으로 바꿔줌
    }),
  );

  await app.listen(3000);
}
bootstrap();

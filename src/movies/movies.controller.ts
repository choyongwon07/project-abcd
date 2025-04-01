import {
  Get,
  Controller,
  Param,
  Post,
  Delete,
  Patch,
  Body,
  Query,
} from '@nestjs/common';
import { Movie } from 'src/movies/entities/movies.entity';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('board')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('search') //search가 id 밑에 있으면 id로 취급받아서 위로 올려줌
  search(@Query('year') searchingYear: string) {
    //@Querry는 NestJS에서 요청의 쿼리 매개변수(Query Parameter)를 가져오는 데 사용, ?뒤에 querry 매개변수를 객체로 가져오면 받을 수 있다.
    return `We are searching for a movie made after: ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieID: number): Movie {
    //@Param: NestJS에서 요청의 경로 매개변수(URL Parameter)를 가져오는 데 사용됨
    console.log(typeof movieID); //string으로 들어옴
    return this.moviesService.getOne(movieID);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    //@Body: NestJS에서 요청의 본문(body)을 가져오는 데 사용됨
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieID: number) {
    return this.moviesService.deleteOne(movieID);
  }

  @Patch('/:id') //일부분 수정할때 사용
  patch(@Param('id') movieID: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(movieID, updateData);
  }
}

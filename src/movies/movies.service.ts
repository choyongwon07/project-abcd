import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from 'src/movies/entities/movies.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  } //영화 전체 목록을 가져오는 메서드

  getOne(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === +id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`); //에러처리
    }
    return movie; //특정 영화의 정보를 가져오는 메서드
  } //특정 영화의 정보를 가져오는 메서드, string를 number로 바꾸어주는역할

  deleteOne(id: number) {
    this.getOne(id); //이건 뭔 코드여?
    this.movies = this.movies.filter((movie) => movie.id !== +id); //이건 뭔 코드여?
  }

  create(movieData: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData, //뭔 원리여?
    });
  } //영화 추가하는 메서드

  update(id: number, updateData: UpdateMovieDto) {
    const movie = this.getOne(id);
    this.deleteOne(id); //이건 뭔 코드여?
    this.movies.push({ ...movie, ...updateData });
    //기존 영화 정보를 삭제하고, 업데이트된 정보를 추가하는 메서드
  }
}

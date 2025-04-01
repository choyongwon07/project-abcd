import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string; //Movie의 읽기전용

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true }) //각각의 장르가 문자열인지 확인
  readonly genres: string[];
}

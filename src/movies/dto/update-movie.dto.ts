import { IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types'; //PartialType를 사용하면 자동으로 ? 붙여줌
import { CreateMovieDto } from './create-movie.dto'; //create-movie.dto.ts에서 가져옴

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
//PartialType은 타입을 변환시키고 사용할 수 있게해줌

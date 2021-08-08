import {
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { PositiveIntPipe } from 'src/common/Pipe/positiveint.pipe';
import { HttpExceptionFilter } from 'src/http-exception.filter';
import { CatsService } from './cats.service';

@Controller('cats')
// @UseFilters(HttpExceptionFilter) // 지역사용
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  //cats
  @Get()
  getAllCat() {
    // 404 에러 메세지
    // throw new HttpException('api is not found', 404);
    // Error Message 만들기
    // throw new HttpException(
    //   {
    //     success: false,
    //     메세지만 계속 바꿔주는 형식으로 Exception 처리만들기 src 에 http-exception.filter 파일만들기
    //     message: 'Page is Not Found Check Please',
    //   },
    //   404,
    // );

    throw new HttpException('Page is Not Found ', 401);

    return 'all cat';
  }

  //cats/:id
  @Get(':id')
  // parseIntPipe는 string으로 넘어오는 파라미터를 number 로 자동변환해준다.
  getOneCat(@Param('id', ParseIntPipe, PositiveIntPipe) param: number) {
    console.log(param);
    console.log(typeof param);
    console.log();
    return 'one cat';
  }

  @Post()
  createCat() {
    return 'create Cat';
  }

  @Put(':id')
  updateCat() {
    return 'update Cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return 'update';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete service';
  }
}

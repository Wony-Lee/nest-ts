import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  // NestJs 에서 제공해주는 로깅을 사용하는 것이 좋다.
  private logger = new Logger('HTTP');
  use(req: Request, res: Response, next: NextFunction) {
    res.on('finish', () => {
      this.logger.log(
        `${req.ip}, ${req.method}, ${res.statusCode}`,
        req.originalUrl,
      );
    });

    // ip 찍기 req.ip
    // method 찍기 req.method
    // 상태 찍기 res.statusCode
    // 엔드포인트 확인 req.originalUrl

    next();
  }
}

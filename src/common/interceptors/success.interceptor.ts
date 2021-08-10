import {
  Injectable,
  CallHandler,
  ExecutionContext,
  NestInterceptor,
  Next,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class SuccessInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // before 같은 경우 middleware 에서 많이 처리함.
    // console.log('Before..');

    const now = Date.now();
    return next.handle().pipe(
      map((data) => ({
        success: true,
        data,
      })),
    );
  }
}

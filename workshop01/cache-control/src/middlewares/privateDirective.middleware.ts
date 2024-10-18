import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class PrivateDirectiveMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    res.setHeader('Cache-Control', 'private, max-age=3600');
    next();
  }
}

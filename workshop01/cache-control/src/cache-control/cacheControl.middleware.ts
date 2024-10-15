import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class CacheControlMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const cacheControlParam = req.query.cacheControl as string;
    let responseDirectives = [];
    const maxAgeParam = req.query.maxAge as string;

    if (cacheControlParam) {
      const cacheDirectives = cacheControlParam.split(',');
      const validCacheDirectives = [
        'private',
        'public',
        'no-cache',
        'no-store',
        'must-revalidate',
      ];

      cacheDirectives.forEach((directive) => {
        if (validCacheDirectives.includes(directive)) {
          responseDirectives.push(directive);
        }
      });
    }

    if (maxAgeParam && !isNaN(Number(maxAgeParam))) {
      responseDirectives.push(`max-age=${maxAgeParam}`);
    }

    if (responseDirectives.length > 0) {
      res.setHeader('Cache-control', responseDirectives.join(', '));
    } else {
      res.setHeader('Cache-control', 'no-store');
    }

    next();
  }
}

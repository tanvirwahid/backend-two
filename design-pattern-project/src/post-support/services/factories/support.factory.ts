import { SupportAdderFactory } from './support-adder.factory';
import { SupportRemoverFactory } from './support-remover.factory';
import { PostService } from '../../../post/services/post.service';
import { SupportModifierFactoryInterface } from '../../contracts/support-modifier-factory.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SupportFactory {
  constructor(
    private postService: PostService,
    private supportAdderFactory: SupportAdderFactory,
    private supportRemoverFactory: SupportRemoverFactory,
  ) {}

  async getFactory(
    userId: number,
    postId: number,
  ): Promise<SupportModifierFactoryInterface> {
    const isPostSupported = await this.postService.checkIfSupportedByUser(
      userId,
      postId,
    );
    if (isPostSupported) {
      return this.supportRemoverFactory;
    }

    return this.supportAdderFactory;
  }
}

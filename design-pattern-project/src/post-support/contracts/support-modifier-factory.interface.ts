import { Support } from '../../post/types/support.type';

export interface SupportModifierFactoryInterface {
  modifySupport(userId: number, postId: number): Promise<Support>;
}

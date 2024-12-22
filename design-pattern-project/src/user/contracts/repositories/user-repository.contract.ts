export interface UserRepositoryInterface {
  checkIfAdminById(id: number): Promise<boolean>;
  increaseReputationById(id: number, reputation: number);
  decreaseReputationById(id: number, reputation: number);
}

export const USER_REPOSITORY = 'USER_REPOSITORY';

export interface RepositoryInterface {
  executeTransaction<T>(callback: () => Promise<T>): Promise<T>;
}

export const DB_REPOSITORY_INTERFACE = 'REPOSITORY_INTERFACE';

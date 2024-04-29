export interface IExecuteContext {
  currentUser?: { id: string; email: string };
}

export interface IUseCase {
  execute(params?: any, context?: IExecuteContext): unknown;
}

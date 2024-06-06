export interface ExecuteContext {
  currentUser?: { id: string; email: string };
}

export interface UseCase {
  execute(params?: any, context?: ExecuteContext): unknown;
}

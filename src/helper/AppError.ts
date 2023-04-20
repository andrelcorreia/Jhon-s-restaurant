type AppErrorParams = {
  data?: unknown;
  statusCode?: number;
  message?: string;
};
export default class AppError {
  public readonly message: string | undefined;
  public readonly data: unknown;
  public readonly statusCode: number;

  constructor({ statusCode = 500, message, data }: AppErrorParams) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}

type AppResponseParams = {
  statusCode?: number;
  message?: string;
  data?: unknown;
};

export default class AppResponse {
  public readonly message: string | undefined;
  public readonly data: unknown;
  public readonly result = "success";
  public readonly statusCode: number;

  constructor({ statusCode, message, data }: AppResponseParams) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}

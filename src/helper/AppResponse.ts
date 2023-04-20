type AppResponseParams = {
  message?: string;
  data?: unknown;
  transactionId?: string;
};

export default class AppResponse {
  public readonly message: string | undefined;
  public readonly transactionId: string | undefined;
  public readonly data: unknown;
  public readonly result = "success";
  public readonly statusCode = 200;

  constructor({ message, transactionId, data }: AppResponseParams) {
    this.message = message;
    this.transactionId = transactionId;
    this.data = data;
  }
}

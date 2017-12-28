export class AccountTransactionRequest {
  constructor(public page: number,
              public size: number,
              public categoriesToFilter: string[],
              public amount: number) {
  }
}

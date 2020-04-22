/** @format */

export type InvoiceData = {
  Id: string;
  Amount: number;
  Date: string;
  Name: string;
  AmountView: string;
};

export enum InvoiceState {
  Active = 0,
  Closed = 1,
  Paid = 2,
  Canceled = 3
}

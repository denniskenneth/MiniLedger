import type { Invoice, InvoiceUpdate, NewInvoice } from "../types/invoice.js";

let nextId: number = 1;
const invoiceStore: Invoice[] = [];

export function createInvoice(input: NewInvoice): Invoice {
  const invoice: Invoice = {
    ...input,
    id: nextId,
    status: "draft",
    issuedDate: new Date(),
  };
  nextId++;
  invoiceStore.push(invoice);
  return invoice;
}

export function updateInvoice(
  id: number,
  changes: InvoiceUpdate,
): Invoice | undefined {
  const invoice = invoiceStore.find((inv) => inv.id === id);
  if (!invoice) return undefined;
  Object.assign(invoice, changes);

  return invoice;
}

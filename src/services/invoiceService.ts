import { VAT_RATE } from "../config.js";
import type {
  Invoice,
  InvoiceTotals,
  InvoiceUpdate,
  LineItem,
  NewInvoice,
} from "../types/invoice.js";

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

export function findInvoice(
  idOrClientName: number | string,
): Invoice | undefined {
  if (typeof idOrClientName === "number") {
    return invoiceStore.find((invoice) => invoice.id === idOrClientName);
  }
  return invoiceStore.find(
    (inv) => inv.client.name.toLowerCase() === idOrClientName.toLowerCase(),
  );
}

export function lineItemTotal(lineItem: LineItem): number {
  return Math.round(lineItem.quantity * lineItem.unitPriceInMinorUnit);
}

export function invoiceSubtotal(inv: Invoice): number {
  return inv.items.reduce(
    (runningTotal, currentItem) => runningTotal + lineItemTotal(currentItem),
    0,
  );
}

export function invoiceTotals(inv: Invoice): InvoiceTotals {
  const subtotal = invoiceSubtotal(inv);
  const vat = Math.round(subtotal * VAT_RATE);
  const total = subtotal + vat;
  return {
    subtotal,
    vat,
    total,
  };
}

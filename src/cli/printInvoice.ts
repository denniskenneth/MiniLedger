import { invoiceTotals, lineItemTotal } from "../services/invoiceService.js";
import type { Invoice } from "../types/invoice.js";
import { formatNaira } from "../utils/money.js";

export function printInvoice(inv: Invoice): void {
  const totals = invoiceTotals(inv);
  console.log("Invoice ID: ", inv.id);
  console.log("Status: ", inv.status);
  console.log("Client Name: ", inv.client.name);
  inv.items.forEach((item) => {
    console.log("Item Name: ", item.name);
    console.log("Quantity: ", item.quantity);
    console.log("Line Total: ", formatNaira(lineItemTotal(item)));
  });
  console.log("Subtotal: ", formatNaira(totals.subtotal));
  console.log("VAT: ", formatNaira(totals.vat));
  console.log("Total: ", formatNaira(totals.total));
}

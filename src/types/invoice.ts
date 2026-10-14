import type { Client } from "./client.js";

type Invoice = {
  id: number;
  client: Client;
  items: LineItem[];
  status: InvoiceStatus;
  issuedDate: Date;
  dueDate: Date;
  notes?: string;
};

type InvoiceStatus = "draft" | "sent" | "paid" | "overdue";

type LineItem = {
  name: string;
  type: "product" | "service";
  description: string;
  quantity: number;
  unitPriceInMinorUnit: number;
};

type NewInvoice = Omit<Invoice, "id" | "status" | "issuedDate">;

type InvoiceUpdate = Partial<Omit<Invoice, "id">>;

export type { LineItem, Invoice, NewInvoice, InvoiceUpdate };

import type { Invoice, LineItem } from "./types/invoice.js";
import type { Client } from "./types/client.js";
import type { Address } from "./types/address.js";
import {
  createInvoice,
  findInvoice,
  updateInvoice,
} from "./services/invoiceService.js";

const bizAddress: Address = {
  street:
    "46 Ordinance Road, Off Trans Amadi Industrial Layout, P.M.B, 166 T/A, Trans Amadi",
  city: "Port Harcourt",
  postalCode: "500003",
  state: "Rivers",
  country: "Nigeria",
};
const webDesign: LineItem = {
  name: "Web dev Service",
  type: "service",
  description: "Building an Enterprise Website",
  quantity: 1,
  unitPriceInMinorUnit: 9999999,
};

const food: LineItem = {
  name: "Jellof Rice",
  type: "product",
  description:
    "Serving of Jellof rice made from a base of tomatoe sauce and white rice",
  quantity: 2,
  unitPriceInMinorUnit: 300000,
};

const bizClient: Client = {
  name: "Gigasec Services Limited",
  tin: "14201561-5681",
  address: bizAddress,
};
const indiClient: Client = {
  name: "Jeff Teague",
};

const webDesignInv = createInvoice({
  client: bizClient,
  items: [webDesign],
  dueDate: new Date("2027-03-25"),
});

const foodInv = createInvoice({
  client: indiClient,
  items: [food],
  dueDate: new Date("2027-03-25"),
});

console.log("Web design invoice: ", webDesignInv);
console.log("Food invoice: ", foodInv);

const newWebDesignInv = updateInvoice(1, { status: "sent" });
console.log("New Web design invoice: ", newWebDesignInv);

const test = updateInvoice(99, {});
console.log("Test: ", test);

console.log("Find Invoice by ID:", findInvoice(2));
console.log("Find Invoice by Name:", findInvoice("jeff teague"));
console.log("Find Invoice by Name:", findInvoice("Nobody"));

// console.log(`Buisness: `, bizClient);
// console.log(`Individual: `, indiClient);

console.log("miniledger up");

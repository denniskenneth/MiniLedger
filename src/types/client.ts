import type { Address } from "./address.js";
import type { Contact } from "./contact.js";

type Client = {
  name: string;
  address?: Address;
  tin?: string;
  contact?: Contact;
};

export type { Client };

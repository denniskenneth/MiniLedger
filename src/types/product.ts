type Product = {
  name: string;
  description?: string;
  barcode?: string;
  priceInMinorUnit: number;
  currency: "NGN" | "USD" | "GBP";
};

export type { Product };

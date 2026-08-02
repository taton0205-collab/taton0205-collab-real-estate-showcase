import propertiesData from "@/data/properties.json";

export type Operation = "venta" | "alquiler";
export type PropertyType = "casa" | "departamento" | "terreno";
export type Tag = "nuevo" | "oportunidad" | "premium";

export type Property = {
  id: string;
  title: string;
  price: number;
  currency: "USD" | "ARS";
  operation: Operation;
  type: PropertyType;
  zone: string;
  rooms: number;
  area: number;
  image: string;
  tag?: Tag;
  description: string;
  features: string[];
};

export const properties: Property[] = propertiesData as Property[];

export function formatPrice(property: Pick<Property, "price" | "currency" | "operation">) {
  const amount = new Intl.NumberFormat("es-AR").format(property.price);
  const suffix = property.operation === "alquiler" ? "/mes" : "";
  return `${property.currency} ${amount}${suffix}`;
}

export function getFeatured(count = 4) {
  return properties.slice(0, count);
}

export function getProperty(id: string) {
  return properties.find((p) => p.id === id);
}

export function filterProperties(params: {
  operation?: string;
  type?: string;
  zone?: string;
}) {
  return properties.filter((p) => {
    if (params.operation && p.operation !== params.operation) return false;
    if (params.type && p.type !== params.type) return false;
    if (params.zone && !p.zone.toLowerCase().includes(params.zone.toLowerCase())) return false;
    return true;
  });
}

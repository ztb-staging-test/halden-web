export type ShipmentStatus =
  | "booked"
  | "picked_up"
  | "in_transit"
  | "out_for_delivery"
  | "delivered"
  | "exception";

export interface Shipment {
  id: string;
  customer_id: string;
  origin: string;
  destination: string;
  weight_kg: number;
  carrier: string;
  status: ShipmentStatus;
  updated_at: string;
}

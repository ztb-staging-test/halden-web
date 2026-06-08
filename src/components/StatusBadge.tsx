import type { ShipmentStatus } from "../types";

const LABELS: Record<ShipmentStatus, string> = {
  booked: "Booked",
  picked_up: "Picked Up",
  in_transit: "In Transit",
  out_for_delivery: "Out For Delivery",
  delivered: "Delivered",
  exception: "Exception",
};

export function StatusBadge({ status }: { status: ShipmentStatus }) {
  return <span className={`badge badge-${status}`}>{LABELS[status]}</span>;
}

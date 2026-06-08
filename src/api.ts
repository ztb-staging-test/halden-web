import type { Shipment } from "./types";

export async function fetchShipments(signal?: AbortSignal): Promise<Shipment[]> {
  const res = await fetch("/api/shipments", { signal });
  if (!res.ok) throw new Error(`shipments request failed: ${res.status}`);
  return res.json();
}

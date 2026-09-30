import { useEffect, useState } from "react";
import { fetchShipments } from "./api";
import { KpiCards } from "./components/KpiCards";
import { ShipmentTable } from "./components/ShipmentTable";
import type { Shipment, ShipmentStatus } from "./types";

export default function App() {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<ShipmentStatus | "all">("all");
  const visible = status === "all" ? shipments : shipments.filter((s) => s.status === status);

  useEffect(() => {
    const ctrl = new AbortController();
    fetchShipments(ctrl.signal)
      .then(setShipments)
      .catch((e: Error) => e.name !== "AbortError" && setError(e.message));
    return () => ctrl.abort();
  }, []);

  return (
    <main>
      <header>
        <h1>Halden Freight Analytics</h1>
        <p className="sub">Live shipments across your carriers</p>
      </header>
      {error && <p className="error">Couldn't load shipments. {error}</p>}
      <KpiCards shipments={shipments} />
      <label className="filter">
        Status{" "}
        <select value={status} onChange={(e) => setStatus(e.target.value as ShipmentStatus | "all")}>
          <option value="all">All</option>
          <option value="in_transit">In Transit</option>
          <option value="exception">Exception</option>
          <option value="delivered">Delivered</option>
        </select>
      </label>
      <ShipmentTable shipments={visible} />
    </main>
  );
}

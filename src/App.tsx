import { useEffect, useState } from "react";
import { fetchShipments } from "./api";
import { KpiCards } from "./components/KpiCards";
import { ShipmentTable } from "./components/ShipmentTable";
import type { Shipment } from "./types";

export default function App() {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [error, setError] = useState<string | null>(null);

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
      <ShipmentTable shipments={shipments} />
    </main>
  );
}

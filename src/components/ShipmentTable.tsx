import type { Shipment } from "../types";
import { StatusBadge } from "./StatusBadge";

export function ShipmentTable({ shipments }: { shipments: Shipment[] }) {
  if (shipments.length === 0) return <p className="empty">No shipments yet.</p>;
  return (
    <table>
      <thead>
        <tr>
          <th>Shipment</th>
          <th>Route</th>
          <th>Carrier</th>
          <th className="num">Weight (kg)</th>
          <th>Status</th>
          <th>Updated</th>
        </tr>
      </thead>
      <tbody>
        {shipments.map((s) => (
          <tr key={s.id}>
            <td className="mono">{s.id}</td>
            <td>
              {s.origin} → {s.destination}
            </td>
            <td>{s.carrier}</td>
            <td className="num">{s.weight_kg.toLocaleString()}</td>
            <td>
              <StatusBadge status={s.status} />
            </td>
            <td>{new Date(s.updated_at).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

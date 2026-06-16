import type { Shipment } from "../types";

export function KpiCards({ shipments }: { shipments: Shipment[] }) {
  const total = shipments.length;
  const delivered = shipments.filter((s) => s.status === "delivered").length;
  const exceptions = shipments.filter((s) => s.status === "exception").length;
  const tonnes = shipments.reduce((sum, s) => sum + s.weight_kg, 0) / 1000;
  const cards = [
    ["Shipments", total.toString()],
    ["Delivered", total ? `${Math.round((delivered / total) * 100)}%` : "–"],
    ["Exceptions", exceptions.toString()],
    ["Tonnes Moved", tonnes.toFixed(1)],
  ];
  return (
    <section className="kpis">
      {cards.map(([label, value]) => (
        <div className="kpi" key={label}>
          <div className="kpi-value">{value}</div>
          <div className="kpi-label">{label}</div>
        </div>
      ))}
    </section>
  );
}

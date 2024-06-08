import React from "react";
const stats = [
  { id: 1, name: "EHV Grid Sub-Stations", value: "152" },
  { id: 2, name: "Transformation Capacity", value: "25640 MVA " },
  { id: 3, name: "Transmission Network - 132 kV lines", value: "12182 km" },
  { id: 4, name: "Transmission Network - 220 kV lines", value: "5103 km" },
  {
    id: 5,
    name: "Transmission Zones - Patna, Muzaffarpur, Bhagalpur, Gaya & Koshi",
    value: "5",
  },
  { id: 6, name: "Transmission Circles", value: "15" },
  { id: 7, name: "Transmission Divisions", value: "31" },
];
function Achievement() {
  return (
    <div className=" py-10 sm:py-32 relative top-96 bg-slate-900 nightowl-daylight" >
      <div className="mx-auto max-w-7xl px-6 lg:px-8" >
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-7" id="achieve">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-400">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-yellow-300 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
export default Achievement;
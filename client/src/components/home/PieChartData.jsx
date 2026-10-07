import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const RADIAN = Math.PI / 180;

export default function PieChartData({ data }) {
  if (data.length === 0) {
    data = [{ name: "No Data", value: 1, fill: "#808080" }];
  }

  //   const savingsNegative = data[2].value < 0 ? true : false;
  //   Will use this for custom tooltip

  data = data.map((item) => {
    return { name: item.name, value: Math.abs(item.value), fill: item.fill };
  });

  const isMobile = window.innerWidth < 1024;

  return (
    <div className="w-full h-100 min-h-100 min-w-0">
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Tooltip />
          <Pie
            data={data}
            dataKey="value"
            innerRadius={isMobile ? 60 : 90}
            outerRadius={isMobile ? 90 : 130}
            labelLine={false}
            label={renderCustomizedLabel}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
    return null;
  }

  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;

  const x = Number(cx) + radius * Math.cos(-(midAngle ?? 0) * RADIAN);

  const y = Number(cy) + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize={window.innerWidth < 1024 ? 12 : 16}
      fontWeight={600}
    >
      {`${((percent ?? 1) * 100).toFixed(0)}%`}
    </text>
  );
};

import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const Analytics = ({ timelineData, categoryStats }) => {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Category data for pie chart
  const categoryChartData = Object.entries(categoryStats).map(
    ([name, stats]) => ({
      name,
      value: stats.sold,
      revenue: stats.revenue,
      profit: stats.profit,
    }),
  );

  const COLORS = ["#3b82f6", "#ef4444", "#8b5cf6"];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className='bg-gray-900 border border-gray-700 rounded p-2 text-xs text-gray-100'>
          <p className='font-semibold'>{label || "Ngày"}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}:{" "}
              {entry.value > 1000 ? formatCurrency(entry.value) : entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className='space-y-6'>
      {/* Revenue and Profit Trend */}
      <div className='bg-gray-800 rounded-lg p-6 shadow-lg'>
        <h2 className='text-xl font-bold text-white mb-4'>
          Xu hướng doanh thu & lợi nhuận
        </h2>
        <ResponsiveContainer width='100%' height={300}>
          <LineChart
            data={timelineData}
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray='3 3' stroke='#444' />
            <XAxis
              dataKey='date'
              stroke='#999'
              tick={{ fill: "#999", fontSize: 12 }}
            />
            <YAxis
              stroke='#999'
              tick={{ fill: "#999", fontSize: 12 }}
              tickFormatter={formatCurrency}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line
              type='monotone'
              dataKey='revenue'
              stroke='#3b82f6'
              strokeWidth={2}
              dot={{ fill: "#3b82f6", r: 4 }}
              activeDot={{ r: 6 }}
              name='Doanh thu'
            />
            <Line
              type='monotone'
              dataKey='profit'
              stroke='#10b981'
              strokeWidth={2}
              dot={{ fill: "#10b981", r: 4 }}
              activeDot={{ r: 6 }}
              name='Lợi nhuận'
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {/* Sales by Category */}
        <div className='bg-gray-800 rounded-lg p-6 shadow-lg'>
          <h2 className='text-xl font-bold text-white mb-4'>
            Số lượng bán theo danh mục
          </h2>
          <ResponsiveContainer width='100%' height={300}>
            <PieChart>
              <Pie
                data={categoryChartData}
                cx='50%'
                cy='50%'
                labelLine={false}
                label={(entry) => `${entry.name}: ${entry.value}`}
                outerRadius={80}
                fill='#8884d8'
                dataKey='value'
              >
                {categoryChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip formatter={(value) => value} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue by Category */}
        <div className='bg-gray-800 rounded-lg p-6 shadow-lg'>
          <h2 className='text-xl font-bold text-white mb-4'>
            Doanh thu theo danh mục
          </h2>
          <ResponsiveContainer width='100%' height={300}>
            <BarChart data={categoryChartData}>
              <CartesianGrid strokeDasharray='3 3' stroke='#444' />
              <XAxis
                dataKey='name'
                stroke='#999'
                tick={{ fill: "#999", fontSize: 12 }}
              />
              <YAxis
                stroke='#999'
                tick={{ fill: "#999", fontSize: 12 }}
                tickFormatter={formatCurrency}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey='revenue' fill='#3b82f6' name='Doanh thu' />
              <Bar dataKey='profit' fill='#10b981' name='Lợi nhuận' />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Profit Margin by Category */}
      <div className='bg-gray-800 rounded-lg p-6 shadow-lg'>
        <h2 className='text-xl font-bold text-white mb-4'>
          Tỷ suất lợi nhuận theo danh mục
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {categoryChartData.map((category) => {
            const margin =
              category.revenue > 0
                ? ((category.profit / category.revenue) * 100).toFixed(1)
                : 0;
            return (
              <div
                key={category.name}
                className='bg-gray-700 rounded p-4 border border-gray-600'
              >
                <h3 className='text-white font-semibold mb-2'>
                  {category.name}
                </h3>
                <div className='flex items-end gap-2'>
                  <div className='flex-1'>
                    <div className='w-full bg-gray-600 rounded-full h-2 overflow-hidden'>
                      <div
                        className='bg-gradient-to-r from-blue-500 to-green-500 h-full'
                        style={{ width: `${Math.min(margin, 100)}%` }}
                      />
                    </div>
                  </div>
                  <span className='text-green-400 font-bold text-lg'>
                    {margin}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

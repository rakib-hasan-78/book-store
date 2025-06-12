import React from 'react';
import { useBook } from '../../../utilities/BookContext/BookContext';
import EmptyContent from '../EmptyContent/EmptyContent';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from 'recharts';

const COLORS = [
  '#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#00C49F', '#FFBB28',
  '#a29bfe', '#fd79a8', '#e17055', '#55efc4', '#fab1a0', '#74b9ff'
];

const PageChart = () => {
  const { readBooks } = useBook();

  const chartData = readBooks.map(book => ({
    name: book.bookName,
    page: book.totalPages,
  }));

  return (
    <div className="w-full h-[450px] my-11 bg-hero p-4 rounded shadow-md">
      {readBooks.length === 0 ? (
        <EmptyContent>no book added to read list</EmptyContent>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="page">
              {chartData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default PageChart;

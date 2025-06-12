import React from 'react';
import { useBook } from '../../../utilities/BookContext/BookContext';
import EmptyContent from '../EmptyContent/EmptyContent';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

// Custom triangle shape for bars
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}
      C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
      C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width},${y + height}
      Z`;
  };

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

// Sample color palette
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', '#A020F0', '#50FA7B'];

const PageChart = () => {
  const { readBooks } = useBook();

  const chartData = readBooks.map(book => ({
    name: book.bookName,
    page: book.totalPages,
  }));

  return (
    <div className='w-full h-[30rem] my-7 bg-hero flex items-center justify-center'>
      {readBooks.length === 0 ? (
        <EmptyContent>no book added to read list</EmptyContent>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="page"
              shape={<TriangleBar />}
              label={{ position: 'top' }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${entry.name}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default PageChart;

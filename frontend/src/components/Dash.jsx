import axios from 'axios';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Dash() {
  const [expenses, setExpenses] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/split`, {
          headers: {
            authorization: token,
          }
        });
        // console.log(response.data)
        setExpenses(response.data.expense);
        setTotalAmount(response.data.totalAmount);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-8">
     <motion.h1 
  className="text-4xl font-bold mb-4 flex justify-center relative"
  initial={{ opacity: 0, y: -20 }} // Initial animation properties
  animate={{ opacity: 1, y: 0 }} // Animation properties when component is mounted
  transition={{ duration: 0.5 }} // Transition duration
>
  Expenses History
  <span className="border-l border-r absolute left-0 right-0 bottom-0 h-1 bg-black"></span>
</motion.h1>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <motion.table
          className="w-full border-collapse"
          initial={{ opacity: 0, y: -20 }} // Initial animation properties
          animate={{ opacity: 1, y: 0 }} // Animation properties when component is mounted
          transition={{ duration: 0.5 }} // Transition duration
        >
          <thead>
            <tr>
              <th className="py-4 px-8 bg-gray-100 border">S No</th>
              <th className="py-2 px-4 bg-gray-100 border">Description</th>
              <th className="py-2 px-4 bg-gray-100 border">Expense Settled</th>
              <th className="py-2 px-4 bg-gray-100 border">Amount</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              // Wrap each row with motion
              <motion.tr
                key={index}
                className={index % 2 === 0 ? "odd:bg-gray-100 even:bg-white" : "even:bg-gray-100 odd:bg-white"}
                initial={{ opacity: 0, y: -10 }} // Initial animation properties
                animate={{ opacity: 1, y: 0 }} // Animation properties when component is mounted
                transition={{ duration: 0.5, delay: index * 0.1 }} // Transition duration with stagger effect
              >
                <td className="py-2 px-4 border-4 border-blue-300">{index + 1}</td>
                <td className="py-2 px-4 border-4 border-blue-300">{expense.description || 'No description'}</td>
                <td className={`py-2 px-4 border-4 border-blue-300 ${expense.isSettled ? 'text-green-600' : 'text-red-600'}`}>
                  {expense.isSettled ? 'Settled' : 'Unsettled'}
                </td>
                <td className="py-2 px-4 border-4 border-blue-300">{expense.totalAmount}</td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <motion.button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          initial={{ opacity: 0, y: 20 }} // Initial animation properties
          animate={{ opacity: 1, y: 0 }} // Animation properties when component is mounted
          transition={{ duration: 0.5 }} // Transition duration
        >
          View More
        </motion.button>
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Initial animation properties
          animate={{ opacity: 1, y: 0 }} // Animation properties when component is mounted
          transition={{ duration: 0.5 }} // Transition duration
        >
          <Link to={'createexpense'} className='bg-blue-500 text-white px-4 py-2 rounded-md'>
            Add Expense
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Dash;

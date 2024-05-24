import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const teamMembers = [
    {
      name: 'Akashdeep Singh',
      email: 'akashdeep83.be22@chitkara.edu.in',
      contribution: 'Partial backend, partial frontend',
      imgSrc: 'https://cdn.dribbble.com/users/1210339/screenshots/15111625/media/e92f64535c708861a43715f61efe3a97.jpg?resize=1000x750&vertical=center', // Add the image URL
    },
    {
      name: 'Abhinav Bhar',
      email: 'abhinav36.be22@chitkara.edu.in',
      contribution: 'Core Backend, partial frontend',
      imgSrc: 'https://media1.tenor.com/m/6XJ9bKiuUUIAAAAC/ok-guy.gif', // Add the image URL
    },
    {
      name: 'Abhishek Dhawan',
      email: 'abhishek45.be22@chitkara.edu.in',
      contribution: 'Database, Partial backend',
      imgSrc: 'https://media.tenor.com/iPWC0upqq_QAAAAi/animated-man-running.gif', // Add the image URL
    },
    {
      name: 'Abhishek',
      email: 'abhishek42.be22@chitkara.edu.in',
      contribution: 'Core frontend',
      imgSrc: 'https://media.tenor.com/mEXoadZB1QYAAAAi/man-talking.gif', // Add the image URL
    },
  ];

  return (
    <div className="bg-gray-200 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h1>
      <div className="grid grid-cols-2 gap-4">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 cursor-pointer transition duration-300 hover:bg-green-100"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={member.imgSrc}
              alt={member.name}
              className="rounded-full h-48 w-54 mx-auto mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
            <motion.h2
              className="font-bold mb-2"
              style={{ fontSize: '30px' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {member.name}
            </motion.h2>
            <motion.p
              className="text-gray-800 mb-2"
              style={{ fontSize: '20px' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {member.email}
            </motion.p>
            <motion.p
              className="text-gray-600"
              style={{ fontSize: '25px' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {member.contribution}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import { FaComments, FaUsers, FaMoneyCheckAlt } from 'react-icons/fa';

const DashboardCard = () => {
  const cards = [
    {
      icon: <FaComments />,
      title: 'Number of sms sent today',
      value: '189',
    },
    {
      icon: <FaUsers />,
      title: 'Number of Users',
      value: '569',
    },
    {
      icon: <FaMoneyCheckAlt />,
      title: 'People with due payment',
      value: '230',
    },
  ];

  return (
    <>
      <style>
        {`
          @keyframes bounce-once {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }
          .hover\\:animate-bounce-once:hover {
            animation: bounce-once 0.4s ease;
          }
        `}
      </style>

      <div className="xl:w-[50vw] lg:w-[70vw] md:w-[70vw] w-[95vw] mx-auto mt-2 lg:p-10 md:p-10 p-4 rounded-[30px] shadow-md bg-[radial-gradient(circle_at_center,_#FFFFFF_0%,_#B0D3E5_100%)] border border-[#C6DCEB] flex flex-col md:gap-5 gap-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white md:px-6 px-4 py-3 rounded-xl shadow-md w-full transition-all duration-200 ease-in-out hover:animate-bounce-once"
          >
            <div className="flex items-center md:gap-4 gap-2 flex-1">
              <div className="bg-[#A9C9DB] text-white md:p-2.5 p-1.5 rounded-full text-base sm:text-sm md:text-xl lg:text-2xl">
                {card.icon}
              </div>
              <span className="text-[#333] text-sm sm:text-base md:text-lg lg:text-xl font-medium whitespace-nowrap">
                {card.title}
              </span>
            </div>
            <div className="bg-gradient-to-b from-[#A9C9DB] to-[#BFE0F1] text-[#333]  sm:text-base md:text-lg lg:text-xl font-bold md:px-4 px-2 py-1 rounded-full text-sm shadow-md md:w-[90px] w-auto text-center shrink-0">
              {card.value}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DashboardCard;

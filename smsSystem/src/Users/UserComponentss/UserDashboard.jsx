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
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }

          .hover-bounce:hover {
            animation: bounce 0.4s ease;
          }

          .dashboard-card {
            width: 90%;
            max-width: 680px;
            height: auto;
            margin: 0 auto;
            margin-top: 0.5rem;
            padding: 2.5rem 1.5rem;
            border-radius: 30px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            background: radial-gradient(circle at center, #FFFFFF 0%, #B0D3E5 100%);
            border: 1px solid #C6DCEB;
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
          }

          .dashboard-card__item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #FFFFFF;
            padding: 0.75rem 1.5rem;
            border-radius: 1rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            width: 100%;
            transition: all 0.2s ease;
          }

          .dashboard-card__left {
            display: flex;
            align-items: center;
            gap: 1rem;
            flex: 1;
          }

          .dashboard-card__icon {
            background-color: #A9C9DB;
            color: #FFFF;
            padding: 0.625rem;
            border-radius: 9999px;
            font-size: 1.25rem;
          }

          .dashboard-card__title {
            color: #333;
            font-size: 1.125rem;
            font-weight: 500;
            white-space: nowrap;
          }

          .dashboard-card__value {
            background: linear-gradient(to bottom, #A9C9DB, #BFE0F1);
            color: #333;
            font-weight: bold;
            padding: 0.25rem 1rem;
            border-radius: 9999px;
            font-size: 1.125rem;
            box-shadow: 0 2px 6px rgba(0,0,0,0.2);
            width: 90px;
            text-align: center;
            flex-shrink: 0;
          }
        `}
      </style>

      <div className="dashboard-card">
        {cards.map((card, index) => (
          <div key={index} className="dashboard-card__item hover-bounce">
            <div className="dashboard-card__left">
              <div className="dashboard-card__icon">{card.icon}</div>
              <span className="dashboard-card__title">{card.title}</span>
            </div>
            <div className="dashboard-card__value">{card.value}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DashboardCard;

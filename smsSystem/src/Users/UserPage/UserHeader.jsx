import React from 'react';
import logo from '../../assets/logo.jpg';
import bgImage from '../../assets/bg.jpg';

const UserHeader = () => {
  return (
    <>
      <style>
        {`
          .user-header {
            position: relative;
            width: 100%;
            overflow: hidden;
            padding-bottom: 6rem;
          }
          .user-header__bg {
            height: 200px;
            background-size: cover;
            background-position: center;
          }
          .user-header__logo {
            position: absolute;
            top: 100px;
            left: 5rem;
            height: 180px;
            border-radius: 9999px;
            border: 4px solid white;
            box-shadow: 0 10px 15px rgba(0,0,0,0.2);
            z-index: 20;
          }
          .user-header__navbar-container {
            position: absolute;
            top: 170px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 10;
          }
          .user-header__navbar {
            display: flex;
            gap: 3rem;
            align-items: center;
            background: linear-gradient(to bottom, #BFE0F1, white);
            padding: 1rem 3rem;
            border-radius: 40px;
            box-shadow: 0 10px 15px rgba(0,0,0,0.1);
          }
          .user-header__link {
            font-size: 1rem;
            font-weight: 600;
            color: #333;
            padding: 0.25rem 1rem;
            border-radius: 40px;
            white-space: nowrap;
            transition: all 0.2s ease;
          }
          .user-header__link:hover {
            background-color: white;
            color: #111;
            font-weight: bold;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }
          .user-header__link.special:hover {
            color: red;
          }
        `}
      </style>
      <div className="user-header">
        <div
          className="user-header__bg"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>

        <img src={logo} alt="Logo" className="user-header__logo" />

        <div className="user-header__navbar-container">
          <div className="user-header__navbar">
            {[
              { name: "Dashboard", href: "/user/dashboard" },
              { name: "Preview Data", href: "/user/preview-data" },
              { name: "SMS Report", href: "/user/sms-report" },
              { name: "Log Out", href: "/logout", special: true },
            ].map(({ name, href, special }) => (
              <a
                key={name}
                href={href}
                className={`user-header__link ${special ? "special" : ""}`}
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserHeader;

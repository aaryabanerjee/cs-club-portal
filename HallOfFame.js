import React from 'react';
import { Link } from 'react-router-dom';
import './HallOfFame.css';

const HallOfFame = () => {
  const hallOfFameEntries = [
    {
      name: 'Matthew Borad',
      position: 'Teacher',
      experience: 'A lot',
      pictureId: 'https://cypress.auhsd.us/images/getProfilePicture.cfm?id=496',
    },
  ];

  return (
    <div className="matrix-content hall-of-fame-content">
      <h1 className="matrix-header">Computer Science Club Hall of Fame</h1>
      <div className="hall-of-fame-list">
        {hallOfFameEntries.map((entry, index) => (
          <div key={index} className="hall-of-fame-entry">
            <div className="portrait-frame">
              <img
                src={entry.pictureId}
                alt={`${entry.name} portrait`}
                className="portrait-image"
              />
            </div>
            <h2 className="entry-name">{entry.name}</h2>
            <p className="entry-position">{entry.position}</p>
            <p className="entry-experience">Experience: {entry.experience}</p>
          </div>
        ))}
      </div>
      <Link to="/" className="back-link">
        Back to Home
      </Link>
    </div>
  );
};

export default HallOfFame;
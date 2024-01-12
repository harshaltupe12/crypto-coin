import React, { useState } from 'react';
// import './ExpansionTile.css'; // Import your CSS file for styling

const ExpansionTile = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="expansion-tile">
      <div className="tile-header" onClick={toggleExpand}>
        <div>{title}</div>
        <div>{expanded ? '-' : '+'}</div>
      </div>
      {expanded && <div className="tile-content">{children}</div>}
    </div>
  );
};

export default ExpansionTile;

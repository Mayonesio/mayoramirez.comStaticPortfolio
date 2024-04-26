import React from 'react';
import { MoreVertical, ChevronLast, ChevronFirst } from 'lucide-react';

const Sidebar = ({ expanded, onToggle }) => {
  return (
    <div className={`sidebar ${expanded ? 'expanded' : ''}`}>
      <div className="header">
        <button onClick={onToggle}>
          {expanded ? <ChevronLast size={20} /> : <ChevronFirst size={20} />}
        </button>
      </div>
      <div className="content">
        <ul>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Jobs</span>
          </li>
          <li>
            <span>Applicants</span>
          </li>
          <li>
            <span>Company</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
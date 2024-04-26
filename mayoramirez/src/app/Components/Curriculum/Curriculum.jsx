
import Dashboard from '../Dashboard/Dashboard';
import React, { useState } from 'react'
import './Curriculum.css';
const curriculum = () => {

    const [expanded, setExpanded] = useState(false);

    const toggleSidebar = () => {
      setExpanded(!expanded);
    }
    
  return (
    <div>
       <Dashboard expanded={expanded} onToggle={toggleSidebar} />
    </div>
  )
}

export default curriculum

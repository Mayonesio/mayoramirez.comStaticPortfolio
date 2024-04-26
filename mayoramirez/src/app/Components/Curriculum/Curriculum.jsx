
import Dashboard from '../Dashboard/Dashboard';
import { useState } from 'react'
import './Curriculum.css';
const Curriculum = () => {

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

export default Curriculum
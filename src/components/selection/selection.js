import React from 'react';
import './selection.css';
import ComingSoon from '../comingsoon/comingsoon';

function Selection() {
  return (
    <div className='select'>
      <ul className="select-nav">
        <li className="select-item">
        <button>Government</button>
        </li>
        <li className="select-item">
        <button>Education</button>
        </li>
        <li className="select-item">
        <button>Infrastructure</button>
        </li>
        <li className="select-item">
        <button>Future Cities</button>
        </li>
      </ul>
    <ComingSoon />
    </div>
  );
}

export default Selection;

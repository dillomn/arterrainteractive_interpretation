import React from 'react';
import './selection.css';
import ComingSoon from '../comingsoon/comingsoon';

function Selection() {
  return (
    <div className='select'>
      <table className='selection-input'>
        <td>
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
        <li className="select-item">
        <button>Parkland</button>
        </li>
        <li className="select-item">
        <button>Architecture</button>
        </li>

      </ul>
        </td>
        <td className='selection-output'>
          <ComingSoon />
        </td>
      </table>
    </div>
  );
}

export default Selection;

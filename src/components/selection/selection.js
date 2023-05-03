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
            <button>CGI</button>
            </li>
            <li className="select-item">
            <button>Animation</button>
            </li>
            <li className="select-item">
            <button>Interactive</button>
            </li>
            <li className="select-item">
            <button>3D Planning</button>
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

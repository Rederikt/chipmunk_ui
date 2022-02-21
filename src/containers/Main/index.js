import React from 'react';
import './main.scss'

export const Main = () => {

  return (
    <div className="paper">
      <div className="flex-layout">
        <div className="data-box">
          <table className="content-table">
            <thead>
              <tr>
                <th>Key</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>s</td>
                <td>ss</td>
              </tr>
              <tr>
                <td>s</td>
                <td>s</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="menu-box">
          <ul>
            <li className='active text'>
              <a href="#">
                <span className='icon'></span>
                <span>Home</span>
              </a>
            </li>
            <li className='text'>
              <a href="#">
                <span className='icon'></span>
                <span>Test</span>
              </a>
            </li>
            <li className='text'>
              <a href="#">
                <span className='icon'>Test</span>
                <span className='title'></span>
              </a>
            </li>
            <li className='text-field'>
              <label htmlFor="input" className='text-field_label'>Enter key for get request</label>
              <input type="text" name="input" id="input" className='text-field_input' placeholder='Input key' />
            </li>
            <li className='button-li'>
              <button className='button-9'>GET</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

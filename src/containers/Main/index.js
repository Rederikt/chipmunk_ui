import React, { useState } from 'react';
import './main.scss'

export const Main = () => {
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [error, setError] = useState(0);
  const [findKey, setFindKey] = useState("");

  const [entries, setEntries] = useState (
    {
      "Hello":"World",
      "300":"bucks",
      "sello":"Worlds",
      "SSSSello":"World1",
    }
  )

  const handleChangeKey = (event) => {
    setKey(event.target.value)
  }

  const handleChangeValue = (event) => {
    setValue(event.target.value)
  }

  const handleAdd = () => {
    setEntries({
      ...entries,
      [key]:value
    })
    setKey('')
    setValue('')

  }

  return (
    <div className="paper">
      <div className="flex-layout">
        <div className="data-box">
          <table className="content-table">
            <thead>
              <tr>
                <th>Key</th>
                <th>Value</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(entries).map(([key, value], i) => 
                <tr>
                  <td>{key}</td>
                  <td>{value}</td>
                  <td>{i}</td>
                </tr>
              )}
              <tr>
                <td className='text-field'><input type="text" name="input" id="input" className='text-field_input' placeholder='Input Key' value={key} onChange={handleChangeKey}/></td>
                <td className='text-field'><input type="text" name="input" id="input" className='text-field_input' placeholder='Input Value' value={value} onChange={handleChangeValue}/></td>
                <td><button className='button-9 small' onClick={handleAdd}>Add</button></td>
              </tr>
            </tbody>
          </table>
          <div className='error'>
            <span>Field can't be empty. Please enter some values.</span>
          </div>
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

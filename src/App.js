import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Timer from './Tugas-11/Timer'

function App() {
  return (
    <>
      <div className="Form">
        <div className="form-wrapper">
          <h1>Form Pembelian Buah</h1>
          <div className="form1">
            <h2 className="label1"><b>Nama Pelanggan</b></h2>
            <input type="text" id="fname" name="fname"></input>
          </div>
          <div className="form2">
            <h2 className="label2"><b>Daftar Item</b></h2>
            <div className="item-buah">
              <input type="checkbox" id="fruit1" name="fruit"/>
              <label>Semangka</label><br/>
              <input type="checkbox" id="fruit2" name="fruit"/>
              <label>Jeruk</label><br/>
              <input type="checkbox" id="fruit3" name="fruit"/>
              <label>Salak</label><br/>
              <input type="checkbox" id="fruit4" name="fruit"/>
              <label>Nanas</label><br/>
              <input type="checkbox" id="fruit5" name="fruit"/>
              <label>Anggur</label>
            </div>
          </div>
          <button type="submit" value="Kirim" id="submit-button">Kirim</button>
        </div>
        <Timer />
      </div>
    </>
  )
}

export default App;

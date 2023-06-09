import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const [data, setData] = useState("")
  const [searchInput, setSearchInput] = useState("")

  const getWeather = async (e) => {
    e.preventDefault()
    await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=e36ed364400282e43250b6c4c0274d44`).then((res) => setData(res.data))
  }

  const handleOnChange = (e) => {
    const value = e.target.value
    setSearchInput(value)
  }

  return (
    <div className=" App ">
      <div className='content'>
        <div className='title'>
          <h3>Weather Api Project</h3>
          <div class="mb-3">
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="seacrh city" onChange={handleOnChange} value={searchInput} />
          </div>
          <div className='btn'>
            <button type="button" className="btn btn-primary" onClick={getWeather}>Get Weather</button>
          </div>
          {data ?

            <div className='data'>
              <div className='data-content'>
                <hr />
                <h4>{data.name}</h4>
                <h1>{Math.round(data.main.temp - 273.15)}<sup>o</sup>C</h1>
                <div className='row'>
                  <div className='d-flex col-lg-4 col-12 flex-column'><div>Pressure</div> {data.main.pressure}</div>
                  <div className='d-flex col-lg-4 col-12 flex-column'> <div>Humidity</div> {data.main.humidity}</div>
                  <div className='d-flex col-lg-4 col-12 flex-column'><div>Wind</div> {data.wind.speed} km/h</div>
                </div>
              </div>
            </div> : ""}
        </div>
      </div>
    </div>
  );
}

export default App;

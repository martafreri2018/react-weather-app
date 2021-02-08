import React from "react"; 
import "./Weather.css";

export default function Weather (){
    return <div className="Weather">
        <form>
            <div className="row">
            <div className="col-9"> 
            <input type="search" placeholder="Enter a city..." className="form-control" />
            </div>
            <div className="col-3">
        <button className="btn btn-primary"> <i class="fas fa-search"></i></button>
</div>
            </div>
        </form>
        <h1>Rome</h1>
        <ul>
            <li>Monday 23:00</li>
            <li>Mostly cloudy</li>
        </ul>
        <div className="row">
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly cloudy"></img>
                13°
                </div>
            <div className="col-6">
                <ul>
                    <li>Precipitation: 22%</li>
                    <li>Humidity: 85%</li>
                    <li>Wind: 18 km/h</li>
                </ul>
            
            </div>
        </div>
    </div>
}
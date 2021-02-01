import React from 'react';

import {connect} from 'react-redux';
//import {Sparklines, SparklinesLine} from 'react-sparklines';

class WeatherList extends React.Component{

    renderWeather(cityData){
        const temps=cityData.main.temp;
        const pressure=cityData.main.pressure;
        const humidity=cityData.main.humidity;
        const lat = cityData.coord.lat;
        const lon=cityData.coord.lon;
        console.log(temps);
        return (
        
        <tr key ={cityData.name}>
           
            
               <td>{cityData.name}</td>
               <td>{temps}</td>
               <td>{pressure}</td>
               <td>{humidity}</td> 

         </tr>
            );
    }
    render()
    {
        return(
                <table className="table table-hover">
                    <thead>
                        <tr>
                            
                           <th> City </th>
                           <th> temperature (K)</th>
                           <th> pressure (hPA)</th>
                           <th> humidity (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.weather.map(this.renderWeather)}
                    </tbody>

                </table>

        );
    }
}
function mapStateToProps(state){
    return {
        _weather: state.weather,
        get weather() {
            return this._weather;
        },
        set weather(value) {
            this._weather = value;
        },
    };
}
export default connect(mapStateToProps)(WeatherList);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import Chart from './Chart';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        return (
            <tr key={name}>
                <td>{name}</td>
                <td><Chart color = "red" data = {temps} units = "K"/></td>
                <td><Chart color = "orange" data = {pressure} units = "hPa"/></td>
                <td><Chart color = "blue" data = {humidities} units = "%"/></td>
            </tr>
        )
    }
    render() {
        if(this.props.weather.length == 0) {
            return null;
        } else {
            return (
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>
            )
        }


    }
}

function mapStateToProps({ weather }) {
    return { weather }
}

export default connect(mapStateToProps)(WeatherList);
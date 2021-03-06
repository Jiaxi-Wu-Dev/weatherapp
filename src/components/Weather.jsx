import React, { Component } from 'react';
import axios from 'axios'

class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: []
        }
    }

    componentDidMount() {
        axios.get("https://api.openweathermap.org/data/2.5/weather?id=5128581&appid=736dcd581cc9d13aca218c4fc55cade8")
            .then(res => {
                const weatherData = res.data;
                console.log("weather data ===>", weatherData);
                this.setState([{ data: weatherData }]);
            })

            .catch(error => {
                console.log('there is an eror', error);
            })

    }

    render() {
        return (
            <div>
                {<ul className="weekdays">
                    <li>{this.state.data.coord}</li>
                    <li>Wednesday</li>
                    <li>Thursday</li>
                    <li>Friday</li>
                    <li>Saturday</li>
                    <li>Sunday</li>
                    <li>Monday</li>
                    <li>Tuesday</li>
                </ul>}

            </div>
        )
    }

}


export default Weather;
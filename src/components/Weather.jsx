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
                console.log(res.data)
            })
            .catch(error => {
                console.log('there is an eror', error)
            })

    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.data.weather}
                    hellooo
                </h1>

            </div>
        )
    }

}


export default Weather;
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
        axios.get("api.openweathermap.org/data/2.5/weather?id=2172797&appid=736dcd581cc9d13aca218c4fc55cade8")
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
            </div>
        )
    }

}


export default Weather;
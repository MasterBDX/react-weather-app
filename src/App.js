import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './app_components/weather.componenet'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'weather-icons/css/weather-icons.min.css'

// api call url : api.openweathermap.org/data/2.5/weather?q=London,uk&appid={your api key}
const APIKey = 'fa10b996f7a31a2d3f7aeee5038457b6';



class App extends Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      temp_celsuis: undefined,
      max_temp: undefined,
      min_temp: undefined,
      description: undefined,
      error: false,


    }

  }

  componentDidMount() {
    this.getWeather();
  }

  getWeather = async () => {
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${APIKey}`)
    const data = await apiCall.json();
    this.setState({
      city: data.name,
      country: data.sys.country,
      temp_celsuis: this.get_celsuis(data.main.temp),

      max_temp: this.get_celsuis(data.main.temp_max),
      min_temp: this.get_celsuis(data.main.temp_min),
      description: data.weather[0].description
    })

  }


  get_celsuis(temp) {
    return Math.floor(temp - 273.15)
  }

  render() {
    return (
      <div className="App" >

        <Weather state={this.state} />

      </div>
    );
  }
}


export default App;

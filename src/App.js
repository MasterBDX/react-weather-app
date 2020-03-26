import React, { Component } from 'react';
import './App.css';

// My components
import Form from './app_components/form.component'
import Weather from './app_components/weather.componenet'

//  Third Party Packages
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


    };
    this.weatherIcons = {
      Thunderstorm: 'wi-thunderstorm',
      Drizzle: 'wi-sleet',
      Rain: 'wi-storm-showers',
      Snow: 'wi-snow',
      Atmosphere: 'wi-fog',
      Clear: 'wi-day-sunny',
      Clouds: 'wi-day-fog'


    }
  }

  componentDidMount() {
    this.getWeather();
  }


  getWeatherIcon = (icons, rangeID) => {
    switch (true) {
      case rangeID >= 200 && rangeID <= 232:
        this.setState({
          icon: icons.Thunderstorm
        });
        break;

      case rangeID >= 300 && rangeID <= 321:
        this.setState({
          icon: icons.Drizzle
        });
        break;
      case rangeID >= 500 && rangeID <= 531:
        this.setState({
          icon: icons.Rain
        });
        break;

      case rangeID >= 600 && rangeID <= 622:
        this.setState({
          icon: icons.Snow
        });
        break;
      case rangeID >= 700 && rangeID <= 781:
        this.setState({
          icon: icons.Atmosphere
        });
        break;
      case rangeID == 800:
        this.setState({
          icon: icons.Clear
        });
        break;
      case rangeID >= 800 && rangeID <= 804:
        this.setState({
          icon: icons.Clouds
        });
        break;
      default:
        console.log('hahah')

    }
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
      description: data.weather[0].description,

    })
    this.getWeatherIcon(this.weatherIcons, data.weather[0].id)

  }


  get_celsuis(temp) {
    return Math.floor(temp - 273.15)
  }


  render() {
    return (
      <div className="App" >
        <Form />
        <Weather state={this.state} />

      </div>
    );
  }
}


export default App;

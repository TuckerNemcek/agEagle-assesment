import React from 'react'
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

const weatherAPI_KEY = '63bff92f1ebd113efe2539601d47425c'


class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const weatherAPI_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&mode=json&appid=${weatherAPI_KEY}&units=imperial`)
  //  const weatherAPI_call = await fetch(`api.openweathermap.org/data/2.5/weather?q=London,uk,&appid=$${weatherAPI_KEY}`)

    const data = await weatherAPI_call.json()
  //  const data = await weatherAPI_
    console.log(data)
    if (city && country){
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "please enter a city and country"
      })
    }
  }



render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};


export default App;

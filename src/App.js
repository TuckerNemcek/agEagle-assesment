import React from 'react'
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

const weatherAPI_KEY = '63bff92f1ebd113efe2539601d47425c'


class App extends React.Component {

  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const weatherAPI_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Montreal&mode=json&appid=${weatherAPI_KEY}&units=metric`)
  //  const weatherAPI_call = await fetch(`api.openweathermap.org/data/2.5/weather?q=London,uk,&appid=$${weatherAPI_KEY}`)

    const data = await weatherAPI_call.json()
  //  const data = await weatherAPI_
    console.log(data)
  }

  render() {
    return (

      <div>
      <Titles />
      <Form getWeather = {this.getWeather}/>
      <Weather />
      </div>
    )
  }

}

export default App;

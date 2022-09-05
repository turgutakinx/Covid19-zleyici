import React from 'react';
import './App.css';
import axios from 'axios'
import { Card, CardContent } from '@material-ui/core'
import { Brightness3, Brightness7 } from '@material-ui/icons'
import 'leaflet/dist/leaflet.css'

import Cards from "./components/Cards/Cards"
import Chart from "./components/Chart/Chart"
import CountryPicker from "./components/CountryPicker/CountryPicker"
import Table from './components/Table/Table'
import Map from './components/Map/Map'

export default class App extends React.Component {

  state = {
    totalData: "",
    date: {},
    country: '',
    dark: false,
    countryData: [],
    mapCenter: { lat: 28, lng: 3 },
    mapZoom: 1,
    showMap: false
  }

  componentDidMount = async () => {
    const date = await axios.get("https://covid19.mathdro.id/api")
    this.setState({
      date: date.data.lastUpdate
    })

    const { data } = await axios.get("https://disease.sh/v3/covid-19/all")
    this.setState({
      totalData: data
    })

    const countryData = await axios.get("https://disease.sh/v3/covid-19/countries")
    this.setState({
      countryData: countryData.data
    })
  }

  countryChangeState = async (selectedCountry) => {
    if (selectedCountry) {
      const { data } = await axios.get(`https://disease.sh/v3/covid-19/countries/${selectedCountry}`)
      this.setState({
        totalData: data,
        country: selectedCountry,
        mapCenter: {
          lat: data.countryInfo.lat,
          lng: data.countryInfo.long
        },
        mapZoom: 5
      })
    }
    else {
      const { data } = await axios.get("https://disease.sh/v3/covid-19/all")
      this.setState({
        totalData: data,
        country: selectedCountry,
        mapZoom: 1,
        mapCenter: { lat: 28, lng: 3 },
      })
    }
  }

  toggleMode = () => {
    this.setState({
      dark: !this.state.dark
    })
  }

  toggleMap = () => {
    this.setState({
      showMap: !this.state.showMap
    })
  }
  //<button onClick={this.toggleMap}>Show map</button>
  //<Chart dark={this.state.dark} totalData={this.state.totalData} country={this.state.country} />


  render() {
    if (!this.state.showMap)
      return (
        <div className={this.state.dark ? "dark-mode-app" : "light-mode-app"}>
          <Card style={{ border: "2px solid rgb(70, 70, 70)", borderRadius: "20px" }}>
            <input onChange={this.toggleMode} type="checkbox" className="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="label">
              <Brightness7 fontSize="small" className="sun" />
              <Brightness3 fontSize="small" className="moon" />
              <i className="ball"></i>
            </label>
            <button className={this.state.dark ? "dark-button" : "light-button"} onClick={this.toggleMap}>Chart</button>
            <CardContent className={this.state.dark ? "darkMode" : "lightMode"}>
              <Cards dark={this.state.dark} date={this.state.date} totalData={this.state.totalData} />
              <CountryPicker center={this.state.mapCenter} dark={this.state.dark} toggleMode={this.toggleMode} countryChangeState={this.countryChangeState} />
              <Map country={this.state.country} countryData={this.state.countryData} center={this.state.mapCenter} zoom={this.state.mapZoom} />
            </CardContent>
          </Card>

          <Card style={{ border: "2px solid rgb(70, 70, 70)", borderRadius: "20px" }}>
            <div className="app__left">
              <CardContent className={this.state.dark ? "darkMode" : "lightMode"}>
                <Table dark={this.state.dark} countryData={this.state.countryData} />
              </CardContent>
            </div>
          </Card>
        </div>
      )

    else
      return (
        <div className={this.state.dark ? "dark-mode-app" : "light-mode-app"}>
          <Card style={{ border: "2px solid rgb(70, 70, 70)", borderRadius: "20px" }}>
            <input onChange={this.toggleMode} type="checkbox" className="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="label">
              <Brightness7 fontSize="small" className="sun" />
              <Brightness3 fontSize="small" className="moon" />
              <i className="ball"></i>
            </label>
            <button className={this.state.dark ? "dark-button" : "light-button"} onClick={this.toggleMap}>Map</button>

            <CardContent className={this.state.dark ? "darkMode" : "lightMode"}>
              <Cards dark={this.state.dark} date={this.state.date} totalData={this.state.totalData} />
              <CountryPicker dark={this.state.dark} toggleMode={this.toggleMode} countryChangeState={this.countryChangeState} />
              <Chart dark={this.state.dark} totalData={this.state.totalData} country={this.state.country} />
            </CardContent>
          </Card>

          <Card style={{ border: "2px solid rgb(70, 70, 70)", borderRadius: "20px" }}>
            <div className="app__left">
              <CardContent className={this.state.dark ? "darkMode" : "lightMode"}>
                <Table dark={this.state.dark} countryData={this.state.countryData} />
              </CardContent>
            </div>
          </Card>
        </div>
      )
  }
}

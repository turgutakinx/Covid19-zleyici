import React from 'react'
import Axios from "axios"
import './CountryPicker.css'

export default class CountryPicker extends React.Component {
    state = {
        countryData: []
    }

    componentDidMount = async () => {

        const countries = await Axios.get("https://disease.sh/v3/covid-19/countries")
        this.setState({
            countryData: countries
        })
    }

    render() {
        if (!this.state.countryData.data)
        return (<div><h1 style={{ color: "#000", padding: "auto" }}>Loading data...</h1><div className="loader"></div></div>
        )
        return (
                <select defaultValue="" onChange={(e) => this.props.countryChangeState(e.target.value)} style={this.props.dark ? { color: "#fff" } : { color: "#000" }} className={this.props.dark ? "darkDropDown" : "lightDropDown"}>
                    <option style={this.props.dark ? { backgroundColor: "rgb(26, 26, 26)" } : { backgroundColor: "#fff" }} value="">Global data</option>
                    {this.state.countryData.data.map((country, i) => <option style={this.props.dark ? { backgroundColor: "rgb(26, 26, 26)" } : { backgroundColor: "#fff" }} key={i} value={country.country}>{country.country}</option>)}
                </select>
        )
    }
}
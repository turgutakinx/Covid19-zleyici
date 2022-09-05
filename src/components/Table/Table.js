import React, { Component } from 'react'
import './Table.css'
import { sortByCases, sortByRecoveries, sortByDeaths } from '../../util.js'
import CountUp from 'react-countup'

export default class Table extends Component {
    state = {
        sortOption: "cases"
    }
    changeSortOption = (option) => {
        this.setState({
            sortOption: option
        })
    }

    render() {
        if (this.state.sortOption === "cases")
            return (

                <div className="table" style={{width:"339px"}}>
                    <div style={{ display: "flex" }}>
                        <h4 style={this.props.dark ? { color: "#fff" } : { color: "#000" }}>Sort countries by:</h4>
                            <select onChange={(e) => this.changeSortOption(e.target.value)} style={this.props.dark ? { color: "#fff" } : { color: "#000" }} className={this.props.dark ? "darkDrop" : "lightDrop"}>
                                <option style={this.props.dark ? { backgroundColor: "rgb(26, 26, 26)" } : { backgroundColor: "#fff" }} value="cases">Sort by</option>
                                <option style={this.props.dark ? { backgroundColor: "rgb(26, 26, 26)" } : { backgroundColor: "#fff" }} value="cases">Number of Infections</option>
                                <option style={this.props.dark ? { backgroundColor: "rgb(26, 26, 26)" } : { backgroundColor: "#fff" }} value="recovered">Number of recoveries</option>
                                <option style={this.props.dark ? { backgroundColor: "rgb(26, 26, 26)" } : { backgroundColor: "#fff" }} value="deaths">Number of deaths</option>
                            </select>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Country</th>
                                    <th>Infections</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortByCases(this.props.countryData).map((country, i) => (
                                    <tr key={i}>
                                        <td style={{fontWeight:"bold"}}><img style={{ height: "20px", width: "30px", border:"2px solid #000" }} alt="" src={country.countryInfo.flag} /> {country.country} </td>
                                        <td style={{fontWeight:"bold"}}><CountUp start={0} end={country.cases} separator={','} duration={1} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        else if (this.state.sortOption === "recovered")
            return (

                <div className="table" style={{width:"339px"}}>
                    <div style={{ display: "flex" }}>
                        <h4 style={this.props.dark ? { color: "#fff" } : { color: "#000" }}>Sort countries by:</h4>
                            <select onChange={(e) => this.changeSortOption(e.target.value)} style={this.props.dark ? { color: "#fff" } : { color: "#000" }} className={this.props.dark ? "darkDrop" : "lightDrop"}>
                                <option style={this.props.dark ? { backgroundColor: "rgb(26, 26, 26)" } : { backgroundColor: "#fff" }} value="cases">Sort by</option>
                                <option style={this.props.dark ? { backgroundColor: "rgb(26, 26, 26)" } : { backgroundColor: "#fff" }} value="cases">Number of Infections</option>
                                <option style={this.props.dark ? { backgroundColor: "rgb(26, 26, 26)" } : { backgroundColor: "#fff" }} value="recovered">Number of recoveries</option>
                                <option style={this.props.dark ? { backgroundColor: "rgb(26, 26, 26)" } : { backgroundColor: "#fff" }} value="deaths">Number of deaths</option>
                            </select>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Country</th>
                                    <th>Recoveries</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortByRecoveries(this.props.countryData).map((country, i) => (
                                    <tr key={i}>
                                        <td style={{fontWeight:"bold"}}><img style={{ height: "20px", width: "30px", border:"2px solid #000" }} alt="" src={country.countryInfo.flag} /> {country.country} </td>
                                        <td style={{fontWeight:"bold"}}><CountUp start={0} end={country.recovered} separator={','} duration={1} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            )
        else
            return (

                <div className="table" style={{width:"339px"}}>
                    <div style={{ display: "flex" }}>
                        <h4 style={this.props.dark ? { color: "#fff" } : { color: "#000" }}>Sort countries by:</h4>
                            <select onChange={(e) => this.changeSortOption(e.target.value)} style={this.props.dark ? { color: "#fff" } : { color: "#000" }} className={this.props.dark ? "darkDrop" : "lightDrop"}>
                                <option style={this.props.dark ? { backgroundColor: "rgb(26, 26, 26)" } : { backgroundColor: "#fff" }} value="cases">Sort by</option>
                                <option style={this.props.dark ? { backgroundColor: "rgb(26, 26, 26)" } : { backgroundColor: "#fff" }} value="cases">Number of Infections</option>
                                <option style={this.props.dark ? { backgroundColor: "rgb(26, 26, 26)" } : { backgroundColor: "#fff" }} value="recovered">Number of recoveries</option>
                                <option style={this.props.dark ? { backgroundColor: "rgb(26, 26, 26)" } : { backgroundColor: "#fff" }} value="deaths">Number of deaths</option>
                            </select>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Country</th>
                                    <th>Deaths</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortByDeaths(this.props.countryData).map((country, i) => (
                                    <tr key={i}>
                                        <td style={{fontWeight:"bold"}}><img style={{ height: "20px", width: "30px", border:"2px solid #000" }} alt="" src={country.countryInfo.flag} /> {country.country} </td>
                                        <td style={{fontWeight:"bold"}}><CountUp start={0} end={country.deaths} separator={','} duration={1} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
    }
}

import React from 'react'
import Axios from 'axios'
import { Line, Bar } from 'react-chartjs-2'
import './Chart.css'

export default class Chart extends React.Component {
    state = {
        dates: [],
        cases: [],
        deaths: [],
        recovered: []
    }

    componentDidMount = async () => {

        const dailydata = await Axios.get("https://corona.lmao.ninja/v2/historical/all")

        this.setState({
            dates: Object.keys(dailydata.data.cases),
            cases: Object.values(dailydata.data.cases),
            deaths: Object.values(dailydata.data.deaths),
            recovered: Object.values(dailydata.data.recovered)
        })
    }
    render() {
        const lineChart = (
            this.state.dates.length ? (
                <Line data={{
                    labels: this.state.dates.map(date => date),
                    datasets: [{
                        data: this.state.cases.map(cases => cases),
                        label: 'Infections',
                        borderColor: 'rgba(253, 255, 122)',
                        backgroundColor: "rgba(253, 255, 122,0.5)",
                        fill: true
                    },
                    {
                        data: this.state.deaths.map(deaths => deaths),
                        label: 'Deaths',
                        borderColor: 'rgba(255, 122, 122)',
                        backgroundColor: "rgba(255, 122, 122,0.5)",
                        fill: true
                    },
                    {
                        data: this.state.recovered.map(recovered => recovered),
                        label: 'Recoveries',
                        borderColor: 'rgba(122, 255, 178)',
                        backgroundColor: "rgba(122, 255, 178, 0.5)",
                        fill: true
                    }]

                }}
                    options={{
                        legend: {
                            labels: {
                                fontColor: "#fff"
                            }
                        },

                        title: { fontColor: "#fff", display: true, text: "Total data in the last 30 days" },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    fontColor: "white"
                                },
                                gridLines: {
                                    color: "#FFFFFF"
                                },
                            }],
                            xAxes: [{
                                ticks: {
                                    fontColor: "white"
                                },
                                gridLines: {
                                    color: "#FFFFFF"
                                },
                            }]
                        }
                    }} />) : null
        )

        const darkLineChart = (
            this.state.dates.length ? (<Line data={{
                labels: this.state.dates.map(date => date),
                datasets: [{
                    data: this.state.cases.map(cases => cases),
                    label: 'Infections',
                    borderColor: 'rgba(253, 255, 122)',
                    backgroundColor: "rgba(253, 255, 122,0.5)",
                    fill: true
                },
                {
                    data: this.state.deaths.map(deaths => deaths),
                    label: 'Deaths',
                    borderColor: 'rgba(255, 122, 122)',
                    backgroundColor: "rgba(255, 122, 122,0.5)",
                    fill: true
                },
                {
                    data: this.state.recovered.map(recovered => recovered),
                    label: 'Recoveries',
                    borderColor: 'rgba(122, 255, 178)',
                    backgroundColor: "rgba(122, 255, 178, 0.5)",
                    fill: true
                }]

            }}
                options={{
                    legend: {
                        labels: {
                            fontColor: "#000"
                        }
                    },
                    title: { fontColor: "#000", display: true, text: "Total data in the last 30 days" },
                    scales: {
                        yAxes: [{
                            ticks: {
                                fontColor: "black"
                            },
                            gridLines: {
                                color: "#000"
                            },
                        }],
                        xAxes: [{
                            ticks: {
                                fontColor: "black"
                            },
                            gridLines: {
                                color: "#000"
                            },
                        }]
                    }
                }} />) : null
        )

        const barChart = (

            this.props.totalData.cases ? (<Bar data={{
                labels: ['recoveries', 'deaths', 'infections'],
                datasets: [{
                    label: 'people',
                    backgroundColor:
                        ['rgba(122, 255, 178, 0.87)',
                            'rgba(255, 122, 122, 0.87)',
                            'rgba(253, 255, 122, 0.87)',],
                    data: [this.props.totalData.recovered, this.props.totalData.deaths, this.props.totalData.cases]
                }]
            }}
                options={{
                    legend: { display: false },
                    title: { fontColor: "#fff", display: true, text: `current state in ${this.props.country}` },
                    scales: {
                        yAxes: [{
                            ticks: {
                                fontColor: "white"
                            },
                            gridLines: {
                                color: "#FFFFFF"
                            },
                        }],
                        xAxes: [{
                            ticks: {
                                fontColor: "white"
                            },
                            gridLines: {
                                color: "#FFFFFF"
                            },
                        }]
                    }
                }}
            />) : null
        )

        const darkBarChart = (

            this.props.totalData.cases ? (<Bar data={{
                labels: ['recoveries', 'deaths', 'infections'],
                datasets: [{
                    label: 'people',
                    backgroundColor:
                        ['rgba(122, 255, 178, 0.87)',
                            'rgba(255, 122, 122, 0.87)',
                            'rgba(253, 255, 122, 0.87)',],
                    data: [this.props.totalData.recovered, this.props.totalData.deaths, this.props.totalData.cases]
                }]
            }}
                options={{
                    legend: { display: false },
                    title: { fontColor: "#000", display: true, text: `current state in ${this.props.country}` },
                    scales: {
                        yAxes: [{
                            ticks: {
                                fontColor: "black"
                            },
                            gridLines: {
                                color: "#000"
                            },
                        }],
                        xAxes: [{
                            ticks: {
                                fontColor: "black"
                            },
                            gridLines: {
                                color: "#000"
                            },
                        }]
                    }
                }}
            />) : null
        )

        return (
            <div className="chart">
                {this.props.dark ? (this.props.country ? barChart : lineChart) : (this.props.country ? darkBarChart : darkLineChart)}
            </div>
        )
    }
}
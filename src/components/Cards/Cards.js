import React from 'react'
import { Card, Grid, CardContent, Typography } from '@material-ui/core'
import CountUp from 'react-countup'

const Cards = ({ dark, date, totalData: { cases, deaths, recovered } }) => {
    if (!cases) {
        return <></>
    }
    return (
        <div style={{marginTop: "60px"}}>
            <Grid container spacing={3} justify="center">
                <Grid  item component={Card} xs={12} md={3} style={dark ? { backgroundColor: "rgb(85, 85, 85)", margin: "0 1%", borderTop: "2px solid rgba(255, 255, 255, 0.5)", borderRight: "2px solid rgba(255, 255, 255, 0.5)", borderLeft: "2px solid rgba(255, 255, 255, 0.5)", borderBottom: "10px solid rgba(122, 255, 178, 0.87)" } : { backgroundColor: "#fbfbfaad", margin: "0 1%", borderTop: "2px solid rgba(0, 0, 0, 0.5)", borderLeft: "2px solid rgba(0, 0, 0, 0.5)", borderRight: "2px solid rgba(0, 0, 0, 0.5)", borderBottom: "10px solid rgba(122, 255, 178, 0.87)" }}>
                    <CardContent>
                        <Typography variant="h5" style={dark ? { textAlign: "center", color: "#fff" } : { textAlign: "center", color: "#000" }}>COVID-19 total recoveries</Typography>
                        <Typography variant="h5" style={dark ? { textAlign: "center", color: "#fff" } : { textAlign: "center", color: "#000" }}>
                            <CountUp start={0} end={recovered} separator={','} duration={1} />
                        </Typography>
                        <Typography variant="h5" style={dark ? { textAlign: "center", color: "#fff" } : { textAlign: "center", color: "#000" }}>{new Date(date).toDateString()}</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} style={dark ? { backgroundColor: "rgb(85, 85, 85)", margin: "0 1%", borderTop: "2px solid rgba(255, 255, 255, 0.5)", borderRight: "2px solid rgba(255, 255, 255, 0.5)", borderLeft: "2px solid rgba(255, 255, 255, 0.5)", borderBottom: "10px solid rgba(255, 122, 122, 0.87)" } : { backgroundColor: "#fbfbfaad", margin: "0 1%", borderTop: "2px solid rgba(0, 0, 0, 0.5)", borderLeft: "2px solid rgba(0, 0, 0, 0.5)", borderRight: "2px solid rgba(0, 0, 0, 0.5)", borderBottom: "10px solid rgba(255, 122, 122, 0.87)" }}>
                    <CardContent>
                    <Typography variant="h5" style={dark ? { textAlign: "center", color: "#fff" } : { textAlign: "center", color: "#000" }}>COVID-19 total deaths</Typography>
                        <Typography variant="h5" style={dark ? { textAlign: "center", color: "#fff" } : { textAlign: "center", color: "#000" }}>
                            <CountUp start={0} end={deaths} separator={','} duration={1} />
                        </Typography>
                        <Typography variant="h5" style={dark ? { textAlign: "center", color: "#fff" } : { textAlign: "center", color: "#000" }}>{new Date(date).toDateString()}</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} style={dark ? { backgroundColor: "rgb(85, 85, 85)", margin: "0 1%", borderTop: "2px solid rgba(255, 255, 255, 0.5)", borderRight: "2px solid rgba(255, 255, 255, 0.5)", borderLeft: "2px solid rgba(255, 255, 255, 0.5)", borderBottom: "10px solid rgba(253, 255, 122, 0.87)" } : { backgroundColor: "#fbfbfaad", margin: "0 1%", borderTop: "2px solid rgba(0, 0, 0, 0.5)", borderLeft: "2px solid rgba(0, 0, 0, 0.5)", borderRight: "2px solid rgba(0, 0, 0, 0.5)", borderBottom: "10px solid rgba(253, 255, 122, 0.87)" }}>
                    <CardContent>
                        <Typography variant="h5" style={dark ? { textAlign: "center", color: "#fff" } : { textAlign: "center", color: "#000" }}>COVID-19 total infections</Typography>
                        <Typography variant="h5" style={dark ? { textAlign: "center", color: "#fff" } : { textAlign: "center", color: "#000" }}>
                            <CountUp start={0} end={cases} separator={','} duration={1} />
                        </Typography>
                        <Typography variant="h5" style={dark ? { textAlign: "center", color: "#fff" } : { textAlign: "center", color: "#000" }}>{new Date(date).toDateString()}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
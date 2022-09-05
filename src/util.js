import React from 'react'
import numeral from 'numeral'
import { Circle, Popup } from 'react-leaflet'

export const sortByCases = (data) => {
    const sortedData = [...data]

    sortedData.sort((a, b) => {
        if (a.cases > b.cases) {
            return -1
        }
        else {
            return 1
        }

        //or return a.cases - b.cases
    })
    return sortedData
}

export const sortByDeaths = (data) => {
    const sortedData = [...data]

    sortedData.sort((a, b) => {
        if (a.deaths > b.deaths) {
            return -1
        }
        else {
            return 1
        }
    })
    return sortedData
}

export const sortByRecoveries = (data) => {
    const sortedData = [...data]

    sortedData.sort((a, b) => {
        if (a.recovered > b.recovered) {
            return -1
        }
        else {
            return 1
        }
    })
    return sortedData
}

export const showDataOnMap = (data) => (
    data.map((country,i) => (
        <Circle
            key={i}
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.4}
            color="#CC1034"
            fillColor="#000"
            radius={Math.sqrt(country.cases) * 100}>
            <Popup className="info-container">
                <div >
                    <div className="info-flag"><img src={`${country.countryInfo.flag}`} alt=""/></div>
                    <div className="info-name">{country.country}</div>
                    <div className="info-cases">Infections: {numeral(country.cases).format("0,0")}</div>
                    <div className="info-recovered">Recoveries: {numeral(country.recovered).format("0,0")}</div>
                    <div className="info-deaths">Deaths: {numeral(country.deaths).format("0,0")}</div>
                </div>
            </Popup>
        </Circle>
    )
    ))
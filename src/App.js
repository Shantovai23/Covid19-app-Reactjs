import React, { useEffect, useState } from 'react';
import './App.css';
import LineGraph from './components/LineGraph.jsx'
import CovidSummary from './components/CovidSummary'
import axios from './axios'

function App() {
  const [totalConfirmed, setTotalConfirmed] = useState(0)
  const [totalRecovered, setTotalRecovered] = useState(0)
  const [totalDeaths, setTotalDeaths] = useState(0)
  const [newConfirmed,setnewConfirmed]=useState(0)
  const [newDeaths,setNewDeaths]=useState(0)
  const [loading, setLoading] = useState(false)
  const [covidsummary, setcovidsummary] = useState({})
  const [days, setDays] = useState(7)
  const [country, setCountry] = useState('')
  const [coronaCountAr, setCoronaCountAr] = useState([])
  const [label, setlabel] = useState([])

  useEffect(() => {
    setLoading(true)
    axios.get(`/summary`)
      .then(res => {
        setLoading(false)
        console.log(res);

        if (res.status === 200) {
          setTotalConfirmed(res.data.Global.TotalConfirmed)
          setTotalRecovered(res.data.Global.TotalRecovered)
          setTotalDeaths(res.data.Global.TotalDeaths)
          setnewConfirmed(res.data.Global.NewConfirmed)
          setNewDeaths(res.data.Global.NewDeaths)
          setcovidsummary(res.data)
        }
      })
      .catch(err => {
        console.log(err);
      })
  }, [])


  const formatDate = (date) => {
    const d = new Date(date)
    const year = d.getFullYear()
    const month = `0${d.getMonth() + 1}`.slice(-2)
    const _date = `0${d.getDate()}`.slice(-2)
    return `${year}-${month}-${_date}`
  }


  const getCoronaReportbyDateRange = (countryslug, from, to) => {
    axios.get(`/country/${countryslug}/status/confirmed?from=${from}T00:00:00Z&to=${to}T00:00:00Z`)
      .then(res => {
        console.log(res);
        const yaxis = res.data.map(d => d.Cases)
        const xaxis = res.data.map(d => d.Date)
        const covidDetails = covidsummary.Countries.find(country => country.Slug === countryslug)
        setTotalConfirmed(covidDetails.TotalConfirmed)
        setTotalRecovered(covidDetails.TotalRecovered)
        setTotalDeaths(covidDetails.TotalDeaths)
        setnewConfirmed(covidDetails.NewConfirmed)
        setNewDeaths(covidDetails.NewDeaths)
        setCoronaCountAr(yaxis)
        setlabel(xaxis)

      })
      .catch(err => {
        console.log(err);
      })
  }

  const countryHandler = (e) => {
    setCountry(e.target.value)
    const d = new Date()
    const to = formatDate(d)
    const from = formatDate(d.setDate(d.getDate() - days))

    console.log(from, to);
    getCoronaReportbyDateRange(e.target.value, from, to)
  }
  const daysHandler = (e) => {
    const d = new Date()
    const to = formatDate(d)
    const from = formatDate(d.setDate(d.getDate() - e.target.value))
    getCoronaReportbyDateRange(country, from, to)
    setDays(e.target.value)
  }

  if (loading) {
    return (<><div className="loader"></div><h5>Loading...</h5></>)
  }


  return (
    <div className="App">
      <CovidSummary
        totalConfirmed={totalConfirmed}
        totalRecovered={totalRecovered}
        totalDeaths={totalDeaths}
        totalNewConfirmed={newConfirmed}
        totalNewDeaths={newDeaths}
        country={country}
      />
      <div>
        <select value={country} onChange={countryHandler}>
          <option value=''>Select Country</option>
          {covidsummary.Countries && covidsummary.Countries.map(country =>
            <option key={country.Slug} value={country.Slug}>{country.Country}</option>
          )}
        </select>
        <select value={days} onChange={daysHandler}>
          <option value='7'>Last 7 days graph data</option>
          <option value='30'>Last 30 days graph data</option>
          <option value='90'>Last 90 days graph data</option>
        </select>
      </div>
      <div className='screen'>
        <LineGraph yaxis={coronaCountAr}
          label={label} />
      </div>
    </div>
  );
}

export default App;

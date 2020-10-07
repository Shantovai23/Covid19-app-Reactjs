import React from 'react'
import Card from './Card'
import NumberFormat from 'react-number-format'
const CovidSummary = (props) => {

  const {
    totalConfirmed,
    totalRecovered,
    totalDeaths,
    totalNewConfirmed,
    totalNewDeaths,
    country
  } = props
  const date = new Date().toLocaleDateString()
  return (<>
    <div className='container-fluid'>
      <div>
        <h1 style={{ textTransform: 'capitalize' }}>{country == '' ? 'World Wide Covid-19 Report' : country}</h1>
        <h1>{date}</h1>
        <div className='row'>
          <div className='col-sm col-md-4 mx-auto' style={{ justifyContent: 'center' }}>
            <Card>
              <span>Total Confirmed</span><br />
              <span>{<NumberFormat value={totalConfirmed} displayType={'text'} thousandSeparator={true} />}</span>
            </Card>
            <Card>
              <span>New Confirmed</span><br />
              <span>{<NumberFormat value={totalNewConfirmed} displayType={'text'} thousandSeparator={true} />}</span>
            </Card>
            <Card>
              <span>Total Recovered</span><br />
              <span>{<NumberFormat value={totalRecovered} displayType={'text'} thousandSeparator={true} />}</span>
            </Card>
            <Card>
              <span>Total Deaths</span><br />
              <span>{<NumberFormat value={totalDeaths} displayType={'text'} thousandSeparator={true} />}</span>
            </Card>

            <Card>
              <span>New Deaths</span><br />
              <span>{<NumberFormat value={totalNewDeaths} displayType={'text'} thousandSeparator={true} />}</span>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </>)
}
export default CovidSummary
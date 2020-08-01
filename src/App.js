import React from 'react'
import Card from './components/cards/cards'
import CountryPicker from './components/country picker/cp'
import Chart from './components/chart/chart'
import { fetchData } from './api'
import "./App.css"
import {SocialMediaIconsReact} from 'social-media-icons-react'
class App extends React.Component {
    state = {
        data: {}
    }
    async componentDidMount() {
        const fetchedData = await fetchData()
        this.setState({ data: fetchedData })
    }
    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });

    }

    render() {
        const { data } = this.state;
        const { country } = this.state;
        return <div className='container'>
            <div className='covid-info-content'>
                <h1>What is COVID-19 ?</h1>
                <ul>
                    <li>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus</li>
                    <li>Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment.</li>
                    <li>Most common symptoms are fever, dry cough and tiredness and if anyone experiencing difficulty in breathing or shortness of breadth, chest pain or pressure, loss of speech or movement then he/she must immediately see a doctor. They are the major symptoms of COVID-19.</li>
                </ul>
            </div>
            <div className='covid-spread'>
                <h1>How it SPREADS ?</h1>
                <ul>
                    <li>
                        The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or exhales. These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces.</li>
                    <li>You can be infected by breathing in the virus if you are within close proximity of someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth.</li>
                </ul>
            </div>
            <div className='cp'>
            <p style={{textAlign:'center'}}>Select Your Country : >>><span> 
             <CountryPicker handleCountryChange={this.handleCountryChange} /></span></p>
             {country ? <h1 className='info'>CASES in {country}</h1> : <h1 className='info'>Statistics Globally.</h1>}
             </div>
            <div>
            {data ? <Card data={data} /> : "LOading"}
            </div>
            <h1> Chart Representation</h1>
            {data ? <Chart data={data} country={country} /> : "LOading"}
            <p>Developer.... Abhay Raj Singh Rathore</p>
            <p>Contact - sr.abhayraj@gmail.com</p>
        <ul className='list'>
        <li><SocialMediaIconsReact icon="linkedin" url="https://www.linkedin.com/in/abhay-raj-singh-rathore-54078a160/" /></li>
        <li><SocialMediaIconsReact icon="mail" url="https://mail.google.com/mail/u/1/#inbox?compose=new/" /></li>
        <li><SocialMediaIconsReact icon="instagram" url="https://www.instagram.com/abhay_raj_sr/"/></li>
        </ul> 
        </div>
    }
}
export default App;




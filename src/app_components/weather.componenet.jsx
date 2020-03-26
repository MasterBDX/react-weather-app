import React from 'react'

const Weather = (props) => {
    return <div className='container'>
        <div className='cards'>
            <h1>
                {props.state.country}, {props.state.city}
            </h1>
            <h5 className='py-4'><i className='wi wi-day-sunny display-1'></i></h5>
            <h1 className='py-2'>{props.state.temp_celsuis}&deg;</h1>
            {/* Max and Min temperature */}
            {minMaxTemp(props.state.min_temp, props.state.max_temp)}
            <h4 className="py-3">
                {props.state.description}
            </h4>
        </div>
    </div>
};

function minMaxTemp(min, max) {
    return (
        <h3>
            <span className='px-2'>
                {min}&deg;
        </span>
            <span className='px-2'>
                {max}&deg;
        </span>
        </h3>

    )
};



export default Weather;
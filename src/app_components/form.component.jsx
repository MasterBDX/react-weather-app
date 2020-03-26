import React from 'react'
import '../static/css/style.css'

const Form = props => {
    return <div className='container'>
        <form >
            <div className='row'>

                <div className='col-md-3 offset-md-2'>
                    <br />
                    <input placeholder='City' autoComplete='off' className='form-control' type="text" name="city" id="city " />
                    <br />
                </div>
                <div className='col-md-3'>
                    <br />
                    <input placeholder='Country' autoComplete='off' type="text" className='form-control' name="country" id="country" />
                    <br />
                </div>
                <div className='col-md-3'>
                    <br />
                    <button className="btn btn-info">Get weather</button>
                    <br />
                </div>
            </div>
        </form>
    </div>
}


export default Form
import React, { Component } from 'react'

export default class BadgeForm extends Component {
    //Initialize state
    // state ={
    //     firstName:'',
    //     lastName:'',
    //     email:'',
    //     jobTitle:'',
    //     twitter:''
    // }


    ///////Functions to control events////////
    // handleChange = e => {
    //     // console.log({
    //     //     value: e.target.value,
    //     //     name: e.target.name
    //     // })

    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    handleClick = e => {
        console.log('Button was clicked')
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log('Form was submited')
        console.log(this.state)
    }
    ///////////////////////////////////////////
    render() {
        return (
             <div>
                 <h1>New Attendant</h1>
                 <form onSubmit={this.handleSubmit}>
                     <div className="form-group">
                         <label htmlFor="">First Name</label>
                         <input 
                            onChange={this.props.onChange} 
                            className='form-control' 
                            type="text" 
                            name="firstName" 
                            value={this.props.formValues.firstName}
                          />
                     </div>
                     <div className="form-group">
                         <label htmlFor="">Last Name</label>
                         <input 
                            onChange={this.props.onChange} 
                            className='form-control' 
                            type="text" 
                            name="lastName"
                            value={this.props.formValues.lastName}
                         />
                     </div>
                     <div className="form-group">
                         <label htmlFor="">Email</label>
                         <input 
                            onChange={this.props.onChange} 
                            className='form-control' 
                            type="email" 
                            name="email"
                            value={this.props.formValues.email}
                         />
                     </div>
                     <div className="form-group">
                         <label htmlFor="">Job Title</label>
                         <input 
                            onChange={this.props.onChange} 
                            className='form-control' 
                            type="text" 
                            name="jobTitle"
                            value={this.props.formValues.jobTitle}
                         />
                     </div>
                     <div className="form-group">
                         <label htmlFor="">Twitter</label>
                         <input 
                            onChange={this.props.onChange} 
                            className='form-control' 
                            type="text" 
                            name="twitter"
                            value={this.props.formValues.twitter}
                         />
                     </div>
                     <button type='submit' onClick={this.handleClick} className='btn btn-primary'>Save</button>
                 </form>
             </div>
        )
    }
}

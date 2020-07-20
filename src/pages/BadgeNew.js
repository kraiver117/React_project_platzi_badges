import React, { Component } from 'react'
import logo from '../images/badge-header.svg'

import NavBar from '../components/NavBar'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

import '../pages/styles/BadgeNew.css'


export default class BadgeNew extends Component {
    state = {form:{
        firstName:'',
        lastName:'',
        email:'',
        jobTitle:'',
        twitter:'',
    }}

    handleChange = e => {
        // const nextForm = this.state.form
        // nextForm[e.target.name] = this.state.form
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }

    render() {
        return (
            <div>
               <NavBar/>
               <div className='BadgeNew__hero'>
                    <img className='img-fluid' src={logo} alt=""/>
               </div>

               <div className='container'>
                   <div className='row'>
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                jobtitle={this.state.form.jobTitle}
                                twitter={this.state.form.twitter}
                                email={this.state.form.email}
                                avatarUrl= 'https://es.gravatar.com/userimage/179449325/bfbfdc7e157befaa6e1f510af5a6a726.jpg?size=200'
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                        </div>
                   </div>
               </div>
            </div>
        )
    }
}

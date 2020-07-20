import React, { Component } from 'react'
import confLogo from '../images/badge-header.svg'

import './styles/Badge.css'

export default class Badge extends Component {
    render() {
        const{
            firstName,
            lastName,
            jobtitle,
            twitter,
            avatarUrl,
        } = this.props

        return (
            <div className='badge container-fluid'>
                <div className='badge_header'>
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>
                <div className='badge_section-name'>
                    <img className='badge_avatar' src={avatarUrl} alt="Avatar"/>
                    <h1>{firstName}<br/>{lastName} </h1>
                </div>
                <div className='badge_section-info'>
                    <h3>{jobtitle}</h3>
                    <div>{twitter}</div>
                </div>
                <div className='badge_footer'>
                    #PlatziConf
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'

import twitterLogo from '../images/twitter.png'

import '../components/styles/BadgesList.css'

export default class BadgesList extends Component {
    render() {
        return (
            <ul className="list-unstyled">
                {this.props.badges.map((badge) => {
                    return(
                        <li className ='BadgesListItem' key={badge.id}>
                            <img className='BadgesListItem__avatar' src={badge.avatarUrl} alt=""/>
                            <div >
                                <span className='font-weight-bold'>
                                    {badge.firstName} {badge.lastName}
                                </span>
                                <span>
                                    <img className='BadgesLogoTwitter' src={twitterLogo} alt=""/>
                                    <a href='/'>@{badge.twitter}</a>
                                </span>
                                <span>
                                    {badge.jobTitle}
                                </span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

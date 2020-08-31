import React from 'react'

import Avatar from '../avatar/Avatar'
import Button from '../button/Button'
import "./card.css";

const Card = () => {
    return (
        <div className="container">
            <div><Avatar/></div>
            <div>
                <h1>MZero MeetUp</h1>
                <table>
                    <tr>
                        <td>Location</td>
                        <td>Medan, Indonesia</td>
                    </tr>
                    <tr>
                        <td>Members</td>
                        <td>12.310</td>
                    </tr>
                    <tr>
                        <td>Organizers</td>
                        <td>Didi Alfansyah</td>
                    </tr>
                </table>

                <div><Button/></div>
            </div>
        </div>
    )
};

export default Card
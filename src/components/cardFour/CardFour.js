import React from 'react'

import AvatarTwo from '../avatarTwo/AvatarTwo'

const CardFour = () => {
    return (
        <div className="containerT">
            <h2>Members</h2>
            <div className="container" style={{width:"90%"}}>
                <div><AvatarTwo/></div>
                <div>
                    <h1>Organizers</h1>
                    <table>
                        <tr>
                            <td>Didi Alfansyah</td>
                            <td>4 Others</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default CardFour
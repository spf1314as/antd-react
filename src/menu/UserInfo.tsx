import React from 'react';
import {Avatar} from 'antd'
import './UserInfo.less' 
export const UserInfo: React.FC = () => {
    return (
        <div className="user-wrapper">
            <div className="info">
                shenpengfei <br/>
                D23654
            </div>
            <Avatar className='avatar' size='large' icon='user'/>
        </div>
    )
}


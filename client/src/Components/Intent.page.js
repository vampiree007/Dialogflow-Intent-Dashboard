import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {MenuOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar/sidebar.component';
import IntentDetail from './Intent_Details/intentDetail.component';
import IntentExtras from './intentExtras/intentExtras.component';
import './intent.css';
const Agent = require('../Assets/agent.png');

const IntentPage = () => {
    const [intents, setIntents] = useState(null)
    const [activeIntent, setActiveIntent] = useState(null)
    
    useEffect(() => {
        axios.get('/api/dialogflow/allintents')
        .then(res => {
            setIntents(res.data.response);
            setActiveIntent(res.data.response[0])
        })
    }, []);
    

    const toggle =() => {
        const sidebar = document.getElementById('sidebar')
        sidebar.classList.toggle("toggleSidebar");
    }
    if(intents){
        return (
            <div>

                <div className="header">
                    <div className="toggle" onClick={()=> toggle()}>
                        <MenuOutlined/>
                    </div>
                    <img src={Agent} alt="agent"/>
                    <div className="name">
                        AGENT_BLACK
                    </div>
                </div>

                <div className="intent_page">
                    <Sidebar intents={intents} setIntent={setActiveIntent} toggle={toggle} />
                    <IntentDetail intent={activeIntent} />
                    <IntentExtras intent={activeIntent} />
                </div>
                
            </div>
        )
    }else{
        return(<div>loading...</div>)
    }
}

export default IntentPage;

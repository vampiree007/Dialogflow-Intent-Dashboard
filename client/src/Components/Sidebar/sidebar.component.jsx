import React from 'react';
import './sidebar.styles.css';
const Agent = require('../../Assets/agent.png');

const Sidebar = ({intents, setIntent, toggle}) => {
    return (
        <div>
            <div className="sidebar" id="sidebar">
                <div className="top_heading">
                    <div className="logo">
                        <img src={Agent} alt="agent"/>
                    </div>
                    <div className="name">
                        AGENT_BLACK
                    </div>
                </div>
                
                
                <div className="intent_list">
                    <div className="list_item">
                        Language <span>en</span>
                    </div>
                    {
                        intents.map((intent, i) => {
                            return(
                                <div className="list_item" key={i} 
                                onClick={()=> {setIntent(intent); toggle()}
                                }>
                                    {intent.displayName}
                                </div> 
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar;

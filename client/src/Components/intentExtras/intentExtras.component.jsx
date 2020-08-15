import React from 'react';
import './intentextras.styles.css';
import RenderDetail from './renderDetails/renderDetails.component'

const IntentExtras = (props) => {
    
    if(props.intent){
        const{
            rootFollowupIntentName,
            parentFollowupIntentName,
            mlDisabled,
            resetContexts,
            name,
            webhookState
        } = props.intent
        
        return (
            <div className="intent_extras">
                    <div className="top_heading extra_heading">Extras</div>
    
                    <RenderDetail title={'Intent Path'} value={name}/>
                    <RenderDetail title={'ML Disabled'} value={mlDisabled}/>
                    <RenderDetail title={'webhook state'} value={webhookState}/>
                    <RenderDetail title={'Reset Contexts'} value={resetContexts}/>
                    <RenderDetail title={'parentFollowupIntentName'} value={parentFollowupIntentName}/>
                    <RenderDetail title={'rootFollowupIntentName'} value={rootFollowupIntentName}/>
                    
            </div>
        )
    }else{
        return(
            <div>loading...</div>
        )
    }
}

export default IntentExtras;

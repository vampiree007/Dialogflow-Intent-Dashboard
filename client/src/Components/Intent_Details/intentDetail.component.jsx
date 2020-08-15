import React from 'react';
import './intentDetail.styles.css';
import {Link} from 'react-router-dom';
import DetailGenerator from './IntentGenerator/allArrayIntents.component';
import Spinner from '../../spinner_Animation_Loading/spinner.component';


const IntentDetail = ({intent}) => {

    if(intent){
        return (
            <div className="intent_detail">
                <div className="top_heading">
                    <div className="name">
                        {intent.displayName}
                    </div>
                    <div className="details">
                        <Link to="/chatbot"><span>DEMO</span></Link>
                    </div>
                   
                </div>
    
    
                {/* detail part starts from here onss----------------- */}
                <DetailGenerator intent={intent}/>
            </div>
        )
    }else{
        return(
            <Spinner/>
        )
    }
}

export default IntentDetail;

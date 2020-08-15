import React, {useState} from 'react';
import './singleDetail.styles.css';
import {CaretDownOutlined, CaretUpFilled} from '@ant-design/icons'

const DetailGenerator = ({intent}) => {
    const[trigger, setTrigger] = useState(false)
    const{inputContextNames,
         outputContextNames,
         events,
         trainingPhrases,
         parameters,
         followupIntentInfo,
         defaultResponsePlatforms
    } = intent
    const messages = intent.messages[0].text.text;

    const autoHeight =(event) => {
        const element = event.target.closest('.single_detail')
        element.classList.toggle("auto_height");
        setTrigger(!trigger)
    }

    if(intent){
        return (
            <div>
    
                <div className="single_detail">
                    <div className="heading" onClick={(e)=>autoHeight(e)}>
                        Training Phrases
                        <span>{trigger === false ? <CaretDownOutlined/>: <CaretUpFilled/>}</span>
                    </div>
                    <div className="all_input_container">
                    {
                        trainingPhrases.map((phrase, i)=>{
                            return(
                                <div className="input_container" key={i}>
                                <div className="input">{phrase.parts[0].text} </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>

                <div className="single_detail">
                    <div className="heading" onClick={(e)=>autoHeight(e)}>
                        Response
                        <span>{trigger === false ? <CaretDownOutlined/>: <CaretUpFilled/>}</span>
                    </div>
                    <div className="all_input_container">
                    {
                        messages.map((phrase, i)=>{
                            return(
                                <div className="input_container" key={i}>
                                <div className="input">{phrase} </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
    
            </div>
        )
    }
}

export default DetailGenerator;

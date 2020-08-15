import React from 'react';
import './singleDetail.styles.css';
import {CaretDownFilled} from '@ant-design/icons'

const DetailGenerator = ({intent}) => {

    const{inputContextNames,
         outputContexts,
         events,
         trainingPhrases,
         parameters
    } = intent

    const messages = intent.messages[0].text.text;

    const cssHandler =(event) => {
        const element = event.target.closest('.single_detail')
        const indicator = event.target.closest('.indicator')

        element.classList.toggle("auto_height");
        if(indicator){
            indicator.classList.toggle("rotate")
        }
    }

    const IntentBlockGenerator = (mapper, title) => {
        let value
        if(mapper[0]){
            return(
                <div className="single_detail">
                    <div className="heading" onClick={(e)=>cssHandler(e)}>
                        {title}
                        <span className="indicator"><CaretDownFilled/></span>
                    </div>
                    <div className="all_input_container">
                        {
                            mapper.map((phrase, i)=>{
                                if(mapper === trainingPhrases) value = phrase.parts[0].text
                                if(mapper === messages || mapper === events) value = phrase
                                if(mapper === outputContexts) value = phrase.name.split('/')[6] + `  (${phrase.lifespanCount})`
                                if(mapper === parameters || mapper === events) value = phrase.entityTypeDisplayName
                                return(
                                    <div className="input_container" key={i}>
                                    <div className="input"> {value} </div>
                                    </div>
                                )
                            }) 
                        }
                    </div>
                </div>
            )
        }
    }
    
    if(intent){
        return (
            <div>
                {IntentBlockGenerator(trainingPhrases, 'training phrases')}
                {IntentBlockGenerator(messages, 'Response')}

                {IntentBlockGenerator(inputContextNames, 'ctx in')}
                {IntentBlockGenerator(outputContexts, 'ctx out')}    

                {IntentBlockGenerator(parameters, 'parameters')}  
            </div>
        )
    }
}

export default DetailGenerator;

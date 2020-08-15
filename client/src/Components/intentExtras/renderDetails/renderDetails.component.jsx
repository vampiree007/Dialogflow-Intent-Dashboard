import React from 'react'

const renderDetail = ({title, value}) => (
    <div className="intent_extras_details">
        <div className="detail_container">
            <div className="name">
                {title}*
            </div>
            <div className="input">
                {value === false? 'False' : value === ""? 'Not Available': value}
            </div>
        </div>
    </div>
)

export default renderDetail;

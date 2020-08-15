import React, {useRef, useEffect} from 'react'
import { List, Icon, Avatar } from 'antd';
import './styles.css'

function Message(props) {
    const messagesEndRef = useRef(null)

    //Setting Chat Avatar Based on props received
    const AvatarSrc = props.who ==='bot' ? <Icon type="robot" /> : <Icon type="smile" /> 
    
    // Using Use Effect along with Custom Function to auto scroll down when a new message is received
    // so that recieved message remains in the sight
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
    useEffect(scrollToBottom, [props]);


    return (
        <List.Item style={{ padding: '1rem' }} >
            <List.Item.Meta
                style={{overflowX:'hidden'}}
                avatar={<Avatar icon={AvatarSrc} />}
                title={props.who === 'bot' ? 'Doraemon': 'Me'}
                description={props.text}
            />
            <div ref={messagesEndRef} />
        </List.Item>
    )
}

export default Message

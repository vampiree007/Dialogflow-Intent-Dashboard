import React, {useRef, useEffect} from 'react'
import { List, Icon, Avatar } from 'antd';
import './styles.css'

function Message(props) {
    const messagesEndRef = useRef(null)

    const AvatarSrc = props.who ==='bot' ? <Icon type="robot" /> : <Icon type="smile" />  
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

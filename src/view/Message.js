import React from 'react'
import Menu from '../components/Menu'
import {Button, message, Row, Col} from 'antd'

export default class MessageDemo extends React.Component {
    constructor(props) {
        super(props);
    }

    showMessage = (type) => {
        message[type]('I am a message！');
    }

    render() {
        const {showMessage} = this;

        return (
            <div>
                
                <Button type="link" onClick={() => {showMessage('info')}}>Info</Button>
                <Button type="ghost" onClick={() => {showMessage('success')}}>Success</Button>
                <Button type="dashed" onClick={() => {showMessage('error')}}>Error</Button>
                <Button type="danger" onClick={() => {showMessage('warning')}}>Warning</Button>
                <Menu/>
            </div>
        );
    }
}
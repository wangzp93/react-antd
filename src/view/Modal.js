import React from 'react'
import Menu from '../components/Menu'
import {Button, Modal, Row, Col} from 'antd'

export default class ModalDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            confirmLoading: false,      // 按钮loading
        }
    }

    showModal = () => {
        this.setState({modalVisible: true});
    }

    onOk = () => {
        this.setState({confirmLoading: true});
        setTimeout(() => {
            this.setState({
                modalVisible: false,
                confirmLoading: false
            });
        }, 1000);
    }

    onCancel = () => {
        this.setState({modalVisible: false});
    }

    showMessage = (type) => {
        // info success error warning confirm
        Modal[type]({
            title: '标题',
            content: '我是内容！',
            
            // confirm用
            onOk() {
                
            },
            onCancel() {}
        });
    }

    render() {
        const {modalVisible, confirmLoading} = this.state;
        const {showModal, onOk, onCancel, showMessage} = this;

        return (
            <div>
                <Modal
                    title="我是标题"
                    visible={modalVisible}
                    okText="确定"
                    onOk={onOk}
                    confirmLoading={confirmLoading}
                    cancelText="取消"
                    onCancel={onCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
                <Button type="primary" onClick={showModal}>open modal</Button><br/>
                <Button type="primary" onClick={() => {showMessage('confirm')}}>confirm</Button>
                <Button type="link" onClick={() => {showMessage('info')}}>Info</Button>
                <Button type="ghost" onClick={() => {showMessage('success')}}>Success</Button>
                <Button type="dashed" onClick={() => {showMessage('error')}}>Error</Button>
                <Button type="danger" onClick={() => {showMessage('warning')}}>Warning</Button>
                <Menu/>
            </div>
        );
    }
}
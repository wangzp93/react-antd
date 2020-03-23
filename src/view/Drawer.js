import React from 'react'
import Menu from '../components/Menu'
import {Button, Drawer, Row, Col} from 'antd'

export default class DrawerDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            drawerVisible: false,
            confirmLoading: false,      // 按钮loading
        }
    }

    showDrawer = () => {
        this.setState({drawerVisible: true});
    }

    onOk = () => {
        this.setState({confirmLoading: true});
        setTimeout(() => {
            this.setState({
                drawerVisible: false,
                confirmLoading: false
            });
        }, 1000);
    }

    onClose = () => {
        this.setState({drawerVisible: false});
    }

    render() {
        const {drawerVisible, confirmLoading} = this.state;
        const {showDrawer, onOk, onClose, showMessage} = this;

        return (
            <div>
                <Drawer
                    title="我是标题"
                    visible={drawerVisible}
                    placement="right"
                    width={700}
                    onClose={onClose}
                    footer={
                        <div style={{textAlign: 'right'}}>
                            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                                Cancel
                            </Button>
                            <Button onClick={this.onOk} type="primary" loading={confirmLoading}>
                                Submit
                            </Button>
                        </div>
                      }
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
                <Button type="primary" onClick={showDrawer}>open drawer</Button><br/>
                <Menu/>
            </div>
        );
    }
}
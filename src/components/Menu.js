import React from 'react'
import { withRouter } from 'react-router-dom'
import { Row, Col, Button } from 'antd'

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    toPage = (path) => {
        this.props.history.push(path);
    }

    render() {
        return (
            <div style={{position: 'absolute', bottom: 20, width: '100%'}}>
                <Row gutter={24}>
                    <Col span={2}><Button type="primary" onClick={(e) => {this.toPage('/')}}>toForm</Button></Col>
                    <Col span={2}><Button type="primary" onClick={(e) => {this.toPage('/table')}}>toTable</Button></Col>
                    <Col span={2}><Button type="primary" onClick={(e) => {this.toPage('/modal')}}>toModal</Button></Col>
                    <Col span={2}><Button type="primary" onClick={(e) => {this.toPage('/message')}}>toMessage</Button></Col>
                    <Col span={2}><Button type="primary" onClick={(e) => {this.toPage('/drawer')}}>toDrawer</Button></Col>
                </Row>
            </div>
        )
    }
}
export default withRouter(Menu)
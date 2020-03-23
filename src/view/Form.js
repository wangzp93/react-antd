import React from 'react'
import Menu from '../components/Menu'
import {Form, Button, Row, Col, Input} from 'antd'

const FormItem = Form.Item
// 栅格布局时col
const colLayout = { xs: 24, sm: 24, md: 12, lg: 8, xl: 6, xxl: 4 }
// 表单labelCol
const formItemLayout = {
    labelCol: {
        xs: {span: 4},
        sm: {span: 6},
        md: {span: 6},
        lg: {span: 8},
        xl: {span: 10},
        xxl: {span: 12}
    }
}
export default class FormDemo extends React.Component {
    constructor(props) {
        super(props)
    }

    onFinish = (values) => {
        console.log(values);
    };

    render() {
        // v3
        // const Demo = ({ form: { getFieldDecorator } }) => (
        //     <Form>
        //       <Form.Item>
        //         {getFieldDecorator('username', {
        //           rules: [{ required: true }],
        //         })(<Input />)}
        //       </Form.Item>
        //     </Form>
        // );
        // const WrappedDemo = Form.create()(Demo);
        
        return (
            <div>
                <Form {...formItemLayout} onFinish={this.onFinish}>
                    <Row>
                        <Col {...colLayout}>
                            <FormItem htmlFor={'<a>ss</a>'} name="age1" rules={[{
                                required: true, type: 'string', message: '年龄不能为空！'
                            }]}>
                                <Input placeholder="请输入"/>
                            </FormItem>
                        </Col>
                        <Col {...colLayout}>
                            <FormItem label="年龄" name="age2" rules={[{
                                required: true, type: 'string', message: '年龄不能为空！'
                            }]}>
                                <Input placeholder="请输入"/>
                            </FormItem>
                        </Col>
                        <Col {...colLayout}>
                            <FormItem label="年龄" name="age3" rules={[{
                                required: true, type: 'string', message: '年龄不能为空！'
                            }]}>
                                <Input placeholder="请输入"/>
                            </FormItem>
                        </Col>
                        <Col {...colLayout}>
                            <FormItem label="年龄" name="age4" rules={[{
                                required: true, type: 'string', message: '年龄不能为空！'
                            }]}>
                                <Input placeholder="请输入"/>
                            </FormItem>
                        </Col>
                        <Col {...colLayout}>
                            <FormItem label="年龄" name="age5" rules={[{
                                required: true, type: 'string', message: '年龄不能为空！'
                            }]}>
                                <Input placeholder="请输入"/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Button type="primary" htmlType="submit">提交</Button>
                </Form>
                <Form {...formItemLayout} onFinish={this.onFinish}>
                    <Row>
                        <Col {...colLayout}>
                            <FormItem label="用户" name="username1" rules={[{
                                required: true, type: 'string', message: '年龄不能为空！'
                            }]}>
                                <Input placeholder="请输入"/>
                            </FormItem>
                        </Col>
                        <Col {...colLayout}>
                            <FormItem label="用户" name="username2" rules={[{
                                required: true, type: 'string', message: '年龄不能为空！'
                            }]}>
                                <Input placeholder="请输入"/>
                            </FormItem>
                        </Col>
                    </Row>
                    <Button type="primary" htmlType="submit">提交</Button>
                </Form>
                <Menu/>
            </div>
        );
    }
}
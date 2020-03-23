import React from 'react'
import Menu from '../components/Menu'
import {Button, Table, Row, Col} from 'antd'

// 表格columns
const columns = [
    {dataIndex: 'name', title: '姓名', align: 'center', width: 200},
    {dataIndex: 'age', title: '年龄', align: 'center', width: 120},
    {dataIndex: 'address', title: '地址', align: 'center', width: 400},
    {title: '操作', fixed: 'right', align: 'center', width: 80, render(text, record, index) {
        return (<a>查看</a>)
    }},
];

export default class TableDemo extends React.Component {
    componentDidMount() {
        this.onSearch();
    }
    constructor(props) {
        super(props);
        this.state = {
            tableLoading: false,
            tableData: [],          // 表格数据
            selectedRowKeys: [],    // 表格勾选的key
            selectedRows: [],       // 表格勾选的数据
            // 分页属性
            pagination: {
                defaultCurrent: 1,
                defaultPageSize: 5,
                pageSizeOptions: ['5', '10', '15', '20'],
                total: 22,
                showQuickJumper: true,
                showSizeChanger: true,
                showTotal: (total, range) => {
                    return `${range[0]} - ${range[1]} 共 ${total} 条`
                },
                // onChange: (current, pageSize) => {
                //     this.onSearch(current, pageSize);
                // },
                // onShowSizeChange: (current, pageSize) => {
                //     this.onSearch(1, pageSize);
                // }
            }
        }
    }

    // 查询
    onSearch = (current=1, pageSize=5) => {
        this.setState({tableLoading: true});
        
        setTimeout(() => {
            let tableData = [];
            let start = (pageSize*(current-1))+1,
                end = start + pageSize;
            for (let i=start; i<end; i++) {
                tableData.push({id: i, name: 'a'+i, age: i*2, address: 'beijing'});
            }
            this.state.pagination.total = 55;
            this.state.tableData = tableData;
            this.setState({tableLoading: false});
        }, 500);
    }

    // 分页、排序等change
    onTableChange = (pagination, filters, sorter, extra) => {
        this.onSearch(pagination.current, pagination.pageSize);
    }

    // 勾选change
    onSelectChange = (selectedRowKeys, selectedRows) => {
        this.state.selectedRowKeys = selectedRowKeys;
        this.state.selectedRows = selectedRows;
    }

    // 获取勾选的
    getSelectData = () => {
        console.log(this.state.selectedRowKeys, this.state.selectedRows);
    }

    render() {
        const {tableLoading, tableData, pagination} = this.state;

        return (
            <div>
                <Table
                    bordered
                    loading={tableLoading}
                    rowKey="id"
                    rowSelection={{
                        fixed: 'left',
                        onChange: this.onSelectChange
                    }}
                    scroll={{x: true}}
                    columns={columns}
                    dataSource={tableData}
                    pagination={pagination}
                    onChange={this.onTableChange}
                />
                <Row>
                    <Col span={2}><Button type="danger" onClick={this.getSelectData}>获取选中</Button></Col>
                </Row>
                <Menu></Menu>
            </div>
        );
    }
}
import React, {Component} from 'react'
import {Layout, Menu, Icon, Table, Divider, Switch} from 'antd'
import {UserInfo} from './UserInfo'
import './index.less'
const {Header, Sider, Content} = Layout
type stateType = {
    collapsed: boolean
    list: Array<object> | undefined
}
const initialState: stateType = {
    collapsed: false,
    list: undefined
}
let dataSource: Array <any> = [
    {key: 1, name: '滴滴', age: 7},
    {key: 2, name: '小米', age: 9},
    {key: 3, name: '快手', age: 8},
    {key: 4, name: '阿里', age: 20},
    {key: 5, name: '美团', age: 8}
]
const columns: Array <object> = [
    {title: '名字', dataIndex: 'name', key: 'name'},
    {title: '年龄', dataIndex: 'age', key: 'age'},
    {title: '操作', key: 'operation', 
    render (...data:Array<any>){
       return (
        <div>
            {/*eslint-disable-next-line*/}
            <a href="javascript:void(0);" onClick={_ => {console.log('click');console.dir(data)}}>查看</a>
            <Divider type='vertical'/>
             {/*eslint-disable-next-line*/}
            <a href="javascript:void(0);">编辑</a>
        </div>
        )
    }},
    {title: '是否开启', key: 'disabled',
    render () {
        return (
            <div className='switch'>
               <Switch disabled={true} defaultChecked /> <br/>
               <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked/>
            </div>
        )
    }
    }
]

type State = Readonly <typeof initialState>
export default class MenuLayout extends Component {
    readonly state: State = initialState
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }
    componentDidMount () {
        this.setState({
            list: dataSource
        })
    }
    render () {
        return (
          <div className="content-wrapper">
              <UserInfo/>
              <Layout >
              <Sider style={{height: '50vh'}} trigger={null} collapsible collapsed={this.state.collapsed}>
                <div className="logo"></div>
                <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
                    <Menu.Item key='1'>
                        <Icon type='user'/>
                        <span>nav user</span>
                    </Menu.Item>
                    <Menu.Item key='2'>
                        <Icon type='video-camera'/>
                        <span>capture screen</span>
                    </Menu.Item>
                    <Menu.Item key='3'>
                        <Icon type='upload'/>
                        <span>upload</span>
                    </Menu.Item>
                </Menu>
              </Sider>
              <Header style={{background: '#fff', padding: 0}}>
                <Icon 
                className='trigger' 
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} 
                onClick={this.toggle}
                />
              </Header>
              <Content
              style={{
                  margin: '24px 16px',
                  padding: 24,
                  background: '#fff',
                  minHeight: '100vh'
              }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Perferendis quibusdam aperiam, at dolores rem velit, 
                id esse recusandae ratione eius dicta consectetur reprehenderit incidunt architecto ipsam, 
                illum maiores praesentium commodi.
                <Table dataSource={this.state.list} columns={columns}/>
              </Content>
          </Layout>
          </div> 
        )
    }

}
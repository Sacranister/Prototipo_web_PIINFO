import React, { Component } from 'react';
import { Layout, Menu, Card, Row, Col, Button, Tabs } from 'antd';
import 'antd/dist/antd.css';
import VistaPrincipal from './vistaPrincipal';
import AgendarCaro from './agendarCaro';
import { Collapse, Icon } from 'antd';
const { Header, Content, Footer } = Layout;
const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      papeo: true,
      agendarCaro: false,
    };
    this.callback = this.callback.bind(this);
    this.agendar = this.agendar.bind(this);
    this.cambiarAgendarCaro = this.cambiarAgendarCaro.bind(this);
  }

  callback(key) {
    console.log(key);
  }

  agendar(event){
    console.log("agendar");
    this.setState({
      papeo: false,
      agendarCaro: true,
    });
  }
  cambiarAgendarCaro(val){
    this.setState({
      papeo: false,
      agendarCaro: true,
    });

  }
  render() {
    const {papeo, agendarCaro} = this.state
    var caro = false
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px', float: 'right' }}
          >
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Horas Agendadas</Menu.Item>
            <Menu.Item key="3">Mensajes</Menu.Item>
            <Menu.Item key="4">Favoritos</Menu.Item>
            <Menu.Item key="5">Mi Cuenta</Menu.Item>

          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          {papeo && <VistaPrincipal cambiarAgendarCaro= {this.cambiarAgendarCaro}/>}
          {agendarCaro && <AgendarCaro />}
        </Content>
        <Footer style={{ textAlign: 'center' }}>

        </Footer>
      </Layout>
    );
  }
}

export default App;

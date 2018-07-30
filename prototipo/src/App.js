import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import { Layout, Menu, Card, Row, Col, Button, Tabs } from 'antd';
import 'antd/dist/antd.css';
import Home from './home';
import Agendar from './agendar';
import Cuenta from './cuenta';
import Favoritos from './favs';
import HorasAgendadas from './horasAgendadas';
import Mensajes from './mensajes';
import Peluquerias from './peluquerias';
import PeluqueriaSirena from './sirena';
import { Collapse, Icon } from 'antd';
const { Header, Content, Footer } = Layout;
const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;


class App extends Component {
  render() {
    return (
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              style={{ lineHeight: '64px', float: 'right' }}
            >
              <Menu.Item key="1">
                <Link to="/">
                  Home
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/horas">
                  Horas Agendadas
                </Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/peluquerias">
                  Peluquerias
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/mensajes">
                  Mensajes
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to='/favs'>
                  Favoritos
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/micuenta">
                  Mi Cuenta
                </Link>
              </Menu.Item>

            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Route exact path="/" component={Home}/>
            <Route path="/micuenta" component={Cuenta}/>
            <Route path="/favs" component={Favoritos}/>
            <Route path="/mensajes" component={Mensajes}/>
            <Route path="/peluquerias" component={Peluquerias}/>
            <Route path="/peluqueria/Sirena" component={PeluqueriaSirena} replace />
            <Route path="/horas" component={HorasAgendadas}/>
            <Route path="/peluqueria/Sirenas/Pamela/agendar" component={Agendar}/>
            <Route path="/peluqueria/Sirenas/Caro/agendar" component={Agendar}/>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            CoRed
          </Footer>
        </Layout>
    );
  }
}

export default App;

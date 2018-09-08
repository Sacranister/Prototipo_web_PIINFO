import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import { Layout, Menu, Card, Row, Col, Button, Tabs } from 'antd';
import 'antd/dist/antd.css';
import Home from './home';
import Usuariohome from './usuariohome';
import Adminhome from './adminhome';
import Agendar from './agendar';
import Cuenta from './cuenta';
import Favoritos from './favs';
import HorasAgendadas from './horasAgendadas';
import Mensajes from './mensajes';
import Peluquerias from './peluquerias';
import PeluqueriaSirena from './sirena';
import PeluqueriaBrunette from './brunette';
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

              <Menu.Item key="5">
                <Link to="/">
                  Cambiar
                </Link>
              </Menu.Item>

            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Route exact path="/" component={Home}/>
            <Route path="/usuario/home" component={Usuariohome}/>
            <Route path="/admin/home" component={Adminhome}/>
            <Route path="/usuario/micuenta" component={Cuenta}/>
            <Route path="/usuario/favs" component={Favoritos}/>
            <Route path="/usuario/mensajes" component={Mensajes}/>
            <Route path="/usuario/peluquerias" component={Peluquerias}/>
            <Route path="/usuario/peluqueria/Sirena" component={PeluqueriaSirena} replace />
            <Route path="/usuario/peluqueria/Brunette" component={PeluqueriaBrunette} replace />
            <Route path="/usuario/horas" component={HorasAgendadas}/>
            <Route path="/usuario/peluqueria/Sirenas/Pamela/agendar" component={Agendar}/>
            <Route path="/usuario/peluqueria/Sirenas/Caro/agendar" component={Agendar}/>
            <Route path="/usuario/peluqueria/Brunettes/Pamela/agendar" component={Agendar}/>
            <Route path="/usuario/peluqueria/Brunettes/Caro/agendar" component={Agendar}/>


          </Content>
          <Footer style={{ textAlign: 'center' }}>
            CoRed
          </Footer>
        </Layout>
    );
  }
}

export default App;

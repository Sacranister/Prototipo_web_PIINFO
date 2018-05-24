import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb,Card, Row, Col, Button, Tabs } from 'antd';
import 'antd/dist/antd.css';
import { Collapse, Icon } from 'antd';

const { Header, Content, Footer } = Layout;
const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;
function callback(key) {
  console.log(key);
}

function agendar(event){
  console.log("agendar");
}



class App extends Component {

  render() {
    const { Header, Content, Footer } = Layout
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
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
          <div>
            <Card title="Salón Pelo de Sirena" bordered={false} style={{ width: '100%' }}>
              <Row>
                <Col span={8}><img style={{ width: '100%' }} src="https://images.jumpseller.com/store/pelo-de-sirena/store/logo/Recurso_1.png?0" alt="Flowers in Chania" /></Col>
                <Col span={16} style={{ padding: '0 50px' }}>
                  <div >
                    <h3> Tienda en Providencia, Santiago, Chile. </h3>
                    <h3> Atendemos todo tipo de cabellos, teñidos y cortes. </h3>
                    <h3> Abierto:10:00 - 20:00 </h3>
                    <Button onClick={agendar}>Agendar</Button>
                  </div>
                </Col>
              </Row>
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Servicios" key="1">
                  <Collapse bordered={false}>
                    <Panel header="Decoloración" key="1">
                      Avisar previamente estado del cabello.
                    </Panel>
                    <Panel header="Teñidos" key="2">
                      Puedes traer tu propia tintura
                    </Panel>
                    <Panel header="Teñido de Fantasia" key="3">
                      Colores inesperados, atrevete !
                    </Panel>
                  </Collapse>
                </TabPane>

                <TabPane tab="Profesionales" key="2">
                  <Card style={{ width: '100%' }}>
                    <Row>
                      <Col span={16}>
                        <h3>Caro</h3>
                        <p>Experta en Colores Fantasia</p></Col>
                      <Col span={8}>
                        <img style={{ width: '100%' }} src="https://z-p3-scontent.faep12-1.fna.fbcdn.net/v/t1.0-9/14344863_1079948795433797_4463937148588593532_n.jpg?_nc_cat=0&oh=7fdc12716883fcd9e978315ade2f7f54&oe=5BC1E314" alt="Flowers in Chania" />

                        <div><Button style={{}}>Perfil</Button><Button style={{float: 'right'}}>Agendar</Button></div>

                      </Col>
                    </Row>

                  </Card>
                  <Card>
                    <Row>
                      <Col span={16}>
                        <h3>Pamela</h3>
                        <p>¿Quieres Realizarte un cambio?, Hazlo Conmigo!</p></Col>
                      <Col span={8}>
                        <img style={{ width: '100%' }} src="https://z-p3-scontent.faep12-1.fna.fbcdn.net/v/t1.0-9/13886472_1049212798507397_6365398063076238057_n.jpg?_nc_cat=0&oh=597fa8d49283691c8af9df20d18a8d66&oe=5BBF10CF" alt="Flowers in Chania" />

                        <div><Button style={{}}>Perfil</Button><Button style={{float: 'right'}}>Agendar</Button></div>

                      </Col>
                    </Row>

                  </Card>
                </TabPane>
                <TabPane tab="Ubicación" key="3">
                  <Card>
                    <Row>
                      <Col span={12}>

                      </Col>
                      <Col span={12}>
                        <h3>Dónde estamos</h3>
                        <h4>Calle Trinidad 125.</h4>
                        <h4>La Florida.</h4>
                        <h4>Santiago de Chile.</h4>
                        <Icon type="facebook" style={{ fontSize: 64, color: '#08c' }} /><Icon type="twitter" style={{ fontSize: 64, color: '#08c' }} />
                      </Col>
                    </Row>
                  </Card>
                </TabPane>
              </Tabs>
            </Card>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>

        </Footer>
      </Layout>
    );
  }
}

export default App;

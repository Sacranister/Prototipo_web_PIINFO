import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Layout, Menu, Card, Row, Col, Button, Tabs } from 'antd';
import 'antd/dist/antd.css';
import { Collapse, Icon } from 'antd';
const { Header, Content, Footer } = Layout;
const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;
export default class PeluqueriaBrunette extends Component{
  render(){
    return(
      <div>
        <Row>
          <Col span={4} style={{ height:'100%' }}>
            <Card title="Acciones" bordered={true} style={{ width: '100%', height:'100%' }}>
              <Link to="/usuario/home">
                Inicio
              </Link><br/>


              <Link to="/usuario/horas">
                Horas Agendadas
              </Link><br/>


              <Link to="/usuario/peluquerias">
                Peluquerias
              </Link><br/>

              <Link to="/usuario/mensajes">
                Mensajes
              </Link><br/>

              <Link to='/usuario/favs'>
                Favoritos
              </Link><br/>

            </Card>
          </Col>
          <Col span={20}>
            <Card title="Salón Brunette" bordered={false} style={{ width: '100%' }}>
              <Row>
                <Col span={8}><img style={{ width: '60%', display: 'block', 'margin-left': 'auto', 'margin-right': 'auto'}}
                              src="https://static.wixstatic.com/media/5a9216_cffc0dc8b725460b846391abe71f429d~mv2.jpg/v1/fill/w_223,h_71,al_c,q_80,usm_0.66_1.00_0.01/5a9216_cffc0dc8b725460b846391abe71f429d~mv2.webp" alt="Logo Brunette Estetica" /></Col>
                <Col span={16} style={{ padding: '0 50px' }}>
                  <div >
                    <h3> Tienda en Ñuñoa, Santiago, Chile. </h3>
                    <h3> Atendemos todo tipo de cabellos, teñidos y cortes. </h3>
                    <h3> Abierto:10:00 - 20:00 </h3>
                    <Button >Agendar</Button>
                  </div>
                </Col>
              </Row>
              <Tabs defaultActiveKey="1">
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

                        <div><Button style={{}}>Perfil</Button><Button onClick={this.agendar} style={{float: 'right'}}>
                          <Link to="/usuario/peluqueria/Brunettes/Caro/agendar">
                            Agendar
                          </Link>
                        </Button></div>

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

                        <div><Button style={{}}>Perfil</Button><Button style={{float: 'right'}}>
                          <Link to="/usuario/peluqueria/Brunettes/Pamela/agendar">
                            Agendar
                          </Link>
                        </Button></div>

                      </Col>
                    </Row>

                  </Card>
                </TabPane>
                <TabPane tab="Ubicación" key="3">
                  <Card>
                    <Row>
                      <Col span={12}>
                        <iframe width="100%" height="300" src="https://maps.google.com/maps?width=100%&height=600&hl=es&q=Vicu%C3%B1a%20Mackena%201048%2C%20%C3%91u%C3%B1oa%2C%20Santiago%2C%20Chile+(Peluqueria%20Brunette%20Est%C3%A9tica)&ie=UTF8&t=&z=16&iwloc=B&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.mapsdirections.info/crear-un-mapa-de-google/">Crear Google Map</a> by <a href="https://www.mapsdirections.info/">Mapa España</a></iframe>
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
          </Col>
        </Row>



      </div>
    );
  }
}

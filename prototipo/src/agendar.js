import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Button, Tabs, Modal, DatePicker } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
const TabPane = Tabs.TabPane;

export default class Agendar extends Component{
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render(){

    const dateFormat = 'DD/MM/YYYY';
    return(
      <div style={{ height:'100%' }}>
        <Row style={{ height:'100%' }}>
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
          <Col span={20} style={{height:'100%'}}>

            <Card title="Servicios entregados" bordered={false} style={{ width: '100%', height:'100%' }}>
              <Row>
                <Col span={8}><img style={{ width: '100%' }} src="https://www.mujerde10.com/wp-content/uploads/2016/12/nombres-de-tecnicas-y-tintes-para-cabello.jpg" alt="Servicios tinturas" /></Col>
                <Col span={16} style={{ padding: '0 50px' }}>
                  <div >
                    <h3>   </h3>
                    En la peluqueria puedes encontrar todos estos servicios disponibles para ti!
                  </div>
                </Col>
              </Row>
              <Tabs defaultActiveKey="1">
                <TabPane tab="Decoloración" key="1">
                  <Card style={{ width: '100%', height:'42%' }}>
                    <Row>
                      <Col span={16}>
                        <h3>Decoloración 1</h3>
                        <p>Decoloración global para teñido colores fantasía, es necesario evaluar previamente el estado de tu pelo.</p></Col>
                      <Col span={8}>
                        <img style={{ width: '100%' }} src="http://media.biobiochile.cl/wp-content/uploads/2016/05/hairstyles.jpg" alt="Flowers in Chania" />
                        <div><Button type="primary" style={{float: 'right'}} onClick={this.showModal}>Reservar</Button></div>
                      </Col>
                    </Row>
                  </Card>
                  <Card style={{ width: '100%', height:'42' }}>
                    <Row>
                      <Col span={16}>
                        <h3>Decoloración 2</h3>
                        <p>Decoloración parcial, mechas, visos, babylights, etc.</p></Col>
                      <Col span={8}>
                        <img style={{ width: '100%' }} src="http://media.biobiochile.cl/wp-content/uploads/2016/05/hairstyles.jpg" alt="Flowers in Chania" />
                        <div><Button type="primary" style={{float: 'right'}} onClick={this.showModal}>Reservar</Button></div>
                      </Col>
                    </Row>
                  </Card>
                </TabPane>

                <TabPane tab="Coloración" key="2" style={{height:'100%'}}>
                  <Card style={{ width: '100%' }}>
                    <Row>
                      <Col span={16}>
                        <h3>Coloración 1</h3>
                        <p>Coloración tonos fantasía clásicos, tipos de rojos. </p></Col>
                      <Col span={8}>
                        <img style={{ width: '100%' }} src="https://static1.jeanlouisdavid.com.es/articles/0/99/0/@/422-cheveux-colores-article_full-1.jpg" alt="Flowers in Chania" />
                        <div><Button type="primary" style={{float: 'right'}} onClick={this.showModal}>Reservar</Button></div>
                      </Col>
                    </Row>
                  </Card>
                  <Card style={{ width: '100%'}}>
                    <Row style={{ width: '100%', height:'50%' }}>
                      <Col span={16}>
                        <h3>Coloración 2</h3>
                        <p>Coloración tonos clásicos. Cafés, negros, rubios.</p></Col>
                      <Col span={8}>
                        <img style={{ width: '100%' }} src="https://static1.jeanlouisdavid.com.es/articles/0/99/0/@/422-cheveux-colores-article_full-1.jpg" alt="Flowers in Chania" />
                        <div><Button type="primary" style={{float: 'right'}} onClick={this.showModal}>Reservar</Button></div>
                      </Col>
                    </Row>
                  </Card>
                </TabPane>
                <TabPane tab="Coloración de Fantasia" key="3">
                  <Card style={{ width: '100%' }}>
                    <Row>
                      <Col span={16}>
                        <h3>Coloración tonos fantasia 1</h3>
                        <p>¿Quieres un look atrevido? Prueba con nuestra carta de colores de fantasía no tradicionales, morados, azules, grises, verdes, lo que quieras! </p></Col>
                      <Col span={8}>
                        <img style={{ width: '100%' }} src="https://thumbs.dreamstime.com/b/paleta-de-colores-del-pelo-colores-te%C3%B1idos-del-pelo-71827125.jpg" alt="Flowers in Chania" />
                        <div><Button type="primary" style={{float: 'right'}} onClick={this.showModal}>Reservar</Button></div>
                      </Col>
                    </Row>
                  </Card>

                </TabPane>
              </Tabs>
            </Card>
          </Col>
        </Row>

        <Modal
          style={{ width: '100%' }}
          title="Reservar"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Row>
            <Col span={8}><h3>Fecha</h3></Col>
            <Col span={8}></Col>
            <Col span={8}></Col>
          </Row>
          <DatePicker defaultValue={moment('30/07/2018', dateFormat)} format={dateFormat} />
          <p>
            <Row>
              <Col span={8}><h3>Hora</h3></Col>
              <Col span={8}><h3>Precio</h3></Col>
              <Col span={8}></Col>
            </Row>
            <Row>
              <Col span={8}>11:00</Col>
              <Col span={8}>$20.000</Col>
              <Col span={8}><Button type="primary">Reservar</Button></Col>
            </Row>
          </p>
          <p>
            <Row>
              <Col span={8}>12:00</Col>
              <Col span={8}>$20.000</Col>
              <Col span={8}><Button type="primary">Reservar</Button></Col>
            </Row>
          </p>
          <p>
            <Row>
              <Col span={8}>13:00</Col>
              <Col span={8}>$20.000</Col>
              <Col span={8}><Button type="primary">Reservar</Button></Col>
            </Row>
          </p>
          <p>
            <Row>
              <Col span={8}>14:00</Col>
              <Col span={8}>$20.000</Col>
              <Col span={8}><Button type="primary">Reservar</Button></Col>
            </Row>
          </p>
        </Modal>
      </div>
    );
  }
}

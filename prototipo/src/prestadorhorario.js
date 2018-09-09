import React, { Component } from 'react';
import { Card, Row, Col,  Modal } from 'antd';
import { Link } from 'react-router-dom';
import { Calendar } from 'antd';




function onPanelChange(value, mode) {
  console.log(value, mode);
}

export default class Prestadorhorario extends Component{
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
    return(
      <div>
        <Row>
          <Col span={4} style={{ height:'100%' }}>
            <Card title="Acciones" bordered={true} style={{ width: '100%', height:'100%' }}>
              <Link to="/prestador/perfil">
                Perfil
              </Link><br/>

              <Link to="/prestador/horario">
                Ver Horario
              </Link><br/>


            </Card>
          </Col>
          <Col span={20}>
            <Card title="Mi Horario" bordered={false} style={{ width: '100%' }}>

              <Calendar onSelect={this.showModal}  fullscreen={false} onPanelChange={onPanelChange} />
            </Card>
          </Col>
        </Row>
        <Modal
          style={{ width: '100%' }}
          title="Horario"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Row>
            <Col span={8}><h3></h3></Col>
            <Col span={8}></Col>
            <Col span={8}></Col>
          </Row>
          <p>
            <Row>
              <Col span={8}><h3>Hora</h3></Col>
              <Col span={8}><h3>Cliente</h3></Col>
              <Col span={8}><h3>Servicio</h3></Col>
            </Row>
            <Row>
              <Col span={8}>11:00</Col>
              <Col span={8}>Javiera Torres</Col>
              <Col span={8}>Corte de Pelo</Col>
            </Row>
          </p>
          <p>
            <Row>
              <Col span={8}>12:00</Col>
              <Col span={8}>Javiera Saez</Col>
              <Col span={8}>Tintura</Col>
            </Row>
          </p>

        </Modal>
      </div>
    );
  }
}

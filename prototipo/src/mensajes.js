import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
export default class Mensajes extends Component{
  render(){
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
          <Col span={20} style={{ height:'100%' }}>
            <Card title="Mensaje Recibidos" bordered={false} style={{ width: '100%', height:'100%' }}>
              <Card>No tienes mensajes</Card>
            </Card>
          </Col>
        </Row>



      </div>
    );
  }
}

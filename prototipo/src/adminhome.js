import React, { Component } from 'react';
import { Card, Icon, Row, Col, Button } from 'antd';
import { Route, Link } from 'react-router-dom';
export default class Usuariohome extends Component{
  render(){
    return(
      <div>
        <Row>
          <Col span={4} style={{ height:'100%' }}>
            <Card title="Acciones" bordered={true} style={{ width: '100%', height:'100%' }}>
              <Link to="/admin/home">
                Inicio
              </Link><br/>

              <Link to="/admin/perfil">
                Perfil
              </Link><br/>


              <Link to="/admin/prestadores">
                Prestadores
              </Link><br/>

              <Link to='/'>
                Salir
              </Link><br/>

            </Card>
          </Col>
          <Col span={20}>
            <Card title="Inicio" bordered={false} style={{ width: '100%' }}>
              Bienvenido
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

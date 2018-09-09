import React, { Component } from 'react';
import { Card, Row, Col} from 'antd';
import { Link } from 'react-router-dom';
export default class Adminhome extends Component{
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
              <Link to="/admin/locales">
                Locales
              </Link><br/>


              <Link to="/admin/Estadisticas">
                Estadisticas
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

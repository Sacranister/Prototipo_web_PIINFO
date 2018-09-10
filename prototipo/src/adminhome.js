import React, { Component } from 'react';
import { Card, Row, Col} from 'antd';
import { Link } from 'react-router-dom';
export default class Adminhome extends Component{
  render(){
    return(
      <div style={{ height:'100%' }}>
        <Row style={{ height:'100%' }}>
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
                Estadísticas
              </Link><br/>

              <Link to='/'>
                Salir
              </Link><br/>

            </Card>
          </Col>
          <Col span={20} style={{ height:'100%' }}>
            <Card title="Inicio" bordered={false} style={{ width: '100%', height:'100%' }}>
              ¡Bienvenido Usuario!
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

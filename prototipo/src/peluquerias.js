import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Card, Icon, Row, Col, Button } from 'antd';
export default class Peluquerias extends Component{
  render(){
    return(
      <div>
        <h1>peluquerias</h1>
        <div style={{ padding: '30px' }}>
          <Card style={{ width: '100%' }}>
            <Row>
              <Col span={16}>
                <h3>Pelo de Sirena</h3>
                <p>Experto en Colores Fantasia</p></Col>
              <Col span={8}>
                <img style={{ width: '60%', display: 'block', 'margin-left': 'auto', 'margin-right': 'auto'}}
                src="https://images.jumpseller.com/store/pelo-de-sirena/store/logo/Recurso_1.png?0" alt="Logo Pelo de Sirena" />
                <div>
                  <Icon type="credit-card" />
                  <Icon type="link" />
                  <Icon type="link" />
                  <Button onClick={this.agendar} style={{float: 'right'}}>
                    <Link to="/peluqueria/Sirena">
                      Perfil
                    </Link>
                  </Button>
                </div>
              </Col>
            </Row>
          </Card>
          <Card style={{ width: '100%', 'margin-top': '10px' }}>
            <Row>
              <Col span={16}>
                <h3>Brunette Estética</h3>
                <p>blablabla :v :v :v</p></Col>
              <Col span={8}>
                <img style={{ width: '60%', display: 'block', 'margin-left': 'auto', 'margin-right': 'auto'}}
                src="https://static.wixstatic.com/media/5a9216_cffc0dc8b725460b846391abe71f429d~mv2.jpg/v1/fill/w_223,h_71,al_c,q_80,usm_0.66_1.00_0.01/5a9216_cffc0dc8b725460b846391abe71f429d~mv2.webp" alt="Logo Brunette Estetica" />
                <div>
                  <Icon type="credit-card" />
                  <Icon type="link" />
                  <Icon type="link" />
                  <Button onClick={this.agendar} style={{float: 'right'}}>
                    <Link to="/peluqueria/Brunette">
                      Perfil
                    </Link></Button></div>
              </Col>
            </Row>
          </Card>
        </div>

        <Link to="/peluquerias/Brunette">
          Peluqueria Brunette
        </Link>
      </div>
    );
  }
}

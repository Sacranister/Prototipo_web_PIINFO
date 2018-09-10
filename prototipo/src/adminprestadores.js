import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { BarChart, LineChart } from 'react-d3-components';
export default class Adminprestadores extends Component{
  render(){
    var data = [{
      label: 'somethingA',
      values: [{x: 'Caro', y: 100}, {x: 'Pamela', y: 89}]
    }];
    var data1 = [
    {
    label: 'somethingA',
    values: [{x: 1, y: 2}, {x: 2, y: 5}, {x: 3, y: 6}, {x: 4, y: 6.5}, {x: 5, y: 6}, {x: 6, y: 6},
      {x: 7, y: 7}, {x: 8, y: 8},{x: 9, y: 7}, {x: 10, y: 8},{x: 11, y: 7}, {x: 12, y: 8}]
    },
    {
    label: 'somethingB',
    values: [{x: 1, y: 3}, {x: 2, y: 4}, {x: 3, y: 7}, {x: 4, y: 8},
              {x: 5, y: 7}, {x: 6, y: 7}, {x: 7, y: 7.8}, {x: 8, y: 9},
              {x: 9, y: 7}, {x: 10, y: 7}, {x: 11, y: 7.8}, {x: 12, y: 9}
            ]
    }
];
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
                Estadisticas
              </Link><br/>

              <Link to='/'>
                Salir
              </Link><br/>

            </Card>
          </Col>
          <Col span={20} style={{ height:'100%' }}>
            <Card title="Estadisticas" bordered={false} style={{ width: '100%', height:'100%' }}>
              <Col span={12} style={{width:'50%', height:'100%' }}>
                <h1>Servicios Mes de Mayo por Prestador</h1>
                <BarChart
                  data={data}
                  width={400}
                  height={400}
                  margin={{top: 10, bottom: 10, left: 10, right: 10}}
                  style={{ width: '100%', height:'100%' }}
                />
              </Col>
              <Col span={12} style={{ width:'50%', height:'100%' }}>
                <h1>Servicios por mes 2017</h1>
                <LineChart
                  data={data1}
                  width={400}
                  height={400}
                  margin={{top: 100, bottom: 10, left: 10, right: 10}}
                  style={{ width: '100%', height:'100%' }}
                />
              </Col>
              </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

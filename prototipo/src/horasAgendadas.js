import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { Table } from 'antd';


const dataSource = [{
key: '1',
numero: 1,
peluqueria: 'Peluqueria sirena',
servicio: 'Corte de pelo',
fecha: '05/05/2018',
hora: '10:30',
estado: 'Realizado'
}, {
key: '2',
numero: 2,
peluqueria: 'Peluqueria Brunnete Estética',
servicio: 'Tintura',
fecha: '05/06/2018',
hora: '17:00',
estado: 'Realizado'
}];

const columns = [{
title: '#',
dataIndex: 'numero',
key: 'numero',
},{
title: 'Peluqueria',
dataIndex: 'peluqueria',
key: 'peluqueria',
},{
title: 'Servicio',
dataIndex: 'servicio',
key: 'servicio',
},{
title: 'Fecha',
dataIndex: 'fecha',
key: 'fecha',
}, {
title: 'Hora',
dataIndex: 'hora',
key: 'hora',
}, {
title: 'Estado',
dataIndex: 'estado',
key: 'estado',
}];

export default class HorasAgendadas extends Component{
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
            <Card title="Horas Agendadas" bordered={false} style={{ width: '100%', height:'100%' }}>
              <Table dataSource={dataSource} columns={columns} />
            </Card>
          </Col>
        </Row>

        </div>
        );
  }
}

import React, { Component } from 'react';
import { Card, Row, Col} from 'antd';
import { Link } from 'react-router-dom';
export default class Prestadorperfil extends Component{
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
            <Card title="Mi Perfil" bordered={false} style={{ width: '100%' }}>
              <Row>
                <Col span={24}>
                  <Card title='Fotos'>
                    <img style={{ width: '100%' }} src="https://www.mujerde10.com/wp-content/uploads/2016/12/nombres-de-tecnicas-y-tintes-para-cabello.jpg" alt="Servicios tinturas" />
                    <img style={{ width: '20%','margin-left':'10px', 'margin-top':'10px' }} src="https://www.mujerde10.com/wp-content/uploads/2016/12/nombres-de-tecnicas-y-tintes-para-cabello.jpg" alt="Servicios tinturas" />
                    <img style={{ width: '20%','margin-left':'10px', 'margin-top':'10px' }} src="https://www.mujerde10.com/wp-content/uploads/2016/12/nombres-de-tecnicas-y-tintes-para-cabello.jpg" alt="Servicios tinturas" />
                    <img style={{ width: '20%','margin-left':'10px', 'margin-top':'10px' }} src="https://www.mujerde10.com/wp-content/uploads/2016/12/nombres-de-tecnicas-y-tintes-para-cabello.jpg" alt="Servicios tinturas" />
                    <img style={{ width: '20%','margin-left':'10px', 'margin-top':'10px' }} src="https://www.mujerde10.com/wp-content/uploads/2016/12/nombres-de-tecnicas-y-tintes-para-cabello.jpg" alt="Servicios tinturas" />
                    <img style={{ width: '10%','margin-left':'10px', 'margin-top':'10px' }} src="https://static.thenounproject.com/png/592841-200.png" alt="Servicios tinturas" />

                  </Card>
                </Col>
                <Col span={0}>
                  <Row><a>+ Agregar Foto</a></Row>
                  <Row><img style={{ width: '50%', 'margin-bottom':'10px','margin-left':'10px' }} src="https://www.mujerde10.com/wp-content/uploads/2016/12/nombres-de-tecnicas-y-tintes-para-cabello.jpg" alt="Servicios tinturas" /></Row>
                  <Row><img style={{ width: '50%','margin-left':'10px' }} src="https://www.mujerde10.com/wp-content/uploads/2016/12/nombres-de-tecnicas-y-tintes-para-cabello.jpg" alt="Servicios tinturas" /></Row>

                </Col>
              </Row>
              <Row>
                <Col span={16}>
                  <Card title='Comentarios'>

                  </Card>
                </Col>
                <Col span={8}>

                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

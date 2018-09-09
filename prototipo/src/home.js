import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Modal} from 'antd';
import 'antd/dist/antd.css';

export default class Home extends Component{
  state = { visible: true }
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
      <div><Modal
        style={{ width: '100%' }}
        title="Que deseas ver:"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
           >
        <p>
          <Row>
            <Col span={8}><Button type="primary"><Link to="/admin/home">
              Administradores de Local
            </Link>
            </Button></Col>
          </Row>
        </p>
        <p>
          <Row>
            <Col span={8}><Button type="primary"><Link to="/prestador/perfil">
              Prestadores de Servicios
            </Link>
            </Button></Col>
          </Row>
        </p>
        <p>
          <Row>
            <Col span={8}><Button type="primary"><Link to="/usuario/home">
              Usuarios
            </Link>
            </Button>
            </Col>
          </Row>
        </p>
      </Modal>
      </div>
    );
  }
}

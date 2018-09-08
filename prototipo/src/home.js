import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Layout, Menu, Card, Row, Col, Button, Tabs, Modal, DatePicker } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import { Collapse, Icon } from 'antd';
const { Header, Content, Footer } = Layout;
const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;
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
            <Col span={8}><Button type="primary"><Link to="/prestadores/home">
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

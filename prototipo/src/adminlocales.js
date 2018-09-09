import React, { Component } from 'react';
import { Card, Icon, Row, Col, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';
import { Form, Select, Input } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
export default class Adminlocales extends Component{
  state = { visible1: false,
            visible2:false,
            visible3: false,
            visible4: false,
            visible5: false,
            visible6: false,
            visible7: false,
            visible8: false,
            visible9: false,
            visible10: false,
            visible11: false,
            visible12: false,
            visible13: false,
          }
  showModal = () => {
    this.setState({
      visible1: true,
    });
  }
  showModal2 = () => {
    this.setState({
      visible2: true,
    });
  }
  showModal3 = () => {
    this.setState({
      visible3: true,
    });
  }
  showModal4 = () => {
    this.setState({
      visible4: true,
    });
  }
  showModal5 = () => {
    this.setState({
      visible5: true,
    });
  }
  showModal6 = () => {
    this.setState({
      visible6: true,
    });
  }
  showModal7 = () => {
    this.setState({
      visible7: true,
    });
  }
  showModal8 = () => {
    this.setState({
      visible8: true,
    });
  }
  showModal9 = () => {
    this.setState({
      visible9: true,
    });
  }
  showModal10 = () => {
    this.setState({
      visible10: true,
    });
  }
  showModal11 = () => {
    this.setState({
      visible11: true,
    });
  }
  showModal12 = () => {
    this.setState({
      visible12: true,
    });
  }
  showModal13 = () => {
    this.setState({
      visible13: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible1: false,
    });
  }
  handleOk2 = (e) => {
    console.log(e);
    this.setState({
      visible2: false,
    });
  }
  handleOk3 = (e) => {
    console.log(e);
    this.setState({
      visible3: false,
    });
  }
  handleOk4 = (e) => {
    console.log(e);
    this.setState({
      visible4: false,
    });
  }
  handleOk5 = (e) => {
    console.log(e);
    this.setState({
      visible5: false,
    });
  }
  handleOk6 = (e) => {
    console.log(e);
    this.setState({
      visible6: false,
    });
  }
  handleOk7 = (e) => {
    console.log(e);
    this.setState({
      visible7: false,
    });
  }
  handleOk8 = (e) => {
    console.log(e);
    this.setState({
      visible8: false,
    });
  }
  handleOk9 = (e) => {
    console.log(e);
    this.setState({
      visible9: false,
    });
  }
  handleOk10 = (e) => {
    console.log(e);
    this.setState({
      visible10: false,
    });
  }
  handleOk11 = (e) => {
    console.log(e);
    this.setState({
      visible11: false,
    });
  }
  handleOk12 = (e) => {
    console.log(e);
    this.setState({
      visible12: false,
    });
  }
  handleOk13 = (e) => {
    console.log(e);
    this.setState({
      visible13: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible1: false,
    });
  }
  handleCancel2 = (e) => {
    console.log(e);
    this.setState({
      visible2: false,
    });
  }
  handleCancel3 = (e) => {
    console.log(e);
    this.setState({
      visible3: false,
    });
  }
  handleCancel4 = (e) => {
    console.log(e);
    this.setState({
      visible4: false,
    });
  }
  handleCancel5 = (e) => {
    console.log(e);
    this.setState({
      visible5: false,
    });
  }
  handleCancel6 = (e) => {
    console.log(e);
    this.setState({
      visible6: false,
    });
  }
  handleCancel7 = (e) => {
    console.log(e);
    this.setState({
      visible7: false,
    });
  }
  handleCancel8 = (e) => {
    console.log(e);
    this.setState({
      visible8: false,
    });
  }
  handleCancel9 = (e) => {
    console.log(e);
    this.setState({
      visible9: false,
    });
  }
  handleCancel10 = (e) => {
    console.log(e);
    this.setState({
      visible10: false,
    });
  }
  handleCancel11 = (e) => {
    console.log(e);
    this.setState({
      visible11: false,
    });
  }
  handleCancel12 = (e) => {
    console.log(e);
    this.setState({
      visible12: false,
    });
  }
  handleCancel13 = (e) => {
    console.log(e);
    this.setState({
      visible13: false,
    });
  }
  confirmar = (e) => {
    Modal.confirm({
      title: 'Eliminar Elemento',
      content: '¿Seguro deseas eliminar este elemento?',
    });
  }



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
            <Card title="Locales" style={{padding: '0%'}}>
              <Row >
                <Col span={8}>
                  <img style={{ width: '100%' }}
                    src="data:image/png;base64,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"
                    alt="Flowers in Chania"
                  />
                  <Button type="primary" style={{float: 'center'}} >Cargar Imagen</Button>
                </Col>
                <Col span={16}>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                  <Button type="primary" style={{float: 'center'}} >Editar Descripción</Button>
                </Col>
              </Row>
              <Row>
                <Card title="Opciones" style={{'margin-top':'10px'}} >
                  <Col span={8}>
                    <strong>Prestadores</strong><br/>
                    <a onClick={this.showModal7}>Ver Prestadores</a><br/>
                    <a onClick={this.showModal}>Agregar Prestador</a><br/>

                  </Col>
                  <Col span={8}>
                    <strong>Herramientas</strong><br/>
                    <a onClick={this.showModal8}>Ver Herramientas</a><br/>
                    <a onClick={this.showModal4}>Agregar Herramienta</a><br/>
                  </Col>
                  <Col span={8}>
                    <strong>Local</strong><br/>
                    <a onClick={this.showModal10}>Ver Servicios</a><br/>
                    <a onClick={this.showModal11}>Agregar Servicio</a><br/>
                  </Col>
                </Card>
              </Row>
            </Card>
          </Col>
        </Row>
        <Modal
          style={{ width: '100%' }}
          title="Agregar Prestador"
          visible={this.state.visible1}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form >
            <FormItem
              label="Nombre"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Apellido"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Rut"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Gender"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >

              <Select
                placeholder="Select a option and change input text above"
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
              </Select>

            </FormItem>
            <FormItem
              wrapperCol={{ span: 12, offset: 5 }}
            >

            </FormItem>
          </Form>
        </Modal>
        <Modal
          style={{ width: '100%' }}
          title="Editar Prestador"
          visible={this.state.visible2}
          onOk={this.handleOk2}
          onCancel={this.handleCancel2}
        >
          <Form >
            <FormItem
              label="Nombre"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Apellido"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Rut"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Gender"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >

              <Select
                placeholder="Select a option and change input text above"
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
              </Select>

            </FormItem>
            <FormItem
              wrapperCol={{ span: 12, offset: 5 }}
            >

            </FormItem>
          </Form>
        </Modal>
        <Modal
          style={{ width: '100%' }}
          title="Eliminar Prestador"
          visible={this.state.visible3}
          onOk={this.handleOk3}
          onCancel={this.handleCancel3}
        >
          <Form >
            <FormItem
              label="Nombre"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Apellido"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Rut"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Gender"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >

              <Select
                placeholder="Select a option and change input text above"
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
              </Select>

            </FormItem>
            <FormItem
              wrapperCol={{ span: 12, offset: 5 }}
            >

            </FormItem>
          </Form>
        </Modal>

        <Modal
          style={{ width: '100%' }}
          title="Agregar Herramienta"
          visible={this.state.visible4}
          onOk={this.handleOk4}
          onCancel={this.handleCancel4}
        >
          <Form >
            <FormItem
              label="Nombre"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Apellido"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Rut"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Gender"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >

              <Select
                placeholder="Select a option and change input text above"
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
              </Select>

            </FormItem>
            <FormItem
              wrapperCol={{ span: 12, offset: 5 }}
            >

            </FormItem>
          </Form>
        </Modal>
        <Modal
          style={{ width: '100%' }}
          title="Editar Herramienta"
          visible={this.state.visible5}
          onOk={this.handleOk5}
          onCancel={this.handleCancel5}
        >
          <Form >
            <FormItem
              label="Nombre"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Apellido"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Rut"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Gender"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >

              <Select
                placeholder="Select a option and change input text above"
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
              </Select>

            </FormItem>
            <FormItem
              wrapperCol={{ span: 12, offset: 5 }}
            >

            </FormItem>
          </Form>
        </Modal>
        <Modal
          style={{ width: '100%' }}
          title="Eliminar Herramienta"
          visible={this.state.visible6}
          onOk={this.handleOk6}
          onCancel={this.handleCancel6}
        >
          <Form >
            <FormItem
              label="Nombre"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Apellido"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Rut"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Gender"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >

              <Select
                placeholder="Select a option and change input text above"
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
              </Select>

            </FormItem>
            <FormItem
              wrapperCol={{ span: 12, offset: 5 }}
            >

            </FormItem>
          </Form>
        </Modal>

        <Modal
          style={{ width: '100%' }}
          title="Prestadores Vinculados"
          visible={this.state.visible7}
          onOk={this.handleOk7}
          onCancel={this.handleCancel7}
        >
          <Card>
            <Row>
              <Col span={8}>
                Caro
              </Col>
              <Col span={16}>
                descripción
                <Button type="danger" style={{float: 'right', 'margin-left':'3px'}} onClick={this.confirmar}><Icon type="delete" theme="outlined" /></Button>
                <Button type="primary" style={{float: 'right', 'margin-left':'3px'}} onClick={this.showModal2}><Icon type="edit" theme="outlined" /></Button>
                <Button type="primary" style={{float: 'right', 'margin-left':'3px'}} onClick={this.showModal9}><Icon type="file" theme="outlined" /></Button>
                <Button type="primary" style={{float: 'right'}} ><Icon type="user" theme="outlined" /></Button>

              </Col>
            </Row>
          </Card>
          <Card>
            <Row>
              <Col span={8}>
                Pamela
              </Col>
              <Col span={16}>
                descripción
                <Button type="danger" style={{float: 'right', 'margin-left':'3px'}} onClick={this.confirmar}><Icon type="delete" theme="outlined" /></Button>
                <Button type="primary" style={{float: 'right', 'margin-left':'3px'}} onClick={this.showModal2}><Icon type="edit" theme="outlined" /></Button>
                <Button type="primary" style={{float: 'right', 'margin-left':'3px'}} onClick={this.showModal9}><Icon type="file" theme="outlined" /></Button>
                <Button type="primary" style={{float: 'right'}} ><Icon type="user" theme="outlined" /></Button>


              </Col>
            </Row>
          </Card>
        </Modal>

        <Modal
          style={{ width: '100%' }}
          title="Ver Herramientas"
          visible={this.state.visible8}
          onOk={this.handleOk8}
          onCancel={this.handleCancel8}
        >
          <Card>
            <Row>
              <Col span={8}>
                Navaja
              </Col>
              <Col span={16}>
                descripción
                <Button type="danger" style={{float: 'right', 'margin-left':'3px'}} onClick={this.confirmar}><Icon type="delete" theme="outlined" /></Button>
                <Button type="primary" style={{float: 'right', 'margin-left':'3px'}} onClick={this.showModal5}><Icon type="edit" theme="outlined" /></Button>

              </Col>
            </Row>
          </Card>
          <Card>
            <Row>
              <Col span={8}>
                Tijera
              </Col>
              <Col span={16}>
                descripción
                <Button type="danger" style={{float: 'right', 'margin-left':'3px'}} onClick={this.confirmar}><Icon type="delete" theme="outlined" /></Button>
                <Button type="primary" style={{float: 'right', 'margin-left':'3px'}} onClick={this.showModal5}><Icon type="edit" theme="outlined" /></Button>

              </Col>
            </Row>
          </Card>
        </Modal>

        <Modal
          style={{ width: '100%' }}
          title="Contrato"
          visible={this.state.visible9}
          onOk={this.handleOk9}
          onCancel={this.handleCancel9}
        >
          <Card>
            <Form >
              <FormItem
                label="Nombre"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 12 }}
              >
                <Input />
              </FormItem>
              <FormItem
                label="Apellido"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 12 }}
              >
                <Input />
              </FormItem>
              <FormItem
                label="Rut"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 12 }}
              >
                <Input />
              </FormItem>
              <FormItem
                label="Gender"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 12 }}
              >

                <Select
                  placeholder="Select a option and change input text above"
                >
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                </Select>

              </FormItem>
              <FormItem
                wrapperCol={{ span: 12, offset: 5 }}
              >

              </FormItem>
            </Form>
          </Card>
        </Modal>

        <Modal
          style={{ width: '100%' }}
          title="Ver Servicio"
          visible={this.state.visible10}
          onOk={this.handleOk10}
          onCancel={this.handleCancel10}
        >
          <Card>
            <Row>
              <Col span={8}>
                Tintura
              </Col>
              <Col span={16}>
                descripción
                <Button type="danger" style={{float: 'right', 'margin-left':'3px'}} onClick={this.confirmar}><Icon type="delete" theme="outlined" /></Button>
                <Button type="primary" style={{float: 'right', 'margin-left':'3px'}} onClick={this.showModal5}><Icon type="edit" theme="outlined" /></Button>

              </Col>
            </Row>
          </Card>
          <Card>
            <Row>
              <Col span={8}>
                Corte de pelo
              </Col>
              <Col span={16}>
                descripción
                <Button type="danger" style={{float: 'right', 'margin-left':'3px'}} onClick={this.confirmar}><Icon type="delete" theme="outlined" /></Button>
                <Button type="primary" style={{float: 'right', 'margin-left':'3px'}} onClick={this.showModal5}><Icon type="edit" theme="outlined" /></Button>

              </Col>
            </Row>
          </Card>
        </Modal>

        <Modal
          style={{ width: '100%' }}
          title="Agregar Servicio"
          visible={this.state.visible11}
          onOk={this.handleOk11}
          onCancel={this.handleCancel11}
        >
          <Form >
            <FormItem
              label="Nombre"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Apellido"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Rut"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Gender"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >

              <Select
                placeholder="Select a option and change input text above"
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
              </Select>

            </FormItem>
            <FormItem
              wrapperCol={{ span: 12, offset: 5 }}
            >

            </FormItem>
          </Form>
        </Modal>
        <Modal
          style={{ width: '100%' }}
          title="Editar Servicio"
          visible={this.state.visible12}
          onOk={this.handleOk12}
          onCancel={this.handleCancel12}
        >
          <Form >
            <FormItem
              label="Nombre"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Apellido"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Rut"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Gender"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >

              <Select
                placeholder="Select a option and change input text above"
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
              </Select>

            </FormItem>
            <FormItem
              wrapperCol={{ span: 12, offset: 5 }}
            >

            </FormItem>
          </Form>
        </Modal>

        <Modal
          style={{ width: '100%' }}
          title="Eliminar Servicio"
          visible={this.state.visible13}
          onOk={this.handleOk13}
          onCancel={this.handleCancel13}
        >
          <Form >
            <FormItem
              label="Nombre"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Apellido"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Rut"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Gender"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >

              <Select
                placeholder="Select a option and change input text above"
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
              </Select>

            </FormItem>
            <FormItem
              wrapperCol={{ span: 12, offset: 5 }}
            >

            </FormItem>
          </Form>
        </Modal>

      </div>
    );
  }
}

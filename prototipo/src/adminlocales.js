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
            <Card title="Locales" style={{padding: '0%', height:'100%'}}>
              <Row >
                <Col span={8}>
                  <img style={{ width: '80%' }} src="https://images.jumpseller.com/store/pelo-de-sirena/store/logo/Recurso_1.png?0" alt="Flowers in Chania" />
                  <Button type="primary" style={{float: 'center'}} >Cargar Imagen</Button>
                </Col>
                <Col span={16}>
                  <div >
                    <h3> Tienda en Providencia, Santiago, Chile. </h3>
                    <h3> Atendemos todo tipo de cabellos, teñidos y cortes. </h3>
                    <h3> Abierto:10:00 - 20:00 </h3>

                  </div>
                  <Button type="primary" style={{float: 'center'}} >Editar Descripción</Button>
                </Col>
              </Row>
              <Row>
                <Card title="Opciones" style={{'margin-top':'10px', height:'100%'}} >
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
              label="Género"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >

              <Select
                placeholder="Selecciona una opción"
              >
                <Option value="male">masculino</Option>
                <Option value="female">femenino</Option>
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
              label="Género"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >

              <Select
                placeholder="Selecciona una opción"
              >
                <Option value="male">Masculino</Option>
                <Option value="female">Femenino</Option>
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
              label="Descripción"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Tipo"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >

              <Select
                placeholder="Selecciona tipo de herramienta"
              >
                <Option value="male">Tipo 1</Option>
                <Option value="female">Tipo 2</Option>
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
              label="Descripción"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </FormItem>

            <FormItem
              label="Tipo"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >

              <Select
                placeholder="Selecciona tipo de herramienta"
              >
                <Option value="male">Tipo 1</Option>
                <Option value="female">Tipo 2</Option>
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
                label="Fecha de Inicio"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 12 }}
              >
                <Input />
              </FormItem>
              <FormItem
                label="Fecha de Fin"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 12 }}
                placeholder="DD/MM/YYYY"
              >
                <Input />
              </FormItem>
              <FormItem
                label="Tipo de Contrato"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 12 }}
              >

                <Select
                  placeholder="Selecciona un tipo de contrato"
                >
                  <Option value="male">Arriendo Sillón</Option>
                  <Option value="female">Fijo</Option>
                  <Option value="female">Honorario</Option>
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
              label="Descripción"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Precio"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Tipo"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >

              <Select
                placeholder="Selecciona un tipo"
              >
                <Option value="male">Tipo 1</Option>
                <Option value="female">Tipo 2</Option>
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
              label="Descripción"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Precio"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="Tipo"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >

              <Select
                placeholder="Selecciona Tipo"
              >
                <Option value="male">Tipo 1</Option>
                <Option value="female">Tipo 2</Option>
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

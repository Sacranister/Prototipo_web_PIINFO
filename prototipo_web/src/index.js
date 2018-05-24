import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Layout, Menu, Breadcrumb,Card, Row, Col, Button, Tabs } from 'antd';
import 'antd/dist/antd.css';
import { Collapse, Icon } from 'antd';

const { Header, Content, Footer } = Layout;
const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;
function callback(key) {
  console.log(key);
}

ReactDOM.render(
<App />
, document.getElementById('root'));

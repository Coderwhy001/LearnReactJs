import React, { useState } from 'react';
import Head from 'next/head'
import { Row, Col, List, Breadcrumb } from 'antd'
import { CalendarOutlined, FolderOutlined, FireOutlined } from '@ant-design/icons'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
const MyList = () => {
  const [mylist, setMylist] = useState(
    [
      '五十元加入'
    ]
  )
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>

          <div className="bread-div">
            <Breadcrumb>
              <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
              <Breadcrumb.Item>视频教程</Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <List
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={item=>(
              <List.Item>
                <div className="list-title">{item.title}</div>
                <div className="list-icon">
                  <span><CalendarOutlined /> 2020-05-02</span>
                  <span><FolderOutlined /> 视频教程</span>
                  <span><FireOutlined /> 5864</span>
                </div>
                <div className="list-context">{item.context}</div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer />
    </div>
  )
}
export default MyList
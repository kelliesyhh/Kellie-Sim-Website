import {
  Card,
  Layout,
  Row,
  Col,
  Breadcrumb,
  Icon,
  Anchor,
  Form,
  Empty,
} from 'antd';
import Link from 'next/link';
import '../style.less';
import AnchorLink from 'antd/lib/anchor/AnchorLink';

const {Header, Content, Footer} = Layout;
export default () => (
  <Layout>
    <Header>
      <Row justify="center" type="flex" style={{backgroundColor: '#cce6ff'}}>
        <Col
          span={10}
          style={{
            textAlign: 'left',
            height: 50,
            display: 'flex',
            justifyContent: 'left',
          }}
        >
          <span>
            Sim Yu Hui, Kellie {' '}| {' '}
            Looking to use my engineering skills to aid those in need
            {' '}
            {' '}
            <Icon type="bulb" theme="filled" />
          </span>
        </Col>
        <Col
          span={12}
          style={{
            textAlign: 'right',
            height: 50,
            display: 'flex',
            justifyContent: 'flex-end',
            textTransform: 'uppercase',
          }}
        >
          <div style={{width: 'fit-content', margin: 'auto 0px'}}>
            <Link href="/home">
              <a>
                Home
              </a>
            </Link>
          </div>
          <div style={{width: 'fit-content', margin: 'auto 0px'}}>
            <Link href="/about">
              <a>
                About
              </a>
            </Link>
          </div>
          <div style={{width: 'fit-content', margin: 'auto 0px'}}>
            <Link href="/projects">
              <a>
                Projects
              </a>
            </Link>
          </div>
          <div style={{width: 'fit-content', margin: 'auto 0px'}}>
            <Link href="/blog">
              <a>
                Blog
              </a>
            </Link>
          </div>
          <div style={{width: 'fit-content', margin: 'auto 0px'}}>
            <Link href="/contact">
              <a>
                Contact
              </a>
            </Link>
          </div>
        </Col>
      </Row>
    </Header>
    <br />
    <Row justify="center" type="flex">
      <Col
        span={10}
        style={{
          width: 'fit-content',
          margin: 'auto 0px',
          justifyContent: 'left',
        }}
      >
        <Breadcrumb>
          <Breadcrumb.Item href="/home">
            <Icon type="home" />
            <span>Home</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/contact">
            <Icon type="phone" />
            <span>Contact</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Col>
    </Row>
    <br /><br />
    <Content>
      <Row
        align="middle"
        type="flex"
        style={{fontWeight: 'bold', fontSize: '40px', textAlign: 'center'}}
      >
        <Col span={3} />
        <Col span={6}>
          <Link href="mailto:kellie.sim.0101@gmail.com">
            <a>
              <Icon type="mail" />
            </a>
          </Link>
        </Col>
        <Col span={6}>
          <Link href="https://www.linkedin.com/in/kellie-sim-1255aa51/">
            <a>
              <Icon type="linkedin" theme="filled" />
            </a>
          </Link>
        </Col>
        <Col span={6}>
          <Link href="https://www.instagram.com/kellief0rnia/">
            <a>
              <Icon type="instagram" />
            </a>
          </Link>
        </Col>
        <Col span={43} />
      </Row>
      <br />
      <Row
        align="middle"
        type="flex"
        style={{fontWeight: 'bold', fontSize: '22px', textAlign: 'center'}}
      >
        <Col span={3} />
        <Col span={6}>
          Email
        </Col>
        <Col span={6}>
          LinkedIn
        </Col>
        <Col span={6}>
          Instagram
        </Col>
        <Col span={3} />
      </Row>
      <Row
        align="middle"
        type="flex"
        style={{fontWeight: 'bold', fontSize: '12px', textAlign: 'center'}}
      >
        <Col span={3} />
        <Col span={6}>
          kellie.sim.0101@gmail.com
        </Col>
        <Col span={6}>
          https://www.linkedin.com/in/kellie-sim-1255aa51
        </Col>
        <Col span={6}>
          https://www.instagram.com/kellief0rnia/
        </Col>
        <Col span={3} />
      </Row>
      <br /><br /><br /><br /><br /><br /><br />
      <Row
        align="middle"
        justify="center"
        type="flex"
        style={{
          fontWeight: 'bold',
          fontSize: '22px',
          textAlign: 'center',
          backgroundColor: '#ffffff',
        }}
      >
        <Link>
          <a>
            Download CV
          </a>
        </Link>
      </Row>
    </Content>

    <Footer>
      <br /><br /><br /><br /><br />
      <Row
        justify="space-around"
        align="middle"
        type="flex"
        style={{backgroundColor: '#ffd9cc'}}
      >
        <Col
          span={18}
          style={{height: '40px', display: 'flex', textAlign: 'left'}}
        >
          <div style={{margin: 'auto 0px'}}>
            &copy; 2019 <b>Sim Yu Hui, Kellie</b>. All rights reserved.
          </div>
        </Col>
        <Col
          span={4}
          style={{height: '40px', display: 'flex', textAlign: 'right'}}
        >
          <div style={{margin: 'auto 0px'}}>
            made with antd, react and nextjs
          </div>
        </Col>
      </Row>
    </Footer>
  </Layout>
);

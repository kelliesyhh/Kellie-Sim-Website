// https://www.elegantthemes.com/blog/wordpress/react-js-for-wordpress-users-a-basic-introduction
import {Layout, Row, Col, Breadcrumb, Icon, Empty, Tabs} from 'antd';
import Link from 'next/link';
import '../styles.less';

const {Header, Content, Footer} = Layout;
const {TabPane} = Tabs;

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
            textAlign: 'left',
            height: 50,
            display: 'flex',
            justifyContent: 'flex-end',
            textTransform: 'uppercase',
          }}
        >
          <div style={{width: 'fit-content', margin: 'auto 0px'}}>
            <Link href="/home" as={ process.env.BACKEND_URL + '/home'}>
              <a>
                Home
              </a>
            </Link>
          </div>
          <div style={{width: 'fit-content', margin: 'auto 0px'}}>
            <Link href="/about" as={ process.env.BACKEND_URL + '/about'}>
              <a>
                About
              </a>
            </Link>
          </div>
          <div style={{width: 'fit-content', margin: 'auto 0px'}}>
            <Link href="/projects" as={ process.env.BACKEND_URL + '/projects'}>
              <a>
                Projects
              </a>
            </Link>
          </div>
          <div style={{width: 'fit-content', margin: 'auto 0px'}}>
            <Link href="/blog" as={ process.env.BACKEND_URL + '/blog'}>
              <a>
                Blog
              </a>
            </Link>
          </div>
          <div style={{width: 'fit-content', margin: 'auto 0px'}}>
            <Link href="/contact" as={ process.env.BACKEND_URL + '/contact'}>
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
          <Breadcrumb.Item href="/blog">
            <Icon type="global" />
            <span>Blog</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Col>
    </Row>

    <Row type="flex"><p><p /></p></Row>

    <Content>
      <Row>
        <Col span={1} />
        <Col span={22}>
          <Row
            align="middle"
            type="flex"
            style={{textAlign: 'center', fontWeight: 'bold', fontSize: '40px'}}
          >
            <Col span={2} />
            <Col span={20}>
              <div>
                {/* <Empty description="Oops, nothing here yet. Check back again later!" /> */}
                <Link href="https://kelliesyhh.wordpress.com/blog-feed">
                  <a>
                    <Icon type="file-text" />
                  </a>
                </Link>
              </div>
            </Col>
            <Col span={2} />
          </Row>
        </Col>
        <Col span={1} />
      </Row>
      <p />
      <Row
        align="middle"
        type="flex"
        style={{fontWeight: 'bold', fontSize: '22px', textAlign: 'center'}}
      >
        <Col span={2} />
        <Col span={20}>
          Wordpress Blog
        </Col>
        <Col span={2} />
      </Row>
      <Row
        align="middle"
        type="flex"
        style={{fontWeight: 'bold', fontSize: '12px', textAlign: 'center'}}
      >
        <Col span={2} />
        <Col span={20}>
          https://kelliesyhh.wordpress.com/blog-feed
        </Col>
        <Col span={2} />
      </Row>
      <br />
      <Row
        align="middle"
        type="flex"
        style={{fontWeight: 'bold', fontSize: '12px', textAlign: 'center'}}
      >
        <Col span={2} />
        <Col span={20}>
          <iframe
            width="100%"
            frameborder="0"
            class="rssdog"
            src="https://www.rssdog.com/index.php?url=https%3A%2F%2Fkelliesyhh.wordpress.com%2Ffeed%2F&mode=html&showonly=&maxitems=0&showdescs=1&desctrim=0&descmax=0&tabwidth=100%25&excltitle=1&showdate=1&linktarget=_blank&textsize=inherit&bordercol=transparent&headbgcol=transparent&headtxtcol=%23ffffff&titlebgcol=transparent&titletxtcol=%23000000&itembgcol=%23ffffff&itemtxtcol=%23000000&ctl=0"
          />
        </Col>
        <Col span={2} />
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

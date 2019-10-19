import {
  Breadcrumb,
  Icon,
  Row,
  Col,
  Layout,
  Card,
  Carousel,
  Avatar,
  Divider,
} from 'antd';
import Link from 'next/link';
import '../styles.less';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const {Header, Content, Footer} = Layout;

const description = (
  <div>
    <Divider />
    <p>
      Hi! It's nice to see you here. I'm Kellie, and welcome to my website. Here, you can find details of (almost) all
      my life experiences. Feel free to take a look at all the different tabs! You can either click on the links in the
      header above, or in the boxes below. They all work!
    </p>
    <p>
      I am a self-motivated and conscientious learner with experience in engineering, programming and designing.
      I am a good team player with strong verbal and written communication skills, as well as excellent listening and
      {' '}
      interpreting abilities. I have excellent interpersonal skills with demonstrable ability to solve problems
      {' '}
      and remain results focused in a fast changing environment.
    </p>
    <p>
      Apart from that, I firmly believe that it is important to give back to society, and so I take part in community
      {' '}
      service events and volunteer regularly. To me, there is no point in designing tools or services if
      the community has no use for it, and the best way to find out if the community has any use for it is by interacting
      with them.
    </p>
    <p>
      I aspire to work in the healthcare or medical industry,
      where I want to combine knowledge and technology to help others while making an impactful difference to their lives.
    </p>
  </div>
);

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
            <Link href="/home" as={process.env.BACKEND_URL + '/home'}>
              <a>
                Home
              </a>
            </Link>
          </div>
          <div style={{width: 'fit-content', margin: 'auto 0px'}}>
            <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
              <a>
                About
              </a>
            </Link>
          </div>
          <div style={{width: 'fit-content', margin: 'auto 0px'}}>
            <Link href="/projects" as={process.env.BACKEND_URL + '/projects'}>
              <a>
                Projects
              </a>
            </Link>
          </div>
          <div style={{width: 'fit-content', margin: 'auto 0px'}}>
            <Link href="/blog" as={process.env.BACKEND_URL + '/blog'}>
              <a>
                Blog
              </a>
            </Link>
          </div>
          <div style={{width: 'fit-content', margin: 'auto 0px'}}>
            <Link href="/contact" as={process.env.BACKEND_URL + '/contact'}>
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
        </Breadcrumb>
      </Col>
    </Row>

    <Row justify="space-around" type="flex">
      <Col
        span={20}
        style={{paddingTop: '30px', paddingBottom: '30px', minHeight: '500px'}}
      >
        <Content>
          <Row justify="center" type="flex">
            <Col span={1} />
            <Col span={22}>
              <Card
                // cover={
                //   <img
                //     alt="example"
                //     src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                //   />
                // }
                actions={[
                  <Link href="/about">
                    <a>
                      <Icon type="user" />
                      <br />
                      About Me
                    </a>
                  </Link>,
                  <Link href="/projects">
                    <a>
                      <Icon type="project" />
                      <br />
                      Past Projects
                    </a>
                  </Link>,
                  <Link href="/blog">
                    <a>
                      <Icon type="global" />
                      <br />
                      Blog Posts
                    </a>
                  </Link>,
                  <Link href="/contact">
                    <a>
                      <Icon type="phone" />
                      <br />
                      Contact Me
                    </a>
                  </Link>,
                  // <Link href="mailto:kellie.sim.0101@gmail.com">
                  //   <a>
                  //     <Icon type="mail" />
                  //   </a>
                  // </Link>,
                  // <Link href="https://www.linkedin.com/in/kellie-sim-1255aa51/">
                  //   <a>
                  //     <Icon type="linkedin" />
                  //   </a>
                  // </Link>,
                  // <Link href="https://www.instagram.com/kellief0rnia/">
                  //   <a>
                  //     <Icon type="instagram" />
                  //   </a>
                  // </Link>
                ]}
              >
                <Card.Meta
                  avatar={<Avatar src="/static/images/avatar.jpg" />}
                  title="Sim Yu Hui, Kellie"
                  description={description}
                />
              </Card>
            </Col>
            <Col span={1} />
          </Row>
          <br /><br />
          <div>
            <Carousel autoplay>
              <div>
                <h3>
                  <img src="/static/images/big-images.jpg" />
                </h3>
              </div>
              <div>
                <h3>
                  <img src="/static/images/big-images-2.jpg" />
                </h3>
              </div>
              <div>
                <h3>
                  <img src="/static/images/big-images-3.jpg" />
                </h3>
              </div>
            </Carousel>
          </div>
          {/* <Row gutter={16}>
            <Col span={6} md={6} sm={12} xs={24}>
              <Card
                hoverable
                cover={
                  <img
                    alt="image1"
                    style={{width: '100%'}}
                    src="/static/images/burger1.jpg"
                  />
                }
              >
                <Card.Meta
                  title="Menu 1"
                  description="burger with patty and cheese"
                />
              </Card>
            </Col>
            <Col span={6} md={6} sm={12} xs={24}>
              <Card
                hoverable
                cover={
                  <img
                    alt="image2"
                    style={{width: '100%'}}
                    src="/static/images/burger2.jpg"
                  />
                }
              >
                <Card.Meta
                  title="Menu 2"
                  description="burger on white ceramic plate"
                />
              </Card>
            </Col>
            <Col span={6} md={6} sm={12} xs={24}>
              <Card
                hoverable
                cover={
                  <img
                    alt="image3"
                    style={{width: '100%'}}
                    src="/static/images/burger3.jpg"
                  />
                }
              >
                <Card.Meta
                  title="Menu 3"
                  description="burger with tomato and onion"
                />
              </Card>
            </Col>
            <Col span={6} md={6} sm={12} xs={24}>
              <Card
                hoverable
                cover={
                  <img
                    alt="image4"
                    style={{width: '100%'}}
                    src="/static/images/burger4.jpg"
                  />
                }
              >
                <Card.Meta
                  title="Menu 4"
                  description="burger with vegetables"
                />
              </Card>
            </Col>
          </Row> */}
        </Content>
      </Col>
    </Row>

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

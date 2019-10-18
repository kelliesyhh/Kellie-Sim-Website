import {
  Layout,
  Row,
  Col,
  Breadcrumb,
  Icon,
  Divider,
  Tabs,
  Empty,
  BackTop,
} from 'antd';
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
          <Breadcrumb.Item href="/projects">
            <Icon type="project" />
            <span>Projects</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Col>
    </Row>

    <Row type="flex"><p><p /></p></Row>

    <Content>
      <Row>
        <Col span={1} />
        <Col span={22}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="NP Projects" key="1">
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={15} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  Depression Detection using Speech Analysis (Mobile App)
                </Col>
                <Col
                  span={8}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textAlign: 'right',
                  }}
                >
                  October 2018 - August 2019
                </Col>
              </Row>
              <p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={20}>
                  <div>
                    For my Final Year Project and for my Year 2 Engineering Design module in Ngee Ann Polytechnic,
                    {' '}
                    I worked with a teammate to develop an Android application which had capabilities of detecting depression
                    {' '}
                    through machine learning and deep learning models.

                    The initial application made in Year 2 used a Logistics Regression model, where the probability of a user
                    {' '}
                    having depression was returned.

                    For the Final Year Project, the application's interface was significantly improved and used a CNN model
                    {' '}
                    with an accuracy of 75% after optimisation and validation methods were deployed.
                  </div>
                  <br />
                  <div>
                    <iframe
                      src="https://docs.google.com/presentation/d/e/2PACX-1vRGLazJ1Pc1c_ADrysicS72rBUCy69AQVD0cE9wV27W0CdWdaZAxXYG1NaRf3aWqQ/embed?start=false&loop=false&delayms=60000"
                      frameborder="0"
                      width="640"
                      height="389"
                      allowfullscreen="true"
                      mozallowfullscreen="true"
                      webkitallowfullscreen="true"
                    />
                  </div>
                </Col>
              </Row>
              <p /><Divider /><p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={15} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  Development of Arduino System that aids Patients with Anxiety
                </Col>
                <Col
                  span={8}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textAlign: 'right',
                  }}
                >
                  April 2018
                </Col>
              </Row>
              <p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={20}>
                  <div>
                    For my Year 2 Induction Week in Ngee Ann Polytechnic,
                    {' '}
                    I worked with 2 other teammates on an Arduino system which aimed to aid patients with anxiety disorders.
                    {' '}
                    We used an Arduino Uno, LEDs, resistors, a Bluetooth module and a push button switch
                    {' '}
                    to guide patients through a short mediation session using the 4-7-8 breathing technique
                    {' '}
                    to control their breathing.
                    {' '}
                    Different coloured LEDs were used to keep users updated on their progress
                    {' '}
                    with the 4-7-8 breathing technique.
                    {' '}
                    An Android application was coded using MIT App Inventor 2.
                    {' '}
                    The Bluetooth module was used to connect the Android device with the Arduino. The music and
                    {' '}
                    instructions for the mediation was played through the phone's speaker. Upon pressing a button on
                    {' '}
                    the application, the mediation session will commence. A signal from the Android device will be sent
                    {' '}
                    to the Arduino through Bluetooth to commence the programme as well.
                  </div>
                  <br />
                  <div>
                    <video width="450" height="250" controls>
                      <source
                        src="static/videos/ES Y2 IP.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </Col>
              </Row>
              <p /><Divider /><p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={15} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  Mockup of Android Application to Aid Visually Impaired
                </Col>
                <Col
                  span={8}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textAlign: 'right',
                  }}
                >
                  January 2018
                </Col>
              </Row>
              <p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={20}>
                  <div>
                    For my Year 1 Creativity & Innovation Week in Ngee Ann Polytechnic,
                    {' '}
                    I worked with 2 other teammates on an Android application which aimed to
                    {' '}
                    aid the visually impaired in their day to day tasks.
                    We used MIT App Inventor 2 and included features such as audio recording,
                    {' '}
                    photo/video capturing, retrieving the current date and time and calling contacts.
                  </div>
                </Col>
              </Row>
              <p /><Divider /><p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={15} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  Semi-Automated Hamster Food Dispenser
                </Col>
                <Col
                  span={8}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textAlign: 'right',
                  }}
                >
                  July 2017
                </Col>
              </Row>
              <p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={20}>
                  <div>
                    For my Year 1 Innovation Toolkit: Acquiring the Skills (8INNOVA) module, I incorporated design thinking
                    skills and innovation frameworks such as SCAMPER to come up with a dispenser that would ensure that my
                    hamster had enough food while preventing food wastage.
                    In my design, the container is easily removable so that the user can refill and wash it easily
                    if needed. It is also transparent so that the user knows how much food is left. The flap on the main body is
                    {' '}
                    only opened when prompted, hence preventing food wastage. The load sensors below the bowl estimate the mass of
                    {' '}
                    the bowl before and 24 hours after each refilling of food. If there is not much difference in the mass,
                    the food will not be refilled and the flap will not open. If there is a significant difference, the food
                    {' '}
                    will be refilled and the flap will open. The LCD and buttons at the back of the machine help to facilitate
                    {' '}
                    the setting of basic settings or checking of the machine's battery level. The hamster will be able to
                    {' '}
                    control the amount of food dispensed, hence preventing food from coming out unnecessarily while
                    {' '}
                    ensuring that the hamster has food everyday.
                  </div>
                  <br />
                  <div>
                    <img
                      width="450"
                      height="250"
                      src="static/images/8innova_fv.png"
                      type="img/png"
                    />
                    <img
                      width="450"
                      height="250"
                      src="static/images/8innova_bv.png"
                      type="img/png"
                    />
                    <p />
                    <img
                      width="450"
                      height="250"
                      src="static/images/8innova_sv.png"
                      type="img/png"
                    />
                    <img
                      width="450"
                      height="250"
                      src="static/images/8innova_tv.png"
                      type="img/png"
                    />
                  </div>
                </Col>
              </Row>
              <p /><Divider /><p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={15} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  A Revamped Kopitiam (Idea 1)
                </Col>
                <Col
                  span={8}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textAlign: 'right',
                  }}
                >
                  June 2017
                </Col>
              </Row>
              <p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={20}>
                  <div>
                    For my Year 1 Innovation Toolkit: Acquiring the Skills (8INNOVA) module, I did a project
                    with the aim of allowing users to easily identify if a seat at Kopitiam is taken.
                    When the user sits down on the seat, they will automatically be prompted to tap their Kopitiam Card
                    {' '}
                    on the card reader. They will be required to “deposit” a fee of $5, which will automatically be deducted
                    from the balance in their card. The money will be “returned” to them when they return their tray at the
                    {' '}
                    tray return booth. This helps to solve the problem of people not clearing their trays as well.
                    {' '}
                    There will be LED strips on the table to denote if the seats are taken. Since each Kopitiam Card has
                    {' '}
                    its own serial number, people will not be able to abuse the system as the data for the LED strips is
                    {' '}
                    tied to the user who has the card. The green LED strips mean that the seat is empty, and free to use.
                    {' '}
                    The red LED strips mean that the seat is reserved. This happens when the user taps his/her card on the
                    {' '}
                    card reader.  The seat will be reserved for about 30 minutes to enable those who need to buy food to
                    {' '}
                    leave their seat temporarily. When the user returns to his/her seat, the LED strips will become
                    {' '}
                    grey. The card readers are located on the tables, along certain walkways in the food court
                    {' '}
                    as well as directly outside the food court.
                  </div>
                  <br />
                  <div>
                    <img
                      width="450"
                      height="250"
                      src="static/images/8innova_table.png"
                      type="img/png"
                    />
                    <img
                      width="450"
                      height="250"
                      src="static/images/8innova_indiv.png"
                      type="img/png"
                    />
                  </div>
                </Col>
              </Row>
              <p /><Divider /><p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={15} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  A Revamped Kopitiam (Idea 2)
                </Col>
                <Col
                  span={8}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textAlign: 'right',
                  }}
                >
                  June 2017
                </Col>
              </Row>
              <p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={20}>
                  <div>
                    For my Year 1 Innovation Toolkit: Acquiring the Skills (8INNOVA) module, I did a project
                    with the aim of allowing users to easily identify if a seat at Kopitiam is taken.
                    During peak hours, the user will be given a buzzer at the food stall. When they are purchasing
                    {' '}
                    their food, their card details will be tracked and linked to the buzzer (until they tap out).
                    {' '}
                    The user can earn points if they leave the food court within 45 minutes of starting to eat.
                    {' '}
                    The user will be prompted to tap their buzzer on the reader, which is located on the table.
                    {' '}
                    From then on, the timer will start to run. When 45 minutes has passed, the buzzer will vibrate slightly.
                    {' '}
                    This vibration will continue for 1 minute or until the user taps out, whichever comes first.
                    {' '}
                    The user can tap out of the system at the tray return corner. A reward system can also be implemented
                    {' '}
                    to incentivize users. The user will earn rebates based on how long he/she occupies the seat or based on
                    {' '}
                    how long it takes for him/her to tap out. There will also be another system to record the number of
                    {' '}
                    tables or seats occupied. There will be signs along the walkway showing how many tables/seats are
                    {' '}
                    unoccupied (eg: three 2-seater tables left unoccupied, one 6-seater table left unoccupied etc).
                    {' '}
                    This enables someone who is trying to find a seat to find it at a quicker rate. In this sense,
                    {' '}
                    there will be less people standing around and blocking the walkways, hence easing congestion.
                    {' '}
                    This idea will enable the tables in the food court to be freed up at a quicker rate,
                    {' '}
                    which will ease the congestion in the food court during peak hours.
                  </div>
                  <br />
                  <div>
                    <img
                      width="150"
                      height="250"
                      src="static/images/8innova_buzzer1.jpg"
                      type="img/jpg"
                    />
                    <img
                      width="150"
                      height="250"
                      src="static/images/8innova_buzzer2.jpg"
                      type="img/jpg"
                    />
                    <img
                      width="150"
                      height="250"
                      src="static/images/8innova_buzzer3.jpg"
                      type="img/jpg"
                    />
                  </div>
                </Col>
              </Row>
              <p /><Divider /><p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={15} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  ENGMEC Project: Bridge
                </Col>
                <Col
                  span={8}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textAlign: 'right',
                  }}
                >
                  May 2017 - August 2017
                </Col>
              </Row>
              <p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={20}>
                  <div>
                    For my Year 1 Engineering Mechanics module in Ngee Ann Polytechnic,
                    {' '}
                    I worked with 3 other teammates on a bridge that was to withstand heavy loads.
                    Our bridge managed to sustain a weight of 40kg.
                  </div>
                  <br />
                  <div>
                    <img
                      width="450"
                      height="250"
                      // src="static/images/8innova_buzzer1.jpg"
                      type="img/jpg"
                    />
                  </div>
                </Col>
              </Row>
              <p /><Divider /><p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={15} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  COMPRO Mini Project
                </Col>
                <Col
                  span={8}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textAlign: 'right',
                  }}
                >
                  May 2017 - August 2017
                </Col>
              </Row>
              <p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={20}>
                  <div>
                    I worked with 2 other teammates to come up with a program that revolved around the topic of time.
                    We incorporated a time zone converter, a feature for users to find out their age, chinese zodiac,
                    calculate the time to their next birthday, find out their horoscope and rising signs, and
                    a sunrise and sunset time calculator.
                  </div>
                  <br />
                  <div>
                    <img
                      width="400"
                      height="200"
                      src="static/images/compro_1.png"
                      type="img/png"
                    />
                    <img
                      width="400"
                      height="200"
                      src="static/images/compro_2.png"
                      type="img/png"
                    />
                    <p />
                    <img
                      width="375"
                      height="200"
                      src="static/images/compro_3.png"
                      type="img/png"
                    />
                    <img
                      width="375"
                      height="200"
                      src="static/images/compro_4.png"
                      type="img/png"
                    />
                    <p />
                    <img
                      width="300"
                      height="200"
                      src="static/images/compro_5.png"
                      type="img/png"
                    />
                    <img
                      width="300"
                      height="200"
                      src="static/images/compro_6.png"
                      type="img/png"
                    />
                    <img
                      width="300"
                      height="200"
                      src="static/images/compro_7.png"
                      type="img/png"
                    />
                    <p />
                    <img
                      width="300"
                      height="200"
                      src="static/images/compro_8.png"
                      type="img/png"
                    />
                    <img
                      width="300"
                      height="200"
                      src="static/images/compro_9.png"
                      type="img/png"
                    />
                    <img
                      width="300"
                      height="200"
                      src="static/images/compro_10.png"
                      type="img/png"
                    />
                    <p />
                    <img
                      width="300"
                      height="200"
                      src="static/images/compro_11.png"
                      type="img/png"
                    />
                  </div>
                </Col>
              </Row>
              <br />
              <BackTop visibilityHeight={400} />
            </TabPane>
            <TabPane tab="SST Projects" key="2">
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={15} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  Wireless / Cordless Headset
                </Col>
                <Col
                  span={8}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textAlign: 'right',
                  }}
                >
                  January 2016 - August 2016
                </Col>
              </Row>
              <p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={20}>
                  <div>
                    For the 'O' Level Coursework component of my Fundamentals of Electronics subject in Sec 4,
                    {' '}
                    we were tasked to create a wireless headset which uses infrared, radio frequency or other
                    {' '}
                    wireless technology for signal transmission. It should also be easy to use
                    and not costly. To do this, two circuits were made (one transmitter circuit and one receiver
                    {' '}
                    circuit) and were designed, built and tested over a period of 8 months.
                  </div>
                </Col>
              </Row>
              <p /><Divider /><p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={15} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  RDFZ - SST iBook about Hutongs in China
                </Col>
                <Col
                  span={8}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textAlign: 'right',
                  }}
                >
                  May 2015 - January 2016
                </Col>
              </Row>
              <p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={20}>
                  <div>
                    In collaboration with Ren Da Fu Zhong Xishan School, my team comprising of 2 SST students and
                    2 students from RDFZ designed an iBook about the hutongs (胡同) in China, which we conducted
                    site visits at. This was done as a pilot project between the 2 schools as a follow up to the RDFZ
                    {' '}
                    Global Citizenship Programme 2015.
                    In the iBook, we also compared the similarities and differences and differences
                    between Singapore and China in terms of residential areas. The iBook my group made was shared at
                    the iSummit in Beijing in 2016.
                  </div>
                </Col>
              </Row>
              <p /><Divider /><p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={15} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  Water Treatment Machine Prototype
                </Col>
                <Col
                  span={8}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textAlign: 'right',
                  }}
                >
                  February 2015 - March 2015
                </Col>
              </Row>
              <p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={20}>
                  <div>
                    For my Sec 3 Chemistry Performance Task, my team and I were tasked to come up with a prototype of a
                    {' '}
                    water treatment machine, while applying what we had learnt in the topic "Separation Techniques" as well
                    as demonstrating self-directed learning to read up about other topics (e.g. Salts, Acids and Bases)
                    {' '}
                    we had not learnt since we needed to identify the chemical content of the sample.
                  </div>
                  <br />
                  <div>
                    <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                      <Col span={12}>
                        <img
                          width="439"
                          height="620"
                          src="static/images/chem_pt_poster.png"
                          type="img/png"
                        />
                      </Col>
                      <Col span={8}>
                        <iframe
                          width="630"
                          height="345"
                          src="https://www.youtube.com/embed/GX34hkgWAdA"
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        />
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <p /><Divider /><p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={15} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  Mousetrap Car
                </Col>
                <Col
                  span={8}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textAlign: 'right',
                  }}
                >
                  May 2015
                </Col>
              </Row>
              <p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={20}>
                  <div>
                    For my Secondary 3 Physics Performance Task, my team and I built a mousetrap car to find the optimal
                    design for a mousetrap car to travel fast but far. Our car design made use more of a slim, compact
                    {' '}
                    and light design to reduce the mass of the car (which in turn reduced inertia).
                    {' '}
                    This therefore caused the car to be able to move easier, compared to the other mousetrap cars
                    which are bigger in size and have bigger wheels.
                  </div>
                  <br />
                  <div>
                    <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                      <Col span={15}>
                        <img
                          width="533"
                          height="200"
                          src="static/images/mousetrap_car.png"
                          type="img/png"
                        />
                      </Col>
                      <Col span={5}>
                        <iframe
                          width="373"
                          height="210"
                          src="https://www.youtube.com/embed/98dfGa-SIUM"
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        />
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <p /><Divider /><p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={15} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  NTU-SST Flagship Programme 2014
                </Col>
                <Col
                  span={8}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textAlign: 'right',
                  }}
                >
                  June 2014
                </Col>
              </Row>
              <p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={20}>
                  <div>
                    This project involved the programming of the Evalbot. Some parts that we had to program were
                    the Evalbot's motor controllers, Bump sensors, LEDs, OLED and speakers using a programming
                    {' '}
                    application called IAR. Using IAR, we were required to make the robot complete several mazes
                    {' '}
                    without any hitches. We were also able to add sounds, lights and other distinctive qualities
                    {' '}
                    to make it more appealing. This project allowed me to appreciate and understand the hard
                    work and effort put into making the modern embedded systems, such as phones, that
                    we take for granted today. This project provided us with the opportunity to train our determination
                    as we had to run back and forth from the track to our computers to make amendments to our parameters
                    if our original programming was incorrect. Even using calculations, the results would not be
                    {' '}
                    accurate and the only way to solve the problem was to constantly try out the Evalbot on the track
                    {' '}
                    until the perfect parameters were found.{' '}
                  </div>
                  <br />
                  <div>
                    <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                      <Col span={15}>
                        <iframe
                          width="560"
                          height="315"
                          src="https://www.youtube.com/embed/I9fHHgXJ0DI"
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        />
                      </Col>
                      <Col span={5}>
                        <iframe
                          width="560"
                          height="315"
                          src="https://www.youtube.com/embed/fLG6zuHxcss"
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        />
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <p /><Divider /><p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={15} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  I&E Hueylicious
                </Col>
                <Col
                  span={8}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textAlign: 'right',
                  }}
                >
                  March 2014 - July 2014
                </Col>
              </Row>
              <p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={20}>
                  <div>
                    For our Secondary 2 Innovation and Entrepreneurship subject project, we were tasked to
                    come up with a business feasibility plan for any product of our choice.
                    My group decided to create a B2C business selling Tao Huey and other desserts. We
                    considered factors such as location, did basic market analysis, thought of potential
                    marketing strategies, decided on a good price to sell our items and came up with a
                    marketing plan based on the 4Ps (Product, Price)
                  </div>
                  <br />
                  <div>
                    <iframe
                      src="https://docs.google.com/presentation/d/e/2PACX-1vSkd7d27qWR8GSmL0tc2HEeS_IMsgAme_SQ_Wbn4xn2KtjDj_RjcuLKNh-Lp1Z9Ow/embed?start=false&loop=false&delayms=60000"
                      frameborder="0"
                      width="480"
                      height="299"
                      allowfullscreen="true"
                      mozallowfullscreen="true"
                      webkitallowfullscreen="true"
                    />
                  </div>
                </Col>
              </Row>
              <p /><Divider /><p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={15} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  The Boy in Striped Pyjamas
                </Col>
                <Col
                  span={8}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textAlign: 'right',
                  }}
                >
                  February 2014 - April 2014
                </Col>
              </Row>
              <p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={20}>
                  <div />
                  <br />
                  <div>
                    <iframe
                      src="https://docs.google.com/presentation/d/e/2PACX-1vRpShEWi1nOjW9wEbQH4SJf08-f55WZN2OJv3Dq70p_LzETjwG5Q96XJpzDjjOoLw45_058NKl_nd8S/embed?start=false&loop=false&delayms=60000"
                      frameborder="0"
                      width="480"
                      height="299"
                      allowfullscreen="true"
                      mozallowfullscreen="true"
                      webkitallowfullscreen="true"
                    />
                  </div>
                </Col>
              </Row>
              <p /><Divider /><p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={15} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  ADMT Architectural Design Project: Our Corner
                </Col>
                <Col
                  span={8}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textAlign: 'right',
                  }}
                >
                  July 2014 - August 2014
                </Col>
              </Row>
              <p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={20}>
                  <div>
                    Our Corner is the redesigned version of the mini-amphitheatre,
                    {' '}
                    an area outside the Indoor Sports Hall of SST. It consists of a
                    {' '}
                    mini-stage, and a room.
                    The design was inspired by Our Space, a Students’ Lounge in SST.
                    {' '}
                    Thus, the area is user-friendly and will be maintained by students.
                    The mini-stage is used for performances, where students can
                    visit for free and perform without restraint (of course,
                    it must not be so loud that lessons get affected!)
                    The room at the back is sound-proof, so that any students
                    who wish to relax or study there will
                    not be affected by the noise from the performances on the
                    mini-stage. Students who are performing could also use it
                    as a backstage. The steps are where the audience can
                    watch performances or sit and relax.
                    Beanbags will be provided in the room as well as on the steps,
                    {' '}
                    however in the event that they are damaged, students
                    will be punished accordingly.
                    During wet weather, shelter is also provided nearby
                    (Block D or ISH) and in the room. The name “Our Corner” shows
                    {' '}
                    that this area is firstly, our responsibility, and that it is
                    {' '}
                    just one of the many corners in SST which we have developed.
                    In Our Corner, the walls are also covered with the history
                    of SST and there will be empty spaces left for future
                    generations to come.
                  </div>
                  <br />
                  <div>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/KnwoutmuaGA"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    />
                  </div>
                </Col>
              </Row>
              <p /><Divider /><p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={15} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  ADMT Video Project 2014
                </Col>
                <Col
                  span={8}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textAlign: 'right',
                  }}
                >
                  February 2014 - May 2014
                </Col>
              </Row>
              <p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={20}>
                  <div>
                    In Secondary 2, we were taught the basics of videography and tasked to
                    film a short film from scratch. Over the course of 3 months, we came up with
                    the script and screenplay for the film, filmed the various scenes and edited
                    the film. I was the logistics and audio specialist for this project.
                  </div>
                  <br />
                  <div>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/DAy6fHZzvP8"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    />
                  </div>
                </Col>
              </Row>
              {/* add in another time 
              <p /><Divider /><p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={15} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  ADMT Cardboard cutting to get chair
                </Col>
                <Col
                  span={8}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textAlign: 'right',
                  }}
                >
                  ?? 2013
                </Col>
              </Row>
              <p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={20}>
                  <div />
                </Col>
              </Row>
              <p /><Divider /><p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={15} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  ISS{' '}
                </Col>
                <Col
                  span={8}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textAlign: 'right',
                  }}
                >
                  ?? 2014
                </Col>
              </Row>
              <p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={20}>
                  <div />
                </Col>
              </Row>
              <p /><Divider /><p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={15} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  IRS proj
                </Col>
                <Col
                  span={8}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textAlign: 'right',
                  }}
                >
                  ?? 2013 and 2014
                </Col>
              </Row>
              <p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={20}>
                  <div />
                </Col>
              </Row>
              <p>foe proj, admt projs, i&e projs, phy pts, chem pts, ict??</p> 
              add in another time */}
            </TabPane>
            <TabPane tab="Internship Projects" key="3">
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={15} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  A*STAR, Institute for Infocomm Research
                </Col>
                <Col
                  span={8}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textAlign: 'right',
                  }}
                >
                  May 2019 - October 2019
                </Col>
              </Row>
              <p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={20}>
                  <div>
                    I was attached to the Institute for Infocomm Research for my Research Attachment under the
                    {' '}
                    A*STAR Science Award (Poly). There, I developed a web application to enable evaluations of
                    {' '}
                    novel language technologies for improving workflow efficiencies in a hospital telehealth setting.
                    Through this attachment, I learnt more about front and back end web development using React
                    {' '}
                    and Flask applications, while being exposed to how technology could impact healthcare fields.
                  </div>
                  <br />
                  <div>
                    <iframe
                      src="https://docs.google.com/presentation/d/e/2PACX-1vTFEywOcZQmsGvd7ZM-Uczq-GbMsQ_ZPiVwVvecLHRA9HLsMWtst9Q_YH0vlnyJ9NrMKgi1Dblu1Ldz/embed?start=false&loop=false&delayms=5000"
                      frameborder="0"
                      width="480"
                      height="299"
                      allowfullscreen="true"
                      mozallowfullscreen="true"
                      webkitallowfullscreen="true"
                    />
                    <p>(Last updated 27 September 2019, more updates will come soon!)</p>
                  </div>
                </Col>
              </Row>
              <br />
            </TabPane>

            <TabPane
              tab="Projects from Competitions/External Programmes"
              key="4"
            >
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={15} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  Temasek Foundation International - Science Centre Board STEP STEM ALIVE! 2019
                </Col>
                <Col
                  span={8}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textAlign: 'right',
                  }}
                >
                  June 2019
                </Col>
              </Row>
              <p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={20}>
                  <div>
                    In June 2019, my team and I developed a mock-up of a model house which
                    {' '}
                    incorporated renewable energy, and habits to reduce and recycle waste.
                    We made use of Micro:bit, sensors, LEDs, cardboard to solve a problem modelled
                    {' '}
                    after the United Nations’ Sustainable Development Goal 11: Sustainable Cities and Communities.
                    We aimed to solve Philippines’ problem of ineffective utilisation of land spaces and housing design
                    {' '}
                    for the urban poor. Existing government housing projects did not consider the
                    proximity of workers' job sites.
                    It was important since this would not only violate fundamental right to housing,
                    {' '}
                    but also result in subsequent problems such as waste mismanagement, which in turn leads to
                    {' '}
                    severe health issues. Apart from this, the poor housing design causes the urban poor
                    {' '}
                    to be unable to utilise electric services. All in all, our prototype targeted all of these problems
                    {' '}
                    through the construction of a model house which could be built in these circumstances.
                  </div>
                  <br />
                  <div>
                    {/* to change later */}
                    <img
                      width="450"
                      height="250"
                      src="static/images/burger1.jpg"
                      type="img/jpg"
                    />
                  </div>
                </Col>
              </Row>
              <p /><Divider /><p />
              {/* <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={15} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  Pre-University Seminar 2019
                </Col>
                <Col
                  span={8}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textAlign: 'right',
                  }}
                >
                  June 2019
                </Col>
              </Row>
              <p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={20}>
                  <div />
                </Col>
              </Row>
              <p /><Divider /><p /> */}
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={15} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  SUTD Compact 3.007 2019
                </Col>
                <Col
                  span={8}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textAlign: 'right',
                  }}
                >
                  March 2019
                </Col>
              </Row>
              <p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={20}>
                  <div>
                    Over the course of 3 weeks in March 2019, my team and I
                    developed both a high-fidelity and low-fidelity prototype of an expressive
                    cleaning robot using Arduino, Raspberry Pi, LEDs, sensors and more.
                    The low-fidelity prototype design was submitted to A’ Design Award, eventually scoring
                    85/100 for presentation and 5/10 for design.
                  </div>
                  <br />
                  <div>
                    <img
                      width="440"
                      height="620"
                      src="static/images/compact_3.007_javer.jpg"
                      type="img/jpg"
                    />
                  </div>
                </Col>
              </Row>
              <p /><Divider /><p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={15} style={{fontWeight: 'bold', fontSize: '16px'}}>
                  International Seminar on Technology for Sustainability 2018
                </Col>
                <Col
                  span={8}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    textAlign: 'right',
                  }}
                >
                  October 2018
                </Col>
              </Row>
              <p />
              <Row align="middle" type="flex" style={{textAlign: 'left'}}>
                <Col span={20}>
                  <div>
                    In October 2018, my team and I developed a mock-up application with a chatbot, 360° video,
                    customised tour programs and e-tickets to improve user experience
                    for Lomprayah. We found that the main problems that plagued users that the booking of Lomprayah's
                    catamarans were hard, the staff were hard to contact (adding on to the language barrier for
                    {' '}
                    foreign travellers) and there was little customisability available.
                    For Lomprayah, the main problems were that there were little customers during off-peak
                    {' '}
                    periods, there was a lack of proper advertisements and marketing for the company.
                    Our mock-up application UI was designed with Photoshop, the chatbot was made
                    using Amazon Lex. The customised tour programs and e-tickets could be accessed through the chatbot
                    as well as within the application itself.{' '}
                  </div>
                  <br />
                  <div>
                    <video width="450" height="250" controls>
                      <source
                        src="static/videos/ISTS Final Video.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </Col>
              </Row>
              <br />
            </TabPane>

            {/* <TabPane tab="Personal Projects" key="5">
              <Row align="middle" type="flex" style={{textAlign: 'center'}}>
                <Col span={2} />
                <Col span={20}>
                  <div>
                    <Empty description="Oops, nothing here yet. Check back again later!" />
                  </div>
                </Col>
                <Col span={2} />
              </Row>
            </TabPane> */}
          </Tabs>
        </Col>
        <Col span={1} />
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

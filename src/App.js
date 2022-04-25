import './App.css'
import NavBar from './components/Nav/nav'
import SearchBar from './components/search/search'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone'
import GetAppIcon from '@mui/icons-material/GetApp'
import EarningsWrapper from './components/earnings/Earnings'
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined'
import Man from '../src/man.png'
import TaskWrapper from './components/tasks/task'
import Pending from './components/pendingRequest/PendingRequest'
import LineChart from './components/chart/Chart'
import ChartTitle from './components/chart/titleChart'
import PieChart from './components/chart/pieChart'
import ChartTitleRevenue from './components/chart/revenue'
import Title from './components/Title/title'
import Progress from './Progress/Progress'
import Illustrate from './Progress/illustration/illustrate'
import ColorDiv from './components/Colors/Color'
import TextWrapper from './components/Texts/Text'
function App () {
  return (
    <div className='App'>
      <div className='row'>
        <div className='col-md-3 bg-primary'>
          {/* Dashboard */}
          <NavBar></NavBar>
        </div>
        <div className='col-md-9'>
          {/* contents */}
          <div className='row'>
            <div className='col-md-6 searchbar'>
              {/* search */}
              <SearchBar></SearchBar>
            </div>
            <div className='col-md-3 d-flex notification '>
              {/* Notification */}
              <button className='border-0 bg-white'>
                <NotificationsNoneIcon
                  style={{ fontSize: '1.3rem', color: '#d1d3e2' }}
                ></NotificationsNoneIcon>{' '}
                <sup>
                  <span className='badge bg-danger text-white'>3+</span>
                </sup>
              </button>
              <button className='border-0 bg-white'>
                <EmailTwoToneIcon
                  style={{ fontSize: '1.3rem', color: '#d1d3e2' }}
                ></EmailTwoToneIcon>
                <sup>
                  <span className='badge bg-danger text-white'>7</span>
                </sup>
              </button>
            </div>
            <div className='col-md-2 d-flex image'>
              {/* author */}
              <div className='text'>
                <p>Douglas Mc Gee</p>
              </div>
              <div className='avatar'>
                <img src={Man} alt='' width={'40px'} />
              </div>
            </div>
          </div>

          <div className=' Main'>
            <div className='row wid'>
              <div className='col-md-8  board'>
                {/* dashboard */}
                <h3>DashBoard</h3>
              </div>
              <div className='col-md-4 '>
                {/* GenerateReport */}
                <button className='Generate btn btn-primary'>
                  <span>
                    <GetAppIcon style={{ fontSize: '20px' }}></GetAppIcon>
                  </span>
                  <span className='Generate'>GenerateReport</span>{' '}
                </button>
              </div>
            </div>
            <div className='row four'>
              <div className='col-md-3 one'>
                <EarningsWrapper
                  Text1={'EARNINGS'}
                  Text2={'MONTHLY'}
                  Color={'blue'}
                  Money={'$40000'}
                  Icon={<AttachMoneyOutlinedIcon></AttachMoneyOutlinedIcon>}
                ></EarningsWrapper>
              </div>
              <div className='col-md-3'>
                <EarningsWrapper
                  Text1={'EARNINGS'}
                  Text2={'ANNUALLY'}
                  Color={'green'}
                  Money={'$215000'}
                ></EarningsWrapper>
              </div>
              <div className='col-md-3'>
                <TaskWrapper
                  Text1={'EARNINGS'}
                  Color={'green'}
                  Money={'50%'}
                ></TaskWrapper>
              </div>
              <div className='col-md-3'>
                <Pending
                  Text1={'PENDING REQUEST'}
                  Color={'orange'}
                  Money={'18'}
                ></Pending>
              </div>
            </div>
            <div className='row bg-light'>
              <div className='col-md-7'>
                <div className='row'>
                  <ChartTitle Title={'Earning Overview'}></ChartTitle>
                </div>
                <div className='row'>
                  <LineChart></LineChart>
                </div>
              </div>
              <div className='col-md-5'>
                <div className='container'>
                  <div className='row'>
                    <ChartTitleRevenue
                      Title={'Revenue Sources'}
                    ></ChartTitleRevenue>
                  </div>
                  <div className='row'>
                    <PieChart></PieChart>
                  </div>
                </div>
              </div>
            </div>
            <div className='Main'>
              <div className='row bg-light '>
                <div className='col-md-6 '>
                  <div className='row'>
                    {/* title */}
                    <Title Title={'Projects'}></Title>
                  </div>
                  <div className='row'>
                    <Progress></Progress>
                  </div>
                </div>
                <div className='col-md-6 Main'>
                  <div className='row '>
                    <div className=' container bg-light'>
                      {/* title */}
                      <Title Title={'Illustration'}></Title>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='container'>
                      <Illustrate></Illustrate>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='main'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='row'>
                    <div className='col-md-6'>
                      {/* item raw 1 */}
                      <ColorDiv
                        Color={'Primary'}
                        Text={'#4e73df'}
                        Bg={'primary'}
                      ></ColorDiv>
                    </div>
                    <div className='col-md-6'>
                      <div className=''>
                        {/* item raw 1 */}
                        <ColorDiv
                          Color={'Success'}
                          Text={'#1cc88a'}
                          Bg={'success'}
                        ></ColorDiv>
                      </div>
                    </div>
                  </div>
                  {/* 2nd */}
                  <div className='row'>
                    <div className='col-md-6'>
                      {/* item raw 1 */}
                      <ColorDiv
                        Color={'Info'}
                        Text={'#36b9cc'}
                        Bg={'info'}
                      ></ColorDiv>
                    </div>
                    <div className='col-md-6'>
                      <div className=''>
                        {/* item raw 1 */}
                        <ColorDiv
                          Color={'Warning'}
                          Text={'#f6c23e'}
                          Bg={'warning'}
                        ></ColorDiv>
                      </div>
                    </div>
                  </div>
                  {/* end */}
                  {/* 3rd */}
                  <div className='row'>
                    <div className='col-md-6'>
                      {/* item raw 1 */}
                      <ColorDiv
                        Color={'Danger'}
                        Text={'#e74a3b'}
                        Bg={'danger'}
                      ></ColorDiv>
                    </div>
                    <div className='col-md-6'>
                      <div className=''>
                        {/* item raw 1 */}
                        <ColorDiv
                          Color={'Secondary'}
                          Text={'#858796'}
                          Bg={'secondary'}
                        ></ColorDiv>
                      </div>
                    </div>
                  </div>
                  {/* end */}
                  {/* 4th */}
                  <div className='row'>
                    <div className='col-md-6'>
                      {/* item raw 1 */}
                      <ColorDiv
                        Color={'Light'}
                        Text={'#f8f9fc'}
                        Bg={'light'}
                      ></ColorDiv>
                    </div>
                    <div className='col-md-6'>
                      <div className=''>
                        {/* item raw 1 */}
                        <ColorDiv
                          Color={'Dark'}
                          Text={'#5a5c69'}
                          Bg={'dark'}
                        ></ColorDiv>
                      </div>
                    </div>
                  </div>
                  {/* end */}
                </div>
                <div className='col-md-6 Main'>
                  <div className='row Main'>
                    <div className='container bg-light'>
                      <Title Title={'Development Approach'}></Title>
                    </div>
                    <div className='row bg-light'>
                      <TextWrapper></TextWrapper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

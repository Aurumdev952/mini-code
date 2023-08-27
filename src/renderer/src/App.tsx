import Sidebar from './components/SideBar'
import Menu from './components/MenuBar'
import Editor from './components/MainEditor'
import FileBar from './components/FileBar'
import InfoBar from './components/InfoBar'
import { ColsWrapper, Col } from 'react-grid-resizable'
import { useEffect } from 'react'
function App(): JSX.Element {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    window.api
      .fs()
      // eslint-disable-next-line prettier/prettier, no-useless-escape
      .getDir('D:/aurum/deprecated')
      .then((data) => {
        console.log(data)
      })
  }, [])
  return (
    <main>
      <div className="container">
        {/* <div className="main">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="editor">
            <div className="editormain">
              <Editor />
            </div>
            <div className="filebar">
              <FileBar />
            </div>
          </div>
        </div> */}
        <ColsWrapper
          separatorProps={{
            style: {
              // border: '0.1px solid #86a5b1',
              backgroundColor: '#86a5b1',
              width: '.1rem'
            }
          }}
        >
          <Col
            style={{
              height: '100%',
              minWidth: '120px',
              maxWidth: '50vw'
            }}
            initialWidth={200}
          >
            <div className="sidebar">
              <Sidebar />
            </div>
          </Col>
          <Col
            style={{
              height: '100%',
              minWidth: '50vw',
              maxWidth: '100%'
            }}
          >
            <div className="editor">
              <div className="editormain">
                <Editor />
              </div>
              <div className="filebar">
                <FileBar />
              </div>
            </div>
          </Col>
        </ColsWrapper>
        <div className="topbar">
          <Menu />
        </div>
        <div className="info">
          <InfoBar />
        </div>
      </div>
    </main>
  )
}

export default App

import Sidebar from './components/SideBar'
import Menu from './components/MenuBar'
import Editor from './components/MainEditor'
import FileBar from './components/FileBar'
import InfoBar from './components/InfoBar'
import { ColsWrapper, Col } from 'react-grid-resizable'
import { useEffect } from 'react'
import { appConfig } from './config/app'
import useStore from './utils/store'
function App(): JSX.Element {
  const { setFiles, setSelection } = useStore()
  const test = async () => {
    try {
      const fs = window.api.fs
      const data = await fs.getDir(appConfig.defaultDir)
      console.log(data)
      setFiles(data)
      setSelection(data[0].id)
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      console.log(error.message)
    }
  }
  useEffect(() => {
    test()
  }, [])
  return (
    <main>
      <div className="container">
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

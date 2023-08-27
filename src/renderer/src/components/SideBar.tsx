import { store } from '@renderer/utils/store'
import React from 'react'
import { VscNewFile, VscNewFolder, VscCollapseAll } from 'react-icons/vsc'
const Sidebar: React.FC = () => {
  const { files, setCurrentFile, currentfile } = store()
  return (
    <div className="sidebardiv">
      <div className="toolbar">
        <button>
          <VscNewFile />
        </button>
        <button>
          <VscNewFolder />
        </button>
        <button>
          <VscCollapseAll />
        </button>
      </div>
      {files.map((file, i) => (
        <div
          className="filename"
          style={{
            backgroundColor: currentfile === i ? '#86a5b122' : '',
            outline: currentfile === i ? '.0001rem solid #86a5b140' : ''
          }}
          key={i}
          onClick={() => void setCurrentFile(i)}
        >
          {file.name}
        </div>
      ))}
    </div>
  )
}

export default Sidebar

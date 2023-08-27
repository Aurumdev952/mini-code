import { store } from '@renderer/utils/store'
import classNames from 'classnames'
import React from 'react'

const FileBar: React.FC = () => {
  const { files, setCurrentFile, currentfile } = store()
  return (
    <div className="topbardiv">
      {files.map((file, i) => (
        <div
          className={currentfile === i ? 'down' : ' '}
          style={{
            backgroundColor: currentfile === i ? '#86a5b122' : ''
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

export default FileBar

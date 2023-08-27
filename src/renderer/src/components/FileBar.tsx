import useStore from '@renderer/utils/store'
import classNames from 'classnames'
import React from 'react'

const FileBar: React.FC = () => {
  const { files, setSelection, selection } = useStore()
  return (
    <div className="topbardiv">
      {files.map((file, i) => (
        <div
          className={selection === file.id ? 'down' : ' '}
          style={{
            backgroundColor: selection === file.id ? '#86a5b122' : ''
          }}
          key={i}
          onClick={() => void setSelection(file.id)}
        >
          <p>{file.name}</p>
        </div>
      ))}
    </div>
  )
}

export default FileBar

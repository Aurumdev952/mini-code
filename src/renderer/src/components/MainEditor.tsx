import React, { useRef, useMemo, useEffect, useState } from 'react'
import MonacoEditor from '@monaco-editor/react'
import * as monaco from 'monaco-editor'
import { loader } from '@monaco-editor/react'

import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
import { useGetFile } from '@renderer/utils/func'

self.MonacoEnvironment = {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  getWorker(_, label) {
    if (label === 'json') {
      return new jsonWorker()
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new cssWorker()
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new htmlWorker()
    }
    if (label === 'typescript' || label === 'javascript') {
      return new tsWorker()
    }
    return new editorWorker()
  }
}

loader.config({ monaco })

loader.config({
  paths: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    vs: window.api.pathUrl()
  }
})
loader.init().then((monaco) => console.log('here is the monaco instance:', monaco))

const Editor: React.FC = () => {
  const file = useGetFile()
  const [cvalue, setCValue] = useState('')
  const editorref = useRef<null | typeof monaco>(null)
  return (
    <MonacoEditor
      onMount={(monaco, editor) => {
        window.onresize = () => {
          monaco.layout()
        }
        editorref.current = editor
      }}
      path={file?.name}
      language={file?.language}
      defaultValue={file?.value}
      theme="vs-dark"
      loading={'happy Loading...'}
    />
  )
}

export default Editor

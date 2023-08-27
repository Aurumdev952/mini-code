import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import path from 'path'
import { FileSys } from './file'
function ensureFirstBackSlash(str: string): string {
  return str.length > 0 && str.charAt(0) !== '/' ? '/' + str : str
}

function uriFromPath(_path: string): string {
  const pathName = path.resolve(_path).replace(/\\/g, '/')
  return encodeURI('file://' + ensureFirstBackSlash(pathName))
}
// Custom APIs for renderer
const api = {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  pathUrl: () => {
    return uriFromPath(path.join(__dirname, '../../node_modules/monaco-editor/min/vs'))
  },
  fs: () => {
    return new FileSys()
  }
}
// eslint-disable-next-line no-useless-escape, prettier/prettier

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}

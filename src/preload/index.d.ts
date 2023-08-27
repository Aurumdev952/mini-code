import { ElectronAPI } from '@electron-toolkit/preload'
import type { APiType } from './index'
declare global {
  interface Window {
    electron: ElectronAPI
    api: APiType
  }
}

import { create } from 'zustand'

// Function to generate a random ID

const files = [
  {
    name: 'script.js',
    language: 'javascript',
    value: 'console.log("HEllo world!")',
    id: 'fgyuerfguegfuerf',
    path: null
  }
]

export interface FileType {
  name: string
  language: string
  value: string
  id: string
  path: string | null
}

export interface DirType {
  name: string
  path: string
  children: FileType[] | DirType[]
  open: boolean
}

interface Store {
  fs: DirType[]
  files: FileType[]
  selection: string
  setFs: (files: DirType[]) => void
  setFiles: (files: FileType[]) => void
  setSelection: (str: string) => void
}

const useStore = create<Store>((set) => ({
  files: files,
  setFs: (fs) => {
    set({
      fs
    })
  },
  selection: files[0].id,
  setSelection: (str) => {
    set({
      selection: str
    })
  },
  fs: [],
  setFiles: (files) => {
    set({ files })
  }
}))

export default useStore

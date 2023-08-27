import { create } from 'zustand'

const files = [
  {
    name: 'script.js',
    language: 'javascript',
    value: 'console.log("HEllo world!")'
  },
  {
    name: 'style.css',
    language: 'css',
    value: 'body { color: white; }'
  },
  {
    name: 'index.html',
    language: 'html',
    value: '<div>Hello world</div>'
  }
]

interface file {
  name: string
  language: string
  value: string
}

interface Store {
  files: file[]
  currentfile: number
  setFiles: (files: file[]) => void
  setCurrentFile: (str: number) => void
}

export const store = create<Store>((set) => ({
  files: files,
  setFiles: (files) => {
    set({
      files
    })
  },
  currentfile: 0,
  setCurrentFile: (str) => {
    set({
      currentfile: str
    })
  }
}))

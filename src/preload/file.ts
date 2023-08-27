import { readdir } from 'fs/promises'
import { readFileSync } from 'fs'
import crypto from 'crypto'
import path from 'path'

export const langConfig = {
  javascript: ['js', 'jsx'],
  typescript: ['ts', 'tsx'],
  html: ['html'],
  css: ['css'],
  scss: ['scss'],
  less: ['less'],
  handlebars: ['handlebars'],
  razor: ['razor'],
  json: ['json']
}

function getLang(name: string) {
  let label = 'text'
  const ext = name.split('.').at(-1) as unknown as string
  const entries = Object.entries(langConfig)
  for (const [key, value] of entries) {
    if (value.includes(ext)) {
      label = key
    }
  }
  return label
}
// Function to generate a random ID
function generateRandomId(length = 10) {
  // Generate random bytes and convert them to a hexadecimal string
  const randomBytes = crypto.randomBytes(length)
  const randomId = randomBytes.toString('hex').slice(0, length)

  return randomId
}

// name: 'script.js',
//     language: 'javascript',
//     value: 'console.log("HEllo world!")',
//     id: generateRandomId(),
//     path: ''
export const fileSys = {
  getDir: async (parentPath: string) => {
    const files = await readdir(parentPath, {
      withFileTypes: true
    })
    const c = files.map((file) => {
      if (file.isFile()) {
        const value = readFileSync(path.join(parentPath, file.name), {
          encoding: 'utf8'
        })
        return {
          id: generateRandomId(8),
          name: file.name,
          value,
          path: path.join(parentPath, file.name),
          language: getLang(file.name)
        }
      } else {
        return undefined
      }
    })
    return c.filter((t) => typeof t !== undefined) as unknown as {
      id: string
      name: string
      value: string
      path: string
      language: string
    }[]
  }
  // getContent: (path: string) => {
  //   // return readFile(path, {
  //   //   encoding: 'utf8'
  //   // })
  //   return readFileSync(path, { encoding: 'utf8' })
  // }
}

export const FileSysType = typeof fileSys

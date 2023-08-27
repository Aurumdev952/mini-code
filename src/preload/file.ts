import { mkdir, readdir } from 'fs/promises'
import { fileURLToPath } from 'url'

export class FileSys {
  async getDir(parentPath: string) {
    return await readdir(fileURLToPath(parentPath))
  }
}

export const FileSysType = typeof FileSys

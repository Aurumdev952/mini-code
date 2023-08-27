import useStore from '@renderer/utils/store'

export const useGetFile = () => {
  const { selection, files } = useStore()
  return files.find((fil) => fil.id === selection)
}

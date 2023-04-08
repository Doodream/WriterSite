import { Dispatch, SetStateAction, useRef, useState } from 'react'

export type ModalPropsType<T = any> = {
  isOpen: boolean
  handleOpen(): void
  handleClose(): void
  mount: boolean
  modalData: T
  setModalData: Dispatch<SetStateAction<T>>
  setBeforeMountCallback(callback: ModalCallbackType): void
  setBeforeUnmountCallback(callback: ModalCallbackType): void
}

type ModalCallbackType = () => void

const useModal = <T = unknown>(): ModalPropsType<T> => {
  const [isOpen, setIsOpen] = useState(false)
  const [mount, setMount] = useState(false)
  const [modalData, setModalData] = useState<T>(<T>{})
  const beforeMountCallback = useRef<ModalCallbackType>()
  const beforeUnmountCallback = useRef<ModalCallbackType>()

  const setBeforeMountCallback = (callback: ModalCallbackType) => {
    beforeMountCallback.current = callback
  }
  const setBeforeUnmountCallback = (callback: ModalCallbackType) => {
    beforeUnmountCallback.current = callback
  }

  const handleOpen = () => {
    beforeMountCallback.current?.()
    setMount(true)
    setTimeout(() => {
      setIsOpen(true)
    }, 100)
  }

  const handleClose = () => {
    beforeUnmountCallback.current?.()
    setIsOpen(false)
    setTimeout(() => {
      setModalData(<T>{})
      setMount(false)
    }, 100)
  }

  return {
    isOpen,
    handleOpen,
    handleClose,
    mount,
    modalData,
    setModalData,
    setBeforeMountCallback,
    setBeforeUnmountCallback
  }
}

export default useModal

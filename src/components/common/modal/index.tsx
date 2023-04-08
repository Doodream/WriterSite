import { ModalPropsType } from '@/hooks/common/useModal'
import React, { PropsWithChildren } from 'react'

type ModalProps = {
  modalProps: ModalPropsType
}
const Modal = ({ modalProps, children }: PropsWithChildren<ModalProps>) => {
  const { isOpen, handleClose, mount } = modalProps

  if (!mount) {
    return null
  }

  return (
    <section className={`modal fixed  ${isOpen ? 'modal-open' : ''}`} onClick={(e) => handleClose()}>
      <div className="z-[1000] flex w-full justify-center" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </section>
  )
}

export default Modal

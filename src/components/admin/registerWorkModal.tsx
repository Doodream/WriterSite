import React, { ChangeEvent } from 'react'
import { ModalPropsType } from '@/hooks/common/useModal'
import classNames from 'classnames'
import { useForm } from 'react-hook-form'
import { WorkRes } from '@/api/works'

export type RegisterWorkModalDataType = {
  work: WorkRes
}

type RegisterWorkModalProps = {
  isEdit: boolean
  handleRegisterWork(work: WorkRes): Promise<void>
  modalProps: ModalPropsType<RegisterWorkModalDataType>
  handleImageUpload(e: ChangeEvent<HTMLInputElement>): void
  handleUpdateWork(work: WorkRes): Promise<void>
}

const RegisterWorkModal = ({
  modalProps,
  handleImageUpload,
  handleRegisterWork,
  isEdit,
  handleUpdateWork
}: RegisterWorkModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    values: {
      workName: isEdit ? modalProps.modalData.work.title : ''
    }
  })

  const onSubmit = handleSubmit(async (data) => {
    if (!(data.workName && modalProps.modalData.work)) {
      return
    }

    if (isEdit) {
      await handleUpdateWork({
        ...modalProps.modalData.work,
        title: data.workName,
        representativeImage: modalProps.modalData.work.representativeImage
      })
    } else {
      await handleRegisterWork(modalProps.modalData.work)
    }
  })

  return (
    <div className="rounded-box modal-box relative h-[50%] w-[50%] shadow-md">
      <button
        className="btn-sm btn-circle btn absolute right-2 top-2"
        onClick={() => {
          modalProps.handleClose()
        }}>
        ✕
      </button>
      <h1>{isEdit ? '작품 수정하기' : '작품 등록하기'}</h1>
      <form onSubmit={onSubmit} className="flex w-full flex-col gap-5">
        <div>
          <label htmlFor="siteName" className="label">
            <span className="label-text text-base-content ">작품 이름</span>
          </label>
          <input
            type="text"
            className={classNames('input-bordered input w-full', {
              'border-error': errors.workName
            })}
            placeholder="작품이름을 입력해주세요."
            {...register('workName', {
              required: true
            })}
          />
        </div>
        <div>
          <label htmlFor="siteName" className="label">
            <span className="label-text text-base-content ">작품 그림</span>
          </label>
          <input
            type="file"
            className="file-input w-full  border-1 border-gray-600"
            onChange={(e) => handleImageUpload(e)}
          />
        </div>
        <button type="submit" className="btn">
          {isEdit ? '수정하기' : '등록하기'}
        </button>
      </form>
    </div>
  )
}

export default RegisterWorkModal

import { ModalPropsType } from '@/hooks/common/useModal'
import classNames from 'classnames'
import React, { ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'
import { WorkpieceRes } from '@/api/works'

export type ManagerWorkpieceModalDataType = {
  workpiece: WorkpieceRes
}

type ManageWorkpieceModalProps = {
  isEdit: boolean
  modalProps: ModalPropsType<ManagerWorkpieceModalDataType>
  handleImageUpload(e: ChangeEvent<HTMLInputElement>): Promise<void>
  handleRegisterWorkpiece(workpiece: WorkpieceRes): Promise<void>
}

const ManageWorkpieceModal = ({
  modalProps,
  handleImageUpload,
  isEdit,
  handleRegisterWorkpiece
}: ManageWorkpieceModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    values: {
      title: isEdit ? modalProps.modalData.workpiece.title : '',
      description: isEdit ? modalProps.modalData.workpiece.description : ''
    }
  })
  const onSubmit = handleSubmit((data) => {
    handleRegisterWorkpiece({
      id: isEdit ? modalProps.modalData.workpiece.id : new Date().getTime(),
      imageUrl: modalProps.modalData.workpiece.imageUrl,
      description: data.description,
      title: data.title
    })
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
      <h1>{isEdit ? '작업물 수정하기' : '등록하기'}</h1>
      <form onSubmit={onSubmit} className="flex w-full flex-col gap-5">
        <div>
          <label htmlFor="title" className="label">
            <span className="label-text text-base-content ">작업물 이름</span>
          </label>
          <input
            type="text"
            className={classNames('input-bordered input w-full', {
              'border-error': errors.title
            })}
            placeholder="작업물 이름을 입력해주세요."
            {...register('title', {
              required: true
            })}
          />
        </div>
        <div>
          <label htmlFor="description" className="label">
            <span className="label-text text-base-content ">작업물 설명</span>
          </label>
          <input
            type="text"
            className={classNames('input-bordered input w-full', {
              'border-error': errors.description
            })}
            placeholder="작업물 설명을 입력해주세요."
            {...register('description', {
              required: true
            })}
          />
        </div>
        <div>
          <label htmlFor="imageInput" className="label">
            <span className="label-text text-base-content ">작업물 그림</span>
          </label>
          <input
            id="imageInput"
            type="file"
            className="file-input w-full  border-1 border-gray-600"
            onChange={(e) => handleImageUpload(e)}
          />
        </div>
        <button type="submit" className="btn">
          {isEdit ? '등록하기' : '수정하기'}
        </button>
      </form>
    </div>
  )
}

export default ManageWorkpieceModal

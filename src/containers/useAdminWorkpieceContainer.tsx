import { useQuery } from 'react-query'
import { WorkRes, WorkpieceRes, getWork, imageUpload, updateWork } from '@/api/works'
import { ChangeEvent, useMemo, useState } from 'react'
import useModal from '@/hooks/common/useModal'
import { useRouter } from 'next/router'
import { ManagerWorkpieceModalDataType } from '@/components/admin/manageWorkpieceModal'
import uniqBy from 'lodash/uniqBy'

const useAdminWorkpieceContainer = () => {
  const { query } = useRouter()
  const { id: workId } = query as {
    id: string
  }
  const registerWorkpieceModalProps = useModal<ManagerWorkpieceModalDataType>()

  const { data: work, refetch: refetchWork } = useQuery('work', () => getWork(workId), {
    enabled: !!workId
  })
  const [isEdit, setIsEdit] = useState(false)

  const handleRegisterWorkpiece = async (workpiece: WorkpieceRes) => {
    if (!work || !work.workpieces) {
      return
    }
    /**
     * [workpiece, ...work.workpieces] 순서 뒤집으면 업데이트 안됨 맵으로 업데이트 하는게 더 나을 듯
     */
    const newWork: WorkRes = {
      ...work,
      workpieces: uniqBy([workpiece, ...work.workpieces], (workpiece) => workpiece.id)
    }

    await updateWork(newWork)
    registerWorkpieceModalProps.handleClose()
    refetchWork()
  }

  const handleOpenRegisterModal = () => {
    setIsEdit(false)
    registerWorkpieceModalProps.handleOpen()
  }

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const imageUrl = await imageUpload(e.target.files?.[0])
    registerWorkpieceModalProps.setModalData((prev) => ({
      ...prev,
      workpiece: {
        ...prev.workpiece,
        imageUrl: imageUrl ?? prev.workpiece.imageUrl
      }
    }))
  }

  const handleRemoveWorkpiece = async (removeWorkpiece: WorkpieceRes) => {
    if (!work) {
      return
    }
    const newWorkPiece = work?.workpieces?.filter((workpiece) => workpiece.imageUrl !== removeWorkpiece.imageUrl)
    const newWork: WorkRes = {
      ...work,
      ...(newWorkPiece && { workpieces: newWorkPiece })
    }
    await updateWork(newWork)
    refetchWork()
  }

  const adminWorkpieceContents = useMemo(() => {
    return work?.workpieces?.map((row, index) => ({
      row: [
        {
          content: index + 1,
          key: 'index'
        },
        {
          content: (
            <a href={row.imageUrl} target="_blank" rel="noreferrer">
              <p className="cursor-pointer underline underline-offset-1">{row.title}</p>
            </a>
          ),
          key: 'imageUrl'
        },
        {
          content: row.title,
          key: 'title'
        },
        {
          content: (
            <button
              className="btn"
              onClick={() => {
                setIsEdit(true)
                registerWorkpieceModalProps.setModalData({
                  workpiece: row
                })
                registerWorkpieceModalProps.handleOpen()
              }}>
              작품 수정
            </button>
          ),
          key: 'update'
        },
        {
          content: (
            <button className="btn" onClick={async () => handleRemoveWorkpiece(row)}>
              작품 삭제
            </button>
          ),
          key: 'delete'
        }
      ]
    }))
  }, [work])

  return {
    adminWorkpieceContents,
    registerWorkpieceModalProps,
    handleImageUpload,
    isEdit,
    handleOpenRegisterModal,
    handleRegisterWorkpiece
  }
}

export default useAdminWorkpieceContainer

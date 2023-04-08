import { useQuery } from 'react-query'
import { WorkRes, addImage, addWork, getWorks, updateWork } from '@/api/works'
import { ChangeEvent, useMemo, useState } from 'react'
import useModal from '@/hooks/common/useModal'
import { RegisterWorkModalDataType } from '@/components/admin/registerWorkModal'

const useAdminContainer = () => {
  const registerWorkModalProps = useModal<RegisterWorkModalDataType>()
  const { data: works, refetch: refetchWorks } = useQuery('works', getWorks)
  const [isEdit, setIsEdit] = useState(false)

  const handleRegisterWork = async (work: WorkRes) => {
    await addWork(work)
    registerWorkModalProps.handleClose()
    refetchWorks()
  }

  const handleUpdateWork = async (work: WorkRes) => {
    await updateWork(work)
    registerWorkModalProps.handleClose()
    refetchWorks()
  }

  const handleOpenRegisterModal = () => {
    setIsEdit(false)
    registerWorkModalProps.handleOpen()
  }

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    const filename = file?.name

    if (!(file && filename)) {
      return
    }
    const imageUrl = await addImage(file, filename)

    registerWorkModalProps.setModalData((prev) => ({
      ...prev,
      work: {
        ...prev.work,
        representativeImage: imageUrl
      }
    }))
  }

  const adminsContents = useMemo(() => {
    return works?.map((row, index) => ({
      row: [
        {
          content: index + 1,
          key: 'index'
        },
        {
          content: (
            <a href={row.representativeImage} target="_blank" rel="noreferrer">
              <p className="cursor-pointer underline underline-offset-1">{row.title}</p>
            </a>
          ),
          key: 'representativeImage'
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
                registerWorkModalProps.setModalData({
                  work: row
                })
                registerWorkModalProps.handleOpen()
              }}>
              작품 수정
            </button>
          ),
          key: 'update'
        },
        {
          content: (
            <button
              className="btn"
              onClick={async () => {
                // addWork()
              }}>
              작업물 추가하기
            </button>
          ),
          key: 'workList'
        }
      ]
    }))
  }, [works])
  return {
    adminsContents,
    handleRegisterWork,
    registerWorkModalProps,
    handleImageUpload,
    isEdit,
    handleUpdateWork,
    handleOpenRegisterModal
  }
}

export default useAdminContainer

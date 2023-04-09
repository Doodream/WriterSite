import useModal from '@/hooks/common/useModal'
import { useQuery } from 'react-query'
import { getWork } from '@/api/works'
import { useRouter } from 'next/router'

const useWorkDetailContainer = () => {
  const { query } = useRouter()
  const { id: workId } = query as {
    id: string
  }
  const { data: work } = useQuery('work', () => getWork(workId), {
    enabled: !!workId
  })
  const imageSliderModalProps = useModal()

  const handleImageClick = () => {
    imageSliderModalProps.handleOpen()
  }

  return {
    imageSliderModalProps,
    handleImageClick,
    workpieces: work?.workpieces
  }
}

export default useWorkDetailContainer

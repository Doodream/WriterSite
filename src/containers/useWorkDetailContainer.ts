import useModal from '@/hooks/common/useModal'

const useWorkDetailContainer = () => {
  const imageSliderModalProps = useModal()

  const handleImageClick = () => {
    imageSliderModalProps.handleOpen()
  }

  return {
    imageSliderModalProps,
    handleImageClick
  }
}

export default useWorkDetailContainer

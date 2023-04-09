import useAdminWorkContainer from '@/containers/useAdminWorkContainer'
import Table from '@/components/common/tables'
import Modal from '@/components/common/modal'
import RegisterWorkModal from '@/components/admin/registerWorkModal'

const PageAdminWork = () => {
  const {
    adminWorkContents,
    handleRegisterWork,
    registerWorkModalProps,
    handleImageUpload,
    isEdit,
    handleOpenRegisterModal,
    handleUpdateWork
  } = useAdminWorkContainer()
  return (
    <div className="flex h-screen w-screen  justify-center">
      <div className="w-full px-[100px] pt-[100px]">
        <Table>
          <Table.Title title="회원 관리">
            <button className="btn" onClick={handleOpenRegisterModal}>
              등록하기
            </button>
          </Table.Title>
          <Table.Content
            columns={[
              { title: 'ID', key: 'index' },
              { title: '대표 작품 링크', key: 'representativeImage' },
              { title: '작품 이름', key: 'title' },
              {
                title: '수정',
                key: 'update'
              },
              {
                title: '작업물 관리',
                key: 'workList'
              }
            ]}
            contents={adminWorkContents}
          />
        </Table>
      </div>
      <Modal modalProps={registerWorkModalProps}>
        <RegisterWorkModal
          isEdit={isEdit}
          modalProps={registerWorkModalProps}
          handleImageUpload={handleImageUpload}
          handleRegisterWork={handleRegisterWork}
          handleUpdateWork={handleUpdateWork}
        />
      </Modal>
    </div>
  )
}

export default PageAdminWork

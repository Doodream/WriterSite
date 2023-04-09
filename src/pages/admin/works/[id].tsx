import Table from '@/components/common/tables'
import useAdminWorkpieceContainer from '@/containers/useAdminWorkpieceContainer'
import Modal from '@/components/common/modal'
import ManageWorkpieceModal from '@/components/admin/manageWorkpieceModal'

const PageAdminWorkpiece = () => {
  const {
    adminWorkpieceContents,
    registerWorkpieceModalProps,
    handleImageUpload,
    isEdit,
    handleOpenRegisterModal,
    handleRegisterWorkpiece
  } = useAdminWorkpieceContainer()
  return (
    <div className="flex h-screen w-screen  justify-center">
      <div className="w-full px-[100px] pt-[100px]">
        <Table>
          <Table.Title title="작업물 관리">
            <button className="btn" onClick={handleOpenRegisterModal}>
              등록하기
            </button>
          </Table.Title>
          <Table.Content
            columns={[
              { title: 'ID', key: 'index' },
              { title: '작업물', key: 'imageUrl' },
              { title: '작업물 이름', key: 'title' },
              {
                title: '수정',
                key: 'update'
              },
              {
                title: '삭제',
                key: 'delete'
              }
            ]}
            contents={adminWorkpieceContents}
          />
        </Table>
      </div>
      <Modal modalProps={registerWorkpieceModalProps}>
        <ManageWorkpieceModal
          modalProps={registerWorkpieceModalProps}
          handleImageUpload={handleImageUpload}
          isEdit={isEdit}
          handleRegisterWorkpiece={handleRegisterWorkpiece}
        />
      </Modal>
    </div>
  )
}

export default PageAdminWorkpiece

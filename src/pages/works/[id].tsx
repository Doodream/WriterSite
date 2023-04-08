import useWorkDetailContainer from '@/containers/useWorkDetailContainer'
import Modal from '@/components/common/modal'
import Layout from '@/components/common/Layout'

const PageWorkDetail = () => {
  const { handleImageClick, imageSliderModalProps } = useWorkDetailContainer()
  return (
    <Layout>
      <section className="grid h-screen w-full grid-cols-3 gap-[15px] overflow-y-scroll pt-[50px] pr-[50px] mobile:grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3">
        {[1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => {
          return (
            <article className="flex h-full w-full flex-col" key={index}>
              <div className="w-full" key={index} onClick={() => handleImageClick()}>
                <img
                  className="w-full object-cover"
                  src="https://image.utoimage.com/preview/cp872722/2022/12/202212008462_206.jpg"
                  alt="그림"
                />
                <div>
                  <h2 className="font-bold">그림을 그리는 제목#1</h2>
                  <span>oil on canvas 97_23</span>
                </div>
              </div>
            </article>
          )
        })}
        <Modal modalProps={imageSliderModalProps}></Modal>
      </section>
    </Layout>
  )
}

export default PageWorkDetail

import useWorkDetailContainer from '@/containers/useWorkDetailContainer'
import Modal from '@/components/common/modal'
import Layout from '@/components/common/Layout'

const PageWorkDetail = () => {
  const { handleImageClick, imageSliderModalProps, workpieces } = useWorkDetailContainer()
  return (
    <Layout>
      <section className="grid h-screen w-full grid-cols-3 gap-[15px] overflow-y-scroll pt-[50px] pr-[50px] mobile:grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3">
        {workpieces?.map((workpiece) => {
          return (
            <article className="flex  w-full flex-col" key={workpiece.id}>
              <div className="w-full" onClick={() => handleImageClick()}>
                <img className="w-full object-cover" src={workpiece.imageUrl} alt={workpiece.title} />
                <div>
                  <h2 className="font-bold">{workpiece.title}</h2>
                  <span>{workpiece.description}</span>
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

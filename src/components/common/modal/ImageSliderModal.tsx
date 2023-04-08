import { ModalPropsType } from '@/hooks/common/useModal'

type ImageSliderModalDataType = {
  src: string
}

type ImageSliderModalProps = {
  modalProps: ModalPropsType<ImageSliderModalDataType>
}

const ImageSliderModal = ({ modalProps }: ImageSliderModalProps) => {
  return (
    <div className="carousel w-full">
      {/*<div id="slide1" className="carousel-item relative w-full">*/}
      {/*  <img src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />*/}
      {/*  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">*/}
      {/*    <a href="#slide4" className="btn-circle btn">*/}
      {/*      ❮*/}
      {/*    </a>*/}
      {/*    <a href="#slide2" className="btn-circle btn">*/}
      {/*      ❯*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div id="slide2" className="carousel-item relative w-full">*/}
      {/*  <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />*/}
      {/*  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">*/}
      {/*    <a href="#slide1" className="btn-circle btn">*/}
      {/*      ❮*/}
      {/*    </a>*/}
      {/*    <a href="#slide3" className="btn-circle btn">*/}
      {/*      ❯*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div id="slide3" className="carousel-item relative w-full">*/}
      {/*  <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />*/}
      {/*  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">*/}
      {/*    <a href="#slide2" className="btn-circle btn">*/}
      {/*      ❮*/}
      {/*    </a>*/}
      {/*    <a href="#slide4" className="btn-circle btn">*/}
      {/*      ❯*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div id="slide4" className="carousel-item relative w-full">*/}
      {/*  <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />*/}
      {/*  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">*/}
      {/*    <a href="#slide3" className="btn-circle btn">*/}
      {/*      ❮*/}
      {/*    </a>*/}
      {/*    <a href="#slide1" className="btn-circle btn">*/}
      {/*      ❯*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  )
}

export default ImageSliderModal

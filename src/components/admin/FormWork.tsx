import { useForm } from 'react-hook-form'
import classNames from 'classnames'

const FormWork = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  return (
    <form className="rounded-box flex h-[50%] w-[50%] flex-col bg-base-300 p-[20px]">
      <span className="text-xl font-bold">작품 등록</span>
      <div>
        <label htmlFor="siteName" className="label">
          <span className="label-text text-base-content ">작품 이름</span>
        </label>
        <input
          type="text"
          className={classNames('input-bordered  input w-full', {
            'border-error': errors.siteName
          })}
          placeholder="작품이름을 입력해주세요."
          {...register('siteName', {
            required: true
          })}
        />
      </div>
      <div>
        <label htmlFor="siteName" className="label">
          <span className="label-text text-base-content ">작품</span>
        </label>
        <input
          type="text"
          className={classNames('input-bordered  input w-full', {
            'border-error': errors.siteName
          })}
          placeholder="사이트 이름을 입력해주세요."
          {...register('siteName', {
            required: true
          })}
        />
      </div>
    </form>
  )
}

export default FormWork

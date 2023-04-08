import { useQuery } from 'react-query'
import { getWorks } from '@/api/works'

const useWorkContainer = () => {
  const { data: works } = useQuery('works', getWorks)
  return { works }
}

export default useWorkContainer

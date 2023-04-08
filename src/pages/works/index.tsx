import { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/common/Layout'
import { useQuery } from 'react-query'
import { getWorks } from '@/api/works'

const PageWorks: NextPage = () => {
  const { data: works } = useQuery('works', getWorks)

  return (
    <Layout>
      <section className="grid h-screen w-full grid-cols-2 gap-[15px] overflow-y-scroll">
        {works?.map((work) => {
          return (
            <Link
              className="relative h-[45%] w-full text-transparent hover:text-white"
              href={{
                pathname: 'works/[id]',
                query: {
                  id: work.id
                }
              }}
              key={work.id}>
              <Image className="object-cover" fill src={work.representativeImage} alt={work.title} />
              <span className="absolute bottom-[30px] left-[30px] text-xl font-bold ">{work.title}</span>
            </Link>
          )
        })}
      </section>
    </Layout>
  )
}

export default PageWorks

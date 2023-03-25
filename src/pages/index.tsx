import React from 'react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <section>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://freight.cargo.site/w/2388/q/75/i/fe85d7d5d0ad14b1fea2158c7b579b8d51fa0cad0bb6105fced7be937b1ec01d/--.png")`
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-35 font-bold">Yeju</h1>
            <p className="mb-5 text-10">
              {
                "Welcome to Yejoo's site. Please take your time and enjoy it.Welcome to Yejoo's site. Please take your timeand enjoy it."
              }
            </p>
          </div>
        </div>
      </div>
      {/*<div className="relative h-[500px] w-full">*/}
      {/*  <Image*/}
      {/*    src={*/}
      {/*      'https://freight.cargo.site/w/2388/q/75/i/fe85d7d5d0ad14b1fea2158c7b579b8d51fa0cad0bb6105fced7be937b1ec01d/--.png'*/}
      {/*    }*/}
      {/*    fill*/}
      {/*    className="object-contain"*/}
      {/*    alt="작품 그림"*/}
      {/*  />*/}
      {/*</div>*/}
      {/*<div className="relative h-[500px] w-full">*/}
      {/*  <Image*/}
      {/*    src={*/}
      {/*      'https://freight.cargo.site/w/2388/q/75/i/fe85d7d5d0ad14b1fea2158c7b579b8d51fa0cad0bb6105fced7be937b1ec01d/--.png'*/}
      {/*    }*/}
      {/*    fill*/}
      {/*    className="object-contain"*/}
      {/*    alt="작품 그림"*/}
      {/*  />*/}
      {/*</div>*/}
    </section>
  )
}

export default Home

import DefaultLayout from '../../layout/DefaultLayout'
import './styles.css'

import { Trending } from './components/Trending.component'
import { Popular } from './components/Popular.component'
import { TopRated } from './components/TopRated.component'
import { useRef } from 'react'

const Home = () => {
  const ref = useRef()

  console.log(ref)

  return (
    <DefaultLayout>
      {/* <!-- ====== Calendar Section Start ====== --> */}
      <div
        className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
        ref={ref}
      >
        <div className="w-full relative">
          <img
            className="w-full h-[20rem] object-cover"
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2659&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="absolute center ">
            <h1 className="text-white text-6xl font-bold">Welcome.</h1>
            <h2 className="text-white text-4xl font-medium">
              Millions of movies, TV shows and people to discover. Explore now.
            </h2>
          </div>
        </div>
        <Trending />
        <Popular />
        <TopRated />
      </div>
    </DefaultLayout>
  )
}

export default Home

import React, { useState, ReactNode } from 'react'
import Header from '../components/Header/index'

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 min-h-screen">
              {children}
            </div>
            <h5 className="text-center my-4">
              © 2024 MUHAMMAD ALVY EKA FAUZI
            </h5>
          </main>
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout

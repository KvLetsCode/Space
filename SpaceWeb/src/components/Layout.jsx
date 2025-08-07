import { Outlet } from "react-router-dom"
import MainNavigation from "./MainNavigation"


function Home() {
  return (
      <div className="bg-black text-white">
          <MainNavigation />
          <Outlet />
    </div>
  )
}

export default Home
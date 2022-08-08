import { lazy } from "react"

const HomePage = lazy(() => import("./pages/Home/index"))

function App() {
  return (
    <HomePage />
  )
}

export default App

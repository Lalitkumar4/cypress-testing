import "./App.css"
import SideNav from "./components/SideNav/SideNav"
import Habit from "./components/Habit/Habit"
import Accomplishment from "./components/Accomplishment/Accomplishment"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Rewards from "./components/Rewards/Rewards"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App-container">
          <SideNav />
          <Routes>
            <Route path="/habits" element={<Habit />} />
            <Route path="/accomplishments" element={<Accomplishment />} />
            <Route path="/rewards" element={<Rewards />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

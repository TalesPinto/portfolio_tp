import "./App.css"
import { BrowserRouter } from "react-router-dom"
import Drawer from "./components/Drawer.jsx"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Drawer />
      </div>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./Layout"
import Display from "./pages/Display"
import Edit from "./pages/Edit"
import Insert from "./pages/Insert"
import Modify from "./pages/ModifyData"
import Search from "./pages/search"
import SearchbyName from "./pages/SearchByName"
import Home from "./pages/Home"


function App() {

  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Layout/>} >``
      <Route index element={<Home/>}/>
      <Route path="display" element={<Display/>}/>
      <Route path="Insert" element={<Insert/>}/>
      <Route path="Edit" element={<Edit />} />
      <Route path="editrec/:myid" element={<Modify />} />
      <Route path="search" element={<Search/>} />
      <Route path="searchbyname" element={<SearchbyName/>} />


      



     







      </Route>



    </Routes>
    
    
    
    </BrowserRouter>
    
   
    </>
  )
}

export default App

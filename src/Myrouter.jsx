import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import App from './App';
import { Searchtype } from './page/Search';


export const Myrouter = () => {
  return (
   // eslint-disable-next-line react/jsx-no-undef
   <BrowserRouter>
<Routes>
<Route path='/app' element={<App/>}/>
<Route path='/search' element={<Searchtype/>}/>
</Routes>

   </BrowserRouter>
  )
}

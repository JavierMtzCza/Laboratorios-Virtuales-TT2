import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import './index.css'
import 'semantic-ui-css/semantic.min.css'

import root from "./Root.jsx"

  
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={root} />
)

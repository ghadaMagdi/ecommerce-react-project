import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AllAbout from './About/AllAbout';
import AllProducts from './Products/AllProducts' ;

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import AllDownload from './Download/AllDownload';
import AllSingleProduct from './SingleProduct/AllSingleProduct';
import { AllData } from './Data/AllData';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'about',
    element: <AllAbout />,
  },
   {
    path: 'download',
    element: <AllDownload />,
  },
 {
    path: 'singleproduct/:id',
    element: <AllSingleProduct />,
},
   {
    path: 'products',
    element: <AllProducts />,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
<AllData>
    <RouterProvider router={router} />
 </AllData> 
 );

reportWebVitals();
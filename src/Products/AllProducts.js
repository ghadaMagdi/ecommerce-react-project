import React, { useEffect, useState } from 'react'
import Navbar from '../Home/Navbar'
import { getValue } from '@testing-library/user-event/dist/utils';
import { Link } from 'react-router';
import axios from 'axios';
function AllProducts() {
    const [text,setText] = useState([]);
    const [search,setSearch] =  useState(0);
   
useEffect(() => {
    axios.get("https://dummyjson.com/products")
        .then((Element) => {
            setText(Element.data.products);
        })
}, []);
        const getValue = (event)=>{
             setSearch(event.target.value);
        }

  return (
    <div>
       <Navbar></Navbar>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <div className='container'>
         <div className='row'>
            <div className='col-md-10 m-auto'>
               <input
    onChange={getValue}
    className='form-control mb-4'
    placeholder='Search'
               />
            </div>
            {text .map( (item)=>{
                return search==0?(
                    <div className='col-md-4 text-center mb-5'>
                        <img src={item.images[0]} className='w-100'></img>
                        <h5>{item.title}</h5>
                        <h5>{item.brand}</h5>
                        <h5>{item.price}$</h5>
                        <h5>{item.id}</h5>
                        <Link to={`/singleproduct/${item.id}`} className='btn btn-dark btn-block'>Details</Link>
                    </div>

                ):item.id == search?(
                      <div className='col-md-4 text-center mb-5'>
                        <img src={item.images[0]} className='w-100'></img>
                        <h5>{item.title}</h5>
                        <h5>{item.brand}</h5>
                        <h5>{item.price}$</h5>
                        <h5>{item.id}</h5>
                    </div>
                    
                ): item.title.toUpperCase().includes(search.toUpperCase())?(
                     <div className='col-md-4 text-center mb-5'>
                        <img src={item.images[0]} className='w-100'></img>
                        <h5>{item.title}</h5>
                        <h5>{item.brand}</h5>
                        <h5>{item.price}$</h5>
                        <h5>{item.id}</h5>
                    </div>
                ):null
            })}
         </div>
       </div>
    </div>
  )
}

export default AllProducts
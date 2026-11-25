import React, { useEffect, useState } from 'react'
import Navbar from '../Home/Navbar'
import { useParams } from 'react-router'
import axios from 'axios';
import { Link } from 'react-router';

function AllSingleProduct() {
    const [text,setText] = useState({});
    const { id }= useParams();
    useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
        .then((Element) => {
            setText(Element.data);
        })
}, []);
  
    return (
    <div>
      <Navbar/>
       <br/>
       <br/>
       <br/>
       <br/>
       <div>
    

    <div className='container'>
        <div className='row'>
            <div className='col-md-6 text-center'>
                <img src={text.images} className='w-75'></img>
            </div>

            <div className='col-md-6 text-center mt-5 pt-5'>
                <h4>Name:{text.title}</h4>
                <h6 className="mt-4">Brand:{text.brand}</h6>
                <h6 className="mt-4">Category:{text.category}</h6>
                <h6 className="mt-4">Stock:{text.stock}</h6>
                <h6 className="mt-4">Discount:{text.discountPercentage}%</h6>
                <h6 className="mt-4">Rating:{text.rating}of 5</h6>
                <h6 className="mt-4">Price:{text.price}$</h6>
                <h6 className="mt-4">ID:{text.id}</h6>

                <Link to="/products" className='btn btn-dark btn-block'>Back</Link>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default AllSingleProduct
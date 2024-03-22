'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
const Page = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/product')
            .then(res => {
                if (res?.status === 200) {
                    setProducts(res?.data)
                } else {
                    window.alert("Data is not fetching")
                }
            });
    }, []);

    return (
        <div className="container">
            <div className="flex flex-wrap gap-5 items-center justify-center">
                {products?.map((item:any)=>(
                <div key={item.ID} className="card w-96 bg-base-100 border shadow-xl">
                    <figure><img className='w-full' src={item.IMG} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.BRAND}</h2>
                        <p>MODEL : {item.MODEL}</p>
                        <p>IMEI : {item.IMEI}</p>
                        <p>PRICE : {item.PRICE}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-success">Buy Now</button>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Page
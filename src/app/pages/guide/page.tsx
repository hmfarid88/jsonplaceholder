import React from 'react'
import { FaRegHandPointDown } from "react-icons/fa";
const Page = () => {
    return (
        <div className="container">

            <div className='flex flex-col items-center'>
                <div className='card w-[800px] p-4'>
                    <h1 className='text-3xl font-bold'>Guide</h1>
                    <p className='pt-4'>Below you'll find examples using Fetch API but you can JSONPlaceholder with any other language.</p>
                    <p className='pt-4'>You can copy paste the code in your browser console to quickly test JSONPlaceholder.</p>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <div className='card'>
                    <h1 className='text-xl font-bold p-4'>Getting a resource</h1>
                    <div className="mockup-code w-[800px] p-4">
                        <pre><code className='text-accent'>fetch</code><code className='text-yellow-100'>('https://jsonplaceholder.typicode.com/posts/1')</code></pre>
                        <pre className='px-4'><code className='text-yellow-100'>.</code><code className='text-accent'>then</code><code className='text-yellow-100'>((response) ={'>'} response.json())</code></pre>
                        <pre className='px-4'><code className='text-yellow-100'>.</code><code className='text-accent'>then</code><code className='text-yellow-100'>((json) ={'>'} console.log(json));</code></pre>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center mt-5 mb-5'>
                <div className="card w-[800px]">
                    <div className='label w-[85px]'><FaRegHandPointDown className='text-yellow-200' />Output</div>

                    <div className="mockup-code w-[800px] mt-4 p-4">
                        <pre><code className='text-white'>{"{"}</code></pre>
                        <pre className='px-4'><code className='text-red-600'>id</code><code className='text-white p-2'>:</code><code className='text-purple-600'>1</code><code className='text-white'>,</code></pre>
                        <pre className='px-4'><code className='text-red-600'>title</code><code className='text-white p-2'>:</code><code className='text-white'>'...'</code><code className='text-white'>,</code></pre>
                        <pre className='px-4'><code className='text-red-600'>body</code><code className='text-white p-2'>:</code><code className='text-white'>'...'</code><code className='text-white'>,</code></pre>
                        <pre className='px-4'><code className='text-red-600'>userId</code><code className='text-white p-2'>:</code><code className='text-purple-600'>1</code></pre>
                        <pre><code className='text-white'>{"}"}</code></pre>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
import React, { useEffect, useState } from 'react'
import LoadData from '../LoadData/LoadData';
import Cart from '../Carts/Cart';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function User() {
  const [blogs, setBlogs] = useState([]);

  // control the bookmarked state
  const [datas, setDatas] = useState([]);

  // total read time state
  const [totalReadTime, setTotalReadTime] = useState(0);

  // useEffect using for load json data from public folder
  useEffect(() => {
    fetch("fakedb.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  // // Handle bookmarked function
  const handleBookmarked = (blog) => {
    // Check if the blog has already been bookmarked
    const alreadyBookmarked = datas.some((data) => data.id === blog.id);

    if (alreadyBookmarked) {
  
      toast.error("You Have Already Bookmarked This Blog");

      const newDatas = [...datas, blog];
      setDatas(newDatas);
    } else {
      // Add the blog to the datas array
      const newDatas = [...datas, blog];
      setDatas(newDatas);
    }
  };

  // handleReadTime function
  const handleReadTime = (blog) => {
    const newTotalReadTime = totalReadTime + blog.read_time;
    setTotalReadTime(newTotalReadTime);
  };



  return (
    <React.Fragment>

    <div>
    <div className=' container row d-flex flex-wrap mt-5'>

<div className='col-md-8'>
 
   {blogs.map((blog) => (
      <LoadData
        key={blog.id}
        blog={blog}
        handleBookmarked={handleBookmarked}
        handleReadTime={handleReadTime}
      />
    ))}

</div>
<div className='cart-container col-md-4'>
  <Cart 
   datas={datas} totalReadTime={totalReadTime}

  />

</div>      
</div>
<div className='bg-light container'>
  <div>
    <h4 className='text-center mb-5'>Question</h4>
  </div>
  <div className='mb-5'>
    <h5>Question 1: What is the difference between props and state</h5>
    <article>
      <span className='fw-bold'>Ans :</span>  props are used to pass data down from a parent component to a child component, while state is used to manage the internal state and behavior of a component.
    </article>
  </div>
    <div className='mb-5'>
      <h5>Question 2: How to work useState</h5>
      <article>
      <span className='fw-bold'>Ans :</span>
      useState returns an array with two elements: the current state value, and a function to update the state. It is important to note that when using useState, React will merge the new state with the old state, so you don't have to worry about updating the entire state object manually.

      </article>

    </div>
    <div className='mb-5'>
      <h5>Question 3:What is the way to load data using useEffect? </h5>
      <article>
      <span className='fw-bold'>Ans :   </span>the useEffect function is executed and the data is fetched from the API. Once the data is received, the data state variable is updated, and the component re-renders to display the fetched data.

      </article>

    </div>
    <div className='mb-5'>
      <h5>Question 4:How does React work? </h5>
      <article>
      <span className='fw-bold'>Ans : </span> React is a JavaScript library that helps you build user interfaces. It works by creating components that represent different parts of your user interface, and then using a virtual representation of the DOM to update only the parts of the UI that need to change. This makes React fast and efficient. React also provides lifecycle methods that let you run code at specific times in a component's life, like when it's first loaded or about to be removed. Overall, React is a powerful tool that helps you create fast and dynamic user interfaces

      </article>

    </div>

</div>
    </div>

    </React.Fragment>
  )
}

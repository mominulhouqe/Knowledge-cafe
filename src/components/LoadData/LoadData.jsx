import React from 'react'
import './LoadData.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'





export default function LoadData(props) {
    const { id, img, user_img, author, publish_date, blog_title, read_time } = props.blog;

     // get the handleBookmarked from props
  const handleBookmarked = props.handleBookmarked;

  // get the handleReadTime from props
  const handleReadTime = props.handleReadTime;


    return (
        <div> 
                <div className='card col-md-8 mb-5'>
                    <img src={img} className='card-img-top img-fluid' alt="" />
                    <div className='d-flex align-items-center justify-content-between p-2'>
                        <div className='d-flex mt-2'>
                            <img src={user_img} className='img-fluid user-img rounded-circle' alt="" />
                           <div className='mx-2'>
                           <h5 >{author}</h5>
                            <p className='text-muted small'>{publish_date} </p>
                           </div>
                        </div>
                        <div className='d-flex alig'>
                            <p>{read_time}min read</p>
                            <button onClick={()=> handleBookmarked(props.blog)} ><FontAwesomeIcon icon={faBookmark} /> 

                            </button>
                        </div>
                    </div>
                    <div className='card-body'>
                        <h4 className='card-title'>{blog_title}</h4>
                        <p className='text-muted small' >#beginners #programming</p>
                       <button onClick={() => handleReadTime(props.blog)}  className='text-decoration-underline bg-white text-primary'>Mark as read</button>

                    </div>
                </div>    
        </div>
    )
}

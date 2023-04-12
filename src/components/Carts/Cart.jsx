import React from 'react';

export default function Cart({ datas, totalReadTime }) {
  return (
    <div>
      <h4 className='border p-3 text-center text-primary rounded'>Spent time on read: {totalReadTime} Min</h4>

      <div className='bookmarks  p-3 text-center'>
        <h4 className='fw-bold bg-light p-3 rounded'>Bookmarked Blogs: {datas.length}</h4>
        {datas.map((data) => (
          <p className='text-center bg-light p-4 mt-2' key={data.id}>{data.blog_title}</p>
        ))}
      </div>
    </div>
  );
}


import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <div>
            <nav className='navbar navbar-light bg-light'>
                <div className='container-fluid d-flex'>
                    <a className='navbar-brand'>Knowledge Cafe</a>
                    <img src="g.jpg" className='img-fluid brand-img rounded-circle' alt="" />
                </div>
            </nav>
        </div>
    )
}

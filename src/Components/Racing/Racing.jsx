import React from 'react';
import { Link } from 'react-router-dom';
import styleSor from '../Sortby/Sortby.module.css'


export default function Racing({ carryCate }) {
  console.log(carryCate)
  return (
    <>
    <div className={ `${styleSor.cardHover} card col-12 col-md-6 col-lg-4 col-xl-3 bg-transparent `}>
        <Link className=' nav-link' to={`/details/${carryCate.id}`}>
        
              <img src={carryCate.thumbnail} className="card-img-top w-100" alt="game"/>
          <div className="card-body  ">
                  <div className='d-flex justify-content-between '> 
                    <h4 className={`${styleSor.title} "card-title text-nowrap"`}>{carryCate.title.length > 15 ? carryCate.title.slice(0, 10)+`...` : carryCate.title}</h4>
                  <span className={`${styleSor.free} text-uppercase d-flex align-items-center rounded px-2`}>free</span>
                  </div>
                  <p className=' text-muted'>{carryCate.short_description.slice(0, 20)}{`...`}</p>
                  <div className=' d-flex justify-content-between'>
                    <div>
                      <i className="fa-solid fa-square-plus"></i>
                    </div>

                    <div>
                      
                      <span className={`${styleSor.genre} badge badge-secondary text-dark me-1 py-0 px-2`}>{carryCate.genre}</span>
                      <i className="fa-brands fa-windows"></i>
                    </div>                


                  </div>

          </div>
        
        
        
        
        </Link>
      

    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

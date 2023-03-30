import React from 'react'
import { Link } from 'react-router-dom'
import stylePc from '../Platforms/Platforms.module.css'

export default function Pc({loadItem}) {
  // console.log(loadItem)
  
 

  return (<>
    
      <div className={ `${stylePc.cardHover} card col-12 col-md-6 col-lg-4 col-xl-3 bg-transparent `}>
      <Link className=' nav-link' to={`/details/${loadItem.id}`}>
      <img src={loadItem.thumbnail} className="card-img-top w-100" alt="game"/>
          <div className="card-body  ">
                  <div className='d-flex justify-content-between '> 
                    <h4 className={`${stylePc.title} "card-title text-nowrap"`}>{loadItem.title.length > 15 ? loadItem.title.slice(0, 10)+`...` : loadItem.title}</h4>
                  <span className={`${stylePc.free} text-uppercase d-flex align-items-center rounded px-2`}>free</span>
                  </div>
                  <p className=' text-muted'>{loadItem.short_description.slice(0, 20)}{`...`}</p>
                  <div className=' d-flex justify-content-between'>
                    <div>
                      <i className="fa-solid fa-square-plus"></i>
                    </div>

                    <div>
                      
                      <span className={`${stylePc.genre} badge badge-secondary text-dark me-1 py-0 px-2`}>{loadItem.genre}</span>
                      <i className="fa-brands fa-windows"></i>
                    </div>                


                  </div>

          </div>
      
      
      
      </Link>
      

    </div>
    
    
  


    
    
    
    </>
  )
}

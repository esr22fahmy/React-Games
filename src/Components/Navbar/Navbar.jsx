import React from 'react'
import { Link } from 'react-router-dom'
import styleNav from './Navbar.module.css'
import imgNav from '../../images/logo.png'


export default function Navbar({dataToken ,funLogout}) {
    return (<>
        
<nav className="navbar navbar-expand-lg  bg-transparent shadow py-2 ">
  <div className="container text-capitalize">
     <Link className="navbar-brand text-light " to="home">
        <img className={`${styleNav.imgNavS}`} src={imgNav} alt=""/>
            game over
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {dataToken?<ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
        <li className="nav-item ">
          <Link className="nav-link active text-light" aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to='all'>all</Link>
        </li>
        <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle text-light" to="platforms" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Platforms 
              </Link>
              <ul class="dropdown-menu text-lowercase">
                <li><Link className="dropdown-item " to='platforms/pc'> pc</Link></li>
                <li><Link className="dropdown-item" to='platforms/browser'>browser</Link></li>
              </ul>
        </li>

         <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle text-light" to="sortby" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                sortby 
              </Link>
              <ul class="dropdown-menu text-lowercase">
                <li><Link className="dropdown-item " to='sortby/release-date'> release-date</Link></li>
                <li><Link className="dropdown-item" to='sortby/popularity'>popularity</Link></li>
                <li><Link className="dropdown-item" to='sortby/alphabetical'>alphabetical</Link></li>
                <li><Link className="dropdown-item" to='sortby/relevance'>relevance</Link></li>
              </ul>
        </li>      
              
        <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle text-light" to="categories" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                categories 
              </Link>
              <ul class="dropdown-menu text-lowercase">
                <li><Link className="dropdown-item " to='categories/racing'>racing</Link></li>
                <li><Link className="dropdown-item" to='categories/sports'>sports</Link></li>
                <li><Link className="dropdown-item" to='categories/social'>social</Link></li>
                <li><Link className="dropdown-item" to='categories/shooter'>shooter</Link></li>
                <li><Link className="dropdown-item" to='categories/open-world'>open-world</Link></li>
                <li><Link className="dropdown-item" to='categories/zombie'>zombie</Link></li>
                <li><Link className="dropdown-item" to='categories/fantasy'>fantasy</Link></li>
                <li><Link className="dropdown-item" to='categories/action-rpg'>action-rpg</Link></li>
                <li><Link className="dropdown-item" to='categories/action'>action</Link></li>
                <li><Link className="dropdown-item" to='categories/flight'>flight</Link></li>
                <li><Link className="dropdown-item" to='categories/battle-royale'>battle-royale</Link></li>

              </ul>
        </li> 


      </ul>:''}
          
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0  ">
              {dataToken?<li className="nav-item">
                <Link className="nav-link text-light" onClick={funLogout} >logout</Link>
              </li> : <>
        <li className="nav-item">
          <Link className="nav-link text-light" to="">login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="join">join free</Link>
        </li> 
              
        </>}
        
             
      
      
      </ul>    
          

 
    </div>
  </div>
</nav>
     
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styleAll from './All.module.css'
import {Helmet} from "react-helmet";


export default function ALL() {
  useEffect(() => {
    getApiGames()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let [dataGames, setDataGames] = useState([]);
  let [moreGames, setMoreGames] = useState(20);


  let getApiGames = async() => {
    
let options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  headers: {
    'X-RapidAPI-Key': 'b56e835d1cmsh00c3d0a431d35fap186469jsn5d5d04fcfa2b',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

   await axios.request(options).then(function (response) {
      setDataGames(response.data)
          console.log(dataGames);

}).catch(function (error) {
});

  }

  function clickBut() {
    setMoreGames(moreGames+20)
  }



  return (<>
    
    <Helmet>
                <meta charSet="utf-8" />
                <title>All</title>
      </Helmet>
    
    <section className=' container'>
    
      <div className='row g-4 pt-4'>
        {dataGames.slice(0,moreGames).map((gam ,index) =>
      
          <div key={index} className={ `${styleAll.cardHover} card col-12 col-md-6 col-lg-4 col-xl-3 bg-transparent `}>
            <Link className=' nav-link' to={`/details/${gam.id}`} >
              <img src={gam.thumbnail} className="card-img-top w-100" alt="game"/>
            <div className="card-body  ">
              <div className='d-flex justify-content-between '> 
                <h4 className={`${styleAll.title} card-title text-nowrap`}>{gam.title.length > 15 ? gam.title.slice(0, 10)+`...` : gam.title}</h4>
              <span className={`${styleAll.free} text-uppercase d-flex align-items-center rounded px-2`}>free</span>
              </div>
              <p className=' text-muted'>{gam.short_description.slice(0, 20)}{`...`}</p>
              <div className=' d-flex justify-content-between'>
                <div>
                  <i className="fa-solid fa-square-plus"></i>
                </div>

                <div>
                  
                  <span className={`${styleAll.genre} badge badge-secondary text-dark me-1 py-0 px-2`}>{gam.genre}</span>
                  <i className="fa-brands fa-windows"></i>
                </div>                


              </div>

            </div>
            </Link>


          </div>
      
      
      )}
      </div>


      <div className=' text-center'>

        
          <button onClick={clickBut} className="btn btn-outline-secondary py-2 my-4 ">More Games
            <i className="fa-solid fa-angle-right ms-2"></i>      
          </button>

      </div>
 
    </section>
  </>
  )
}


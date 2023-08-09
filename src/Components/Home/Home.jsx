import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styleHome from './Home.module.css'




export default function Home() {
  useEffect(() => {
    document.title='Home'
    getApiGames()


  }, []);
  const [dataGames, setDataGames] = useState([]);


  let getApiGames = async() => {
    
let options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  headers: {
    'X-RapidAPI-Key': 'b56e835d1cmsh00c3d0a431d35fap186469jsn5d5d04fcfa2b',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

    axios.request(options).then(function (response) {
      setDataGames(response.data.splice(0,3))
          // console.log(dataGames);

}).catch(function (error) {
});

  }



  return (<>
    
    <section className={styleHome.HomeImg}>
      <div >

        <div className=' text-center'>
          <h1 className={`${styleHome.fantH1} `}>Find & track the best <span className={`${styleHome.textBlue}`}>free-to-play</span> games!</h1>
          <p className='mt-2 text-muted'>Track what you've played and search for what to play next! Plus get free premium loot!</p>
          {/* <p><a role="button" className="btn btn-outline-secondary btn-md ml-0" href="#/games/all">Browse Games</a></p> */}
      
        </div>
        

     </div>


    </section>

    
    <section className=' container'>
      <h3 className={styleHome.robot} >
        <i className="fa-solid fa-robot"></i>
        Personalized Recommendations
      </h3>

      <div className='row g-4 pt-4 '>
        {dataGames.map((gam ,index) =>
      
          <div key={index} className={ `${styleHome.cardHover} card col-md-4 bg-transparent `}>
            <Link className=' nav-link' to={`/details/${gam.id}`}>
              <img src={gam.thumbnail} className="card-img-top w-100" alt="..."/>
              <div className="card-body d-flex justify-content-between ">
              <h4 className={`${styleHome.title} card-title`}>{gam.title}</h4>
              <span className={`${styleHome.free} text-uppercase d-flex align-items-center rounded px-2`}>free</span>
            </div>
            
            
            </Link>
          </div>
      
      
        )}
        
      </div>


    </section>


  </>
  )
}

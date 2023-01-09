import React, { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styleDet from "./Details.module.css";

export default function Details() {
    

     let paramsId = useParams();
    // console.log(paramsId)

     useEffect(() => {
      
         getDetails();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
   
    let [ItemDetails, setItemDetails] = useState([]);
   


let getDetails = async () => {
    
let options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
  params: {id:paramsId.id},
  headers: {
    'X-RapidAPI-Key': 'b56e835d1cmsh00c3d0a431d35fap186469jsn5d5d04fcfa2b',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

await axios.request(options).then(function (response) {
     setItemDetails(response.data);
  // console.log(ItemDetails);
  // console.log(ItemDetails.minimum_system_requirements.os);
}).catch(function (error) {
	console.error(error);
});
    
    


}

   let styleBgImge ={
       backgroundImage: `url(https://www.freetogame.com/g/${paramsId.id}/background.jpg)`,
       backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '100vh',
      backgroundPosition: 'center center',
      
  }
 
  return (
      <>
          
        <section className='imgLayer flex-nowrap ' style={styleBgImge}>

              <div className='Layer'>
                  <div className='container pt-5 '>
                       <div className='row'>
                          <div className=' col-md-4'>
                             <img src={ItemDetails.thumbnail} className="w-100  rounded-2" alt="game"/>
                              <div className='pt-3  d-flex justify-content-between  px-2 py-3   '>
                                <button className={`btn  text-uppercase py-2   ${styleDet.btnFree} `}>free</button>
                  <a className={`${styleDet.btnPlay}  rounded-2  text-decoration-none text-white  d-flex align-items-center`}
                    href={`${ItemDetails.freetogame_profile_url}`} target='_blank' rel="noreferrer">
                                    <span className=' fw-bold pe-1'>PLAY NOW </span>
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                 </a>

                              </div>

                          </div>
                          <div className=' col-md-8'>
                
                <h1 className={`${styleDet.fontWi} h2 `}>{ItemDetails.title}</h1>
                <h5 className={`${styleDet.fontWiAbout} pt-2 text-capitalize`}>{`about ${ItemDetails.title}`}</h5>
                <p className={`${styleDet.textP} text-lowercase`}>{ItemDetails.description}</p>
                <h5 className={`${styleDet.fontWiAbout}`}>Minimum System Requirements</h5>
                <ul className=' list-unstyled ms-2'>
                  <li className='py-2'><strong>graphics : </strong> {ItemDetails.minimum_system_requirements?.graphics}</li>
                  <li className='py-2'><strong>memory : </strong> {ItemDetails.minimum_system_requirements?.memory }</li>
                  <li className='py-2'><strong>os : </strong> {ItemDetails.minimum_system_requirements?.os }</li>
                  <li className='py-2'><strong>processor : </strong> {ItemDetails.minimum_system_requirements?.processor }</li>
                  <li className='py-2'><strong>storage : </strong> {ItemDetails.minimum_system_requirements?.storage }</li>

                </ul>
                <h4 className={`${styleDet.fontWiAbout} pt-3`}>Overwatch 2 Screenshots</h4>
                <div id="carouselExampleInterval" className={`${styleDet.cur} carousel slide owl-carousel`}   data-bs-ride="carousel">
                        <div className="carousel-inner">
                          <div className="carousel-item active" data-bs-interval="200">
                            <img src={`${ItemDetails.screenshots?.[0]['image']}`} class="d-block w-100" alt="img1"/>
                          </div>
                          <div className="carousel-item" data-bs-interval="200">
                            <img src={`${ItemDetails.screenshots?.[1]['image']}`}  class="d-block w-100" alt="img2"/>
                          </div>
                          <div className="carousel-item" data-bs-interval="200">
                            <img src={`${ItemDetails.screenshots?.[2]['image']}`} class="d-block w-100" alt="img3"/>
                          </div>
                        </div>
                        <button className="carousel-control-prev  " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                          <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                          <span className="visually-hidden ">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                </div>
                <h2 className={`${styleDet.fontWiAbout} py-4`}>Additional Information</h2>
                {/* row footer */}
                <div className='row'>
                  <div className="col-md-4">
                  <span className=' text-capitalize text-muted'>title</span>
                  <p className='mb-2 '>{ItemDetails.title}</p>
                  </div>

                  <div className=" col-md-4">
                  <span className=' text-capitalize text-muted'>developer</span>
                  <p>{ItemDetails.developer}</p>
                  </div>

                  <div className=" col-md-4">
                  <span className=' text-capitalize text-muted'>publisher</span>
                  <p>{ItemDetails.publisher}</p>
                  </div>

                  <div className=" col-md-4">
                  <span className=' text-capitalize text-muted'>release date</span>
                  <p>{ItemDetails.release_date}</p>
                  </div>

                  <div className=" col-md-4">
                  <span className=' text-capitalize text-muted'>genre</span>
                  <p>{ItemDetails.genre}</p>
                  </div>

                   <div className=" col-md-4">
                  <span className=' text-capitalize text-muted'>platform</span>
                  <p>{ItemDetails.platform}</p>
                  </div>

              </div>
              </div>
             
                          
                      </div>
                      


                  </div>
                  
              </div>


       </section>
          
        
      
      </>)
}

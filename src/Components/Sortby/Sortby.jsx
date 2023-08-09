/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import ReleaseDate from '../ReleaseDate/ReleaseDate';


export default function Sortby() {
  let { path } = useParams();
    let [dataSor, setDataSor] = useState([]);
  let [moreGames ,setMoreGames] = useState(20);


function sorFun() {
    if (path === 'release-date') { 
      getApipSortby("release-date"); 
      document.title = 'Release Date';

    } else if (path === 'popularity') {
      getApipSortby("popularity"); 
            document.title = 'Popularity';

    } else if (path === 'alphabetical') {
      getApipSortby("alphabetical"); 
            document.title = 'Alphabetical';

    } else if (path === 'relevance') {
      getApipSortby("relevance"); 
            document.title = 'Relevance';

  }
  }

  useEffect(() => {
    sorFun();

  // getApipSortby();
        
}, [])

  function clickBut() {
    setMoreGames(moreGames+20)
  }

let getApipSortby = async () => {

const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  params: {'sort-by':path},
  headers: {
    'X-RapidAPI-Key': 'b56e835d1cmsh00c3d0a431d35fap186469jsn5d5d04fcfa2b',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

  await axios.request(options).then(function (response) {
  // console.log(response.data);
  setDataSor(response.data);
  // console.log(dataSor);
}).catch(function (error) {
	console.error(error);
});
  
 
  

   }
  return (<>

    
    <div className=' container'>
      <div className='row g-4 pt-4 '>
        {sorFun()}{dataSor.slice(0, moreGames).map((sor, index) => <ReleaseDate key={index} carrySor={sor} />)}
        

      </div>


       <div className=' text-center'>
          <button onClick={clickBut} className="btn btn-outline-secondary py-2 my-4 ">More Games
            <i className="fa-solid fa-angle-right ms-2"></i>      
          </button>

      </div>

    </div>

  
  
  </>

  )
}

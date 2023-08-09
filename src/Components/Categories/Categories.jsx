import React from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Racing from '../Racing/Racing';



export default function Categories() {
  let { path } = useParams();
  let [DataCate, setDataCate] = useState([]);
  let [moreGames ,setMoreGames] = useState(20);

  // console.log(path)

  function cateFun() {
    if (path === 'racing') { 
      getApiCate("racing"); 
      document.title = 'Racing';

    } else if (path === 'sports') {
      getApiCate("sports"); 
        document.title = 'Sports';

    } else if (path === 'social') {
      getApiCate("social"); 
        document.title = 'Social';

    } else if (path === 'shooter') {
      getApiCate("shooter"); 
            document.title = 'Shooter';

    }else if (path === 'open-world') {
      getApiCate("open-world"); 
        document.title = 'Open World';

    }else if (path === 'zombie') {
      getApiCate("zombie"); 
                  document.title = 'Zombie';

    }else if (path === 'fantasy') {
      getApiCate("fantasy"); 
                  document.title = 'Fantasy';

    }else if (path === 'action-rpg') {
      getApiCate("action-rpg"); 
                  document.title = 'Action Rpg';

    } else if (path === 'action') {
      getApiCate("action"); 
                  document.title = 'Action';

    }else if (path === 'flight') {
      getApiCate("flight"); 
                  document.title = 'Flight';

    } else if (path === 'battle-royale') {
      getApiCate("battle-royale");
                  document.title = 'Battle Royale';

    }
  }
  useEffect(() => {
    cateFun();
  }, [])
  
  function clickBut() {
    setMoreGames(moreGames+20)
  }

let getApiCate = async () => {

let options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  params: {category: path},
  headers: {
    'X-RapidAPI-Key': 'b56e835d1cmsh00c3d0a431d35fap186469jsn5d5d04fcfa2b',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};
  await axios.request(options).then(function (response) {
    setDataCate(response.data);
	// console.log(DataCate);
}).catch(function (error) {
	// console.error(error);
});


  } 
  
  return (<>
    <div className='container'>
      <div className='row g-4 pt-4'>

        {cateFun()}{DataCate.slice(0, moreGames).map((cate, index) => <Racing key={index} carryCate={cate} />)}  

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

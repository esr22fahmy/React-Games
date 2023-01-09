/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect ,useState} from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';
import Pc from '../Pc/Pc'
// import Browser from '../Browser/Browser';

export default function Platforms() {
  let { path } = useParams();

  function FunPlat() {
    if (path === 'pc') { 
      getApipPlatform("pc"); 
      document.title = 'Pc';
    } else if (path === 'browser') {
      getApipPlatform("browser"); 
      document.title='Browser'


    }
  }

  useEffect(() => {
    FunPlat();
        
  }, [])

   function clickBut() {
    setMoreGames(moreGames+20)
  }

let [DataGames ,setDataGames] = useState([]);
let [moreGames ,setMoreGames] = useState(20);


let getApipPlatform = async () => {

let options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  params: {platform:path},
  headers: {
    'X-RapidAPI-Key': 'b56e835d1cmsh00c3d0a431d35fap186469jsn5d5d04fcfa2b',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

await axios.request(options).then(function (response) {
  setDataGames(response.data)
	// console.log(DataPc.length);
}).catch(function (error) {
	console.error(error);
});
  
   }
   

  return (
    <>
      <div className=' container'>
        <div className='row g-4 pt-4'>
              
          {FunPlat()}{DataGames.slice(0, moreGames).map((item, index) => <Pc key={index} loadItem={item} x={clickBut} />)}
          {/* {FunPlat()}{DataGames.slice(0, moreGames).map((item, index) => <Browser key={index} loadItem={item} />)} */}

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

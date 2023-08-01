import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CatFacts = () => {
    const [facts, setFacts] = useState([]);
    useEffect(()=> {
        fetchFacts();
    },[]);

    const fetchFacts = () => {
        axios
        .get("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2")
            .then((res)=>{
                console.log(res);
                setFacts(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    };

  return (
    <div>
      <h1>Cat Facts</h1>
      <div className='item-container'>
        {facts.map((data)=>(
            <div className='card' key={data._id}>
              <CatPics />
            {
              <h3>
                  {data.text}
              </h3>
            }
            </div>
        ))}
      </div>
    </div>
  );
};


const CatPics = () => {
  const [pics, setPics] = useState([]);

useEffect(()=> {
  fetchImgs();
},[]);

const fetchImgs =  () => 
{
  axios.get("https://api.thecatapi.com/v1/images/search?limit=1&api_key=live_yXHURVE08aT6wlL5RorH1FDHmt4rTyzfDVss87bZnVlXjX0BCDSmb3j7jRUa6IFC")
  .then((res)=>{
      console.log(res);
      setPics(res.data);
  })
  .catch((err)=>{
      console.log(err);
  });
};
  return (
    <div>
      <div className='item-container'>
        {pics.map((data)=>(
            <div className='card' key={data.sub_id}>
            <img alt="Cat pic" src={data.url}/>&nbsp;
            </div>
        ))}
      </div>
    </div>
  );

};

export default CatFacts;
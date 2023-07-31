import React, { useState, useEffect } from 'react';
import axios from 'axios';
const CatFacts = () => {
    const [facts, setFacts] = useState([]);

    useEffect(()=> {
        fetchFacts();
    },[]);
    const fetchFacts = () => {
        axios
        .get("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=50")
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
            <h3>{data.text}</h3>
            </div>
        ))}
      </div>
    </div>
  );
};
export default CatFacts;
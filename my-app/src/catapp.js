import { useState, useEffect } from 'react';
import * as React from 'react';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { Toolbar, Typography } from '@mui/material';
import catLogo from './catLogo.png';

const CatFacts = () => {
    const [facts, setFacts] = useState([]);
    useEffect(()=> {
        fetchFacts();
    },[]);

    const fetchFacts = () => {
        axios
        .get("https://meowfacts.herokuapp.com/?count=10")
            .then((res)=>{
                console.log(res);
                setFacts(res.data.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    };

  return (
    <div>
      <Box  sx={{ flexGrow: 1 }}>
      <Toolbar>
      <AppBar>
      <Avatar alt="cat" src={catLogo}>
      </Avatar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
      Cat Facts - Refresh for new facts and pics.
      </Typography>
      </AppBar>
      </Toolbar>
      </Box>
      <div className='item-container'>
        {
          facts.map((data)=>(
            <div className='card' key={data}>
              <CatPics />
            {
              <h3>
                  {data}
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
            <div className='card' key={data.id}>
            <img alt="Cat pic" src={data.url}/>&nbsp;
            </div>
        ))}
      </div>
    </div>
  );

};

export default CatFacts;
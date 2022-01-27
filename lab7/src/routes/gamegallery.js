import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../gamegallery.css'
import { Grid } from "@mui/material";
import { Rating } from "@mui/material";
import { Typography } from "@mui/material";

const testData = [{ id: 1, score: 5, img_url: "https://eu4.paradoxwikis.com/images/7/79/Sandbox-MP-trade.png" },
{ id: 2, score: 4, img_url: "https://eu4.paradoxwikis.com/images/f/f2/Sandbox-MP-religion.png" },
{ id: 3, score: 2.5, img_url: "https://eu4.paradoxwikis.com/images/6/67/Sandbox-MP-hre.png" },
{ id: 4, score: 4, img_url: "https://eu4.paradoxwikis.com/images/5/50/Sandbox-MP-government.png" },
{ id: 5, score: 1.5, img_url: "https://eu4.paradoxwikis.com/images/2/27/Sandbox-MP-beginnersguide.png" }
];

export default function GameGallery() {
  return (
    <ImageList images={testData} />
  );
}
const ImageList = (props) => (
  
  <Grid>
    {props.images.map(image => <ImageCard key={image.id} {...image} />)}
  </Grid>
);

const ImageCard = ({ img_url, score }) => (
  <div className="player-profile">
    <img
      src={img_url}
      className='euimage' />
    <div className='ratingbox'>
      <Typography component="legend">Image Score</Typography>
      <Rating name="read-only" value={score} readOnly />
    </div>
  </div>
);
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../playerlist.css'
import { Avatar } from "@mui/material";
import { Box } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FlagIcon from '@mui/icons-material/Flag';


const testData = [
    {id:1,nickname: "Hogotan", avatar_url: "https://cdn.discordapp.com/attachments/345752423903789067/936205505167237202/Pom-private03.png", country: "Aragon"},
    {id:2,nickname: "Zlewikk", avatar_url: "https://cdn.discordapp.com/attachments/345752423903789067/936205504663924796/channels4_profile.jpg", country: "Burgundy"},
	{id:3,nickname: "Bololo", avatar_url: "https://cdn.discordapp.com/attachments/345752423903789067/936205504907214888/unknown.png", country: "France"},
	{id:4,nickname: "Kiritek", avatar_url: "https://cdn.discordapp.com/attachments/345752423903789067/936205672754847744/unknown.png", country: "Hungary"},
    {id:5,nickname: "Cheron", avatar_url: "https://cdn.discordapp.com/attachments/345752423903789067/936205505448271882/49821.jpg", country: "Ottomans"},
  	{id:6,nickname: "Mistyczny", avatar_url: "https://cdn.discordapp.com/attachments/345752423903789067/936205733551280138/unknown.png", country: "Austria"},
];
export default function PlayerList() {
    return (
      <PlayCardList profiles={testData} />
    );
  }

  const PlayCardList = (props) => (
	<Box>
  	{props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
    </Box>
);

const Card = ({nickname,avatar_url,country}) => (
    <div className="player-profile">
      <Avatar
       src={avatar_url}
       className='avatar-profile'
       sx={{ width: 48, height: 48 }} />
      <div className="info">
        <div className="nickname"><AccountCircleIcon/>{nickname}</div>
        <div className="country"><FlagIcon />{country}</div>
      </div>
    </div>
);

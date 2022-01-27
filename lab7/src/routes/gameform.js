import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import '../gameform.css'
import { Autocomplete } from '@mui/material';
import { TextField } from '@mui/material';


export default function GameForm() {
  return (<main><PlayerForm onSubmit/></main>
  );
}


class PlayerForm extends React.Component {
  state = { playerName: '', playerExpirience: '',continentChoice:''}
  handleSubmit = (event) => {
    event.preventDefault();
    //Przykladowe zapytanie do api gdyby istniało
    /*let data = {
      playername:this.state.playerName,
      playerExpirience:this.playerExpirience,
      continentChoice:this.continentChoice
    }
     axios.post(`https://api.com/api/forms`,data)
    .catch((err) => console.log(err));*/
  }


  render() {
    return (
      <Form onSubmit={this.handleSubmit} className='formsu'> 
        <Form.Group>
          <Form.Label className="text-muted">Enter github name</Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g Kiritek"
            value={this.state.playerName}
            className='controlinput'
            onChange={event => this.setState({ playerName: event.target.value })}
            required
          />
        </Form.Group>
        <Form.Group  className='buttonGroupControll' >
          <Form.Label className="text-muted">What is your mp experience?</Form.Label>
          <ButtonGroup variant="contained"aria-label="outlined primary button group" className='buttongroupcontroll'>
            <Button
              value={this.state.playerExpirience}
              onClick={event => this.setState({ playerExpirience: "Low" })}>Low</Button>
            <Button
              value={this.state.playerExpirience}
              onClick={event => this.setState({ playerExpirience: "Medium" })}>Medium</Button>
            <Button
              value={this.state.playerExpirience}
              onClick={event => this.setState({ playerExpirience: "High" })}>High</Button>
          </ButtonGroup>
        </Form.Group>
        <Form.Group>
          <Form.Label className="text-muted">Chose continent on which You would be playing</Form.Label>
          <Autocomplete
            disablePortal
            value = {this.state.continentChoice}
            onChange={(event,value) => this.setState({continentChoice: value})}
            id="combo-box-demo"
            options={availableContinents}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Continent" />}
          />
        </Form.Group>
        <Button variant="outlined" type="submit">Submit</Button>

      </Form>
    );
  }
}
const availableContinents= [
  
    { label: 'Europe'},
    { label: 'Americas'},
    { label: 'Asia'},
    { label: 'Africa'},
  ];

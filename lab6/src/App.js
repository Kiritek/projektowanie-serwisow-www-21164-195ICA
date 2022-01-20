import './App.css';
import axios from 'axios'
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


const CardList = ({profiles}) => (
  <div>
    {profiles.map(profile => <Card key={profile.id} {...profile} />)}
  </div>
);

const Card = ({avatar_url,name,login}) => (
  <div className="github-profile col-xs-12  col-sm12 col-md-6 col-lg-4 col-sm12 col-xs-12">
    <img src={avatar_url} className='github-image' />
    <div className="info">
      <div className="name">{name}</div>
      <div className="nickname">{`@${login}`}</div>
    </div>
  </div>
);

class CardForm extends React.Component {
  state = { userName: '' };
  handleSubmit = async (event) => {
    event.preventDefault();
    await axios.get(`https://api.github.com/users/${this.state.userName}`)
    .then((res)=>this.props.onSubmit(res.data))
    .catch((err) => console.log(err));

    this.setState({ userName: '' });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit} className='card-form'>
        <Form.Group>
        <Form.Label className="text-muted">Enter github name</Form.Label>
        <Form.Control
          type="text"
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="e.g Kiritek"
          required
        />
        </Form.Group>
        <Button variant="secondary" size="sm" type="submit" className='card-form-button'>Add card</Button>
      </Form>
    );
  }
}

class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <CardForm onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;

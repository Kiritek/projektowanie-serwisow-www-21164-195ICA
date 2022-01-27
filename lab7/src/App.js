import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import './App.css';

export default function App() {
  const linkStyle={
    margin:"1rem",
    textDecoration:"none",
    color:'white'
  };
  return (
    <div>
      <nav>
        <Link to="/gamegallery" style={linkStyle}>GameGallery</Link>
        <Link to="/playerlist" style={linkStyle}>PlayerList</Link>
        <Link to="/gameform" style={linkStyle}>GameForm</Link>
      </nav>
      <Outlet />
    </div>
  );
}
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import GameGallery from "./routes/gamegallery";
import PlayerList from "./routes/playerlist";
import GameForm from "./routes/gameform";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="gamegallery" element={<GameGallery />} />
        <Route path="playerlist" element={<PlayerList />} />
        <Route path="gameform" element={<GameForm />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
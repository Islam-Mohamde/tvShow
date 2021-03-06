import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./pages/HomePage";
import ShowPage from "./pages/ShowPage";
import SearchPage from "./pages/SearchPage";
import Header from "./components/layout/Header";

import { ShowState } from "./context/ShowContext";
import { AlertState } from "./context/AlertContext";
const App = () => {
  return (
    <ShowState>
      <AlertState>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/shows/:id" component={ShowPage} />
          </Switch>
        </BrowserRouter>
      </AlertState>
    </ShowState>
  );
};
export default App;

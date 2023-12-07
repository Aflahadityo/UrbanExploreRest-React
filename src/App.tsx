// App.tsx
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home";
import ContactPage from "./pages/contact";

let App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`/`} component={HomePage} />
        <Route exact path={`/contact`} component={ContactPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

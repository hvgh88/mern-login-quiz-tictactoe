import {
  ColorModeProvider,
  CSSReset, theme, ThemeProvider
} from "@chakra-ui/core";

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Containers/Dashboard';
import Game from './Containers/Game';
import Login from './Containers/Homepage';
import Register from './Containers/RegisterUser';
import Quiz from './Containers/Quiz';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
      <CSSReset />
    <Router>
      <Route path='/' component={Register} exact/>
      <Route path='/login' component={Login} exact/>
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/game' component={Game} />
      <Route path='/quiz' component={Quiz} />
    </Router>
    </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;

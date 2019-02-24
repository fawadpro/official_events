import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/event/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/navBar/NavBar';


class App extends Component {
  render() {
    return (
      <div>
       <NavBar/>
       <Container className="main">
       <EventDashboard />
       </Container>
      </div>
    );
  }
}

export default App;

import './App.css';
import Header from './components/Header';
import { Container, Row, Col} from 'reactstrap';
import {ToastContainer} from 'react-toastify';
import Menus from './components/Menus';
import Home from './components/Home';
import AllCourses from './components/AllCourses';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import AddCourse from './components/AddCourse';

function App() {

  return (
    <div>
      <Router>
        <ToastContainer/>
        <Header/>
        <Container>
          <Row>
            <Col md={4}><Menus/></Col>
            <Col md={8}>
              <Route path='/' component={Home} exact/>
              <Route path='/course' component={AddCourse} exact/>
              <Route path='/courses' component={AllCourses} exact/>
            </Col>
          </Row>
        </Container>
      </Router>
      
    </div>
  );
}

export default App;

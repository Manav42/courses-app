import { Component} from 'react';
import Course from './Course';
import axios from 'axios';
import { toast } from 'react-toastify';



class AllCourses extends Component {

    constructor() {
        super();
        this.state = {courses:[]}
        // [
            // {title: "Java Course", description: "this is demo course"},
            // {title: "JavaScript Course", description: "this is demo course"}
        // ];
      }

    render(){
        return(
            <div>
                <h1>AllCourses</h1>
                <div>List of courses are -
                    {
                        this.state.courses.length > 0 ? this.state.courses.map((item)=><Course key={item.id} details={item}/>) : "No Courses"
                    }
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.fetchAllCoursesFromServer();
    }

    fetchAllCoursesFromServer() {
        axios.get('http://localhost:4000/api/courses').then(
                (response) => {
                    console.log('Courses are loaded');
                    toast.success('Courses are loaded');
                    this.setState({courses: response.data})
                    // return response.data;
                }
            ).catch(
                (error) => {
                console.log('Error loading courses: ',error);
                toast.dark('Error loading courses');
            });      
    }
}

export default AllCourses;
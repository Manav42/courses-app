import { Form, FormGroup, Input, Label, Container, Button } from "reactstrap"
import { Component} from 'react';
import axios from "axios";



class AddCourse extends Component {

    constructor() {
        super();
        this.state = {
            id:'',
            title: '',
            description: ''
        }
    }

    handleSubmit = (e) => {
        axios.post('http://localhost:4000/api/course',this.state).then(
            () => {
                console.log('Course is submitted');
                // toast.success('Courses are loaded');
            }
        ).catch(
            (error) => {
            console.log('Error while submiting course: ',error);
            // toast.dark('Error adding courses');
        });
        e.preventDefault()
    }
    
    render(){
        return(
            <div>
                <h1 className='text-center'>Fill Course Details</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="courseId">Course ID</Label>
                        <Input type="text" name="courseId" id="courseId" placeholder="Enter Course Id" 
                        onChange={event=>this.setState({id: event.target.value})} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="title">Course Title</Label>
                        <Input type="text" name="title" id="title" placeholder="Enter Title here"
                        onChange={(event)=>{
                            this.setState({title: event.target.value})
                        }} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="desc">Course Description</Label>
                        <Input type="textarea" name="desc" id="desc" placeholder="Enter Description here" style={{height:100}}
                        onChange={(event)=>{
                            this.setState({description: event.target.value})
                        }} />
                    </FormGroup>
                    <Container className='text-center'>
                        <Button type='submit' color='success'>Add Course</Button>
                        <Button type='reset' color='warning' className='ml-2'>Clear</Button>
                    </Container>
                </Form>
            </div>
        );
    }
    
}

export default AddCourse;
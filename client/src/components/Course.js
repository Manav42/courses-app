import {Card, CardText, CardBody, CardSubtitle, Button, Container} from 'reactstrap';
import axios from "axios";

const handleDelete = (event, courseId) => {
   if (window.confirm('Are you sure want to delete?')){
    axios.delete(`http://localhost:4000/api/course/${courseId}`).then(
            () => {
                console.log('Course is deleted');
                // toast.success('Courses are loaded');
            }
        ).catch(
            (error) => {
            console.log('Error while deleting course: ',error);
            // toast.dark('Error adding courses');
        });
   }
   event.preventDefault();
}

const Course = ({details}) => {
    return(
        <div>
            <Card className='text-center'>
                <CardBody>
                    <CardSubtitle className="font-weight-bold">{details.title}</CardSubtitle>
                    <CardText>{details.description}</CardText>
                    <Container className="text-center">
                        <Button color='warning'>Update</Button>
                        <Button color='danger' onClick={(e)=>handleDelete(e, details.id)} className="ml-3">Delete</Button> 
                    </Container>
                </CardBody>
            </Card>
        </div>
    );
}

export default Course;
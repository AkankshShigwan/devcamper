import { IoIosArrowBack } from "react-icons/io";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaPencilAlt } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const CoursesList = () => {

    function redirect_addCourses(e) {
        window.location.href = `/bootcamps/:bootcampId/courses/add`;
    }

    return (
        <>
            <Table striped className="table table-striped">
                <thead>
                    <tr>
                        <th colSpan={2}>Title</th>
                        <th ></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Front End Web Development</td>
                        <td>
                            <a href="add-course.html" className="btn btn-secondary mx-2"><FaPencilAlt /></a>
                            <button className="btn btn-danger"><FaTimes /></button>
                        </td>
                    </tr>
                    <tr>
                        <td>Full Stack Web Development</td>
                        <td>
                            <a href="add-course.html" className="btn btn-secondary mx-2"><FaPencilAlt /></a>
                            <button className="btn btn-danger"><FaTimes /></button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
};

export default CoursesList;
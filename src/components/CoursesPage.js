import React, { useEffect, useState } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import {getAuthors} from "../api/authorApi";

function CoursesPage() {
    const [courses, setCourses] = useState([]);
    
    useEffect(() => {
    getCourses().then(_courses => { setCourses(_courses); });
    },[]) 
       
    return (
        <div>
            <h2>Courses</h2>
            <Link className="btn btn-primary" to="/course">Add Course</Link>
                <CourseList courses={courses} />
            </div>
    );
}
export default CoursesPage;
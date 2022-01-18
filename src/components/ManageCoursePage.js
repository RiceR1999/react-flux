import React, {useEffect, useState} from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import {toast} from "react-toastify"
import {getAuthors} from "../api/authorApi";
import {getCourseBySlug} from "../api/courseApi";


function ManageCoursePage(props) {
    const [authors, setAuthors] = useState([]);
    const [errors, setErrors] = useState({});
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        title: "",
        author: "",
        category: "",
    });

    useEffect(() => {
        const slug = props.match.params.slug;
        getAuthors().then(_authors => { setAuthors(_authors); });
        getCourseBySlug(slug).then(_course => {setCourse(_course);});
    },[])

    function handleChange(event) {
        const updatedCourse = { ...course, [event.target.name]: event.target.value };
        setCourse(updatedCourse);
    }
    
    function formIsValid() {
        const _errors = {};

        if (!course.title) _errors.title = "Title is required";
        if (!course.authorId) _errors.authorId = "Author ID is required";
        if (!course.category) _errors.category = "Category is required";

        setErrors(_errors);
        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) {
            toast.error("Please fill out all fields.")
            return;
        }
        courseApi.saveCourse(course)
            .then(() => {
                props.history.push("/courses");
                toast.success('Course saved.')
        });
        
  }
    return (
        <div>
            <h2>Manage Course</h2>
            <CourseForm course={course}
                errors={errors}
                onChange={handleChange}
                onSubmit={handleSubmit}
                authors={authors}
                />
        </div>
    );
}
export default ManageCoursePage;
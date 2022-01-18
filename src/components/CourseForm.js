import React, {useState, useEffect} from "react";
import TextInput from "./common/TextInput";
import SelectInput from "./common/SelectInput";


function CourseForm(props) {
    
    const course = props.course;
    const authors = props.authors;

    console.log(authors);
  return (
    <form onSubmit={props.onSubmit}>
          <TextInput
            id="title"
            name="title"
            label="Title"
            value={course.title}
            onChange={props.onChange}
            error={props.errors.title}
          />
          <SelectInput
           id="author"
           name="author"
           label="Author"
           value={course.authorId}
           onChange={props.onChange}
           error={props.errors.authorId}
          authors={authors}
          />
          <TextInput
            id="category"
            name="category"
            label="Category"
            value={course.category}
            onChange={props.onChange}  
            error={props.errors.category}        
                    
          />
      <input type="submit" value="Save" className="btn btn-primary" onSubmit={props.onSubmit} />
    </form>
  );
}

export default CourseForm;
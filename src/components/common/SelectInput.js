import React from "react";
import PropTypes from "prop-types";

function SelectInput(props) {
    let wrapperClass = "form-group";
    
    if (props.error.length > 0) {
        wrapperClass += " has-error";
    }
    return (
        <div className={wrapperClass}>
        <label htmlFor="author">{props.label}</label>
        <div className="field">
          <select
            id={props.id}
            name="authorId"
            onChange={props.onChange}          
            value={props.value || ""}
            className="form-control"
            
          >
              {props.authors.map((author) => {
                  return (
                    <option key={author.id} value={author.id} >{author.name}</option>
                  );
              })}
          </select>
        </div>
        {props.error && ( <div className="alert alert-danger">{props.error}</div>)}
      </div>
    );
}
SelectInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    error: PropTypes.string
};
SelectInput.defaultProps = {
    error: ""
};

export default SelectInput;
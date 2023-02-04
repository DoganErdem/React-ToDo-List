import React from 'react';
import "./button.scss"

function Button(props) {
    return (
        <div className='button'>
            <button className='button-add' type='button' onClick={props.onClick}> Add Task </button>
            <select className='button-options'>
                <option className='button-options-all'> All </option>
                <option className='button-options-completed'> Completed </option>
                <option className='button-options-incomplete'>Incomplete </option>
            </select>
        </div>
    );
}

export default Button;
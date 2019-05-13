import React from 'react';
import '../Checkbox.css';

const Checkbox = ({
    checked,
    onChange,
    index,
    label,
}) => {
    const id = `todo-item-checkbox-${index}`;
    return (
        <div className="checkbox">
            <input
                className="checkbox__el"
                id={id}
                type='checkbox'
                defaultChecked={checked}
                onChange={onChange}
            />
            <label className="checkbox__label" for={id}>
                <span></span>
                {label}
            </label>
        </div>
    );
}

export default Checkbox;

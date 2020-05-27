import React from 'react';
import { Label } from './styles';
export const Input = ({ name, type = 'test', color = '#7159c1', value, setValue, placeholder, icon, }) => {
    return (React.createElement(Label, { htmlFor: name, color: color, icon: icon },
        React.createElement("input", { name: name, type: type, "aria-label": name, value: value, placeholder: placeholder, onChange: (e) => setValue(e.target.value) }),
        icon && icon));
};

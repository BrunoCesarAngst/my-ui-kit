var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// @ts-nocheck
import React, { forwardRef } from 'react';
import { Label, Radio, Mark } from './styles';
const RadioWrapper = forwardRef((_a, ref) => {
    var { label, name, value, color = '#7159c1' } = _a, props = __rest(_a, ["label", "name", "value", "color"]);
    const { readOnly, onChange } = props;
    return (React.createElement(Label, { onClick: readOnly ? () => { } : onChange, htmlFor: name, color: color },
        label,
        React.createElement(Radio, Object.assign({}, props, { ref: ref, name: name, value: value })),
        React.createElement(Mark, null)));
});
export { RadioWrapper as Radio };

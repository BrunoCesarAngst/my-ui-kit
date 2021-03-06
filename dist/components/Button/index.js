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
import * as React from 'react';
import { Container } from './styles';
export const Button = (_a) => {
    var { children, backgroundColor = '#7159c1', color = "#fff", outlined = false } = _a, props = __rest(_a, ["children", "backgroundColor", "color", "outlined"]);
    return (React.createElement(Container, Object.assign({ backgroundColor: backgroundColor, color: color, outlined: outlined }, props), children));
};

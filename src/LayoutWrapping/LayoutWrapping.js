import React, {Component} from 'react';

/*
  Напишите HOC, который обернёт компонент в `div`,
  со стилем 'position: absolute'
*/

export const wrapWithAbsolutePosition = (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
        }

        // не плонял как сдесь проще сделать при помощи render props
        render() {
            const divStyle = {position: "absolute"};
            return <div style={divStyle}>
                <WrappedComponent {...this.props} />
            </div>;
        }
    };
};
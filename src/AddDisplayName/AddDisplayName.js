import React, {PureComponent} from 'react';

/*
  Напишите простой HOC и укажите для него displayName
*/

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || 'Component';
}

export const withDisplayName = (WrappedComponent) => {
    return class extends PureComponent {
        static displayName = `HOC${getDisplayName(WrappedComponent)}`;

        render() {
            return <WrappedComponent/>
        };
    }
};

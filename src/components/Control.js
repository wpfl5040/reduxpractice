import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    onPlus: PropTypes.func = createWarning('onPlus'),
    onSubtract: PropTypes.func = createWarning('onSubtract'),
    onRandomizeColor: PropTypes.func = createWarning('onRandomizeColor')
}

function createWarning(funcName) {
    return () => console.warn(funcName + ' is not defined');
}

class Control extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtract}>-</button>
                <button onClick={this.props.onRandomizeColor}>Randomize Color</button>
            </div>
        );
    }
}

Control.propTypes = {propTypes};

export default Control;

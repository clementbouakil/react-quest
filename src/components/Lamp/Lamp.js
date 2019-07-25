import React, { Component } from 'react';

class Lamp extends Component {

    handleClick = () => {
        this.setState({ on: !this.state.on });
    }

    constructor(props) {
        super(props);
        this.state = {
          on: props.on
        };
      }

    render() {
    const light = this.state.on ? 'on' : 'off';
        return (
            <div className="Lamp">
                <button className={light} onClick={this.handleClick}>
                    {light.toUpperCase()}
                </button>
                <figure className={light} />
            </div>
        );
    }
}

export default Lamp;
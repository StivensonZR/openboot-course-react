import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Gereeting extends Component {

    constructor(props){
        super(props);
        this.state = {
            age : 29
        }
    }

    render() {
        return (
            <div>
                <h1>
                    hey! {this.props.name}
                </h1>
                <h3>
                    edad: {this.state.age}
                </h3>
                <div>
                    <button onClick={this.birthday}>
                        cumplir años
                    </button>
                </div>
            </div>
        );
    }

    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age +1
            }
        ))
    }

}


Gereeting.propTypes = {
    name: PropTypes.string,
};


export default Gereeting;

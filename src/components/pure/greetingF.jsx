import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    let edad = 35;

    const [age, setAge] = useState(edad);

    const birthday = () => {
        //actualizamos el state
        setAge(age + 1);
    }

    return (
        <div>
            <h1>
                hey! {props.name}
            </h1>
            <h3>
                edad: {age}
            </h3>
            <div>
                <button onClick={birthday}>
                    cumplir años
                </button>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string,
};


export default GreetingF;

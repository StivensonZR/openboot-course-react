import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const CompB = ({ contact }) => {
    return (
        <div>
            <h2>
                Nombre: { contact.nombre }
            </h2>
            <h3>
                apellido: { contact.apellido }
            </h3>
            <h3>
                email: { contact.email }
            </h3>
            <h5>
                contectado: { contact.conectado ? 'ONLINE' : 'OFFLINE' }
            </h5>
        </div>
    );
};


CompB.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default CompB;

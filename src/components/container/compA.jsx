import React from 'react';
import { Contact } from '../../models/contact.class';
import CompB from '../pure/compB';


const CompA = () => {

    const defaultContact = new Contact('Juan', 'Perez', 'juanperez@gmail.com', false);

    return (
        <div>
            <h1>
                Tus contactos:
            </h1>
            <CompB contact={defaultContact} />
        </div>
    );
};


export default CompA;

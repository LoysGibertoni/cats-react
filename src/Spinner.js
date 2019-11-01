import React from 'react';
import BootstrapSpinner from 'react-bootstrap/Spinner';
import './Spinner.css'

function Spinner(props) {
    return <div className="spinner-container">
        <BootstrapSpinner animation="border" />
    </div>;
}

export default Spinner;
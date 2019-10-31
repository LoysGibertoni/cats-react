import React from 'react';
import BootstrapSpinner from 'react-bootstrap/Spinner';
import './Spinner.css'

function Spinner(props) {
    return <BootstrapSpinner animation="border" className="spinner" />;
}

export default Spinner;
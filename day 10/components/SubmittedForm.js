import React from 'react';
import { useLocation } from 'react-router-dom';

const SubmittedForm = () => {
    const location = useLocation();
    const { form } = location.state || {};

    if (!form) {
        return <div>No form data found</div>;
    }

    return (
        <div>
            <h2>Submitted Form</h2>
            <pre>{JSON.stringify(form, null, 2)}</pre>
        </div>
    );
};

export default SubmittedForm;

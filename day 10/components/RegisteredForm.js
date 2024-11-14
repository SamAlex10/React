import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const RegistrationForm = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        passport: '',
        travelDate: '',
        returnDate: '',
        destination: '',
        reason: ''
    });
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form, [name]: value
        });
    };

    const validate = () => {
        let tempErrors = {};
        if (!form.name) tempErrors.name = 'Name is required';
        if (!form.email) tempErrors.email = 'Email is required';
        if (!form.phone) tempErrors.phone = 'Phone is required';
        if (!form.passport) tempErrors.passport = 'Passport is required';
        if (!form.travelDate) tempErrors.travelDate = 'Travel date is required';
        if (!form.returnDate) tempErrors.returnDate = 'Return date is required';
        if (!form.destination) tempErrors.destination = 'Destination is required';
        if (!form.reason) tempErrors.reason = 'Reason is required';
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            history.push('/submittedform', { form });
        }
    };

    return (
        <div>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} />
                    {errors.name && <div>{errors.name}</div>}
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} />
                    {errors.email && <div>{errors.email}</div>}
                </div>
                <div>
                    <label>Phone</label>
                    <input type="text" name="phone" value={form.phone} onChange={handleChange} />
                    {errors.phone && <div>{errors.phone}</div>}
                </div>
                <div>
                    <label>Passport</label>
                    <input type="text" name="passport" value={form.passport} onChange={handleChange} />
                    {errors.passport && <div>{errors.passport}</div>}
                </div>
                <div>
                    <label>Travel Date</label>
                    <input type="date" name="travelDate" value={form.travelDate} onChange={handleChange} />
                    {errors.travelDate && <div>{errors.travelDate}</div>}
                </div>
                <div>
                    <label>Return Date</label>
                    <input type="date" name="returnDate" value={form.returnDate} onChange={handleChange} />
                    {errors.returnDate && <div>{errors.returnDate}</div>}
                </div>
                <div>
                    <label>Destination</label>
                    <input type="text" name="destination" value={form.destination} onChange={handleChange} />
                    {errors.destination && <div>{errors.destination}</div>}
                </div>
                <div>
                    <label>Reason for Travel</label>
                    <textarea name="reason" value={form.reason} onChange={handleChange} />
                    {errors.reason && <div>{errors.reason}</div>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default RegistrationForm;

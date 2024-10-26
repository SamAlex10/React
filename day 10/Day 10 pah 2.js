import React, { useState } from 'react';
import './Form.css';
export let values = {};
const RegistratonForm = () => {
 const [formData, setFormData] = useState({
 name: '',
 email: '',
 phone: '',
 passport: '',
 travel: '',
 return: '',
 destination: '',
 reason: ''
 });
 const handleChangeEvent = (event) => {
 const { name, value } = event.target;
 setFormData({
 ...formData,
 [name]: value
 })
 }
 const handleSubmit = (event) => {
 event.preventDefault();
 values = formData;
 }
 return (
 <div className='form__container'>
 <form className='register__form' method='POST' onSubmit={handleSubmit}>
 <div className="input__fields">
 <label htmlFor="name">Name</label>
 <input type="text" name="name" id="name" data-testid="name-input" required
onChange={handleChangeEvent} />
 </div>
 <div className="input__fields">
 <label htmlFor="email">Email</label>
 <input type="email" name="email" id="email" data-testid="email-input" required
onChange={handleChangeEvent} />
 </div>
 <div className="input__fields">
 <label htmlFor="phone">Phone</label>
 <input type="text" name="phone" id="phone" data-testid="phone-input" required
onChange={handleChangeEvent} />
 </div>
 <div className="input__fields">
 <label htmlFor="passport">Passport</label>
 <input type="text" name="passport" id="passport" data-testid="passport-input" required
onChange={handleChangeEvent} />
 </div>
 <div className="input__fields">
 <label htmlFor="travel">Travel date</label>
 <input type="date" name="travel" id="travel" data-testid="travel-input" required
onChange={handleChangeEvent} />
 </div>
 <div className="input__fields">
 <label htmlFor="return">Return date</label>
 <input type="date" name="return" id="return" data-testid="return-input" required
onChange={handleChangeEvent} />
 </div>
 <div className="input__fields">
 <label htmlFor="destination">Destination</label>
 <input type="text" name="destination" id="destination" data-testid="destination-input"
required onChange={handleChangeEvent} />
 </div>
 <div className="input__fields">
 <label htmlFor="reason">Reason for travel</label>
 <input type="text" name="reason" id="reason" data-testid="reason-input" required
onChange={handleChangeEvent} />
 </div>
 <button className='submit__btn' type="submit">Login</button>
 </form>
 </div>
 )
}
export default RegistratonForm;

import React, {useState} from 'react'
import styled from 'styled-components';

const BookingForm = ({createBooking}) => {
  
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [checkedIn, setCheckedIn] = useState(false)

    const handleNameChange = event => setName(event.target.value)
    const handleEmailChange = event => setEmail(event.target.value)
    const handleCheckedChange = event => setCheckedIn(event.target.value)

    const handleSubmit = (event) => {
        event.preventDefault();
        const booking = {
            name,
            email,
            checkedIn
        };
        createBooking(booking);
        setName('');
        setEmail('');
        setCheckedIn(false);
        event.target.reset();
    }

  
    return (
    <BookingSubmit onSubmit={handleSubmit}>
    <label htmlFor="name">Name:</label>
        <input required type="text" name='name' id='name' value={name} onChange={handleNameChange} />
    <label htmlFor="email">Email:</label>
        <input required type="email" name='email' id='email' value={email} onChange={handleEmailChange} />
    <label htmlFor="checkedIn">Checked In?</label>
        <input type="checkbox" name="checkedIn" id="checkedIn" value={checkedIn} onChange={handleCheckedChange} />
        <SubmitButton type="submit" value="Create Booking" />
    </BookingSubmit>
  )
}

const BookingSubmit = styled.form`
  background-color: grey;
  border: 2px solid black;
  border-radius: 5px;
  max-width: fit-content;
  display: flex;
  flex-direction: column;
  padding: 30px;
`;
const SubmitButton = styled.input`
  background-color: green;
  border: none;
  &:hover{
    cursor: pointer;
    color: orange;
    transform: scale(0.95);
  }
  border-radius: 5px
`;

export default BookingForm
import React from 'react'
import ListItem from './ListItem'
import styled from 'styled-components';


const BookingList = ({bookings, deleteBooking, updateCheckedIn}) => {
    
    const bookingsNodes = bookings.map(booking => <ListItem name={booking.name} email={booking.email} checkedIn={booking.checkedIn} key={booking._id} id={booking._id} deleteBooking={deleteBooking} updateCheckedIn={updateCheckedIn}/>)
  
    return (
    <BookingDisplay>
        {bookingsNodes}
    </BookingDisplay>
  )

  
}

const BookingDisplay = styled.div`
  /* display: flex;
  justify-content: space-between;
  flex-wrap: wrap; */
  display:grid;
  grid-template-columns: 20% 20% 20% 20%;
  grid-column-gap: 5%;
  grid-row-gap: 5%;
  max-width: 60vw;
  margin-top: 3vh;
  margin-left: 3vh;

`;

export default BookingList



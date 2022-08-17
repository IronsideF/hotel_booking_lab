import React, {useState, useEffect} from 'react'
import BookingForm from "./components/BookingForm";
import BookingList from "./components/BookingList";
import BookingService from './services/BookingService'
import styled from 'styled-components';


function App() {
  
  const [bookings, setBookings] = useState([])

  useEffect(()=> {
    BookingService.getBookings().then(bookings => setBookings(bookings))
  }, [])
  
  const createBooking = newBooking => {
    if (newBooking.name&&newBooking.email){
    BookingService.postBooking(newBooking).then(savedBooking => setBookings([...bookings, savedBooking]))}
    else {console.log('Please input a correct name and email')}
  }

  const deleteBooking = idToDelete => {
    BookingService.deleteBooking(idToDelete)
    .then(() => {
      setBookings(bookings.filter(booking => booking._id !== idToDelete))
    })
  }

  const updateCheckedIn = (booking, idToUpdate) => {
    BookingService.updatedCheckedIn(booking, idToUpdate).then(() => {
      const copyBookings = [...bookings]
      let indexToUpdate = copyBookings.findIndex(x=> x._id===idToUpdate) 
      booking._id = idToUpdate
      copyBookings[indexToUpdate] = booking
      setBookings(copyBookings) 
    }
      )
  }

  return (<>
    <HeadingBar><BookingForm createBooking={createBooking}/>
    <h1>Hotel Booking App</h1></HeadingBar>
    <BookingList bookings={bookings} deleteBooking={deleteBooking} updateCheckedIn={updateCheckedIn}/>
    </>
  );
}

const HeadingBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px 30px;
  width: 40vw;
`;

export default App;

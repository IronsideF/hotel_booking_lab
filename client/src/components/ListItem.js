import React from 'react'
import styled from 'styled-components';

const ListItem = ({name, email, checkedIn, id, deleteBooking, updateCheckedIn}) => {
  

    const handleDelete = () => {
        deleteBooking(id)
    }
    const handleUpdate = () => {
        updateCheckedIn(
        {
            name,
            email,
            checkedIn:!checkedIn
        }, id)
    }

    return (
    
    <Booking>
        <div>{name}</div>
        <div>{email}</div>
        {checkedIn? <div>Checked In</div>: <div>Checked Out</div>}
        <CheckButton onClick={handleUpdate}>Check-In/Out</CheckButton>
        <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
    </Booking>
  )
}

const Booking = styled.div`
  background-color: #606C38;
  text-align: center;
  word-wrap: break-word;
  border: 2px solid black;
  border-radius: 5px;
  height: 22vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px
`;
const CheckButton = styled.button`
    border: none;
    border-radius: 5px;
    background-color: green;
    &:hover{
        cursor: pointer;
        color: orange;
        transform: scale(0.95);
    }

`;

const DeleteButton = styled.button`
    border: none;
    border-radius: 5px;
    background-color: red;
    &:hover {
        cursor: pointer;
        color: yellow;
        transform: scale(0.95);
    }
`;

export default ListItem
const baseURL = 'http://localhost:9000/api/bookings/'

const BookingService = {
    getBookings() {
        return fetch(baseURL).then(res=>res.json())
    },
    postBooking(payload) {
        {
        return fetch(baseURL, {
            method:'POST',
            body: JSON.stringify(payload),
            headers: {'Content-Type':'application/json'}
        }).then(res => res.json())};
    },
    
    deleteBooking(id) {
        return fetch(baseURL + id, {
            method: 'DELETE'
        })
    },

    updatedCheckedIn(payload, id) {
        return fetch(baseURL +id, {
            method: 'PUT',
            body: JSON.stringify(payload),
            headers: {'Content-Type': 'application/json'}
        }).then(res => res.json())
    }
}

export default BookingService;
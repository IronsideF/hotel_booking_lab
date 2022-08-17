use hotel_booking;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: 'Nathaniel',
        email: 'codeclan@codeclan.com',
        checkedIn: true
    },
    {
        name: 'Lewis',
        email: 'LewisRocks@lewis.com',
        checkedIn: false
    },
    {
        name: 'Keith',
        email: 'jonsux@codeclan.com',
        checkedIn: true
    },
    {
        name: 'Jon',
        email: 'code<3@codeclan.com',
        checkedIn: false
    },
]);


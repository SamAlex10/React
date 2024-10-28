import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Homepage.css';
import NavBar from './NavBar'; // Import the NavBar component

const Homepage = () => {
    const [rooms, setRooms] = useState([]);
    const [error, setError] = useState(null);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [bookingError, setBookingError] = useState('');
    const [isBooking, setIsBooking] = useState(false); // New state to manage booking form visibility

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await axios.get('http://localhost:3000/room');
                setRooms(response.data);
            } catch (error) {
                setError('Error fetching rooms');
                console.error(error);
            }
        };
        
        fetchRooms();
    }, []);

    const handleRoomClick = (room) => {
        setSelectedRoom(room);
        setIsBooking(false); // Reset booking state when selecting a room
    };

    const closeModal = () => {
        setSelectedRoom(null);
        setBookingError('');
        setCheckInDate('');
        setCheckOutDate('');
    };

    const handleBooking = async (e) => {
        e.preventDefault();
        setBookingError(''); // Reset any previous errors

        // Check if dates are selected
        if (!checkInDate || !checkOutDate) {
            setBookingError('Please select both check-in and check-out dates.');
            return;
        }

        const bookedDates = selectedRoom.bookedDates || []; // Assuming bookedDates is an array in room data

        const isBooked = bookedDates.some(date => {
            const [start, end] = date; // Assuming date is a tuple of start and end date
            return (checkInDate >= start && checkInDate <= end) || (checkOutDate >= start && checkOutDate <= end);
        });

        if (isBooked) {
            setBookingError('This room is already booked for the selected dates.');
        } else {
            // Proceed with booking logic, e.g., updating the room's booked dates
            bookedDates.push([checkInDate, checkOutDate]);
            await axios.put(`http://localhost:3000/room/${selectedRoom.id}`, { ...selectedRoom, bookedDates });
            alert('Room booked successfully!');
            closeModal();
        }
    };

    return (
        <div className="homepage">
            {/* Add the NavBar component */}
            <NavBar />

            <h1>Available Rooms</h1>
            {error && <p>{error}</p>}
            <div className={`rooms-grid ${selectedRoom ? 'blur' : ''}`}>
                {rooms.map(room => (
                    <div className="room-card" key={room.id} onClick={() => handleRoomClick(room)}>
                        <h2>{room.name}</h2>
                        <p>Price: ${room.price}</p>
                    </div>
                ))}
            </div>

            {selectedRoom && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal" onClick={e => e.stopPropagation()}>
                        <img src={selectedRoom.image} alt={selectedRoom.name} className="room-image" />
                        <h2 className='roomtext'>{selectedRoom.name}</h2>
                        <p className='roompricetext'>Price: ${selectedRoom.price}</p>
                        <p className='roompircetext'>{selectedRoom.description}</p>

                        {isBooking ? (
                            <form onSubmit={handleBooking}>
                                <label className='labeli'>
                                    Check-In Date:
                                    <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} required />
                                </label>
                                <label className='labeld'>
                                    Check-Out Date:
                                    <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} required />
                                </label>
                                {bookingError && <p className="error">{bookingError}</p>}
                                <button type="submit" className="book-now">Confirm Booking</button>
                                <button type="button" onClick={() => setIsBooking(false)} className="close-button">Cancel</button>
                            </form>
                        ) : (
                            <button className="book-now" onClick={() => setIsBooking(true)}>Book Now</button>
                        )}

                        <button onClick={closeModal} className="close-button">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Homepage;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Homepage.css';
// import NavBar from './NavBar'; // Import the NavBar component

// const Homepage = () => {
//     const [rooms, setRooms] = useState([]);
//     const [error, setError] = useState(null);
//     const [selectedRoom, setSelectedRoom] = useState(null);

//     useEffect(() => {
//         const fetchRooms = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3000/room');
//                 setRooms(response.data);
//             } catch (error) {
//                 setError('Error fetching rooms');
//                 console.error(error);
//             }
//         };
        
//         fetchRooms();
//     }, []);

//     const handleRoomClick = (room) => {
//         setSelectedRoom(room);
//     };

//     const closeModal = () => {
//         setSelectedRoom(null);
//     };

//     return (
//         <div className="homepage">
//             {/* Add the NavBar component */}
//             <NavBar />

//             <h1>Available Rooms</h1>
//             {error && <p>{error}</p>}
//             <div className={`rooms-grid ${selectedRoom ? 'blur' : ''}`}>
//                 {rooms.map(room => (
//                     <div className="room-card" key={room.id} onClick={() => handleRoomClick(room)}>
//                         <h2>{room.name}</h2>
//                         <p>Price: ${room.price}</p>
//                     </div>
//                 ))}
//             </div>

//             {selectedRoom && (
//                 <div className="modal-overlay" onClick={closeModal}>
//                     <div className="modal" onClick={e => e.stopPropagation()}>
//                         <img src={selectedRoom.image} alt={selectedRoom.name} className="room-image" />
//                         <h2>{selectedRoom.name}</h2>
//                         <p>Price: ${selectedRoom.price}</p>
//                         <p>{selectedRoom.description}</p>
//                         <button className="book-now">Book Now</button>
//                         <button onClick={closeModal} className="close-button">Close</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Homepage;

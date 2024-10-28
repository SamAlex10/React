import React from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    Modal,
} from '@mui/material';

const BookingModal = ({ selectedRoom, closeModal, handleBooking, checkInDate, setCheckInDate, checkOutDate, setCheckOutDate, bookingError }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: '15px',
    };

    return (
        <Modal open={Boolean(selectedRoom)} onClose={closeModal}>
            <Box sx={style} onClick={(e) => e.stopPropagation()}>
                {/* Add the rest of the modal code here */}
            </Box>
        </Modal>
    );
};

export default BookingModal;

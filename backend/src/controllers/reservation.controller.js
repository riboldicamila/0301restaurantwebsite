const Reservation = require('../models/reservation.model');

exports.createReservation = async (req, res) => {
    try {
        const { user, date, time, partySize, specialRequest } = req.body;

        const reservation = new Reservation({ user, date, time, partySize, specialRequest });
        await reservation.save();

        res.status(201).json(reservation);
    } catch (err) {
        res.status(500).json({ error: 'Could not create reservation' });
    }
};

exports.getReservationsByUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const reservations = await Reservation.find({ user: userId }).populate('user');

        res.status(200).json(reservations);
    } catch (err) {
        res.status(500).json({ error: 'Could not fetch reservations' });
    }
};

exports.getAllReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find().populate('user');
        res.status(200).json(reservations);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve reservations' });
    }
};

const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservation.controller');

router.post('/', reservationController.createReservation);
router.get('/user/:userId', reservationController.getReservationsByUser);
router.get('/', reservationController.getAllReservations);

module.exports = router;

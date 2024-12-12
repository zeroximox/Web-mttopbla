const express = require('express');
const { getAllSolicitudes, createSolicitud, getSolicitudById, updateSolicitud, deleteSolicitud } = require('../controllers/solicitudController');
const router = express.Router();

router.get('/', getAllSolicitudes);
router.post('/', createSolicitud);
router.get('/:id', getSolicitudById);
router.put('/:id', updateSolicitud);
router.delete('/:id', deleteSolicitud);

module.exports = router;

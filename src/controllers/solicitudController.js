const Solicitud = require('../models/Solicitud');

exports.getAllSolicitudes = async (req, res) => {
    try {
        const solicitudes = await Solicitud.findAll();
        res.json(solicitudes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createSolicitud = async (req, res) => {
    try {
        const solicitud = await Solicitud.create(req.body);
        res.status(201).json(solicitud);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getSolicitudById = async (req, res) => {
    try {
        const solicitud = await Solicitud.findByPk(req.params.id);
        if (!solicitud) {
            return res.status(404).json({ message: 'Solicitud no encontrada' });
        }
        res.json(solicitud);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateSolicitud = async (req, res) => {
    try {
        const solicitud = await Solicitud.findByPk(req.params.id);
        if (!solicitud) {
            return res.status(404).json({ message: 'Solicitud no encontrada' });
        }
        await solicitud.update(req.body);
        res.json(solicitud);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteSolicitud = async (req, res) => {
    try {
        const solicitud = await Solicitud.findByPk(req.params.id);
        if (!solicitud) {
            return res.status(404).json({ message: 'Solicitud no encontrada' });
        }
        await solicitud.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

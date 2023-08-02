const Model = require('../models/model');

const getAllListing = async (req, res) => {
    try {
        const { page, limit, propertyType, numberOfBed, minPrice, maxPrice } =
            req.query;
        const page_ = parseInt(page) || 0; //for next page pass 1 here
        const limit_ = parseInt(limit) || 10;
        const filters = {};

        if (propertyType) filters.property_type = propertyType;
        if (numberOfBed) filters.beds = numberOfBed;

        if (minPrice || maxPrice) {
            filters.price = {};
            if (minPrice) filters.price.$gte = minPrice;
            if (maxPrice) filters.price.$lte = maxPrice;
        }

        const data = await Model.find(filters)
            .skip(page_ * limit_)
            .limit(limit_);

        data ? res.json(data) : res.json({ message: 'No listing found' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getListingById = async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        data ? res.json(data) : res.json({ message: 'No listing found' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAllListing, getListingById };

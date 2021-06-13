if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

module.exports = {
    PORT: process.env.PORT,
    ATLAS_URI: process.env.ATLAS_URI,
};


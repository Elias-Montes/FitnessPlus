const router = require('express').Router();
const apiRoutes = require('./api');
const path = require("path");

router.use('/api', apiRoutes);

// connect with react router
// serve up react front-end in production
router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../../build/index.html"));
});

module.exports = router;
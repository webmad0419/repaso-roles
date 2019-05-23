const express = require('express');
const router  = express.Router();

const isRole = (user, role) => user && user.role === role

router.get('/', (req, res, next) => {
  res.render('index', {fan: isRole(req.user, "Fan"),
                      backliner: isRole(req.user, "Backliner"),
                      artist: isRole(req.user, "Artist")
                    });
});

module.exports = router;

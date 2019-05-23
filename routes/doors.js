const express = require('express');
const router  = express.Router();

const checkRoles = (role) => (req,res,next) => req.user && req.user.role === role ? next() : res.render("index", {msg: `Necesitas ser un ${role} para acceder aquí`})

/* GET home page */
router.get('/fan',checkRoles("Fan"), (req, res, next) => {
  res.render('doors/fan');
});

router.get('/backliner', checkRoles("Backliner"), (req, res, next) => {
  res.render('doors/backliner');
});

router.get('/artist', checkRoles("Artist"), (req, res, next) => {
  res.render('doors/artists');
});

module.exports = router;

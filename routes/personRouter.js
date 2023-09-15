const express = require("express");

const {
  getAllPersons,
  createPerson,
  getPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/personController");

const router = express.Router();

router.route("").get(getAllPersons).post(createPerson);
router
  .route("/:user_id")
  .get(getPerson)
  .patch(updatePerson)
  .delete(deletePerson);

module.exports = router;

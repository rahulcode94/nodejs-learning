const express = require("express");
const { handleUpdateUserById, handleDeleteUserById,handleGetAllUser,handleGetUerById, handleCreateUser } = require("../controllers/user");

const router = express.Router();

//do post request
router.post("/",handleCreateUser)

//get all users
router.get("/", handleGetAllUser);

router.route("/:id")
    .get(handleGetUerById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById)


module.exports = router;
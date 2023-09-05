const router = require("express").Router();

const {
    createuser,getAllusers,deleteUser
} = require("../controllers/userController");


router.route("/").post(createuser);
router.route("/").get(getAllusers);
router.route("/deleteuser/:id").put(deleteUser);


module.exports =router;

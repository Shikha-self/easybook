const db = require("../models/");
const Users = db.users;

//create user
const createuser =async (req,res)=>{
    let info = {
        name : req.body.name,
        phone : req.body.phone,
        email : req.body.email,
    }
    const newUser = await Users.create(info)

    const {name,mob,msg} = req.body;
    res.status(200).send(newUser)
   /*  res.json({
        message:`create user contacts ${req.body.name}`
    }); */
};

//get all users
const getAllusers = async (req,res)=>{
    
    let alluser = await Users.findAll()
    res.status(200).send(alluser);

}

//delete particular user
const deleteUser = async (req,res)=>{

    let delete_id = req.params.id;
    const user_data = await Users.findOne({ where: { id : delete_id} });
    let msg ="User not found!";
    if (user_data) {
      // If the user is found, you can delete it using the `destroy` method
      await Users.destroy({where:{id:delete_id}});
      let msg ="User deleted successfully!";
    } 
    res.status(200).send({ message: msg });
}

module.exports ={createuser,getAllusers,deleteUser}; 
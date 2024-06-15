const express = require("express");

const router = express.Router();

const {
  handleGetAllUsers,
  handleCreateUser,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
} = require("../controllers/user");

// router.get("/users",async (req,res)=>{
//     const allDBUsers = await User.find({});
//     const html =`
//         <ul>
//             ${allDBUsers.map(user => `<li>${user.first_name} ${user.last_name} - ${user.email}</li>`).join("")}
//         <ul>
//     `;
//     res.send(html);
// })

// router.get("/users/:id",async (req,res)=>{
//     const user = await User.findById(req.params.id);
//     if(!user){
//         return res.status(404).send("User not found");
//     }
//     res.send(`
//         <h1>${user.first_name} ${user.last_name}</h1>
//         <p>${user.email}</p>
//     `)
// } )

router.route("/").get(handleGetAllUsers).post(handleCreateUser);

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

module.exports = router;

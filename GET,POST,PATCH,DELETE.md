REST API Controller Patterns (ES6)

This document explains common REST API controller patterns written in ES6 module syntax, focusing only on controller logic.

✔ No routes
✔ No app.js
✔ No DB setup
✔ Async / Await only

📁 File Structure
controllers/
└── userController.js

🧠 Assumptions

User is a database model (MongoDB / SQL / in-memory)

Express-style req and res

ES6 modules (export const)

All functions are async

🔹 GET — Read Controllers
getAllUsers

Fetch all users.

export const getAllUsers = async (req, res) => {
  try {
  
    const users = await User.find();

    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

getUserById

Fetch one user using ID.

export const getUserById = async (req, res) => {
  try {
  
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

getManyUsers

Fetch users using filters (query params).

export const getManyUsers = async (req, res) => {
  try {
    const { role, age } = req.query;

    const users = await User.find({
      ...(role && { role }),
      ...(age && { age }),
    });

    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

🔹 POST — Create Controllers
createUser

Create a single user.

export const createUser = async (req, res) => {
  try {
  
    const newUser = await User.create(req.body);

    res.status(201).json({
      success: true,
      data: newUser,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

createManyUsers

Create multiple users at once.

export const createManyUsers = async (req, res) => {
  try {
  
    const users = await User.insertMany(req.body);

    res.status(201).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

🔹 PATCH — Update Controllers
updateUser

Update specific fields of a user.

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({ success: true, data: updatedUser });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

updateManyUsers

Bulk update users.

export const updateManyUsers = async (req, res) => {
  try {
  
    const result = await User.updateMany(
      req.query,
      req.body
    );

    res.status(200).json({ success: true, result });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

🔹 DELETE — Remove Controllers
deleteUser

Delete a user by ID.

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User deleted",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

deleteManyUsers

Bulk delete users.

export const deleteManyUsers = async (req, res) => {
  try {
  
    const result = await User.deleteMany(req.query);

    res.status(200).json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

🧠 Mental Model (Memorize This)
HTTP Method	Meaning	Function Patterns
GET	Read	getAll, getById, getMany
POST	Create	createOne, createMany
PATCH	Partial Update	updateOne, updateMany
DELETE	Remove	deleteOne, deleteMany
🔥 Industry Tip

Real-world projects avoid repeating logic.

They use generic controller factories like:

getAll(Model)
getOne(Model)
createOne(Model)
updateOne(Model)
deleteOne(Model)

🚀 What We Can Do Next

1️⃣ Build generic reusable controllers
2️⃣ Add pagination & sorting
3️⃣ Convert to real MongoDB + Mongoose
4️⃣ Design a Music / Blog / Payment API

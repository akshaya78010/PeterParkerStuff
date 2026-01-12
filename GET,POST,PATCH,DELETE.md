🧩 REST API Controller Patterns (ES6)

This README documents common REST API controller patterns written in ES6 module syntax, focusing only on controller logic.

✔ No routes
✔ No app.js
✔ No database setup
✔ Pure controller logic using async/await

📁 File Structure
controllers/
└── userController.js

🧠 Assumptions

User is a database model (MongoDB / SQL / in-memory — abstracted)

Express-style req and res

ES6 module syntax (export const)

async / await is used everywhere

🔹 GET — Read Operations
✅ Get All Users

Fetch all records.

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

✅ Get User By ID

Fetch a single record using id.

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

✅ Get Many Users (Filter / Search)

Fetch users using query parameters.

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

🔹 POST — Create Operations
✅ Create One User

Create a single record.

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

✅ Create Many Users

Insert multiple records at once.

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

🔹 PATCH — Update Operations
✅ Update One User

Update specific fields of a single record.

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, data: updatedUser });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

✅ Update Many Users

Bulk update using filters.

export const updateManyUsers = async (req, res) => {
  try {
    const result = await User.updateMany(
      req.query, // filter
      req.body   // update
    );

    res.status(200).json({ success: true, result });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

🔹 DELETE — Remove Operations
✅ Delete One User

Delete a record by ID.

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "User deleted",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

✅ Delete Many Users

Bulk delete based on query filters.

export const deleteManyUsers = async (req, res) => {
  try {
    const result = await User.deleteMany(req.query);

    res.status(200).json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

🧠 Mental Model (Important)
HTTP Method	Purpose	Common Function Names
GET	Read	getAll, getById, getMany
POST	Create	createOne, createMany
PATCH	Partial Update	updateOne, updateMany
DELETE	Remove	deleteOne, deleteMany
🔥 Industry Tip (Senior-Level)

Real-world projects often use generic reusable controllers:

getAll(Model)
getOne(Model)
createOne(Model)
updateOne(Model)
deleteOne(Model)


This avoids repetition and keeps controllers clean and scalable.

🚀 Next Steps (Choose One)

1️⃣ Build generic reusable controllers
2️⃣ Add pagination, sorting, filtering
3️⃣ Convert this into real MongoDB implementation
4️⃣ Practice by designing a Music / Blog / Payment API

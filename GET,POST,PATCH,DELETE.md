ou’re thinking in real-world REST API terms now.
Let’s only focus on the controllers file, ES6 style, and cover all common functions used for:

GET

POST

PATCH

DELETE

No routes, no app.js, no DB setup — just controller logic patterns.

I’ll explain what each function means, then show clean ES6 code.

📁 controllers/userController.js (ES6)

Assume:

User is a DB model (Mongo / SQL / in-memory — doesn’t matter here)

We’re using async/await

🔹 1️⃣ GET FUNCTIONS (Read)
✅ getAllUsers

Fetch everything

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); // all records

    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

✅ getUserById

Fetch one by ID

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

✅ getManyUsers

Fetch filtered data (search / pagination)

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

🔹 2️⃣ POST FUNCTIONS (Create)
✅ createUser

Create one record

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

✅ createManyUsers

Insert multiple records

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

🔹 3️⃣ PATCH FUNCTIONS (Update)
✅ updateUser

Update specific fields

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, data: updatedUser });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

✅ updateManyUsers

Bulk update

export const updateManyUsers = async (req, res) => {
  try {
    const result = await User.updateMany(
      req.query,   // filter
      req.body     // update
    );

    res.status(200).json({ success: true, result });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

🔹 4️⃣ DELETE FUNCTIONS (Remove)
✅ deleteUser

Delete one by ID

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "User deleted",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

✅ deleteManyUsers

Bulk delete

export const deleteManyUsers = async (req, res) => {
  try {
    const result = await User.deleteMany(req.query);

    res.status(200).json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

🧠 Mental Model (IMPORTANT)
Method	Meaning	Typical Function Name
GET	Read	getAll, getById, getMany
POST	Create	createOne, createMany
PATCH	Partial update	updateOne, updateMany
DELETE	Remove	deleteOne, deleteMany
🔥 Industry Tip (Senior-level)

Real projects often use generic controllers:

getAll(Model)
getOne(Model)
createOne(Model)
updateOne(Model)
deleteOne(Model)


(We can build this next if you want.)

✅ Next step (pick one):

1️⃣ Build generic reusable controller
2️⃣ Add pagination + sorting
3️⃣ Convert this into real MongoDB code
4️⃣ Practice by designing Music / Blog / Payment API

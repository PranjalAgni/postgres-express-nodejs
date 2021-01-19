const { Router } = require("express");
const faker = require("faker");
const { models } = require("../../models");

const router = Router();

router.use((_req, _res, next) => {
  console.log("Only called for users routes");
  next();
});

router.get("/", async (req, res) => {
  const generatedUser = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    username: faker.internet.userName(),
    password: faker.internet.password(5)
  };

  await models.User.create(generatedUser);

  res.json(generatedUser);
});

router.get("/check", async (req, res) => {
  const username = req.query?.username;
  if (!username) return res.json({ message: "Unprocessable request body" });

  const user = await models.User.findOne({
    where: {
      username
    }
  });

  if (!user) return res.json({ message: "User does not exists" });
  console.log("User: ", user);

  let order = 1;

  if (user.order) order = user.order + 1;

  await user.update({
    order
  });

  return res.json({
    username: user.username,
    order: user.order
  });
});

module.exports = router;

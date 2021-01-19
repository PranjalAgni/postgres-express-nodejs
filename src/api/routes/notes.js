const { Router } = require("express");
const faker = require("faker");
const { models, sequelize } = require("../../models");

const router = Router();

router.use((_req, _res, next) => {
  console.log("Only called for users routes");
  next();
});

router.get("/", async (req, res) => {
  const user = await models.User.findAll({
    order: sequelize.random(),
    limit: 1
  });

  if (!user || !user.length) return res.json({ message: "Create user first" });

  console.log("User: ", user);

  const notesObject = {
    title: faker.lorem.words(4),
    description: faker.lorem.sentence(),
    fkUserId: user[0].pkUserId
  };

  await models.Notes.create(notesObject);

  return res.json(notesObject);
});

module.exports = router;

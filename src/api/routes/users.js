const { Router } = require('express');
const { QueryTypes } = require('sequelize');
const { models, sequelize } = require('../../models');

const router = Router();

router.use((_req, _res, next) => {
  console.log('Only called for users routes');
  next();
});

router.get('/', async (req, res) => {
  // await models.User.create({
  //   firstName: 'Pranjal',
  //   lastName: 'Agnihotri',
  //   email: 'p1.a@gmail.com',
  //   username: 'ooo',
  // });

  // const users = await sequelize.query(
  //   'SELECT * FROM users WHERE username = :username',
  //   {
  //     type: QueryTypes.SELECT,
  //     replacements: {
  //       username: 'heyhey',
  //     },
  //   }
  // );

  const users = await models.User.findAll({
    include: [
      { model: models.Notes },
      // { model: models.Notes, as: 'PinnedNote' },
    ],
    where: {
      username: 'okaygoogle',
    },
  });
  console.log('Users: ', users);

  // const notes = await models.Notes.create({
  //   title: 'Hello world',
  //   description: 'Lets write some React today?',
  //   userId: users[0].id,
  // });

  const notes = await sequelize.query(
    `SELECT * FROM notes WHERE "userId" = (SELECT id from users WHERE username = 'okaygoogle') ORDER BY "updatedAt" ASC`
  );

  console.log('Notes: ', notes);
  res.send('hey');
});

module.exports = router;

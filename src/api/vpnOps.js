const {Router} = require('express');
const User = require('../persistence/users');
const createConnection = require('../modules/vpn-ops/create');

const router = new Router();

router.get('/', async (request, response) => {
      const data = await createConnection();
    return response.status(200).json({ data: data });
  // } catch (error) {
  //   console.error(
  //     'galat hua'
  //   );
  //   response.status(500).json(error);
  // }
});

module.exports = router;

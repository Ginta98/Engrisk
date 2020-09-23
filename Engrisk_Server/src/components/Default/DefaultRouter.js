import { Router } from 'express';
import { controllerHandler } from '../../middleware/ErrorHandler';
import { defaultController, generateToken } from './DefaultController';
import { jwtFilter } from '../../middleware/Authenticate';


const path = '/default';
const router = Router();
router.get('/', (req, res) => {
    res.send('<h1>Thắng đẹp zai</h1>')
})
router.get('/students/:id', jwtFilter, controllerHandler(defaultController));
router.get('/generateToken', controllerHandler(generateToken));


// export
export default { path, router };

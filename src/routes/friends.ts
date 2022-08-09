import { Router } from 'express';
import asyncWrap from '../async-wrap';
import { friendsController } from '../controller';
const router = Router();

router.get('/', asyncWrap(friendsController.getFriends));
router.put('/', asyncWrap(friendsController.addFriends));
router.delete('/', asyncWrap(friendsController.deleteFriends));
export default router;

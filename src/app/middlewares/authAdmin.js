import User from '../models/User';

export default async (req, res, next) => {
  const user = await User.findByPk(req.userId);

  if (user.isadmin === false) {
    return res.status(401).json({ error: 'User not is admin' });
  }

  return next();
};

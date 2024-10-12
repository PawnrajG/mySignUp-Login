import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = (user) => jwt.sign({id: user.id}, process.env.SECRET_KEY, {expiresIn : '2m'});


export default generateToken;
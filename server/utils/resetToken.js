
const token = Math.random().toString(36).slice(-8);
const expiresTime = Date.now() + 360000;
export default {token,expiresTime};
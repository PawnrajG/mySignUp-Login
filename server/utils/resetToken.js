
const token = Math.random().toString(36).slice(-8);
const expiresTime = Date.now() + 3600000;
export default {token,expiresTime};
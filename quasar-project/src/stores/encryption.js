import CryptoJS from 'crypto-js';
import env from './environment';

const key = CryptoJS.SHA256(env.ENCRYPTION_KEY).toString(CryptoJS.enc.Hex).substring(0, 32);
const iv = CryptoJS.SHA256(env.ENCRYPTION_IV).toString(CryptoJS.enc.Hex).substring(0, 16);

export function encrypt(text) {
  const encrypted = CryptoJS.AES.encrypt(text, CryptoJS.enc.Hex.parse(key), { iv: CryptoJS.enc.Hex.parse(iv) });
  return encrypted.toString();
}

export function decrypt(text) {
  try {
    const decrypted = CryptoJS.AES.decrypt(text, CryptoJS.enc.Hex.parse(key), { iv: CryptoJS.enc.Hex.parse(iv) });
    return decrypted.toString(CryptoJS.enc.Utf8);
  } catch (err) {
    throw new Error(err.message);
  }
}

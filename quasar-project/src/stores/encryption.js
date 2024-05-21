// import env from './environment'
// import crypto from 'crypto'

// const key = crypto.createHash('sha512').update(env.ENCRYPTION_KEY).digest('hex').substring(0, 32)
// const iv = crypto.createHash('sha512').update(env.ENCRYPTION_IV).digest('hex').substring(0, 16)

// /**
//  * @param {string} text
//  * @returns {string}
//  */
// function encrypt(text) {
//   const cipher = crypto.createCipheriv('aes-256-cbc', key, iv)
//   const encrypted = Buffer.concat([cipher.update(text), cipher.final()])
//   return encrypted.toString('hex')
// }

// /**
//  * @param {string} text
//  * @returns {string}
//  */
// function decrypt(text) {
//   const encryptedText = Buffer.from(text, 'hex')
//   const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv)

//   try {
//     const decrypted = Buffer.concat([
//       decipher.update(encryptedText), decipher.final()
//     ])
//     return decrypted.toString()
//   } catch(err) {
//     ThrowError(err)
//   }
// }

// module.exports = { decrypt, encrypt }
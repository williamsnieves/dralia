import TokenGenerator from 'uuid-token-generator'
import { reject } from 'rsvp'
export const authUser = (email, password) => {
  return new Promise((resolve, reject) => {
    if (checkIfUserIsLogged()) {
      resolve('logged')
    } else {
      const userData = setUserData(email, password)
      if (typeof userData === 'string') {
        resolve(userData)
      } else {
        reject(userData)
      }
    }
  })
}

export const checkIfUserIsLogged = () => {
  const checkUser =
    localStorage.getItem('email') &&
    localStorage.getItem('email') !== '' &&
    (localStorage.getItem('password') &&
      localStorage.getItem('password') !== '')

  return checkUser
}

export const readTokenFromStorage = () => {
  return localStorage.getItem('token')
}

const setUserData = (email, password) => {
  if (email && email !== '' && password && password !== '') {
    const name = email.split('@')[0]
    const token = new TokenGenerator().generate()
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
    localStorage.setItem('token', token)
    localStorage.setItem('name', name)
    localStorage.setItem('lastname', name)
    return token
  } else {
    throw new Error('Bad request')
  }
}

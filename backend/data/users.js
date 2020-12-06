import bcrypt from 'bcryptjs';

const users = [{
    name: 'Admin User',
    email: 'test@gmail.com',
    password: bcrypt.hashSync('12345678',10),
    isAdmin: true
}]

export default users;
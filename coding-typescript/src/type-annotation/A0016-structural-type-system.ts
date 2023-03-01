type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string; id?: number };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser: User = {
  username: 'Guiga',
  password: 'guiga2005',
  id: 10,
};
const sentUser: User = {
  username: 'guiga',
  password: 'guiga2005',
  id: 10,
};
const loggedIn = verifyUser(bdUser, sentUser);

console.log(loggedIn);

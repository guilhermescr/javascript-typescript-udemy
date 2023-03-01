const username = 'Guiga';
const password = 2023;

function getUserData(data: string | number): string | number {
  if (data === 'username') return username;

  if (data === 'password') return password;

  return 'We just provide two data options: username and password.';
}

console.log(getUserData('username'), '&', getUserData('password'));

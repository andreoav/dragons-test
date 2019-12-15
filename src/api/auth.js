export function authenticate({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === 'admin') {
        return resolve({ data: {}, status: 200 });
      }

      return reject({ data: {}, status: 401 });
    }, 500);
  });
}

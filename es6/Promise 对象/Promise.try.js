Promise.resolve().then(f)

const f = () => console.log('now');
Promise.resolve().then(f);
console.log('next');
// next
// now

const f = () => console.log('now');
(async () => f())();
console.log('next');
// now
// next

(async () => f())()
.then(...)

(async () => f())()
.then(...)
.catch(...)

const f = () => console.log('now');
(
  () => new Promise(
    resolve => resolve(f())
  )
)();
console.log('next');
// now
// next

const f = () => console.log('now');
Promise.try(f);
console.log('next');
// now
// next


function getUsername(userId) {
  return database.users.get({id: userId})
  .then(function(user) {
    return user.name;
  });
}

database.users.get({id: userId})
.then(...)
.catch(...)

try {
  database.users.get({id: userId})
  .then(...)
  .catch(...)
} catch (e) {
  // ...
}

Promise.try(() => database.users.get({id: userId}))
  .then(...)
  .catch(...)
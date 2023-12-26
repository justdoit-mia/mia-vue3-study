function idMaker() {
  let index = 0;

  return {
    next: function() {
      return { value: index++, done: false };
    }
  };
}

const it = idMaker();

it.next().value // 0
it.next().value // 1
it.next().value // 2
// ...


function idMaker() {
  let index = 0;

  return {
    next: function() {
      return new Promise(function (resolve, reject) {
        setTimeout(() => {
          resolve({ value: index++, done: false });
        }, 1000);
      });
    }
  };
}


function idMaker() {
  let index = 0;

  return {
    next: function() {
      return {
        value: new Promise(resolve => setTimeout(() => resolve(index++), 1000)),
        done: false
      };
    }
  };
}

const it = idMaker();

it.next().value.then(o => console.log(o)) // 0
it.next().value.then(o => console.log(o)) // 1
it.next().value.then(o => console.log(o)) // 2
// ...
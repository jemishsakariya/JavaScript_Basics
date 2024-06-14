/*
// Promise.all()
const p1 = Promise.resolve(1); // this called as static methods
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
    // reject();
  }, 2000);
});
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
  .then((val) => {
    console.log(val); // returns arr of promise value
  })
  .catch((err) => {
    console.error(err);
  });
*/

/*
// Promise.allSetteled()
const p1 = Promise.resolve(1);
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});
const p3 = Promise.reject(3);

Promise.allSettled([p1, p2, p3])
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.error(err);
  });
*/

/*
// Promise.race()
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});
const p2 = Promise.resolve(1); // if it reject() then it will return error.
const p3 = Promise.resolve(3);

Promise.race([p1, p2, p3])
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.error(err);
  });
*/

/*
// Promise.any()

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});
const p2 = Promise.resolve(1);
const p3 = Promise.reject(3);

Promise.any([p1, p2, p3])
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.error(err);
  });

*/

//
//
// Task - Create your own implementation of all this methods using promises.
//
//

/*
// promiseAll

const p1 = Promise.resolve(1);
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 4000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 3000);
});

function promiseAll(arrOfPromise) {
  return new Promise((resolve, reject) => {
    const newArr = [];
    let resolvedCount = 0;

    if (arrOfPromise.length == 0) return resolve(newArr);

    arrOfPromise.forEach((eachPromise, index) => {
      eachPromise
        .then((val) => {
          newArr[index] = val;
          resolvedCount++;

          if (resolvedCount == arrOfPromise.length) {
            resolve(newArr);
          }
        })
        .catch((err) => {
          reject(new Error(err));
        });
    });
  });
}

promiseAll([p1, p2, p3])
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.error(err);
  });
*/

/*
// promiseAllSettled

const p1 = Promise.reject(1);
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 4000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 3000);
});

function promiseAllSettled(arrOfPromise) {
  return new Promise((resolve, reject) => {
    const newArr = [];
    let settleCount = 0;

    if (arrOfPromise.length == 0) return resolve(newArr);

    arrOfPromise.forEach((eachPromise, index) => {
      eachPromise
        .then((val) => {
          newArr[index] = {
            status: "fulfilled",
            value: val,
          };

          settleCount++;

          if (settleCount == arrOfPromise.length) {
            resolve(newArr);
          }
        })
        .catch((errVal) => {
          newArr[index] = {
            status: "rejected",
            reason: errVal,
          };

          settleCount++;
        });
    });
  });
}

promiseAllSettled([p1, p2, p3])
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.error(err);
  });
*/

/*
// promiseRace()
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(1);
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(2);
  }, 6000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 2000);
});

function promiseRace(arrOfPromise) {
  return new Promise((resolve, reject) => {
    arrOfPromise.forEach((eachPromise) => {
      eachPromise
        .then((val) => {
          resolve(val);
        })
        .catch((err) => {
          reject(new Error(err));
        });
    });
  });
}

promiseRace([p2, p1, p3])
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.error(err);
  });
*/

/*
// promiseAny()
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 4000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 3000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(3);
  }, 1000);
});

function promiseAny(arrOfPromise) {
  return new Promise((resolve, reject) => {
    const errors = [];

    if (arrOfPromise.length === 0) {
      reject(new AggregateError("No promises in iterable"));
      return;
    }

    arrOfPromise.forEach((eachPromise) => {
      eachPromise
        .then((val) => resolve(val))
        .catch((err) => {
          errors.push(err);

          if (errors.length === arrOfPromise.length) {
            reject(new AggregateError(errors));
          }
        });
    });
  });
}

promiseAny([p1, p2, p3])
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.error(err);
  });
*/

//
//
// Convert all then/catch code demo to async/await
//
//

/*
// promiseAll
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 3000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 2000);
});

async function promiseAll(arrOfPromise) {
  try {
    const newArr = [];

    if (!arrOfPromise.length) return newArr;

    for (const eachPromise of arrOfPromise) {
      const finishPromise = await eachPromise;
      newArr.push(finishPromise);
    }

    return newArr;
  } catch (err) {
    return err;
  }
}

// async function consumePromise() {
//   const result = await promiseAll([p1, p2, p3]);
//   console.log(result);
// }

// consumePromise();

promiseAll([p1, p2, p3])
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.error(err);
  });


/*
// promiseAllSettled

const p1 = Promise.reject(1);
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 3000);
});

async function promiseAllSettled(arrOfPromise) {
  const newArr = [];

  try {
    if (!arrOfPromise.length) return newArr;

    for (const eachPromise of arrOfPromise) {
      try {
        const finishPromise = await eachPromise;
        newArr.push({
          status: "fulfilled",
          value: finishPromise,
        });
      } catch (err) {
        newArr.push({
          status: "rejected",
          reason: err,
        });
      }
    }

    if (newArr.length == arrOfPromise.length) {
      return newArr;
    }
  } catch (err) {
    console.error(err);
  }
}

promiseAllSettled([p1, p2, p3])
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.error(err);
  });
*/

/*
// promiseRace()
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 3500);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(3);
  }, 1500);
});

async function promiseRace(arrOfPromise) {
  return new Promise((resolve, reject) => {
    arrOfPromise.forEach(async (eachPromise) => {
      try {
        const result = await eachPromise;
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  });
}

promiseRace([p1, p2, p3])
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.error(err);
  });
*/

/*
// promiseAny()
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(1);
  }, 2000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 3000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(3);
  }, 1000);
});

async function promiseAny(arrOfPromise) {
  return new Promise((resolve, reject) => {
    const errors = [];

    if (!arrOfPromise.length) {
      reject(new AggregateError("No promises in iterable"));
    }

    arrOfPromise.forEach(async (eachPromise) => {
      try {
        const finishPromise = await eachPromise;
        resolve(finishPromise);
      } catch (err) {
        errors.push(err);

        if (errors.length === arrOfPromise.length) {
          reject(new AggregateError(errors));
        }
      }
    });
  });
}

promiseAny([p1, p2, p3])
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.error(err);
  });
*/

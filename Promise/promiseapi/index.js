const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Promise 1 resolved');
        reject('Promise 1 rejected');
    }, 3000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Promise 2 resolved');
        reject('Promise 2 rejected');
    }, 1000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Promise 3 resolved');
        reject("Promise 3 rejected");
    }, 2000);
});

// Promise.all([p1, p2, p3])
//     .then(res => console.log('Promise.all:', res))
//     .catch(err => console.log('Promise.all error:', err));

// Promise.allSettled([p1, p2, p3])
//     .then(res => console.log('Promise.allSettled:', res));

// Promise.race([p1, p2, p3])
//     .then(res => console.log('Promise.race:', res))
//     .catch(err => console.log('Promise.race error:', err));

Promise.any([p1, p2, p3])
    .then(res => console.log('Promise.any:', res))
    .catch(err => {
        console.log('Promise.any error:', err);
        if (err instanceof AggregateError) {
            console.log('AggregateError:', err.errors);
        }
    });

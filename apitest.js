// Promises & Fetch Api 

/*
const getRandomUsers = n => {
    const fetchRandomUsers = fetch(`https://randomusers.me/api/?results=${n}`)
    fetchRandomUsers.then(data => {
        data.json().then(randomUsers => {
            console.log(JSON.stringify(randomUsers.results.length));
            randomUsers.results.forEach(user => {
                const {gender, email} = user;
                console.log(`${gender} ${email}`);
        });

    })
});
}

getRandomUsers(10);
*/

// To use generator in ES6 you must install an app called bluebird web and for backend you install co

import { coroutine as co } from 'bluebird';

const getRandomUsers = co(function* (n) {
    const fetchRandomUsers = yield fetch(`https://randomusers.me/api/?results=${n}`)
    const data = yield fetchRandomUsers.json();
    return data;
});

getRandomUsers(10).then(randomUsers => {
    randomUsers.results.forEach(user => {
        const {gender, email} = user;
        console.log(`${gender} ${email}`);
});
}).catch(err => console.log);
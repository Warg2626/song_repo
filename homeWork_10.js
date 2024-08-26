//1.0

function notificationFromMessangers(notifications) {
    const grouped = notifications.reduce((result, notification) => ({
        ...result,
        [notification.sours]: (result[notification.sours] || []).concat(notification)
    }), {});

    grouped[Symbol.iterator] = function() {
        const allNotifications = [];
        
        for (const key of Object.keys(grouped)) {
            for (const notification of grouped[key]) {
                allNotifications.push(notification);
            }
        }

        let index = 0;

        return {
            next() {
                if (index < allNotifications.length) {
                    return { value: allNotifications[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    };

    return grouped;
}

const notifications = [
    { sours: "hillel", text: "Ви присутні на уроці?", day: "23.08.2024" },
    { sours: "telegram", text: "Ви отримали повідомлення", day: "19.08.2024" },
    { sours: "hillel", text: "Ви отримали оцінку", day: "24.08.2024" },
];

const groupedNotifications = notificationFromMessangers(notifications);

for (const notification of groupedNotifications) {
    console.log(notification);
}

// 1.1

function notificationFromMessangers(notifications) {
    const grouped = notifications.reduce((result, notification) => ({
        ...result,
        [notification.sours]: (result[notification.sours] || []).concat(notification)
    }), {});

    grouped[Symbol.iterator] = function() {
        const allNotifications = Object.values(grouped).flat();
        //Object.values(grouped).flat(): Збирає всі масиви сповіщень і об'єднує їх в один "плоский" масив allNotifications
        let index = 0;

        return {
            next() {
                if (index < allNotifications.length) {
                    return { value: allNotifications[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    };

    return grouped;
}

const notifications = [
    { sours: "hillel", text: "Ви присутні на уроці?", day: "23.08.2024" },
    { sours: "telegram", text: "Ви отримали повідомлення", day: "19.08.2024" },
    { sours: "hillel", text: "Ви отримали оцінку", day: "24.08.2024" },
];

const groupedNotifications = notificationFromMessangers(notifications);

for (const notification of groupedNotifications) {
    console.log(notification);
}

//2

function memoize(fn) {
    const cache = new Map();

    return function(...args) {
        let currentCache = cache;

        for (const arg of args) {
            if (!currentCache.has(arg)) {
                currentCache.set(arg, new Map());
            }
            currentCache = currentCache.get(arg);
        }

        if (currentCache.has('result')) {
            return currentCache.get('result');
        }

        const result = fn(...args);
        currentCache.set('result', result); 

        return result; 
    };
}

function add(a, b) {
    console.log("Виконання функції...");
    return a + b;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(2, 3)); 
console.log(memoizedAdd(2, 3)); 
console.log(memoizedAdd(4, 5));
console.log(memoizedAdd(4, 5)); 

//3

function memoize(fn, cacheSize) {
    const cache = new Map();
    const keys = [];

    return function(a, b) {
        let currentCache = cache;

        const args = [a, b];
        for (const arg of args) {
            if (!currentCache.has(arg)) {
                currentCache.set(arg, new Map());
            }
            currentCache = currentCache.get(arg);
        }

        if (currentCache.has('result')) {
            return currentCache.get('result');
        }

        const result = fn(a, b);
        currentCache.set('result', result);

        if (!keys.some(keySet => keySet[0] === a && keySet[1] === b)) {
            keys.push(args);

            if (keys.length > cacheSize) {
                const oldestKey = keys.shift();
                let cacheToDelete = cache;

                for (let i = 0; i < oldestKey.length - 1; i++) {
                    cacheToDelete = cacheToDelete.get(oldestKey[i]);
                }
                cacheToDelete.delete(oldestKey[oldestKey.length - 1]);
            }
        }

        return result;
    };
}


function add(a, b) {
    console.log("Виконання функції...");
    return a + b;
}

const memoizedAdd = memoize(add,3);

console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(4, 5));
console.log(memoizedAdd(6, 7));
console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(8, 9));
console.log(memoizedAdd(4, 5));
console.log(memoizedAdd(2, 3));

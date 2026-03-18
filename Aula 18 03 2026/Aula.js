/* 
    MODIFICANDO A ESTRUTURA DE DOCUMETOS
*/

db.users.insertMany([
    {
        _id: 1,
        username: "Joao",
        age: 24,
        active: true,
        premium: false,
        hobbies: ["reading", "soccer"],
        tasks: [{title: "Study MongoDB", status: "peding"}]
    },
    {
        _id: 2,
        username: "Maria",
        age: 30,
        active: false,
        premium: true,
        hobbies: ["cooking", "yoga"],
        tasks: [{title: "Complete project", status: "done"}]
    },
    {
        _id: 3,
        username: "Carlos",
        age: 35,
        active: true,
        premium: false,
        hobbies: ["gaming", "music"],
        tasks: [{title: "Write report", status: "peding"}]
    }
]);

db.users.updateOne(
    {username: "Joao"},
    {$set: {age: 25}}
);

db.users.updateMany(
    {active: true},
    {$set: {premium:true}}
);

db.users.replaceOne(
    {username: "Maria"},
    {
        _id: 2, 
        username: "Maria", 
        age: 31, 
        active: true, 
        premium: false, 
        hobbies: []
    }
);

db.users.updateOne(
    {username: "Joao"},
    {$set: {premium: true}}
);

db.users.updateOne(
    {username: "Carlos"},
    {$unset: {premium: true}}
);

db.users.updateOne(
    {username: "Maria"},
    {$rename: {"age": "yearsOld"}}
);

db.users.updateOne(
    {username: "Carlos"},
    {$mul: {age: 2}}
);

db.users.updateOne(
    {username: "Joao"},
    {$min: {age: 23}}
);

db.users.updateOne(
    {username: "Maria"},
    {$max: {yearsOld: 35}}
);

db.users.updateOne(
    {username: "Joao"},
    {$push: {hobbies: "guitar"}}
);

db.users.updateOne(
    {username: "Maria"},
    {$pop: {hobbies: -1}}
);

db.users.updateOne(
    {username: "Carlos"},
    {$pull: {hobbies: "gaming"}}
);

db.users.updateOne(
    {username: "Joao"},
    {$addToSet: {hobbies: "chess"}}
);
// Requirement #1
var user;            //Create a null object and set its variable name as user
user = {
    name: 'John',    //Add a name attribute and set its value as John
    surname: 'Mike', //Add a surname attribute and set its value as Mike
}
user.name = 'Peter'; //Modify the value of name attribute as Peter
delete user.name;    //Delete name attribute of user

// Requirement #2
var fruit = {
apple: 20,
pear: 20,
peach: 10,
};

let output  = 0;
for ( let keys in fruit){ //keys [apple, pear, peach] -- can also use values [20, 20, 10]
    output  += fruit[keys];
}
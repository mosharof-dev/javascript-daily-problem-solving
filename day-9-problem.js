const users = [
  { firstName: "Mosharof", lastName: "Hossain" },
  { firstName: "Rahim", lastName: "Uddin" },
  { firstName: "Karim", lastName: "Khan" }
];

const getFullName = (firstName, lastName) => {
    return firstName + " "+ lastName;
}
for(let allName of users){
    let allUser=getFullName(allName.firstName,  allName.lastName)
    console.log(allUser);
}
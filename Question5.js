var obj = {
    "id" : 4, "name": “abc”,
    "id" : 10,"name" : “ab2”,
    "id" : 5, "name": “abc3”,
    "id" : 6, "name": “abc5”
   }

//    object cannot have repeated key, key should b unique
   
console.log(JSON.stringify(unordered));


const ordered = Object.keys(unordered)
  .sort()
  .reduce((obj, key) => {
    obj[key] = unordered[key];
    return obj;
  }, {});

console.log(JSON.stringify(ordered));

// in following example in had changed the id name to make them unque but values are same

// var unordered = {
//     id1: 4,
//     name: "abc",
//     id2: 10,
//     name: "ab2",
//     id3: 5,
//     name: "abc3",
//     id4: 6,
//     name: "abc5",
//   };
  
//   console.log(JSON.stringify(unordered));
  
//   const ordered = Object.keys(unordered)
//     .sort()
//     .reduce((obj, key) => {
//       obj[key] = unordered[key];
//       return obj;
//     }, {});
  
//   console.log(JSON.stringify(ordered));
  
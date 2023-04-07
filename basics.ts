// generics

function insertAtBeginning<T>(array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;

}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);

//function insertAtBeginning (array: any[], value: any){
 //   const newArray = [value, ...array];
 //   return newArray;
//
//}
//
//const demoArray = [1, 2, 3];
//const updatedArray = insertAtBeginning(demoArray, -1);
//
//generaics help in writing function which are typesafe
//in typescript

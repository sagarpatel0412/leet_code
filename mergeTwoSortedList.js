var mergeTwoLists = function (list1, list2) {
   for (let k = 0; k < list2.length;k++){
    list1.push(list2[k])
   }

   for (let i = 0; i < list1.length; i++) {
     for (let j = i + 1; j < list1.length; j++) {
       if (list1[i] > list1[j]) {
         const temp = list1[i];
         list1[i] = list1[j];
         list1[j] = temp;
       }
     }
   }

   return list1;
}

const list1 = [1,2,3]
const list2 = [1,1,3]
console.log(mergeTwoLists(list1,list2))
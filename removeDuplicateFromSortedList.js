var deleteDuplicates = function (head) {
    let unique = [];
    head.forEach((element) => {
        if(!unique.includes(element)){
            unique.push(element)
        }
    })
    return unique

};
const head = [1,1,2]
console.log(removeDuplicate(head))
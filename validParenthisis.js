var isValid = function(s) {
    // const arr = str.split("")
    let stack = []
   for(let c of s){
    if(c==="("||c==="{"||c==="["){
        stack.push(c)
    } else {
        if(!stack.length || (c === ")" && stack[stack.length -1] !== "(") || (c === "}" && stack[stack.length -1] !== "{") || (c === "]" && stack[stack.length -1] !== "[")){
            return false
        }
        stack.pop()
    }
   }
   return stack.length === 0

}

const str = "{}()"
console.log(isValid(str))
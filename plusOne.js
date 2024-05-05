var plusOne = function(digits) {
    const str = digits.join("")
    const add = BigInt(str) + BigInt(1)
    return Array.from(String(add), Number);

}

const digits = [1,2,3]
console.log(plusOne(digits))
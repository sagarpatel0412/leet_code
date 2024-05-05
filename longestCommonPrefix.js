var longestCommonPrefix = function(str){
  let first = str[0]
  let firstLen = first.length
  
  for( i = 0; i < str.length; i++){
    
    
    while(first !== str[i].substring(0,firstLen)){
        firstLen--
        if(firstLen === 0){
            return ""
        }
        first = first.substring(0,firstLen)
    }
  }
  return first
}

const str = ['flow','flight','flower']
console.log(longestCommonPrefix(str))
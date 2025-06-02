function chunkArrayInGroups(arr, num){
let result = [];

for(let i = 0; i < arr.length; i += num){
 let chunk = arr.slice(i, i + num);
  result.push(chunk)
}
  return result;
}




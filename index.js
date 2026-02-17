function inArray(array1,array2){
  let result = []
  for (let i = 0 ; i < array1.length; i++ ) {
    for ( let x = 0 ; x < array2.length; x++ ) {
      if (array2[x].includes(array1[i]) && !result.includes(array1[i])) {
        result.push(array1[i])
      }
    }
  }
  return result.sort()
}
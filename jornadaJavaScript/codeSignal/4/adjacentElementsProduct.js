function adjacentElementsProduct(inputArray) {
  let number = inputArray[0] * inputArray[1]
  let produto = number

  for(i = 1; i < inputArray.length; i++) {
      number = inputArray[i] * inputArray[i + 1]
          if(number > produto) {
              produto = number
          }
  }
  return produto
}

//Adição
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return -1; // Retorna -1 para indicar uma entrada inválida
  }
  
   
    return a + b;
  }
  
  //Subtração
  function subtract(a, b) {

   if (typeof a !== 'number' || typeof b !== 'number') {
    return -1; // Retorna -1 para indicar uma entrada inválida
  }
    return a - b;
  }
  
  //Multiplicação
  function multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return -1; // Retorna -1 para indicar uma entrada inválida
    }
   
    return a * b;
  }
  
  //Divisão
  function divide(dividendo, divisor) {
   if(divisor == 0) {
     
    throw new Error("Invalidar dividendo"+ divisor)
    
    }
    
    return dividendo/ divisor;
  };
  
  
  module.exports = { add, subtract, multiply, divide };
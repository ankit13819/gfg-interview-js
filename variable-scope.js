//What is variable scope in js ?

// Answer - variable scope is a access and modified variable scope with this following.

/*
1.Global Scope
2.Function Scope
3.Local Scope/Lexical scope
4.Block Scope 
*/

/*Global Scope - Outermost, The variable define outside the function or inside the inner function. 
It means access from everywhere */

//Example

let globalVar = 'Hello, I am a global variable'
function outerVar() {
  console.log(globalVar)
}
outerVar()
console.log(globalVar)

// 2.Function Scope - The variable define inside the function.

function functionScope() {
  let varInsideFunc = 'Hello, Please define the variable inside the function when you are using function scope'
  console.log(varInsideFunc)

}
functionScope()

//3.Local scope - Its also know as lexical scope - It means access the variable from outside the function inside the inner function its behave like clossure.

function outer() {
  let lexicalVar = 'Hello, please know me with both name lexical and local scope';

  function inner() {
    //access the variable from outside the function
    console.log(lexicalVar)
  }
  return inner
}
//store the outer function inside the variable
const outerFuncAccess = outer()
console.log(outerFuncAccess)//this call the inner function
console.log(outerFuncAccess())//call the variable and undefined also because you are using two times console

outerFuncAccess()//correct way

// 4.Block Scope - Access the variable inside the function and curly braces or {}

if (true) {
  let blockVar = 'Hello,define this variable with let and const inside the block scope'
  console.log(blockVar)
}

console.log(blockVar)//ReferenceError: blockVar is not defined
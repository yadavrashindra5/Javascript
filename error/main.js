// There are 7 types of error in javascript
/** 1.syntax error: The error occurs when you use a predefined syntax incorreclty
 *
 * Example
 * const func=()=>
 * console.log(log)
 *  }
 */

/**
 * 2.Reference error
 * in a case where a variable reference can't be found or hasn't been
 * declared, then a Reference error occurs
 *
 * Example
 * console.log(u)
 * console.log(add())
 *
 *
 */

/**
 *
 * 3. Type Error:-
 * An error occurs when a value is used outside the scope of its data type
 *
 * let a = 1
 * console.log(a())
 *
 * //output
 * Uncaught TypeError: a is not a function
 *
 */

/**
 * 4. Evaluation Error:-Current JavaScript engines and EcmaScript specifications do not throw this error. However, it is still available for backward compatibility. The error is called when the eval() backward function is used, as shown in the following code block:
 *
 * try{
 *  throw new EvalError("'Throws an error'")
 * }catch(error){
 *  console.log(error.name, error.message}
 * }
 */

/**
 * 5. RangeError:- This is an error when a range of expected values is required,as shown below
 * 
 * const checkRange=(num)=>{
 * if(num<30) throw new RangeError('Wrong number')};
 * return true;
 * 
 * checkRange(20);
 * 
 * output
 * 
 *  if (num < 30) throw new RangeError("Wrong number");
 * RangeError: Wrong number

 */

/**
 * 6. URI Error- When the wrong character(s) are used in a URI
 * function, the error is called
 *
 * console.log(decodeURI("https://www.educative.io/shoteditor"))
 * console.log(decodeURI("%sdfk"));
 *
 *
 * console.log(decodeURI("https://www.educative.io/shoteditor"))
 * console.log(decodeURI("%sdfk"));
 *
 */

/**
 * 7 Internal Error- In the JS engine, this error occurs most often when there 
 * is too much data and the stack exceeds its critical size. When there
 * are too many recursion patterns, switch cases, etc, the JS engine gets
 * overwhelmed
 * 
 * 
 * switch(condition) {
 case 1:
 ...
 break
 case 2:
 ...
 break
 case 3:
 ...
 break
 case 4:
 ...
 break
 case 5:
 ...
 break
 case 6:
 ...
 break
 case 7:
 ...
 break
 ... up to 500 cases
 }

 */

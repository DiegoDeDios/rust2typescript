use wasm_bindgen::prelude::*;


#[wasm_bindgen]
pub fn addition(x: u32, y: u32)->u32{
    x + y
}

#[wasm_bindgen]
pub fn substraction(x: u32, y: u32)->u32{
    x-y
}

#[wasm_bindgen]
pub fn factorial(x:u32)->u32{
    if x == 1 || x == 0 {
        return 1
    }
    return x*factorial(x-1);
}

#[test]
fn addition_test(){
    assert_eq!(1+1,addition(1,1));
}

#[test]
fn substraction_test(){
    assert_eq!(3-3,substraction(3,3));
}

#[test]
fn factorial_test(){
    assert_eq!(6, factorial(3));
    assert_eq!(24, factorial(4));
    assert_eq!(120, factorial(5));
}
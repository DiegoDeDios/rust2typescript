use wasm_bindgen::prelude::*;


#[wasm_bindgen]
pub fn addition(x: u32, y: u32)->u32{
    x + y
}

#[test]
fn addition_test(){
    assert_eq!(1+1,addtion(1,1));
}
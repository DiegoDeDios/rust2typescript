# Working with Rust in React
Small React application calling a Rust library

## Building and installing Rust/WASM library as Typescript package

### Building library to WASM:
`npm run build:wasm`

### Installing newly made node package
`npm install /path/to/repo/calc-lib/pkg`

## Calling Rust library from Typescript in React App
```
import init, {addition} from "calc-lib";
        init().then(()=>{
            const sum = addition(x,y);
            console.log(sum)
        })
```

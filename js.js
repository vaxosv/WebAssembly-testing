let a

function loadwasm(a) {
    return fetch(a)
        .then(res => res.arrayBuffer())
        .then(buff => WebAssembly.compile(buff))
        .then(module => {return new WebAssembly.Instance(module)});
}

loadwasm("test.wasm")
    .then(instence => {
    a = instence.exports._Z2aai;
        console.log(a(12));
    });
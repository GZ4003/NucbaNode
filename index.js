const fs = require('fs');
const { resolve } = require('path');

const readFilePromise = (path) =>{
    return new Promise((resolve, reject) =>{
        fs.readFile(path, "utf8", (err, result) =>{
            if (err){
                reject("No se pudo leer el arhcivop");
            }
            resolve(result);
        });
    });
};

const writeFilePromise = (path, data)=>{
    return new Promise((resolve, reject)=>{
        fs.writeFile(path, data, (err, result) =>{
            if (err){
                reject("No se pudo leer el arhcivop");
            }
            resolve(result);
        });
    });    
}


const run = async () =>{
    const data = await readFilePromise("./data.json");
    const data1 = await readFilePromise("./data1.json");
    await writeFilePromise("./data.json", + data + data1);
    console.log(data);
};

run();
console.log("prmedkdfndfdoodnckksnksksk")
// console.log("antes de leer el file")
// readFile("./data.json")
//         .then((data) => {
//             console.log(data);
//         })
//         .catch((err) =>{
//             console.log(err)
//         });
// console.log("ya mande a leer el file");
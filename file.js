const fs = require("fs");
const os = require("os");
const [, , name] = process.argv;
fs.readFile("./all-names.txt","utf-8" , function(err, data){
    if(err) {
        console.log(err);
    }
    else{
        const replase = data.replaceAll("welcome", "srivardhan")
        fs.writeFile("./all-names.txt", replase, (err) => {
            console.log("Done");
        });
    }
});

fs.unlink("./temp.txt", function(err){
    console.log("Removed")
});

fs.unlink("./nice", function(err){
    console.log("fun");
})
// fs.writeFile("names.txt", name, (err)=>{
//     console.log("Done");
// });

// fs.appendFile("all-names.txt", name + "\n", (err) => {
//     console.log("Completed appending!!!");
// });
// const data = "Html files"
// const [ , ,noOfFiles] = process.argv
// for(let i=1; i<= noOfFiles; i++){
//     fs.writeFileSync(`./backups/test-${i}.html`, data
//     )
//     console.log("Completed writing!!!", i);

// }


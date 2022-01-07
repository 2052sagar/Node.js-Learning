//method one to import file system
//const fs = require('fs');

//method two to call all the function in file system
const {readFile, writeFile } = require('fs');


readFile('./content/first.txt', 'utf-8' ,(error, result)=>{
    if(error){
        console.log(error)
        return
    }

    const first = result;

    readFile('./content/second.txt', 'utf-8', (error, result) => {
        if(error){
            console.log(error)
            return
        }

        const second = result

        writeFile(
            './content/result-async.txt',
            `\n Here is the result afad : ${first}, ${second}`,
            { flag: 'a' },
            (error, result) => {
                if(error){
                    console.log(error)
                    return
                }
                console.log(result)
            }
            
            )

    })
    
})






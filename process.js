// console.log(process);

console.log(process.env.username);

console.log(process.argv[3] , process.argv[2]);

for (let i=2; i < process.argv.length; i++) {
    console.log(process.argv[i])
}

console.log(process.memoryUsage());
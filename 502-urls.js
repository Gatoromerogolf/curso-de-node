const miURL = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');

console.log (`nombre del host: ${miURL.hostname}`);

console.log (`nombre del path: ${miURL.pathname}`)

console.log(`resultado query ordenar : ${miURL.searchParams}`)

console.log(typeof miURL.searchParams);

console.log(`accediendo a un valor ${miURL.searchParams.get('ordenar')}`);

console.log(miURL.searchParams.get('ordenar'));

console.log(miURL.searchParams.get('nivel'));



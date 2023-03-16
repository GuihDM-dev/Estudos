//import com const e reqire por nao utilizar nenhuma biblioteca
const http = require("http");
//cria um servidor
http.createServer((request, response) => {
    //define o retorno da requisição: arquivo json e codigo 200 de sucesso
    response.writeHead(200, {'Content-Type':'application/json'});

    if(request.url === '/produto') {
        //Envia a resposta 
    response.end(JSON.stringify({
        message: 'Rota Produto'
    }));
    }

    if(request.url === '/usuarios') {
        //Envia a resposta 
    response.end(JSON.stringify({
        message: 'Rota Usuarios'
    }));
    }
    
    if(request.url === '/') {
        //Envia a resposta 
    response.end(JSON.stringify({
        message: 'Rota Home'
    }));
    }
    
})
.listen(4001, () => console.log("Servidor está rodando na porta 4001"))
//define a porta 4001 como a ser utilizada pelo servidor
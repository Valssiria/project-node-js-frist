const express = require('express')

const uuid = require('uuid')



const port = 3005
const app = express()
app.use(express.json())
/*assim vou comunicar que eu vou usar json para rodar e mandar 
informações de frontend e backend */

const users = []

/* ROTA DO MIDDLEWARE => INTERCEPTADOR, ele é uma function() */
const checkUserId = (request, response, next) =>{
  const { id } = request.params

  const index = users.findIndex(user => user.id === id)


  if (index < 0){
    return response.status(404).json({ error: "user  ot found" })
  }

  request.userIndex = index
  request.userId = id

  next()

}




/* ROTA DO GET => BUSCAR INFORMAÇÃO */
app.get('/test', (request, response) => {

 
  return response.json(users)

})

/* rotar de POST => CRIAR INFORMAÇÃO */
app.post('/test', (request, response) => {

  const { name, age } = request.body

  /* console.log(uuid.v4())*/
  const user = { id: uuid.v4(), name, age }

  users.push(user)

  return response.status(201).json(user)
})

/* rotar de atualizar PUT/PATCH  => ALTERAR/ATUALIZAR INFORMAÇÃO */
app.put('/test/:id', checkUserId, (request, response) => {


const index = request.userIndex
 const id = request.userId
 

  // const { id } = request.params
  const { name, age } = request.body

  const updatedUser = { id, name, age }


  // const index = users.findIndex(user => user.id === id)

  // if (index < 0) {
  //   return response.status(404).json({ message: "User not found" })
  // }



  users[index] = updatedUser

  return response.json(updatedUser)



})


/* rota de delite => DELETAR INFROMAÇÃO */

app.delete('/test/:id', checkUserId, (request, response) => {

  const index = request.userIndex

  // const { id } = request.params

  // const index = users.findIndex(user => user.id === id)


  // if (index < 0) {
  //   return response.status(404).json({ message: "User not found" })
  // }

  users.splice(index, 1)

  return response.status(204).json({ users })

})







/* parte do request body
 => {"name" : "menezes", "age" : } */

// const {name, age} = request.body
// console.log(request.body)

// return response.json({ name , age})
/*{ message: 'devClub'}*/



//  /* PARTE DO ROUTE PARAMS*/
//  const {id} = request.params

// console.log(id)
//   // console.log(request)
//   return response.json({id})
//   // return response.send("1000porHORA")



/* console.log(request.query)
/* PARTE DO QUERY PARAMS
 const {name, age}= request.query/* Destructuring assingnment*/
// console.log(name, age)
/* parte de retornar */
/*  return response.json({name, age})*/
// sed(') posso retornar um texto return response.send(' 1% estudos vão fluir')

// })

// app.listen(3005) posso rodar assim

app.listen(port, () => {
  console.log(` 👇🧠 serve started on port ${port} 👩‍💻`)
}) /* posso rodar assim */

/*  TERMINAL

PS C:\Users\valls> ls


    Diretório: C:\Users\valls


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        19/12/2023     10:02                .android
d-----        14/12/2023     19:08                .vscode
d-----        02/02/2024     17:46                clear
d-----        29/01/2024     22:00                code-club-projects
d-----        02/02/2024     18:14                code-project-node-
                                                  js
d-r---        11/12/2023     20:19                Contacts
d-----        13/12/2023     22:05                Documents
dar---        01/02/2024     11:05                Downloads
d-r---        15/01/2024     15:34                Dropbox
d-r---        11/12/2023     20:19                Favorites
d-----        31/01/2024     14:36                js-avancado-node-j
                                                  s
d-r---        11/12/2023     20:19                Links
dar---        11/12/2023     20:19                Music
d-----        02/02/2024     18:23                node_modules
dar--l        01/02/2024     10:47                OneDrive
d-r---        11/12/2023     20:19                Saved Games
dar---        11/12/2023     20:37                Searches
dar---        19/12/2023     10:11                Videos
-a----        10/01/2024     18:33             14 .bash_history
-a----        13/01/2024     14:17            193 .gitconfig
-a----        21/01/2024     20:27             20 .lesshst
-a----        29/01/2024     20:59            146 .node_repl_history
-a----        02/02/2024     18:23          37127 package-lock.json
-a----        02/02/2024     17:51             78 package.json
-a----        12/01/2024     18:54              0 Projeto We-Care


PS C:\Users\valls> cd code-project-node-js
PS C:\Users\valls\code-project-node-js> ls


    Diretório: C:\Users\valls\code-project-node-js


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        02/02/2024     18:18                first-project-js


PS C:\Users\valls\code-project-node-js> cd .\first-project-js\
PS C:\Users\valls\code-project-node-js\first-project-js> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (first-project) first-project
version: (1.0.0)
description: meu projeto node ele vai fazer multi funções de buscar pesquisar, adicionar e deletar
entry point: (index.js)
test command:
git repository:
keywords: fronte-back
author: Valssiria
license: (ISC)
About to write to C:\Users\valls\code-project-node-js\first-project-js\package.json:

{
  "name": "first-project",
  "version": "1.0.0",
  "description": "meu projeto node ele vai fazer multi funções de buscar pesquisar, adicionar e deletar",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "fronte-back"
  ],
  "author": "Valssiria",
  "license": "ISC"
}


Is this OK? (yes)
PS C:\Users\valls\code-project-node-js\first-project-js> ls


    Diretório: C:\Users\valls\code-project-node-js\first-project-js


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        02/02/2024     18:21            365 index.js
-a----        02/02/2024     18:35            344 package.json


PS C:\Users\valls\code-project-node-js\first-project-js> ls

PS C:\Users\valls\code-project-node-js\first-project-js> ls


    Diretório: C:\Users\valls\code-project-node-js\first-project-js


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        02/02/2024     18:42           4274 index.js
-a----        02/02/2024     18:35            344 package.json


PS C:\Users\valls\code-project-node-js\first-project-js> pwd

Path
----
C:\Users\valls\code-project-node-js\first-project-js


PS C:\Users\valls\code-project-node-js\first-project-js> code .
abriu no vs code


TERMINAL DO VS CODE

PS C:\Users\valls\code-project-node-js\first-project-js> npm i express      

added 62 packages, and audited 63 packages in 5s

11 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

Node.js v20.11.0
PS C:\Users\valls\code-project-node-js\first-project-js> node index.js

CTRL+C PARA DE RODAR O CODIGO

instalando o nodemon -D no express

PS C:\Users\valls\code-project-node-js\first-project-js> npm i nodemon -D

added 33 packages, and audited 96 packages in 5s

14 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
 },
  "devDependencies": {
    "nodemon": "^3.0.3"
  }

  vou no meu package.json e coloco isso
   "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1", 
    "dev": "nodemon"
  } para chamar meu nodemon..

  vamos ver se ja estar rodando isso
  PS C:\Users\valls\code-project-node-js\first-project-js> npm run dev

> first-project@1.0.0 dev
> nodemon

[nodemon] 3.0.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node index.js

como rodar no insomnia co GET

http://localhost:3005/test?name=menezes&age=28


app.get('/test/:banana', (request, response) vs code
roternou isso
 params: { banana: 'abacate' },
  query: {},

  http://localhost:3005/test/abacate servidor do fronte para backend

  insomnia sempre vai enviar os dados para o vscode para poder chamar as informações enviadas

INSTALANDO O ID UMA BIBLIOTECA
PS C:\Users\valls\code-project-node-js\first-project-js> npm i uuid

added 1 package, and audited 97 packages in 2s

15 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

1. Instalar

npm install uuid

2. Crie um UUID (sintaxe do módulo ES6)

import { v4 as uuidv4 } from 'uuid';
    uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d' gera um id unico universal

vamos usar essar aqui
      uuid.v4()	Criar um UUID versão 4 (aleatório)


  - MIDDLEWARES => INTERCEPTADOR => TEM P PODER DE PARAR OU ALTERAR DADOS DA REQUISIÇÃO 
  - EXPRESS É BASEADO DE MIDDLEWARES
   
  EX: 
const myFirstMiddleware = (request, response, next ) => {
  console.log("fui chamado")

  next()

}

app.use(myFirstMiddleware)


*/
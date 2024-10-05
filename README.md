# Simple-User-Authentication-API

A **Simple User Authentication API** é uma API RESTful projetada para gerenciar o registro e a autenticação de usuários. Esta API oferece uma maneira segura e eficiente para os usuários criarem contas, fazerem login e gerenciarem suas sessões.

A API já está hospedada e disponível publicamente em: [Simple User Authentication API](https://simple-user-authentication-api.onrender.com). 

Acesse o Swagger da  API hospedada em: [Simple User Authentication API SWAGGER](https://simple-user-authentication-api.onrender.com/api/docs/)

## Funcionalidades

- **Registro de Usuário**: Permite que novos usuários se registrem com um nome de usuário, email e senha.
- **Login de Usuário**: Autentica usuários e retorna um token JWT para acesso seguro.
- **Validação de Autenticação**: Oferece um método para verificar se um usuário está atualmente logado.
-**Logout**: Permite que os usuários desconectem suas contas.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript do lado do servidor.
- **Express.js**: Framework para construção de APIs RESTful.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **JWT (JSON Web Token)**: Mecanismo para autenticação e autorização.
- **bcrypt**: Biblioteca para hash de senhas.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional (SQL).
- **Prisma**: ORM para trabalhar com banco de dados de maneira eficiente.
- **Swagger-UI-Express**: Ferramenta para documentação de APIs com interface interativa.
- **Zod**: Biblioteca para validação de esquemas e tipos.
- **zod-validation-error**: Utilitário para converter erros de validação do Zod em mensagens mais amigáveis.
- **dotenv**: Carrega variáveis de ambiente a partir de um arquivo `.env`.
- **cors**: Middleware para permitir requisições de diferentes origens (Cross-Origin Resource Sharing).

## Instalação e Execução

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)


### Passos
1. Clone o repositório:
   
   ```bash
    git@github.com:DomingosChiconela/Simple-User-Authentication-API.git
  ou
  
    https://github.com/DomingosChiconela/Simple-User-Authentication-API.git

2. acesse o projecto que a caba de clonar com o comando:
   ```bash
   cd Simple-User-Authentication-API
   
3. Instale as dependências
    ```bash
    npm install 

4. Configure as variáveis de ambiente antes de rodar a aplicação. Para isso, crie o arquivo `.env` com base no arquivo `.env.template`, que contém um molde do que é necessário.
   
5. Para rodar a aplicação, utilize o comando
   ```bash
   npm run dev
 
6. Com o servidor rodando, você pode acessar a documentação Swagger no seguinte endereço
   ```bash
   http://localhost:{numero de porta}/api/docs/

# Projeto Fullstack Challenge
## Este projeto é uma aplicação fullstack que consiste em um frontend em React e um backend em Spring Boot. O projeto é containerizado usando Docker, e utiliza MySQL como banco de dados.


Segue imagens do projeto:
<div style="display: flex; flex-direction: column; align-items: center; justify-content: space-between">

![Login page](./imagesReadMe/image.png)

![img_2.png](imagesReadMe%2Fimg_2.png)
![img_3.png](imagesReadMe%2Fimg_3.png)
![img_4.png](imagesReadMe%2Fimg_4.png)

![img_1.png](imagesReadMe%2Fimg_1.png)
![img.png](imagesReadMe%2Fimg.png)
![img_5.png](imagesReadMe%2Fimg_5.png)
![img_6.png](imagesReadMe%2Fimg_6.png)
![img_7.png](imagesReadMe%2Fimg_7.png)
![img_8.png](imagesReadMe%2Fimg_8.png)
![img_9.png](imagesReadMe%2Fimg_9.png)
![img_10.png](imagesReadMe%2Fimg_10.png)
![img_11.png](imagesReadMe%2Fimg_11.png)
![img_12.png](imagesReadMe%2Fimg_12.png)
![img_13.png](imagesReadMe%2Fimg_13.png)
![img_14.png](imagesReadMe%2Fimg_14.png)

</div>


### Uma breve explicação de como se utilizar o projeto:
Ao iniciar a aplicação, um administrador é gerado com os seguintes dados:
```bash 
cpf: 43194161040
senha "123"
```

Ao logar, é possivel verificar os campos de administração e cadastrar novos usuários.
Conforme os requisitos estipulados, mesmo que o cpf esteja certo, existem 50% de chance do usuário não ser autorizado para votação.



## Estrutura do Projeto

- **frontend**: Contém a aplicação React.
- **backend**: Contém a aplicação Spring Boot.
- **docker**: Contém a configuração do Docker Compose e outros arquivos relacionados ao Docker.
- **planning**: Contém os requisitos e documentos de arquitetura do projeto.

## Arquitetura

Os detalhes da arquitetura podem ser encontrados nos seguintes recursos:
- [Excalidraw](https://excalidraw.com/#json=lhimBwym5HzXJ5x3BMR6J,SM4bw5uPP2dVp_z1TgwMfA)
- [Notion](https://www.notion.so/c30b1543595f4153a55f5b86fa0a630b?v=ae7e12ba3b55421b87c27fc8ac752876)

## Pré-requisitos

- Docker
- Docker Compose

## Primeiros Passos

### Clonar o Repositório

```bash
git clone https://github.com/AntonyBresolin/fullstack-challenge.git
cd fullstack-challenge
```

### Construir e Executar o Projeto

1. **Navegue até o diretório `docker`:**

```bash
cd docker
```

2. **Construa e inicie os containers:**

```bash
docker-compose up --build
```

### Acessar a Aplicação

- **Frontend**: A aplicação React estará acessível em [http://localhost:3000](http://localhost:3000).
- **Backend**: A aplicação Spring Boot estará acessível em [http://localhost:8080](http://localhost:8080).

### Parar os Containers

Para parar os containers em execução, execute:

```bash
docker-compose down
```

## Requisitos do Projeto

Os requisitos do projeto estão detalhados na pasta `/planning`.

## Tecnologias Utilizadas

- **Frontend**: React, TailwindCSS, React Router
- **Backend**: Spring Boot, Spring Data JPA, Spring Security, MySQL
- **Banco de Dados**: MySQL
- **Containerização**: Docker, Docker Compose

## Contato

Para quaisquer dúvidas ou sugestões, sinta-se à vontade para entrar em contato.


==================





# Votação

## Objetivo

No cooperativismo, cada associado possui um voto e as decisões são tomadas em assembleias, por votação. Imagine que você deve criar uma solução we para gerenciar e participar dessas sessões de votação.
Essa solução deve ser executada na nuvem e promover as seguintes funcionalidades através de uma API REST / Front:

- Cadastrar uma nova pauta
- Abrir uma sessão de votação em uma pauta (a sessão de votação deve ficar aberta por
  um tempo determinado na chamada de abertura ou 1 minuto por default)
- Receber votos dos associados em pautas (os votos são apenas 'Sim'/'Não'. Cada associado
  é identificado por um id único e pode votar apenas uma vez por pauta)
- Contabilizar os votos e dar o resultado da votação na pauta

Para fins de exercício, a segurança das interfaces pode ser abstraída e qualquer chamada para as interfaces pode ser considerada como autorizada. A solução deve ser construída em java com Spring-boot e Angular/React conforme orientação, mas os frameworks e bibliotecas são de livre escolha (desde que não infrinja direitos de uso).

É importante que as pautas e os votos sejam persistidos e que não sejam perdidos com o restart da aplicação.

## Como proceder

Por favor, realize o FORK desse repositório e implemente sua solução no FORK em seu repositório GItHub, ao final, notifique da conclusão para que possamos analisar o código implementado.

Lembre de deixar todas as orientações necessárias para executar o seu código.

### Tarefas bônus

- Tarefa Bônus 1 - Integração com sistemas externos
  - Criar uma Facade/Client Fake que retorna aleátoriamente se um CPF recebido é válido ou não.
  - Caso o CPF seja inválido, a API retornará o HTTP Status 404 (Not found). Você pode usar geradores de CPF para gerar CPFs válidos
  - Caso o CPF seja válido, a API retornará se o usuário pode (ABLE_TO_VOTE) ou não pode (UNABLE_TO_VOTE) executar a operação. Essa operação retorna resultados aleatórios, portanto um mesmo CPF pode funcionar em um teste e não funcionar no outro.

```
// CPF Ok para votar
{
    "status": "ABLE_TO_VOTE
}
// CPF Nao Ok para votar - retornar 404 no client tb
{
    "status": "UNABLE_TO_VOTE
}
```

Exemplos de retorno do serviço

### Tarefa Bônus 2 - Performance

- Imagine que sua aplicação possa ser usada em cenários que existam centenas de
  milhares de votos. Ela deve se comportar de maneira performática nesses
  cenários
- Testes de performance são uma boa maneira de garantir e observar como sua
  aplicação se comporta

### Tarefa Bônus 3 - Versionamento da API

○ Como você versionaria a API da sua aplicação? Que estratégia usar?

## O que será analisado

- Simplicidade no design da solução (evitar over engineering)
- Organização do código
- Arquitetura do projeto
- Boas práticas de programação (manutenibilidade, legibilidade etc)
- Possíveis bugs
- Tratamento de erros e exceções
- Explicação breve do porquê das escolhas tomadas durante o desenvolvimento da solução
- Uso de testes automatizados e ferramentas de qualidade
- Limpeza do código
- Documentação do código e da API
- Logs da aplicação
- Mensagens e organização dos commits
- Testes
- Layout responsivo

## Dicas

- Teste bem sua solução, evite bugs

  Observações importantes
- Não inicie o teste sem sanar todas as dúvidas
- Iremos executar a aplicação para testá-la, cuide com qualquer dependência externa e
  deixe claro caso haja instruções especiais para execução do mesmo
  Classificação da informação: Uso Interno



# desafio-votacao

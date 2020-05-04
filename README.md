# Backend da Assistente de Compras Amada

Amada foi desenvolvida para facilitar as compras online das pessoas que não tem costume de usar e comece e integrar as api do Universo Americanas.

* Tecnologia utilizadas
* node.js 12.16.1
* cors.js 2.8.5 
* express.js 4.17.1
* mongoose.js 5.9.11

A aplicação foi configurada pra ser executada por CI via repositoria do github pelo serviços de deploy do Heroku.

Aplicação pode ser executada via Docker

### Endpoints
* https://app-amada.herokuapp.com/user - Post - Cadastrar Usuario
* https://app-amada.herokuapp.com/user - Get - Listar todos usuarios
* https://app-amada.herokuapp.com/userById/:id - Get - Procurar usuario por ID

* https://app-amada.herokuapp.com/shop - Post - Cadastrar Loja
* https://app-amada.herokuapp.com/shop - Get - Listar todoas as lojas
* https://app-amada.herokuapp.com/shopSortZipCode/:zipCode - Get - Procurar loja por cep
* https://app-amada.herokuapp.com/shopSortCoordinates/:longitude/:latitude - Get - Procurar loja mais proxima por coordenadas
* https://app-amada.herokuapp.com/shopById/:id - Get - Procurar loja por ID

* https://app-amada.herokuapp.com/product - Post - Cadastrar produto 
* https://app-amada.herokuapp.com/product - Get -  Listar todos produtos
* https://app-amada.herokuapp.com/productContains/:contains - Get - Listar produto
* https://app-amada.herokuapp.com/productById/:id - Get - Procurar produto por ID


### Equipe de desenvolvimento
* Dev - Eric Alberto da Silva - https://github.com/ericalbertodasilva/
* Dev - Renan Siqueira Antonio - https://github.com/renan-siqueira/
* UX/design - Sara Margarido - https://github.com/saramargarido
* Business - Claudio Marques
* Marketing - Karine Stefany de Moura Matos

### Plataforma Serviço:
Heroku Backend
MongoDB Cluster Banco de Dados

# Aula 25-11 - App Conversão de moeda

## Avaliação

* Implemente para que o usuário possa fazer conversão de outras moedas (mínimo + 3 moedas);
* Descreva abaixo o seu entendimento acerca desta atividade, explorando as funcionalidades das classes que contruímos e os principais pontos da aplicação;

## Entrega

* Clone este repositório e faça o que se pede;
* Realize um commit das suas alterações no seu repositório;
* Envie o link do repositório na avaliação gerada no classroom;

## Descritivo do Aluno:

Nesta Aula o professor nos mostrou o código de conversao de moedas no mesmo estilo da aula passada, mas agora com javascript utilizando Angular:

# ConversorService

O `ConversorService` é um serviço no Angular que facilita a conversão de moedas ao integrar a API AwesomeAPI. Ele permite que você obtenha taxas de câmbio atuais de diversas moedas, fazendo requisições HTTP para a API e retornando os dados necessários.

## Como Funciona

### Decorador `@Injectable`

O decorador `@Injectable` é utilizado para marcar a classe `ConversorService` como um serviço injetável. A configuração `{ providedIn: 'root' }` assegura que o serviço esteja disponível em toda a aplicação sem a necessidade de registrá-lo explicitamente em um módulo. Isso significa que a instância do serviço será compartilhada entre todos os componentes da aplicação.

### Método `converterMoeda`

O método `converterMoeda(moeda: String)` recebe como argumento um código de moeda, como `BRL-USD`, para realizar a conversão entre as moedas especificadas. Ele faz uma requisição HTTP utilizando a biblioteca Axios para acessar a API e retorna a taxa de câmbio da moeda solicitada.

### Axios

O Axios é uma biblioteca de requisições HTTP que facilita a comunicação com APIs, utilizando Promises. Com o Axios, podemos fazer solicitações GET para acessar as taxas de câmbio da API de forma simples e eficiente. A função `axios.get()` é utilizada para fazer a requisição e retornar os dados necessários.

# ConverterMoedaComponent

O `ConverterMoedaComponent` é um componente Angular que usa o serviço `ConversorService` para realizar a conversão de valores monetários entre diferentes moedas. Ele permite ao usuário escolher uma moeda de origem e destino, inserir um valor e calcular o valor convertido com base nas taxas de câmbio atuais.

## Como Funciona

### Estrutura do Componente

O `ConverterMoedaComponent` é composto por três principais propriedades e um método:

- **`opcaoEscolhida`**: A moeda escolhida pelo usuário para conversão (exemplo: 'BRL-USD').
- **`valor`**: O valor inserido pelo usuário para conversão.
- **`resultado`**: O valor resultante da conversão, calculado com base na taxa de câmbio.

### Método `calcularConversao`

Este método é chamado quando o usuário deseja realizar a conversão de moeda. Ele segue os seguintes passos:

1. Chama o método `converterMoeda()` do serviço `ConversorService`, passando a moeda escolhida pelo usuário.
2. A API retorna os dados da conversão, que são processados para extrair a taxa de câmbio (`high`).
3. Multiplica o valor inserido pelo usuário pela taxa de câmbio, calculando o valor convertido.
4. O resultado é exibido no componente.

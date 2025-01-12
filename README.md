# Validador de Cartão de Crédito

Este projeto foi desenvolvido como parte do desafio "Criando um Validador de Bandeiras de Cartão de Crédito com o GitHub Copilot" da Digital Innovation One (DIO).

## 📝 Descrição

O projeto consiste em uma implementação JavaScript de um validador de cartões de crédito que:
- Valida números de cartão de crédito usando o algoritmo de Luhn
- Identifica a bandeira do cartão com base no número
- Suporta múltiplas bandeiras de cartão

## ✨ Funcionalidades

- Validação do número do cartão usando o algoritmo de Luhn
- Identificação automática da bandeira do cartão
- Suporte para múltiplas bandeiras
- Remoção automática de espaços em branco
- Verificação de entrada apenas numérica

## 🎴 Bandeiras Suportadas

- Visa
- Mastercard
- Elo
- American Express (Amex)
- Diners Club
- Discover
- JCB
- Enroute
- Voyager
- Hipercard
- Aura

## 🚀 Como Usar

1. Inclua as funções no seu projeto:

```javascript
const numeroCartao = "5079 9847 9644 7266";
const resultado = validarCartaoCredito(numeroCartao);
console.log(`Válido: \${resultado.valido}, Bandeira: \${resultado.bandeira}`);
```

2. A função retorna um objeto com duas propriedades:
   - `valido`: boolean indicando se o número é válido
   - `bandeira`: string com o nome da bandeira ou null se não identificada

## 📋 Exemplo de Uso

```javascript
// Exemplo com cartão válido
const numeroCartao1 = "4532 7153 3790 1241";
console.log(validarCartaoCredito(numeroCartao1));
// Saída: { valido: true, bandeira: "visa" }

// Exemplo com cartão inválido
const numeroCartao2 = "1234 5678 9012 3456";
console.log(validarCartaoCredito(numeroCartao2));
// Saída: { valido: false, bandeira: null }
```

## 🔍 Estrutura do Código

O projeto consiste em duas funções principais:

1. `validarCartaoCredito(numero)`: Função principal que valida o número do cartão
   - Remove espaços em branco
   - Verifica se contém apenas dígitos
   - Aplica o algoritmo de Luhn
   - Retorna objeto com resultado da validação e bandeira

2. `identificarBandeira(numero)`: Função auxiliar que identifica a bandeira
   - Utiliza expressões regulares para identificar padrões
   - Suporta múltiplas bandeiras
   - Retorna o nome da bandeira ou null

## 🛠️ Tecnologias Utilizadas

- JavaScript
- Expressões Regulares (RegEx)
- GitHub Copilot

## ✅ Pré-requisitos

- JavaScript ES6+
- Conhecimento básico de funções e expressões regulares

## 👥 Autor

Marcus Lafaiete

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🔗 Links Úteis

- [Digital Innovation One](https://www.dio.me/)
- [Documentação do GitHub Copilot](https://docs.github.com/pt/copilot)
```

---
⌨️ com ❤️ por [Seu Nome] 😊

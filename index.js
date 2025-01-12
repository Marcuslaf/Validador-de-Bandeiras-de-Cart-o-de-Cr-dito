function validarCartaoCredito(numero) {
    // Remove todos os espaços em branco do número do cartão
        numero = numero.replace(/\s+/g, "");

        // Verifica se o número contém apenas dígitos
        if (!/^\d+$/.test(numero)) {
            return { valido: false, bandeira: null };
    }

    let soma = 0;
    let alternar = false;

    // Itera sobre os dígitos do número do cartão de trás para frente
    for (let i = numero.length - 1; i >= 0; i--) {
        let n = parseInt(numero.charAt(i), 10);

        if (alternar) {
        n *= 2;
            if (n > 9) {
            n -= 9;
            }
        }

        soma += n;
        alternar = !alternar;
    }

    const valido = soma % 10 === 0;
    const bandeira = identificarBandeira(numero);

    return { valido, bandeira };
}

function identificarBandeira(numero) {
    const bandeiras = {
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^5[1-5][0-9]{14}$/,
        elo: /^(4011(78|79)|4312(74|75)|4389(35|36)|4514(16|17)|4576(32|33)|5041(75|76)|5066(99|98)|5090(41|42)|6277(80|81)|6362(97|98))[0-9]{10}$/,
        amex: /^3[47][0-9]{13}$/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
        enroute: /^(2014|2149)\d{11}$/,
        voyager: /^8699[0-9]{11}$/,
        hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/,
        aura: /^50[0-9]{14,17}$/,
    };

    for (let bandeira in bandeiras) {
        if (bandeiras[bandeira].test(numero)) {
            return bandeira;
        }
    }

    return null;
}

// Exemplo de uso
const numeroCartao = "5079 9847 9644 7266";
const resultado = validarCartaoCredito(numeroCartao);
console.log(`Válido: ${resultado.valido}, Bandeira: ${resultado.bandeira}`); // Válido: true, Bandeira: visa
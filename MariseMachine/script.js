function converterDecimal() {
    // --- Variáveis da função ---
    var decimal = Number(document.getElementById("valor_decimal").value);
    let octal = decimal.toString(8);
    let hexadecimal = decimal.toString(16);
    let binario = decimal.toString(2);

    var choice = document.getElementById("conversionChoice").value;

    if (choice == "octal") {
        document.getElementById("result-title").innerHTML = "Resultado Octal:";
        document.getElementById("result-value").innerHTML = octal;
    } else if (choice == "hexadecimal") {
        document.getElementById("result-title").innerHTML = "Resultado Hexadecimal:";
        document.getElementById("result-value").innerHTML = hexadecimal;
    } else if (choice == "binario") {
        document.getElementById("result-title").innerHTML = "Resultado Binário:";
        document.getElementById("result-value").innerHTML = binario;
    }

    document.getElementById('conversoes_bases').style.display = 'block';
}

function converterBinario() {
    var binario = parseInt(document.getElementById("valor_binario").value, 2);
    let octal = binario.toString(8);
    let hexadecimal = binario.toString(16);
    let decimal = binario.toString(10);

    var choice = document.getElementById("conversionChoice").value;

    if (choice == "decimal") {
        document.getElementById("result-title").innerHTML = "Resultado Decimal:";
        document.getElementById("result-value").innerHTML = decimal;
    } else if (choice == "octal") {
        document.getElementById("result-title").innerHTML = "Resultado Octa:";
        document.getElementById("result-value").innerHTML = octal;
    } else if (choice == "hexadecimal") {
        document.getElementById("result-title").innerHTML = "Resultado Hexadecimal:";
        document.getElementById("result-value").innerHTML = hexadecimal;
    }

    document.getElementById('conversoes_bases').style.display = 'block';
}

function converterOctal() {
    var octal = parseInt(document.getElementById("valor_binario").value, 8);
    let binario = octal.toString(2);
    let hexadecimal = octal.toString(16);
    let decimal = octal.toString(10);

    var choice = document.getElementById("conversionChoice").value;

    if (choice == "decimal") {
        document.getElementById("result-title").innerHTML = "Resultado Decimal:";
        document.getElementById("result-value").innerHTML = decimal;
    } else if (choice == "binario") {
        document.getElementById("result-title").innerHTML = "Resultado Binario:";
        document.getElementById("result-value").innerHTML = binario;
    } else if (choice == "hexadecimal") {
        document.getElementById("result-title").innerHTML = "Resultado Hexadecimal:";
        document.getElementById("result-value").innerHTML = hexadecimal;
    }

    document.getElementById('conversoes_bases').style.display = 'block';
}

function converterHexadecimal() {
    var hexadecimal = parseInt(document.getElementById("valor_hexadecimal").value, 16);
    let binario = hexadecimal.toString(2);
    let octal = hexadecimal.toString(8);
    let decimal = hexadecimal.toString(10);

    var choice = document.getElementById("conversionChoice").value;

    if (choice == "decimal") {
        document.getElementById("result-title").innerHTML = "Resultado Decimal:";
        document.getElementById("result-value").innerHTML = decimal;
    } else if (choice == "binario") {
        document.getElementById("result-title").innerHTML = "Resultado Binario:";
        document.getElementById("result-value").innerHTML = binario;
    } else if (choice == "octal") {
        document.getElementById("result-title").innerHTML = "Resultado Octal:";
        document.getElementById("result-value").innerHTML = octal;
    }

    document.getElementById('conversoes_bases').style.display = 'block';
}
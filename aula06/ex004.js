var nome = window.prompt('Digite seu nome: ');
document.write(`Olá, <strong>${nome}</strong>. Seu nome tem ${nome.length} letras. <br>`);
document.write(`Seu nome em maiúsculas é ${nome.toUpperCase()}. <br>`);
document.write(`Seu nome em minúsculas é ${nome.toLowerCase()}.`);
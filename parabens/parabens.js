function media() {
    var nome = window.prompt('Qual é o nome do aluno?')
    var n1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    var n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`))
    med = (n1 + n2)/2

    var msg // cria uma variavel e deixa ela vazia
    if (med >= 6) { // Se por acaso a média foi 6.0 ou mais...
        msg = 'Meus parabens!'
    } else { // senão...
        msg = 'Estude um pouco mais!'

    }
    //o if e uma estrutura que cria uma CONDICAO, que executa um bloco de comandos ou outro, 

    var res = document.getElementById('situacao')
    res.innerHTML = `<p>Calculando a media final de ${nome}.</p>`
    res.innerHTML += `<p>As notas obtidas foram${n1} e ${n2}.</p>`
    res.innerHTML += `<p>A media final sera ${med}.</p>`
    res.innerHTML += `<p>A mensagem que temos e: <strong style='color:white;'>${msg}</strong></p>`
    res.style.color = ""
    
}

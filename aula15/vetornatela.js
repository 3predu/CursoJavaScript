// OBS:. forma desatualizada ECMAScript (não está errada, porém tem um modo mais simples)
let valores = [8, 1, 7, 4, 2, 9]
for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor: ${valores[pos]}`)
}


// OBS:. forma mais atualizada do ECMAScript, ARRAY x FOR (forma mais simplificada)

let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
for(let pos in valores ){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
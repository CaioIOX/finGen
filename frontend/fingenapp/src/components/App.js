export function formataData(data, bool) {
    var inc = 0;
    if (bool) 
        inc = 1;
    
    data = new Date(data);
    const dia = (data.getDate() + inc).toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear().toString();
    const dataFormatada = `${dia}/${mes}/${ano}`

    return dataFormatada;
}
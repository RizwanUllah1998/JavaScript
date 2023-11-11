document.getElementById('btn').addEventListener('click', function () {
    let table = document.getElementById('table').value;
    let start = parseInt(document.getElementById('input1').value);
    let end = parseInt(document.getElementById('input2').value);
    let result = "";
    
    for (let i = start; i <= end; i++) {
        //string interpolation ${} 
        result += `${table} x ${i} = ${table * i}<br>`;
    }
    document.getElementById('pera').innerHTML = result;
});

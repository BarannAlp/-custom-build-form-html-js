function publishToTable() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox"); 
    const name = document.getElementById('name').value;
    const specie = document.getElementById('specie').value;
    const error = document.getElementById('error');
    error.innerHTML = (!name || !specie) ? 'Name & Specie both values are required.' : '';
    if (name && specie) {
        const tableElement = document.getElementById('table');
        const trElement = document.createElement('tr');
        const tbodyElement = document.createElement('tbody');
        const nameEle = document.createElement('td');
        const specieEle = document.createElement('td');
        nameEle.innerHTML = name;
        specieEle.innerHTML = specie;
        trElement.appendChild(x);
        trElement.appendChild(nameEle);
        trElement.appendChild(specieEle);
        tbodyElement.appendChild(trElement);
        tableElement.appendChild(tbodyElement);
    }
}
 
function deleteRows(){
    var tableRows = document.getElementById("table").rows;
for (var i = tableRows.length-1; i > 0 ; i--) {

if(tableRows[i].querySelector('input[type="checkbox"]').checked)
{
table.deleteRow(i);
}
}
}
        
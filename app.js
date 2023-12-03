let input = document.getElementById("input-disc");
let buttonSubmit = document.getElementById("button-disc");
let editButton = document.getElementById("edit");
let deleteButton = document.getElementById("delete");
let arr = []


function Enter()
{
    let div = document.getElementById("table-data");
    let create = document.createElement("tr");
    let createData1 = document.createElement("td");
    let createData2 = document.createElement("td");
    let createData3 = document.createElement("td");
    let createbutton1 = document.createElement("button");
    let createbutton2 = document.createElement("button");
    if (input.value != '')
    {
        
        createData2.innerText = input.value;
        
        input.value = '';
        
        createData3.appendChild(createbutton1);
        
        createData3.appendChild(createbutton2);
        
        createbutton1.innerText = "Edit";
        
        createbutton2.innerText = "Delete";

        createbutton1.onclick = function()
        {
            Edit(createData2);
        }

        createbutton2.onclick = function()
        {
            Delete(create);
        }
        
        create.appendChild(createData2);
        
        create.appendChild(createData3);
        
        div.appendChild(create);
        
        console.log(create);
    }
    else
    {
        alert("First enter any value");
    }

    return false;


} 


function Edit(input)
{
    let inputD = prompt("Enter the description: ");
    if (inputD != '')
    {
        input.innerText = inputD;
    }
}

function Delete(input)
{
    input.remove();
}
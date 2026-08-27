const tableBody = document.querySelector("#todo-table tbody");
const addTaskBtn = document.getElementById("add_task");
const resetListBtn = document.getElementById("reset_list");

function formatDate(date){
  const day = String(date.getdate()).padStart(2, "0");
  const month = String(date.getMonth()+1).padStart(2, "0");
  const year = date.getFullYear();

  return day+"-"+month+"-"+year
}

function renumberRow(){
  const rows = tableBody.querySelectorAll("tr");
  rows.forEach((row, index), ()=>{
    row.cell[0].textContent = index+1;
  });
}

function addRow(taskName, status, created, deadline){
  const row = document.createElement("tr");

  row.innerHTML = `
  <td></td>
  <td>${taskName}</td>
  <td>${status}</td>
  <td>${created}</td>
  <td>${deadline}</td>
  <td><input type="button" value="Done" name="done" class="button"></td>
  `;

  tableBody.appendChild(row);
  renumberRow();
}
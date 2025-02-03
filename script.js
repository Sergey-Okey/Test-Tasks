document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("#data-table tbody");
  const addRowsButton = document.querySelector("#add-rows");
  const rowCountInput = document.querySelector("#row-count");

  function createRow() {
      const row = document.createElement("tr");

      row.innerHTML = `
          <td><input type="text" class="surname"></td>
          <td><input type="text" class="name"></td>
          <td>
              <select class="grade1">
                  <option value="">--</option>
                  <option value="Да">Да</option>
                  <option value="Нет">Нет</option>
              </select>
          </td>
          <td>
              <select class="grade2">
                  <option value="">--</option>
                  <option value="Да">Да</option>
                  <option value="Нет">Нет</option>
              </select>
          </td>
      `;
      tableBody.appendChild(row);
      row.addEventListener("input", updateRowColor);
  }

  function updateRowColor(event) {
      const row = event.target.closest("tr");
      const grade1 = row.querySelector(".grade1").value;
      const grade2 = row.querySelector(".grade2").value;

      row.style.backgroundColor = "";
      if (grade1 && grade2) {
          if (grade1 === "Да" && grade2 === "Да") {
              row.style.backgroundColor = "lightgreen";
          } else if (grade1 === "Нет" && grade2 === "Нет") {
              row.style.backgroundColor = "lightcoral";
          } else {
              row.style.backgroundColor = "lightyellow";
          }
      }
  }

  addRowsButton.addEventListener("click", () => {
      const count = parseInt(rowCountInput.value, 10) || 1;
      for (let i = 0; i < count; i++) {
          createRow();
      }
  });
});

const appContainer = document.createElement("div");
appContainer.innerHTML = `
  <table id="data-table" border="1">
      <thead>
          <tr>
              <th>Фамилия</th>
              <th>Имя</th>
              <th>Оценка 1</th>
              <th>Оценка 2</th>
          </tr>
      </thead>
      <tbody></tbody>
  </table>
  <input type="number" id="row-count" value="1" min="1">
  <button id="add-rows">Добавить строки</button>
`;
document.body.appendChild(appContainer);

/**
 * Generates a table head
 * @author Valentino Gagliardi <valentinoDOTvalentinog.com>
 * @param {HTMLTableElement} table - The target HTML table
 * @param {Array} data - The array of cell header names
 * @return {void}
 */
function generateTableHead(table, data) {
    const thead = table.createTHead();
    const row = thead.insertRow();
    for (const i of data) {
      const th = document.createElement("th");
      const text = document.createTextNode(i);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
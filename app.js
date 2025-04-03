document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("donationForm");
  const recordsTable = document.getElementById("recordsTable").getElementsByTagName("tbody")[0];

  // Load records from localStorage or initialize an empty array
  let records = JSON.parse(localStorage.getItem("donationRecords")) || [];

  // Function to render records in the table
  function renderRecords() {
    recordsTable.innerHTML = "";
    if(records.length === 0) {
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      td.colSpan = 4;
      td.textContent = "No records found.";
      tr.appendChild(td);
      recordsTable.appendChild(tr);
    } else {
      records.forEach(record => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${record.date}</td>
                        <td>${record.donationType}</td>
                        <td>$${parseFloat(record.amount).toFixed(2)}</td>
                        <td>${record.notes}</td>`;
        recordsTable.appendChild(tr);
      });
    }
  }

  // Handle form submission
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const record = {
      date: document.getElementById("date").value,
      donationType: document.getElementById("donationType").value,
      amount: document.getElementById("amount").value,
      notes: document.getElementById("notes").value
    };
    records.push(record);
    localStorage.setItem("donationRecords", JSON.stringify(records));
    renderRecords();
    form.reset();
  });

  renderRecords();
}); document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("donationForm");
  const recordsTable = document.getElementById("recordsTable").getElementsByTagName("tbody")[0];
  
  // Load records from localStorage or initialize an empty array
  let records = JSON.parse(localStorage.getItem("donationRecords")) || [];
  
  // Function to render records in the table
  function renderRecords() {
    recordsTable.innerHTML = "";
    if (records.length === 0) {
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      td.colSpan = 4;
      td.textContent = "No records found.";
      tr.appendChild(td);
      recordsTable.appendChild(tr);
    } else {
      records.forEach(record => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${record.date}</td>
                        <td>${record.donationType}</td>
                        <td>$${parseFloat(record.amount).toFixed(2)}</td>
                        <td>${record.notes}</td>`;
        recordsTable.appendChild(tr);
      });
    }
  }
  
  // Handle form submission
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const record = {
      date: document.getElementById("date").value,
      donationType: document.getElementById("donationType").value,
      amount: document.getElementById("amount").value,
      notes: document.getElementById("notes").value
    };
    records.push(record);
    localStorage.setItem("donationRecords", JSON.stringify(records));
    renderRecords();
    form.reset();
  });
  
  renderRecords();
});
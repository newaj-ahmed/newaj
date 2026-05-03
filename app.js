const students = [
"Abdul Kasem","Wahid Barbuya","Afzal Hussain","Alomgir Mandol",
"Arif Arman","Gautam Kumar","Iqbal Hussain","Kunal Hasnu",
"Mahfuz Alom","Manab Baruah","Manjur Ahmed","Masum Suhel",
"Mukesh Chauhan","Newaj Ahmed","Nur Amin","Nuruz Zaman",
"Piarul Islam","Ruhal Ahmed","Samiul Islam","Samsul Alom",
"Shaminur Sikdar","Sheak Farid","Thangit Hasnu","Yahia Ahmed","Zaid Hussain"
];

let attendance = {};

// LOAD STUDENTS
function loadStudents() {
  let div = document.getElementById("students");
  div.innerHTML = "";

  students.forEach(name => {
    let st = attendance[name] || "-";

    let className = "";
    if (st === "P") className = "present";
    if (st === "A") className = "absent";

    div.innerHTML += `
      <div class="student">
        <span>${name}</span>
        <span class="status ${className}">${st}</span>
        <div>
          <button onclick="mark('${name}','P')">P</button>
          <button onclick="mark('${name}','A')">A</button>
        </div>
      </div>
    `;
  });
}

// MARK SINGLE
function mark(name, status) {
  attendance[name] = status;
  loadStudents();
}

// MARK ALL PRESENT
function markAllPresent() {
  students.forEach(name => attendance[name] = "P");
  loadStudents();
}

// MARK ALL ABSENT
function markAllAbsent() {
  students.forEach(name => attendance[name] = "A");
  loadStudents();
}

// SAVE
function saveAttendance() {
  let date = new Date().toISOString().split("T")[0];

  if (localStorage.getItem(date)) {
    alert("Already saved for today");
    return;
  }

  localStorage.setItem(date, JSON.stringify(attendance));
  alert("Saved");
}

// LOAD
function loadAttendance() {
  let date = document.getElementById("date").value;

  let data = localStorage.getItem(date);

  if (data) {
    attendance = JSON.parse(data);
  } else {
    attendance = {};
    alert("No record found");
  }

  loadStudents();
}

// UPDATE
function updateAttendance() {
  let date = document.getElementById("date").value;

  if (!date) {
    alert("Select date first");
    return;
  }

  localStorage.setItem(date, JSON.stringify(attendance));
  alert("Updated");
}

// GENERATE + DOWNLOAD EXCEL
function generateReport() {
  let stats = {};
  let total = 0;
  let currentMonth = new Date().getMonth();

  for (let key in localStorage) {
    if (!key.includes("-")) continue;

    let d = new Date(key);
    if (d.getMonth() !== currentMonth) continue;

    total++;

    let data = JSON.parse(localStorage.getItem(key));

    for (let name in data) {
      if (!stats[name]) stats[name] = 0;
      if (data[name] === "P") stats[name]++;
    }
  }

  let csv = "Name,Attendance %,Present Days,Total Classes\r\n";

  for (let name in stats) {
    let percent = total ? ((stats[name] / total) * 100).toFixed(1) : 0;
    csv += `${name},${percent}%,${stats[name]},${total}\r\n`;
  }

  let blob = new Blob([csv], { type: "text/csv" });
  let a = document.createElement("a");
  a.href = URL.createObjectURL(blob);

  // AUTO FILE NAME
  const now = new Date();
  const month = now.toLocaleString("default", { month: "long" });
  const year = now.getFullYear();

  a.download = `attendance_${month}_${year}.csv`;

  a.click();
}

// INIT
loadStudents();
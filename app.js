const sheetID = "1yIQaKBp2GaV9zrEmDPveItWF2zZM9X5aIzLysT2KhLw";

const url = `https://opensheet.elk.sh/${sheetID}/Form Responses 1`;

fetch(url)
  .then(response => response.json())
  .then(data => {

    const container = document.getElementById("student-container");

    container.innerHTML = "";

    // GROUP STUDENTS CLASSWISE

    const groupedStudents = {};

    data.forEach(student => {

      const studentClass = student["Class"] || "Unknown Class";

      if (!groupedStudents[studentClass]) {
        groupedStudents[studentClass] = [];
      }

      groupedStudents[studentClass].push(student);

    });

    // CREATE CLASSWISE SECTIONS

    for (const className in groupedStudents) {

      // CLASS TITLE

      const classTitle = document.createElement("h2");

      classTitle.innerText = `Class : ${className}`;

      classTitle.style.width = "100%";
      classTitle.style.marginTop = "40px";
      classTitle.style.marginBottom = "20px";
      classTitle.style.color = "#1e3a8a";
      classTitle.style.fontSize = "38px";
      classTitle.style.textAlign = "center";

      container.appendChild(classTitle);

      // STUDENT GRID

      const classGrid = document.createElement("div");

      classGrid.style.display = "grid";
      classGrid.style.gridTemplateColumns = "repeat(auto-fit,minmax(280px,1fr))";
      classGrid.style.gap = "25px";
      classGrid.style.width = "100%";

      groupedStudents[className].forEach(student => {

        const card = document.createElement("div");

        card.className = "student-card";

        card.innerHTML = `

          <h3>${student["Student Name"] || "No Name"}</h3>

          <p>
            <strong>Roll Number :</strong>
            ${student["Roll No"] || "N/A"}
          </p>

          <p>
            <strong>Class :</strong>
            ${student["Class"] || "N/A"}
          </p>

          <p>
            <strong>Department :</strong>
            Political Science
          </p>

          <p>
            <strong>Institution :</strong>
            Nazir Ajmal Memorial College of Education
          </p>

          <p>
            <strong>University :</strong>
            Gauhati University
          </p>

          <p>
            <strong>Academic Session :</strong>
            FYUGP 5th Semester
          </p>

          <p>
            <strong>Status :</strong>
            Internship Student
          </p>

        `;

        classGrid.appendChild(card);

      });

      container.appendChild(classGrid);

    }

  })

  .catch(error => {

    console.log("Error:", error);

    document.getElementById("student-container").innerHTML = `

      <div style="
        background:red;
        color:white;
        padding:20px;
        border-radius:10px;
        text-align:center;
        font-size:20px;
      ">

        Failed to load student data.

      </div>

    `;

  });
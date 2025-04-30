const students = [
    {
      roll: "12210010001",
      name: "ABHISHEK TAILOR",
      father: "SHIVRAJ TAILOR",
      mother: "SAROJ DEVI",
      enroll: "122100100001",
      institute: "FACULTY OF COMPUTER SCIENCE AND APPLICATION",
      semester: "B.C.A IV SEMESTER (MAY-JUNE 2024)",
      subjects: [
        { code: "04BCA101", title: "COMPUTER ORIENTED FINANCIAL MANAGEMENT", credit: 6.0, grade: "A" },
        { code: "04BCA102", title: "COMPUTER COMMUNICATION NETWORKS", credit: 6.0, grade: "B" },
        { code: "04BCA103", title: "COMPUTER GRAPHICS", credit: 6.0, grade: "B" },
        { code: "04BCA104", title: "OBJECT ORIENTED PROGRAMMING AND C++", credit: 6.0, grade: "B" },
        { code: "04BCA201", title: "SOFTWARE LAB BASED ON 04BCA-103 & 04BCA-104", credit: 3.0, grade: "A" },
        { code: "04BCA301", title: "DISCIPLINE AND CO-CURRICULAR ACTIVITIES", credit: 1.0, grade: "A" }
      ]
    },
    {
      roll: "12210010026",
      name: "SUNIL KUMAR",
      father: "SHUBH RAM",
      mother: "GYARSI DEVI",
      enroll: "122100100026",
      institute: "FACULTY OF COMPUTER SCIENCE AND APPLICATION",
      semester: "B.C.A IV SEMESTER (MAY-JUNE 2024)",
      subjects: [
        { code: "04BCA101", title: "COMPUTER ORIENTED FINANCIAL MANAGEMENT", credit: 6.0, grade: "A" },
        { code: "04BCA102", title: "COMPUTER COMMUNICATION NETWORKS", credit: 6.0, grade: "B" },
        { code: "04BCA103", title: "COMPUTER GRAPHICS", credit: 6.0, grade: "B" },
        { code: "04BCA104", title: "OBJECT ORIENTED PROGRAMMING AND C++", credit: 6.0, grade: "B" },
        { code: "04BCA201", title: "SOFTWARE LAB BASED ON 04BCA-103 & 04BCA-104", credit: 3.0, grade: "A" },
        { code: "04BCA301", title: "DISCIPLINE AND CO-CURRICULAR ACTIVITIES", credit: 1.0, grade: "A" }
      ]
    }
  ];
  function search() {
    var roll = document.getElementById("rollInput").value.trim();
    var resultBox = document.getElementById("resultBox");
    var studentInfo = document.getElementById("studentInfo");
    var marksTable = document.getElementById("marksTable");

    var footer = document.querySelector('.footer');
    var earnedCredits = document.querySelectorAll('h3');

    // 1. Show "Processing..." text immediately
    resultBox.style.display = "block";
    studentInfo.innerHTML = `
      <p style="text-align:center; color: green; font-weight: bold;">
        Processing your result, please wait...
      </p>
    `;
    marksTable.innerHTML = `
      <tr>
        <th>Subject Code</th>
        <th>Course Title</th>
        <th>Credits</th>
        <th>Grade</th>
      </tr>
    `;

    // 2. After 2 sec, show real result
    setTimeout(function () {
        var student = students.find(s => s.roll === roll);

        if (student) {
            // Show student details
            studentInfo.innerHTML = `
              <p><strong>Name:</strong> ${student.name}</p>
              <p><strong>Roll No:</strong> ${student.roll}</p>
              <p><strong>Father's Name:</strong> ${student.father}</p>
              <p><strong>Mother's Name:</strong> ${student.mother}</p>
              <p><strong>Enrollment No:</strong> ${student.enroll}</p>
              <p><strong>Institute:</strong> ${student.institute}</p>
              <p><strong>Semester:</strong> ${student.semester}</p>
            `;

            // Add subjects
            student.subjects.forEach(sub => {
                marksTable.innerHTML += `
                  <tr>
                    <td>${sub.code}</td>
                    <td>${sub.title}</td>
                    <td>${sub.credit}</td>
                    <td>${sub.grade}</td>
                  </tr>
                `;
            });

            // Show footer and CGPA info
            footer.style.display = "block";
            earnedCredits.forEach(e => e.style.display = "block");

        } else {
            // Roll number not found
            studentInfo.innerHTML = `<p style="color:red;">No ❌ student found with this roll number.</p>`;

            // Hide CGPA and footer if not found
            footer.style.display = "none";
            earnedCredits.forEach(e => e.style.display = "none");
        }
    }, 2000);
}

  function downloadPDF() {
    window.print();
  }
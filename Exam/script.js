function calculate1() {
    let n = parseInt(document.getElementById("val1").value);
    let output = "";
    let resultField = document.getElementById("result1");
    resultField.value = ""; // clear previous output

    function fibo(num) {
        if (num <= 1) return num;
        return fibo(num - 1) + fibo(num - 2);
    }

    for (let i = 0; i < n; i++) {
        output += fibo(i) + " ";
    }

    resultField.value = output.trim();
}

function calculate2() {
    let n = parseInt(document.getElementById("val2").value);
    let output = "";
    let resultField = document.getElementById("result2");
    resultField.value = ""; // clear previous output

    function fibo(num) {
        if(num==0) return "0";
        if(num==1) return "1";
        let a=0 ,b=1;
        for(let i =2 ; i<=num;i++){
          const temp = a+b;
          a=b;
          b=temp;
        }
        return b;
    }

    for (let i = 0; i < n; i++) {
        output += fibo(i) + " ";
    }

    resultField.value = output.trim();
}


function calculate3() {
    let n = parseInt(document.getElementById("val3").value);
    let output = "";
    let resultField = document.getElementById("result3");
    resultField.value = ""; // clear previous output

    function fact(num) {
        if (num === 0 || num === 1) return 1;
        return num * fact(num - 1);
    }

    for (let i = 0; i < n; i++) {
        output += fact(i) + " ";
    }

    resultField.value = output.trim();
}

function calculate4() {
    let n = parseInt(document.getElementById("val4").value);
    let output = "";
    let resultField = document.getElementById("result4");
    resultField.value = ""; // clear previous output

    function fact(num) {
        let res=1;
        for(let i =2;i<=num;i++){
            res*=i;
        }
        return res
    }

    for (let i = 0; i < n; i++) {
        output += fact(i) + " ";
    }

    resultField.value = output.trim();
}

function calculate5() {
    let num = parseInt(document.getElementById("val5").value);
    let output = "";
    let resultField = document.getElementById("result5");
    resultField.value = ""; // clear previous output

    function prime(n){
        if(n<2) return false;
        if(n%2==0) return false;
        for(let i = 2 ; i<n;i++){
         if (n % i === 0) return false;
        }
        return true;
    }

        output = prime(num)+" ";
    

    resultField.value = output.trim();
}

function calculate6() {
    let n = parseInt(document.getElementById("val6").value);
    let output = "";
    let resultField = document.getElementById("result6");
    resultField.value = ""; // clear previous output

     function isArmstrong(num) {
        let originalNum = num;
        let sum = 0;

        while (num > 0) {
            let digit = num % 10;
            sum += Math.pow(digit, 3);
            num = Math.floor(num / 10);
        }

        return sum === originalNum;
   }

         output = isArmstrong(n)+" ";

    resultField.value = output.trim();
}



function calculate7() {
    let n = parseInt(document.getElementById("val7").value);
    let output = "";
    let resultField = document.getElementById("result7");
    resultField.value = ""; // clear previous output

    function isLeapYear(year) {
  if (year % 4 !== 0) return false;
  if (year % 100 !== 0) return true;
  return year % 400 === 0;
}
         output = isLeapYear(n)+" ";

    resultField.value = output.trim();
}


// function calculate7() {
//     let n = parseInt(document.getElementById("val7").value);
//     let output = "";
//     let resultField = document.getElementById("result7");
//     resultField.value = ""; // clear previous output

//     function isLeapYear(year) {
//   if (year % 4 !== 0) return false;
//   if (year % 100 !== 0) return true;
//   return year % 400 === 0;
// }
//          output = isLeapYear(n)+" ";

//     resultField.value = output.trim();
// }


function calculate8() {
  let n = document.getElementById("val8").value;
  let output = "";
  let resultField = document.getElementById("result8");
  resultField.value = ""; // clear previous output

  function computeAge(dobInput, toDate = new Date()) {
    const dob = (dobInput instanceof Date) 
      ? new Date(dobInput) 
      : new Date(dobInput + "T00:00:00");

    const today = new Date(toDate.getFullYear(), toDate.getMonth(), toDate.getDate());

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
      months -= 1;
    }

    if (months < 0) {
      months += 12;
      years -= 1;
    }

    return { years, months, days };
  }

  const age = computeAge(n);
  output = `${age.years} years, ${age.months} months, ${age.days} days`;

  resultField.value = output.trim();
}

  const quiz = [
      { q: "2 + 2 = ?", options: ["3", "4", "5"], answer: 1 },
      { q: "Capital of India?", options: ["Delhi", "Mumbai", "Kolkata"], answer: 0 },
      { q: "Result of 3 * 3?", options: ["6", "9", "12"], answer: 1 },
      { q: "HTML stands for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks Text Machine Language"], answer: 0 }
    ];

    function renderQuiz() {
      const container = document.getElementById("quizContainer");
      quiz.forEach((item, i) => {
        const div = document.createElement("div");
        div.className = "question";
        div.innerHTML = `
          <p><strong>Q${i + 1}:</strong> ${item.q}</p>
          <div class="options">
            ${item.options.map((opt, idx) =>
              `<label><input type="radio" name="q${i}" value="${idx}"> ${opt}</label>`
            ).join("")}
          </div>
        `;
        container.appendChild(div);
      });
    }

    function gradeQuiz(questions, answers) {
      let score = 0;
      for (let i = 0; i < questions.length; i++) {
        if (answers[i] === questions[i].answer) score++;
      }
      return {
        score,
        total: questions.length,
        percent: (score / questions.length) * 100
      };
    }

    function updateProgress() {
      const answers = quiz.map((_, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        return selected ? Number(selected.value) : -1;
      });
      const result = gradeQuiz(quiz, answers);
      const percent = result.percent;
      const progressBar = document.getElementById("progressBar");
      const progressText = document.getElementById("progressText");
      progressBar.style.width = percent + "%";
      progressText.textContent = percent.toFixed(0) + "% Correct";
    }

    document.getElementById("quizForm").addEventListener("change", updateProgress);

    document.getElementById("quizForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const answers = quiz.map((_, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        return selected ? Number(selected.value) : -1;
      });
      const result = gradeQuiz(quiz, answers);
      document.getElementById("resultq").textContent =
        `Final Score: ${result.score}/${result.total} (${result.percent.toFixed(0)}%)`;
    });

    renderQuiz();
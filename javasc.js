const name = document.getElementById("name");
const collegename =document.getElementById("collegename")
const rollno=document.getElementById("rollno");
const date = document.getElementById("date");
name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
collegename.addEventListener("keypress" ,setcollegename);
collegename.addEventListener("blur", collegename);
rollno.addEventListener("keypress" ,rollno);
rollno.addEventListener("blur", rollno);
function getName() {
    if (localStorage.getItem("myData") === null) {
      name.innerHTML = "[Enter Name]";
    } else {
      name.innerHTML = localStorage.getItem("myData");
    }
  }
  function getcollege()
  {
    if (localStorage.getItem("myData") === null) {
        getcollege.innerHTML = "[Enter your college name]";
      } else {
        getcollege.innerHTML = localStorage.getItem("myData");
      }
  }
  function getroll()
  {
    if (localStorage.getItem("myData") === null) {
        getroll.innerHTML = "[enter your roll no]";
      } else {
        getroll.innerHTML = localStorage.getItem("myData");
      }
  }

  function setcolle(e) {
    if (e.type === "keypress") {
      if (e.keyCode == 13) {
        localStorage.setItem("myData", e.target.innerHTML);
        name.blur();
      }
    } else {
      localStorage.setItem("myData", e.target.innerHTML);
    }
  }
  function setroll(e) {
    if (e.type === "keypress") {
      if (e.keyCode == 13) {
        localStorage.setItem("myData", e.target.innerHTML);
        name.blur();
      }
    } else {
      localStorage.setItem("myData", e.target.innerHTML);
    }
  }
  
  function setName(e) {
    if (e.type === "keypress") {
      if (e.keyCode == 13) {
        localStorage.setItem("myData", e.target.innerHTML);
        name.blur();
      }
    } else {
      localStorage.setItem("myData", e.target.innerHTML);
    }
  }
  getName();
  getcollege();
  getroll
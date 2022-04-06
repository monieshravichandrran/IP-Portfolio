const nameCheck = () => {
  document.getElementById("names").style.borderBottom = "1px solid white";
  let name = document.getElementById("names").value;
  if (name) {
    let x = name.match(/^[a-z A-Z]+$/);
    if (!x) {
      document.getElementById("er1").style.display = "block";
    }
  } else {
    document.getElementById("req1").style.display = "block";
  }
};

const clgCheck = () => {
  document.getElementById("clg").style.borderBottom = "1px solid";
  let name = document.getElementById("clg").value;
  if (name) {
    let x = name.match(/^[a-z A-Z]+$/);
    if (!x) {
      document.getElementById("er2").style.display = "block";
    }
  } else {
    document.getElementById("req2").style.display = "block";
  }
};

const nameFocus = () => {
  document.getElementById("req1").style.display = "none";
  document.getElementById("er1").style.display = "none";
  document.getElementById("names").style.borderBottom = "3px solid #90EE90";
};

const clgFocus = () => {
  document.getElementById("req2").style.display = "none";
  document.getElementById("er2").style.display = "none";
  document.getElementById("clg").style.borderBottom = "3px solid #90EE90";
};

const selectAddress = () => {
  let name = document.getElementById("textaid").value;
  if (name) alert("The Entered Address " + name);
  else alert("OOPS!!! You have not entered the address");
};

const pinBlur = () => {
  document.getElementById("pin").style.borderBottom = "1px solid";
  let name = document.getElementById("pin").value;
  if (name) {
    let x = name.match(/^[0-9]{6}$/);
    if (!x) {
      document.getElementById("er3").style.display = "block";
    }
  } else {
    document.getElementById("req3").style.display = "block";
  }
};

const pinFocus = () => {
  document.getElementById("req3").style.display = "none";
  document.getElementById("er3").style.display = "none";
  document.getElementById("pin").style.borderBottom = "3px solid #90EE90";
};

const ageKey = (event) => {
  const x = event.keyCode;
  console.log(x);
  if (x >= 49 && x <= 57) {
    console.log("Valid");
  } else {
    alert("You have not entered a number. Re-Enter kindly");
  }
};

const ageFocus = () => {
  document.getElementById("req4").style.display = "none";
  document.getElementById("er4").style.display = "none";
  document.getElementById("aged").style.borderBottom = "3px solid #90EE90";
};

const ageBlur = () => {
  document.getElementById("aged").style.borderBottom = "1px solid";
};

const phoneBlur = () => {
  document.getElementById("pho").style.borderBottom = "1px solid";
};

const phoneFocus = () => {
  document.getElementById("req5").style.display = "none";
  document.getElementById("er5").style.display = "none";
  document.getElementById("pho").style.borderBottom = "3px solid #90EE90";
};

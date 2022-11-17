///////////////////////////////// 1-masala switch case yordamida calc /////////////////////////////////

let a = 9;
let b = "/";
let c = 3;






switch (b) {

  case "/":
    console.log("Switch va caseda hisoblanganda javobi " + a / c);
    break;

  case "*":
    console.log("Switch va caseda hisoblanganda javobi " + a * c);
    break;

  case "-":
    console.log("Switch va caseda hisoblanganda javobi " + a - c);
    break;

  case "+":
    console.log("Switch va caseda hisoblanganda javobi " + a + c);
    break;

  default:
    break;
    console.log("Qayerdadir xatosi bor yoki noto'g'ri qiymat kiritilgan");
}

///////////////////////////////// 1-masala switch case yordamida calc tugadi /////////////////////////////////




///////////////////////////////// 2-masala function decloration yordamida calc /////////////////////////////////

function calc(d, e, f) {



  if (e == "/") {
    return "Function declorationda hisoblanganda javobi " + d / f;
  }

  else if (e == "*") {
    return "Function declorationda hisoblanganda javobi " + d * f;
  }

  else if (e == "-") {
    return "Function declorationda hisoblanganda javobi " + d - f;
  }

  else if (e == "+") {
    return "Function declorationda hisoblanganda javobi " + d + f;
  }
  else
    return "Qayerdadir xatosi bor yoki noto'g'ri qiymat kiritilgan";
}

console.log(calc(9,"/",3));

///////////////////////////////// 2-masala function decloration yordamida calc tugadi /////////////////////////////////




///////////////////////////////// 3-masala function exsprees yordamida calc /////////////////////////////////

const calc2 = function (d, e, f) {
  

  if (e == "/") {
    return "Function expressionda hisoblanganda javobi " + d / f;
  }

  else if (e == "*") {
    return "Function expressionda hisoblanganda javobi " + d * f;
  }

  else if (e == "-") {
    return "Function expressionda hisoblanganda javobi " + d - f;
  }

  else if (e == "+") {
    return "Function expressionda hisoblanganda javobi " + d + f;
  }
  else
    return "Qayerdadir xatosi bor yoki noto'g'ri qiymat kiritilgan";
}


console.log(calc2(9,"/",3));

///////////////////////////////// 3-masala function exsprees yordamida calc /////////////////////////////////

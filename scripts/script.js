'use strict';

const fizz = 'Fizz';
const buzz = 'Buzz';
const row = document.querySelector(".row");//selecting row

//enabling user to insert a number
function fizzBuzz() {
    const userInput = Number(document.getElementById("userNumber").value);//getting user input and transforming it to a number
    row.innerHTML = '';//resetting row

    if (userInput > 0 && userInput !== NaN) {
        if (!(userInput > 1000)) {
            for (let i = 1; i <= userInput; i++) {
                const div = document.createElement("div"); //creating a DIV element
                row.append(div); //appending a div element to the row
                if (i % 3 === 0 && i % 5 === 0) {
                    console.log(fizz + buzz);
                    div.append(fizz + buzz);
                    div.className = div.classList + "cube" + " fizz-buzz";//adding class name CUBE and FIZZ-BUZZ to div
                } else if (i % 3 === 0) {
                    console.log(fizz);
                    div.append(fizz);
                    div.className = div.classList + "cube" + " fizz";//adding class name CUBE and FIZZ to div
                } else if (i % 5 === 0) {
                    console.log(buzz);
                    div.append(buzz);
                    div.className = div.classList + "cube" + " buzz";//adding class name CUBE and BUZZ to div
                } else {
                    console.log(i);
                    div.append(i);
                    div.className = div.classList + "cube" + " normal";//adding class name CUBE and normal to div
                }
            }
        } else { alert("Insert a number between 1 and 1000") }
    }
    else { alert("Insert a valid Number"); }
}
//resetting the user input and cubes
function resetCamp() {
    const userInput = (document.getElementById("userNumber"));
    userInput.value = "";
    const row = document.querySelector(".row");
    row.innerHTML = '';
}


'use strict';

const fizz = 'Fizz';
const buzz = 'Buzz';
const row = document.querySelector(".row");//selecting row

//enabling user to insert a number
function fizzBuzz() {

    const userInput = Number(document.getElementById("userNumber").value);
    if (userInput > 0 && userInput !== NaN) {
        //resetting row
        row.innerHTML = '';
        for (let i = 1; i <= userInput; i++) {
            const div = document.createElement("div"); //creating a DIV element
            if (i % 3 === 0 && i % 5 === 0) {
                console.log(fizz + buzz);
                row.append(div);
                div.append(fizz + buzz);
                div.className = "cube"; //adding class name CUBE to div
                div.className = div.classList + " fizz-buzz";//adding class name FIZZ-BUZZ to div
            } else
                if (i % 3 === 0) {
                    console.log(fizz);
                    row.append(div);
                    div.append(fizz);
                    //adding class name CUBE and FIZZ to div
                    div.className = div.classList + "cube" + " fizz";
                } else
                    if (i % 5 === 0) {
                        console.log(buzz);
                        row.append(div);
                        div.append(buzz);
                        //adding class name CUBE and BUZZ to div
                        div.className = div.classList + "cube" + " buzz";

                    } else {
                        console.log(i);
                        row.append(div);
                        div.append(i);
                        //adding class name CUBE and normal to div
                        div.className = div.classList + "cube" + " normal";
                    }
        }
    }
    else { alert("Insert a valid Number"); }
}

function resetCamp() {
    const userInput = (document.getElementById("userNumber"));
    userInput.value = "";
    //removing row with all cubes inside
    const row = document.querySelector("div.row");
    // row.remove();
    row.innerHTML = '';
}


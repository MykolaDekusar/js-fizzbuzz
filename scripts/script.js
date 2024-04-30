'use strict';

const fizz = 'Fizz';
const buzz = 'Buzz';
//enabling user to insert a number
function fizzBuzz() {
    // const removeRow = document.querySelector("div.row");
    // removeRow.remove();
    const userInput = Number(document.getElementById("userNumber").value);
    if (userInput > 0 && userInput !== NaN) {
        const container = document.querySelector("div.container");//selecting container
        const row = document.createElement("div"); //creating a div element that will be row
        container.append(row);//appending a div to the main container
        row.className = "row"; //naming the appended container ROW
        for (let i = 1; i <= userInput; i++) {
            //selecting an element by class .row
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
                    div.className = "cube"; //adding class name CUBE to div
                    div.className = div.classList + " fizz"; //adding class name FIZZ to div
                } else if (i % 5 === 0) {
                    console.log(buzz);
                    row.append(div);
                    div.append(buzz);
                    div.className = "cube";//adding class name CUBE to div
                    div.className = div.classList + " buzz";//adding class name BUZZ to div

                } else {
                    console.log(i);
                    row.append(div);
                    div.append(i);
                    div.className = "cube";//adding class name CUBE to div
                    div.className = div.classList + " normal";//adding class name NORMAL to div
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
    row.remove();
}


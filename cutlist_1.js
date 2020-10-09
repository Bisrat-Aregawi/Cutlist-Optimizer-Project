/*----------------------------☦️----------------------------*/
"use strict";
let [steelTypeCounter, stdLReqCounter, ST_ID_Counter, length_counter, frequency_counter, row_counter, row_counter2, row_remover] = [2, 2, 2, 2, 2, 2, 2, 2];

let stlAddBtn = document.querySelector(".stl_add_button").addEventListener("click", steelTypeAdd);
let rowAddBtn = document.querySelector(".row_add_button").addEventListener("click", entry_rows_add_btn);

const count = {
//  the purpose of this object is to return a number ascending from the beginning (i.e. from 2 in this case).
//  any call of the count methods with the appropriate property anme given to it will provide ascending
//  increment and provide the number for that specific call in time.
  length() { return length_counter++},
  frequency() { return frequency_counter++},
  row() { return row_counter++},
  row2() { return row_counter2++},
  st_id() { return ST_ID_Counter++},
  steel_type() { return steelTypeCounter++},
  stdLReq() { return stdLReqCounter++},
  row_remover() { return row_remover++}
}   // End of "count" function.

const LFR_capture = {
// This object returns elements captured using "getElementById".
// "LFR" stands for Length, Frequency and Row elements capturing.
  length() { return document.getElementById("length")},
  frequency() { return document.getElementById("frequency")},
  row() { return document.getElementById("row_number")}
}   // End of "LFR_capture()" function.

const ST_L_capture = {
// This object returns elements captured using "getElementById".
// "ST_L" stands for Steel and Length (result section) capturing.
  steelId() { return document.getElementById("steelId_input_id");},
  st() { return document.getElementById("steel_type");},
  req() { return document.getElementById("stdL_req");},
  remover() { return document.getElementById("row_remover");},
  select() { return document.getElementById("steel_type_selection");},
  btn() { return document.getElementById("row_remover");}
}   // End of "ST_L_capture()" function. 

const grandBakery = {
// This is an object. It is required for making HTML Elements using its methods.
// In here there are 5 methods; Each with a return of a fully defined HTML Element.
  // Below is a DIV making method with an array parameter (not argument).
  /*  
    :NOTE :- "...ValArr" means however many arguments are passed to the function put them inside an Array called "valArr".
  */
  divBakery(...ValArr) {
    let div = document.createElement("div");  // Create a DIV elem and store inside "div" variable.
    let Arr = ["id", "class"];                // Put the attributes we need to append inside "Arr". This makes it easy to use the "FOR" loop.
    // For loop takes care of attribute setting using the "setAttribute()" DOM method
    for (let i = 0; i < Arr.length; i++) {
      if (ValArr[i] !== undefined) div.setAttribute(Arr[i], ValArr[i]);
    }
    return div;                               // Return the fully constructed DIV Element when called upon.
  },  // End of "divBakery" method.
  // Below is an INPUT making method with an array parameter (not argument).
  inputBakery(...ValArr) {
    let inp = document.createElement("input");                              // Create an INPUT element and store in "inp" variable.
    let Arr = ["type", "class", "id", "value", "disabled", "min"];          // Put attributes inside "Arr". Note that "Arr" is local here.
    // For loop in conjunction with the "Element.setAttribute()" method constructs "inp".
    for (let i = 0; i < Arr.length; i++) {
      if (ValArr[i] !== undefined) inp.setAttribute(Arr[i], ValArr[i]);
    }
    return inp;                               // Return a fully constructed INPUT Element when called upon.
  },  // End of "inputBakery" method.
  // Below is a P making method (no parameter/s).
  pBakery() {
    let p = document.createElement("p");      // Create a "P" element and store in "p" variable.
    p.innerHTML = count.row2();              // The "P" element will have the return value of "count()" function Created above written inside it.
    return p;                                 // Return a fully constructed P Element when called upon.
  },  // End of "pBakery" method.
  // Below is an option making method responsible for enumerating the dropdowns of the SELECT Element.
  optionBakery() {
    let opt = document.createElement("option");                             // Create an OPTION element and store in "opt" variable.
    /* The code below sets a "value" attribute for the OPTION element (i.e "opt")...
       but the value of the "value" attribute is set to whatever value given to the...
       INPUT element with id "steelId_input_id". (Please refer to "ST_L_capture()" function above for more details.).
    */
    opt.setAttribute("value", `${ST_L_capture.steelId().value}`);
    // Also write the above set value to the option tag itself.
    opt.innerHTML = ST_L_capture.steelId().value;
    return opt;                               // Return a fully constructed OPTION Element to be housed inside SELECT Element.
  },  //  End of "optionBakery" method.
  // Below is a button making method responsible for making a "suicide bomber" button.
  btnBakery() {
    let btn = document.createElement("button");                       // Create a BUTTON element and store in "btn" variable.
    btn.setAttribute("id", `row_${count.row_remover()}_clear`);      // Give "btn" an id appending the return of count() function with "row_remover" argument.
    btn.setAttribute("onclick", "row_remove();");                     // Add "onclick" attribute to initiate "row_remove()" function.
    btn.innerHTML = "Remove";                                         // Write inside "btn" the value "Remove".
    return btn;                                // Return a fully constructed BUTTON Element.
  }   // End of "btnBakery()" method.
}  // End of "grandBakery" object.

function entry_rows_add_btn() {
// This function adds new data input row for both "length" and "quantity" sides.
// Adds "ROW", "LENGTH" and "FREQUENCY" sections in that order.

    // Below creates a DIV Element for the ROW and passes it "id" and "class" attributes values.
  let newRowDiv = grandBakery.divBakery(`rowCount${count.row()}`, "ROW-NUMBER");
    // Below creates a P Element for the row counter of input side.
  let newRowP = grandBakery.pBakery();
    // Below appends the "P" to "DIV" Elements.
  newRowDiv.appendChild(newRowP);
    // Below appends the constructed DIV to the row container DIV.
  LFR_capture.row().append(newRowDiv);

    // Below creates a DIV Element for the LENGTH section.
  let newLengthDiv = grandBakery.divBakery();
    // Below creates an INPUT by calling grandBakery"s [inputBakery()] method and passing it the attributes consecutively.
  let newLengthInput = grandBakery.inputBakery("number", undefined, `length${count.length()}`, undefined, undefined, "1");
    // Below appends the INPUT to the DIV.
  newLengthDiv.appendChild(newLengthInput);
    // Below appends the constructed DIV to the length container DIV.
  LFR_capture.length().append(newLengthDiv);

  // Below creates a DIV element for the Frequency section.
  let newFreqDiv = grandBakery.divBakery();
  // Below creates an INPUT by calling grandBakery"s [inputBakery()] method and passing it the attributes consecutively
  let newFreqInput = grandBakery.inputBakery("number", undefined, `frequency${count.frequency()}`, undefined, undefined, "1");
  // Below appends the INPUT to the DIV.
  newFreqDiv.appendChild(newFreqInput);
  // Below appends the constructed DIV to the frequency container DIV.
  LFR_capture.frequency().append(newFreqDiv);
}   // End of "entry_rows_add_btn()" function.

function steelTypeAdd() {
// This function is responsible for populating the result section and the drop down select section.
// Uses conditionals and "for" loops to check and add rows for the result section and the select section.
/*
  Working mechanism is as follows:
  - There exist 1 "for" loop and one "if" conditional.
    - FOR Loop processing: -
      - Before anything notice "<=" operator inside the "FOR" loop;
      - Also notice there are "break" statements.
      - Those statements make sure the loop doesn"t increment further (as a result of "<=") because the conditionals are satisfied by the logic provided.
      - The first "if" conditional works with "<=" operator.
      - After any increment of "i" which surpasses the index number of the array, this "if" conditional hands over to the "else" conditional.
        - Events of this happening: -
          - In the event the children of "ST_L_capture.st()" have their INPUT element values (i.e not empty string).
          - The only reason the count of "i" surpasses the index is if the 3 consecutive "if" statements resolve to "false".
          - This translates in to the following.
            1st if: - When there are no more children of "ST_L_capture.st()" to fulfill the number "i" is at.
            2nd if: - When the "identical" value resolves to "true".
              - Events of "identical" resoving to "true".
                - The higher level "else" conditional modifies "identical" to "true".
            3rd if: - When the specified child has a non-empty string as its value for every children of "ST_L_capture.st()".
      - Once the "else" conditional takes over from "if", which is as a result of either of the following
        - A non-empty "INPUT" element for every child of "ST_L_capture.st()".
        - A false "identical" value set by itself.
        - All "INPUT" elements are populated with value.
      - "else": - 
        - Then else builds upon that by further checking similar values through "ST_L_capture.st()""s children.
        - The else has a loop which checks each values for similarity with the one requiring to be added (i.e. ST_L_capture.st().value).
        - It sets "identical" to "true" when it finds a single value satisfying the condition or leaves it if it doesn"t satisfy the condition.
        - "else""s higher level "if" checks "identical" and populates the container div accordingly.
    - IF Conditional processing: -
      - This conditional is responsible for populating the SELECT Element with option tags with the appropriate values.
      - This value is handled in the inputBakery() function itself.
*/
  let identical = false;      // Identity checker variable.

  for (let i = 0; i <= ST_L_capture.st().children.length; i++) {
    
    if (ST_L_capture.st().children[i]) {
      if (identical === false) {
        if (ST_L_capture.st().children[i].children[0].value === "") {
          ST_L_capture.st().children[i].children[0].value = ST_L_capture.steelId().value;
          break;
        }
      }
    } else {
      for (let j = 0; j < ST_L_capture.st().children.length; j++) {
        if (ST_L_capture.st().children[j].children[0].value === ST_L_capture.steelId().value) {
          identical = true;
          break;
        }
      }
      if (identical === false) {
        /*---------------------------------------------------------*/
        let newSTDiv = grandBakery.divBakery();
        let newSTInput = grandBakery.inputBakery("text", undefined, `steel_type${count.st_id()}`, `${ST_L_capture.steelId().value}`, "", "1");
        newSTDiv.appendChild(newSTInput);
        ST_L_capture.st().appendChild(newSTDiv);
        /*---------------------------------------------------------*/
        let newReqDiv = grandBakery.divBakery();
        let newReqInput = grandBakery.inputBakery("text", undefined, `stdL_req${count.stdLReq()}`, undefined, "", "1");
        newReqDiv.appendChild(newReqInput);
        ST_L_capture.req().appendChild(newReqDiv);
        /*---------------------------------------------------------*/
        let newBtnDiv = grandBakery.btnBakery();
        ST_L_capture.btn().append(newBtnDiv);
        break;
      }
    }
  }
  if (ST_L_capture.steelId().value !== "") {
    if (identical === false) {
      let newOption = grandBakery.optionBakery();
      ST_L_capture.select().append(newOption);
    }
  }
}   // End of steeoTypeAdd() function.
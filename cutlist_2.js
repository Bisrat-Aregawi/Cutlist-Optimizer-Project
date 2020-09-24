// The "objectArray" array holds the data provided.
// Its contents are objects containing Steel Name, Steel Length and Steel Quantity properties.
// The "objectArray" is populated specifically by the "selectHover()" function.
let objectArray = [];
// Below is a class called "GrandClass" responsible for making objects.
// It makes object for having steelNames, lengths, and quantities as properties of each object
class GrandClass {
  constructor(steel, length, frequency) {
    this.name = steel;
    this.length = length;
    this.frequency = frequency;
  }
}
// Below "inputCapture" is responsible for making array's of steelNames, lengths, and frequencies
// Those Arrays are used to populate the properties of the object created by GrandClass.
// Its specific caller is the "selectHover()" function.
function inputCapture(param) {
  let [lengthArray, frequencyArray, steelNames] = [[], [], []];
  if (param === "lengthArray") {
    for (let i = 0; i < LFR_capture.length().children.length; i++) {
      if (LFR_capture.length().children[i].children[0].value !== "") {
        lengthArray[i] = parseFloat(
          LFR_capture.length().children[i].children[0].value
        );
      } else {
        lengthArray[i] = 0;
      }
    }
    return lengthArray;
  } else if (param === "frequencyArray") {
    for (let i = 0; i < LFR_capture.frequency().children.length; i++) {
      if (LFR_capture.frequency().children[i].children[0].value !== "") {
        frequencyArray[i] = parseFloat(
          LFR_capture.frequency().children[i].children[0].value
        );
      } else {
        frequencyArray[i] = 0;
      }
    }
    return frequencyArray;
  } else if (param === "steelNames") {
    for (let i = 0; i < ST_L_capture.select().children.length; i++) {
      steelNames[i] = ST_L_capture.select().children[i].value;
    }
    return steelNames;
  }
}
// Below "selectHover" is responsible for performing data storage inside "objectArray"
// It is initiated when user "hovers" on the select Element.
// It works in conjunction with "selectChange" function to perform its operation...
// The "if(!objectArray[i])" provides an opportunity for "selectHover" to work with "selectChange"
function selectHover() {
  for (let i = 0; i < inputCapture("steelNames").length; i++) {
    if (inputCapture("steelNames")[i] === ST_L_capture.select().value) {
      for (let j = 0; j < LFR_capture.length().children.length; j++) {
        if (!objectArray[i]) {
          objectArray[i] = new GrandClass(
            inputCapture("steelNames")[i],
            inputCapture("lengthArray"),
            inputCapture("frequencyArray")
          );
          console.log(objectArray);
          break;
        } else if (
          parseFloat(LFR_capture.length().children[j].children[0].value) !==
            objectArray[i].length[j] ||
          parseFloat(LFR_capture.frequency().children[j].children[0].value) !==
            objectArray[i].frequency[j]
        ) {
          objectArray[i] = new GrandClass(
            inputCapture("steelNames")[i],
            inputCapture("lengthArray"),
            inputCapture("frequencyArray")
          );
          console.log(objectArray);
          break;
        }
      }
      break;
    }
  }
  return objectArray;
}
// Below "selectChange" takes care of the input data while changeing through options.
// Useful when users want to change specific data.
// It repopulates the data the user inputed previously accordingly.
function selectChange() {
  for (let i = 0; i < objectArray.length; i++) {
    if (objectArray[i].name === ST_L_capture.select().value) {
      for (let j = 0; j < LFR_capture.length().children.length; j++) {
        LFR_capture.length().children[j].children[0].value =
          objectArray[i].length[j];
        LFR_capture.frequency().children[j].children[0].value =
          objectArray[i].frequency[j];
      }
    }
  }
}
// Below "row_remove" is responsible for removing the result sectin data all together.
// Trigered when the user presses the "remove" button.
function row_remove() {
  for (let i = 0; i < ST_L_capture.btn().childElementCount; i++) {
    if (event.target === ST_L_capture.btn().children[i]) {
      if (ST_L_capture.st().childElementCount <= 1) {
        ST_L_capture.st().lastElementChild.lastElementChild.value = "";
        ST_L_capture.req().lastElementChild.lastElementChild.value = "";
        objectArray.splice(i, 1);
        break;
      } else {
        ST_L_capture.st().removeChild(ST_L_capture.st().children[i]);
        ST_L_capture.req().removeChild(ST_L_capture.req().children[i]);
        ST_L_capture.btn().removeChild(ST_L_capture.btn().children[i]);
        ST_L_capture.select().removeChild(ST_L_capture.select().children[i]);
        objectArray.splice(i, 1);
        break;
      }
    }
  }
}

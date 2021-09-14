let valueCard = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
let auxiliarVar = [];
let auxilirSym = [];
let arrayVal = [];
let arraySym = [];
let cardSymb = ["Heart", "Club", "Spade", "Diamond"];

const mainSort = () => {
  document.querySelector("#briefeBtn").addEventListener("click", function() {
    document.querySelector(".ninja").style.visibility = "hidden";
    document.querySelector("#cardContainer").innerHTML = "";
    document.querySelector("#cardSortContainer").innerHTML = "";
    let cantidad = document.querySelector("#amountInput").value;
    let valueIndex = 0;
    let symbolIndex = 0;
    for (let i = 0; i < cantidad; i++) {
      valueIndex = Math.floor(Math.random() * 13);
      symbolIndex = Math.floor(Math.random() * 4);
      document.querySelector("#cardContainer").innerHTML += generateCard(
        valueCard[valueIndex],
        cardSymb[symbolIndex]
      );
      auxiliarVar.push(valueIndex);
      auxilirSym.push(symbolIndex);
    }
    arrayVal = auxiliarVar;
    arraySym = auxilirSym;
    auxiliarVar = [];
    auxilirSym = [];
  });

  document.querySelector("#bubleBtn").addEventListener("click", function() {
    document.querySelector("#cardSortContainer").innerHTML = "";
    console.log(arrayVal, arraySym);
    bubbleSort(arrayVal, arraySym);
  });

  document.querySelector("#selectBtn").addEventListener("click", function() {
    document.querySelector("#cardSortContainer").innerHTML = "";
    selectSort(arrayVal, arraySym);
  });
};

function generateCard(value, icon) {
  return `<div class="cardWrapper">
                <div class="card">
                    <div class="topCard">
                        <span class="card${icon}"></span>
                    </div>
                    <div class="middleCard">
                        <span class="middleNumber">${value}</span>
                    </div>
                    <div class="bottomCard">
                        <span class="card${icon}"></span>
                    </div>
                </div>
            </div>`;
}

function iterationCard(iteration) {
  return `
  <div class="cardWrapper">
                <div class="initialCard">
                    <div class="topCard">
                    <span class="inlineIteration"   >iteration</span>
                    </div>
                    <div class="middleCard">
                        <span class="middleIteration">${iteration}</span>
                    </div>
                    <div class="bottomCard">
                    <span class="inlineIteration"  >iteration</span>
                    </div>
                </div>
            </div>`;
}

function invisibleCard() {
  return `
  <div class="invisible">

    </div>`;
}

const bubbleSort = (arr, arr2) => {
  document.querySelector(".ninja").style.visibility = "visible";
  let wall = arr.length - 1;
  let aument = 0;
  while (wall > 0) {
    let index = 0;
    let index2 = 0;
    let aux = 0;
    let aux2 = 0;

    while (index < wall) {
      if (arr[index] > arr[index + 1]) {
        aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
        aux2 = arr2[index2];
        arr2[index2] = arr2[index2 + 1];
        arr2[index2 + 1] = aux2;
      }
      index++;
      index2++;
    }

    wall--;
    aument++;
    if (wall > 0) {
      document.querySelector("#cardSortContainer").innerHTML += iterationCard(
        aument
      );
    } else {
      document.querySelector("#cardSortContainer").innerHTML += iterationCard(
        "final"
      );
    }

    for (let i = 0; i < arr.length; i++) {
      document.querySelector("#cardSortContainer").innerHTML += generateCard(
        valueCard[arr[i]],
        cardSymb[arr2[i]]
      );
    }
    if (arr.length == 3) {
      for (let i = 0; i < 1; i++) {
        document.querySelector(
          "#cardSortContainer"
        ).innerHTML += invisibleCard();
      }
    } else if (arr.length > 4) {
      let pepe = arr.length + 1;
      pepe = 5 - ((pepe % 5) + 1);
      for (let i = 0; i <= pepe; i++) {
        document.querySelector(
          "#cardSortContainer"
        ).innerHTML += invisibleCard();
      }
    }
  }
};

const selectSort = (arr, arr2) => {
  document.querySelector("#cardSortContainer").innerHTML = "";
  document.querySelector(".ninja").style.visibility = "visible";
  let min = 0;
  let aux = 0;
  let aux2 = 0;
  let aument = 0;
  while (min < arr.length - 1) {
    for (let i = min + 1; i < arr.length; i++) {
      if (arr[min] > arr[i]) {
        aux = arr[min];
        arr[min] = arr[i];
        arr[i] = aux;
        aux2 = arr2[min];
        arr2[min] = arr2[i];
        arr2[i] = aux2;
      }
    }
    min++;
    aument++;
    if (min < arr.length - 1) {
      document.querySelector("#cardSortContainer").innerHTML += iterationCard(
        aument
      );
    } else {
      document.querySelector("#cardSortContainer").innerHTML += iterationCard(
        "final"
      );
    }

    for (let i = 0; i < arr.length; i++) {
      document.querySelector("#cardSortContainer").innerHTML += generateCard(
        valueCard[arr[i]],
        cardSymb[arr2[i]]
      );
    }
    if (arr.length == 3) {
      for (let i = 0; i < 1; i++) {
        document.querySelector(
          "#cardSortContainer"
        ).innerHTML += invisibleCard();
      }
    } else if (arr.length > 4) {
      let pepe = arr.length + 1;
      pepe = 5 - ((pepe % 5) + 1);
      for (let i = 0; i <= pepe; i++) {
        document.querySelector(
          "#cardSortContainer"
        ).innerHTML += invisibleCard();
      }
    }
  }
};

window.onload = function() {
  mainSort();
};

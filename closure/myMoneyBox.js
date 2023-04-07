/* function moneyBox(coins){
    let saveCoins = 0;

    saveCoins += coins;

    console.log(`Moneybox: ${saveCoins}`);
}

moneyBox(5);
moneyBox(5); */

/* function moneyBox(){
    let saveCoins = 0;

    function countCoins(coins){
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(12);
myMoneyBox(50); */

function createPetList() {
    const petList = [];
    function addPet(myPet) {
        if (myPet) {
            petList.push(myPet);
            console.log(`pet list: ${petList}`);
        }
        return petList;
    }
    return addPet;
}

const namePet = createPetList();

namePet("Hades");
namePet("Bob");
namePet("Dante");
function selectButton(button) {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(btn => btn.classList.remove('selected'));

    button.classList.add('selected');
    console.log("Button ID: " + button.id);
}

function calculateTips() {
    
    const billAmount = parseFloat(document.getElementById('myNumber').value);

    if(document.getElementById('myNumber').value.toString().includes('e')){
        alert("m-am gandit si la asta");
        return;
    }

    if (!billAmount || billAmount <= 0) {
        alert("Please enter a valid bill amount.");
        return;
    }

    const selectedButton = document.querySelector('.button.selected');

    if (!selectedButton) {
        alert("Please select a tip percentage.");
        return;
    }

    let tipPercentage = selectedButton.getAttribute('data-tip');
    if (tipPercentage === null) {
        if(document.getElementById('customTip').value.toString().includes('e')){
            alert("te-am prins");
            return;
        }
        tipPercentage = parseFloat(document.getElementById('customTip').value);
        if (isNaN(tipPercentage) || tipPercentage < 0) {
            alert("Please enter a valid custom tip percentage.");
            return;
        }
    } else {
        tipPercentage = parseFloat(tipPercentage);
    }

    const tipAmount = (billAmount * tipPercentage) / 100;
    const finalAmount = billAmount + tipAmount;

    document.getElementById('billDisplay').textContent = `Your Bill: ${billAmount.toFixed(2)}`;
    document.getElementById('tipDisplay').textContent = `Your Tip: ${tipAmount.toFixed(2)} (${tipPercentage}%)`;
    document.getElementById('finalDisplay').textContent = `Final: ${finalAmount.toFixed(2)}`;
}
function clearFields() {
    document.getElementById('myNumber').value = '';
    document.getElementById('customTip').value = '';
    
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(btn => btn.classList.remove('selected'));
    
    document.getElementById('billDisplay').textContent = 'Your Bill: ';
    document.getElementById('tipDisplay').textContent = 'Your Tip: ';
    document.getElementById('finalDisplay').textContent = 'Final: ';

}

function addPerson() {
    const personName = document.getElementById('personName').value.trim();
    
    if (personName === '') {
        alert("Please enter a valid name.");
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = personName;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';
    removeButton.onclick = function() {
        removePerson(this);
    };

    listItem.appendChild(removeButton);

    document.getElementById('personList').appendChild(listItem);

    document.getElementById('personName').value = '';
}

function removePerson(button) {
    const listItem = button.parentElement;
    listItem.remove();
}

function selectRandomPerson() {
    const personList = document.getElementById('personList');
    const people = personList.getElementsByTagName('li');

    if (people.length === 0) {
        document.getElementById('winnerDisplay').textContent = 'Selected Person: No one in the list.';
        return;
    }

    const randomIndex = Math.floor(Math.random() * people.length);
    const selectedPerson = people[randomIndex].textContent;

    document.getElementById('winnerDisplay').textContent = `Selected Person: ${selectedPerson.replace("Remove","")}`;
}

function clearPersonList() {
    const personList = document.getElementById('personList');
    personList.innerHTML = '';
    document.getElementById('winnerDisplay').textContent = 'Selected Person: '; 
}


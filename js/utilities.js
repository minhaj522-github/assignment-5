function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    
    return inputNumber;
}
function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);

    return textNumber;
}


function showDonationSectionById(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('transaction-container').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}


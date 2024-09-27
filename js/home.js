document.getElementById('donate-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const donateMoney1 = getInputFieldValueById('input-amount-1');

    if (donateMoney1 > 0) {
        const balance = getTextFieldValueById('total-balance');
        const totalDonationAmount = getTextFieldValueById('total-donation-1');
        const newBalance = balance - donateMoney1;
        const newDonationAmount = totalDonationAmount + donateMoney1;

        document.getElementById('total-balance').innerText = newBalance;
        document.getElementById('total-donation-1').innerText = newDonationAmount;

        const div = document.createElement('div');
        div.classList.add();
        div.innerHTML = `<h1 class="text-lg font-semibold">${donateMoney1} Taka donated for famine-2024 at Noakhali, Bangladesh</h1>`
        document.getElementById('transaction-container').appendChild(div);

        alert('Thanks for your Donation')

    }
    else {
        alert('Please Try Again')
    }
})
document.getElementById('donate-btn-2').addEventListener('click', function (event) {
    event.preventDefault();

    const donateMoney2 = getInputFieldValueById('input-amount-2');

    if (donateMoney2 > 0) {
        const balance2 = getTextFieldValueById('total-balance');
        const totalDonationAmount2 = getTextFieldValueById('total-donation-2');
        const newDonationAmount2 = donateMoney2 + totalDonationAmount2;
        const newBalance2 = balance2 - donateMoney2;



        document.getElementById('total-balance').innerText = newBalance2;
        document.getElementById('total-donation-2').innerText = newDonationAmount2;

        const div = document.createElement('div');
        div.classList.add();
        div.innerHTML = `<h1 class="text-lg font-semibold">${donateMoney2} Taka donated for food relief at Feni, Bangladesh</h1>`
        document.getElementById('transaction-container').appendChild(div);
        alert('Thanks for your Donation')

    }
    else {
        alert('try again');
    }
})

document.getElementById('donate-btn-3').addEventListener('click', function (event) {
    event.preventDefault();

    const donateMoney3 = getInputFieldValueById('input-amount-3');

    if (donateMoney3 > 0) {
        const balance3 = getTextFieldValueById('total-balance');
        const totalDonationAmount3 = getTextFieldValueById('total-donation-3');
        const newDonationAmount3 = donateMoney3 + totalDonationAmount3;
        const newBalance3 = balance3 - donateMoney3;


        document.getElementById('total-donation-3').innerText = newDonationAmount3;
        document.getElementById('total-balance').innerText = newBalance3;

        const div = document.createElement('div');
        div.classList.add();
        div.innerHTML = `
        <h1 class="text-lg font-semibold">${donateMoney3} Taka donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
        
        `
        document.getElementById('transaction-container').appendChild(div)
        alert('Thanks for your Donation')

    }
    else {
        alert('try again');
    }
})



// transaction section codes --->

document.getElementById('transaction-history').addEventListener('click', function () {
    showDonationSectionById('transaction-container');
})

document.getElementById('donation-btn').addEventListener('click', function () {
    showDonationSectionById('donation-section')
})








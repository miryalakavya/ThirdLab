const billTotal = document.getElementById('billTotal');
const tipSlider = document.getElementById('tipSlider');
const tipPercentage = document.getElementById('tipPercentage');
const tipAmount = document.getElementById('tipAmount');
const totalBill = document.getElementById('totalBill');

billTotal.addEventListener('input', calculateTip);
tipSlider.addEventListener('input', function() {
    tipPercentage.value = tipSlider.value + "%";
    calculateTip();
});

function calculateTip() {
    if (isNaN(billTotal.value)) {
        alert('Please enter a valid number for Bill Total');
        return;
    }

    let tipValue = (billTotal.value * tipSlider.value) / 100;
    tipAmount.value = tipValue.toFixed(2);

    let totalWithTip = parseFloat(billTotal.value) + tipValue;
    totalBill.value = totalWithTip.toFixed(2);
}

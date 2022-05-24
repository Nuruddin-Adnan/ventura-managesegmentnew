// identification item chagne 
function identificationFilename(inputItems, areaToShow){
    const inpputName = document.querySelectorAll(inputItems);
    const targetArea = document.querySelector(areaToShow);
    [...inpputName].forEach((input) => {
        input.addEventListener('change', function(e){
            targetArea.value = e.target.value;
        })
    })
}

// call the function identification;
identificationFilename('input[name=nominee-identification-1]', '#nominee-identification-item-1');
identificationFilename('input[name=nominee-identification-2]', '#nominee-identification-item-2');
identificationFilename('input[name=nominee-guardian-identification-1]', '#nominee-guardian-identification-item-1');
identificationFilename('input[name=nominee-guardian-identification-2]', '#nominee-guardian-identification-item-2');
// call function ends;

// pop-up
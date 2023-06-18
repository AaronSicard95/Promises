$form = $('#numberform')[0];
$number = $('#number')[0];
$info = $('#info')[0];
$finish = $('#finish')[0];
$factslist=$('#factslist')[0];
numbers = [];

function updateNumbers(valid){
    if (valid){var newstr = "Numbers: ";
    numbers.push($number.value);}
    else{var newstr = "(That is not a valid number) Numbers: ";}
    for (let i = 0; i<numbers.length;i++){
        console.log(numbers[i])
        newstr = `${newstr} ${String(numbers[i])}, `
    }
    $info.innerHTML = newstr;
}

$form.addEventListener('submit',function(evt){
    evt.preventDefault();
    updateNumbers($number.value!="");
    $number.value = "";
})

function getFacts(){
    let numpromises = [];
    for (let num of numbers){
        numpromises.push(axios.get(`http://numbersapi.com/${num}`))
    }
    Promise.all(numpromises)
        .then(numarray => numarray.forEach(num => {
        let newli=$(`<li><p>${num.data}</p></li>`);
        $factslist.append(newli[0]);
        console.log(num.data)}
        ))
        .catch(err => console.log(err));
}

$finish.addEventListener('click',function(evt){
    getFacts();
})
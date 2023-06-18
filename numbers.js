$form = $('#numberform');
$number = $('#number');
$info = ('#info')
numbers = [];

$form.submit(function(evt){
    evt.PreventDefault();
    numbers.append($number.value)
    $info.innerhtml = `${info.innerhtml} ${$number.value}`
})
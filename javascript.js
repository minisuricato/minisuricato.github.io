const range1 = document.getElementById('range1');
const range2 = document.getElementById('range2');

range1.addEventListener('input', function() {
    $("#display1").val(this.value);
});

range2.addEventListener('input', function() {
    $("#display2").val(this.value);
});

$("#display1").change(function() {
    $("#range1").val($(this).val());
});

$("#display2").change(function() {
    $("#range2").val($(this).val());
});



function updateTextInput(val) {
    document.getElementById('textInput').value=val; 
}

function Calculate(){
    const cavidadeInterna = Number($("#display1").val());
    const cavidadeExterna = Number($("#display2").val());

    const cargaInterna = cavidadeInterna + cavidadeExterna;
    const cargaExterna = cargaInterna * -1;

    $(".result1").html(`${cargaInterna} nC`);
    $(".result2").html(`${cargaExterna} nC`);
}
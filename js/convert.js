function convert()
{
    let amount_ = document.getElementById('amount').value;
    let fromcurrent_ = document.getElementById('fromcurrent').value;
    let tocurrent_ = document.getElementById('tocurrent').value;

    result = amount_ * tocurrent_ / fromcurrent_ ;
    
    document.getElementById('result').innerHTML = "Result: " + result;

    // Math.floor làm tròn số .
}
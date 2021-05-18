let outputScreen = document.getElementById("outputScreen");

function display(num)
{
    outputScreen.value += num;
}
function Calculate()
{
        try {
            outputScreen.value = eval(outputScreen.value);
            
        } catch (error) {
            alert("Vui lòng kiểm tra lại!")
        }
}
function Clear()
{
    outputScreen.value = "";
}
function del()
{
    outputScreen.value = outputScreen.value.slice(0,-1);
}
let inputEl = document.getElementById("input")

function appendValue(val) {
    inputEl.value += val;
  }
function clearDisplay()
{
    inputEl.value = null;
}
function calculate()
{
    let x;
    try
    {
        x = eval(inputEl.value);
    }catch(e)
    {
        x = "Error";
    }
    inputEl.value = x;
}

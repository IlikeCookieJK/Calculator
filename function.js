function calculator() {
    let calc = document.getElementsByClassName(`math`)[0].value;
    let cat = eval(calc);
    document.open();
    document.write(
        `<form action="#">
    <label for="Calc">Calculator</label>
    <input type="Equation" id="math" class="math">
    <button onclick="calculator();">Solve</button>
    <div onload="calculator"></div>
    </form>`)
    document.write(
        `<p>Result:</p>`
    );
    document.write(cat);
    document.close();
}


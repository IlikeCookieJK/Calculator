function calculator() {
    let c1 = document.getElementsByClassName(`math1`)[0].value;
    let c2 = document.getElementsByClassName(`math2`)[0].value;
    let c3 = document.getElementsByClassName(`math3`)[0].value;
    switch (c2) {
        case (`+`):
            cat = (`${(parseFloat(c1) + parseFloat(c3))}`);
            break;
        case (`-`):
            cat = (`${(parseFloat(c1) - parseFloat(c3))}`);
            break;
        case (`*`):
            cat = (`${(parseFloat(c1) * parseFloat(c3))}`);
            break;
        case (`/`):
            cat = (`${(parseFloat(c1) / parseFloat(c3))}`);
            break;
        case (`%`):
            cat = (`${(parseFloat(c1) % parseFloat(c3))}`);
            break;
        case (`^`):
            cat = (`${(parseFloat(c1) ** parseFloat(c3))}`);
            break;
    }
    document.open();
    document.write(
        `<form action="#">
        <label for="Calc">Calculator</label>
        <input type="Equation" id="math" class="math1">
        <input type="Equation" id="math" class="math2">
        <input type="Equation" id="math" class="math3">
        <button onclick="calculator();">Solve</button>
        <div onload="calculator"></div>
        </form>`)
    document.write(
        `<p>Result:</p>`
    );
    document.write(cat);
    document.close();
}


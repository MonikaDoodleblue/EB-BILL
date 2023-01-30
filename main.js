(function () {
    var electricity = document.getElementById('electricity');
    var buttonTotal = document.getElementById('button-bt');
    var total = document.getElementById('total');
    var clear = document.getElementById('clear-bt');
    var error = document.getElementById('error');

    buttonTotal.onclick = function () {

        total.innerHTML = "";

        var electricityValue = electricity.value;

        if (isNaN(electricityValue) || electricityValue === "") {
            error.innerHTML += "<li> Electricity field must contain numeric value</li>";
            return;
        }

        var units = document.getElementById('electricity').value;

        try {
                if (units <= 100) {
                    document.getElementById('total').innerHTML = "FREE";
                } else if ((units <= 200) || (units <= 101)) {
                    document.getElementById('total').innerHTML = "CONSUMED UNIT IS 6";
                } else if (!(units > 200) || (units < 301)) {
                    document.getElementById('total').innerHTML = "CONSUMED UNIT IS 7";
                } else if ((units > 300) && (units < 401)) {
                    document.getElementById('total').innerHTML = "CONSUMED UNIT IS 8";
                } else {
                    document.getElementById('total').innerHTML = "ReEnter the number!!";
                }
            } catch (e) {
                console.log(e);
            }

    };

    clear.onclick = function () {
        error.innerHTML = "";
        total.innerHTML = "";
        electricity.value = "";
        total.value = "";
    };

}());


const allBtn = document.getElementsByClassName("add-btn");





for (const btne of allBtn) {
    btne.addEventListener("click", function (event) {
        const result = event.target.innerText;

        const selectedArea = document.getElementById("selected-players-container");

        event.target.style.backgroundColor = "#1DD100";





        if (getClick("seat-Count") + 1 > 4) {
            alert("limitsea");
            event.target.style.backgroundColor = "gray";
            return;
        }


        // if (getClick("seats-left") - 1 < 0) {
        //     alert("seat ses");
        //     return;
        // }

        const seatLeft = getClick("seats-left");
        document.getElementById("seats-left").innerText = seatLeft - 1;

        const seatCount = getClick("seat-Count");
        document.getElementById("seat-Count").innerText = seatCount + 1



        const div = document.createElement("div");
        div.classList.add("flex");

        div.classList.add("justify-between");
        const p1 = document.createElement("p")
        const p2 = document.createElement("p")
        const p3 = document.createElement("p")
        p1.innerText = result
        p2.innerText = "Economoy";
        p3.innerText = "550";
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        selectedArea.appendChild(div);

        updatePrice(price)
        updateGrandValue();
    })
}


function updateGrandValue(status) {
    const totalCost = getClick("total-cost");
    if (status == undefined) {

        document.getElementById("grand-cost").innerText = totalCost;
    }
    else {
        const couponCode = document.getElementById("coupon-code").value;
        if (couponCode == "NEW15") {
            const discount = totalCost * 0.2;
            document.getElementById("grand-cost").innerText = totalCost - discount;

        }
        else if (couponCode == "Couple 20") {
            const discounted = totalCost * 0.1;
            document.getElementById("grand-cost").innerText = totalCost - discounted;
            document.getElementById("buttonId").disabled = false;
        }
        else {
            alert("please enter a valid coupon code");
        }
    }

}





function updatePrice(value) {

    const totalCost = getClick("total-cost");
    const sum = totalCost + value
    document.getElementById("total-cost").innerText = sum;
}
const price = getClick("seat-price");



function getClick(id) {
    const totalNumber = document.getElementById(id).innerText;
    const totalPrice = parseInt(totalNumber);
    return totalPrice;
}



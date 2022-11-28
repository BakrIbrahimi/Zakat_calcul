let hijri = document.getElementById("hijri");
let miladi = document.getElementById("miladi");
let money_input = document.getElementById("money");
let a7seb_btn = document.getElementById("count");
let number_count = document.querySelector(".number_count");
let zero = document.getElementById("zero");
let adding_money = document.querySelector(".adding_money");
let adding_money_inpt = document.querySelector(".adding_money_inpt input");
let adding = document.querySelector("#adding");

hijri.addEventListener("click" , (e)=>{
    e.preventDefault();
    miladi.classList.remove("active");
    hijri.classList.add("active")
})

miladi.addEventListener("click" , (e)=>{
    e.preventDefault();
    hijri.classList.remove("active");
    miladi.classList.add("active")
})


a7seb_btn.addEventListener("click" , (e)=>{
    e.preventDefault();
    if(money_input.value != ""){
        if(hijri.classList.contains("active")){
            number_count.innerHTML = Math.ceil((money_input.value * 0.025)); // to fixed()
        }else if(miladi.classList.contains("active")){
            number_count.innerHTML = Math.ceil((money_input.value * 0.02577)); // to fixed()
        }
        number_count.style.color = "#0d8f75"
        number_count.nextElementSibling.style.color = "#0d8f75";
        adding_money.style.display = "block";
        zero.style.color = "#0d8f75";
        document.getElementById("span_oba").style.color = "#0d8f75";
        zero.innerHTML = money_input.value - +number_count.innerHTML 
    }else{
        alert("ادخل المبلغ اخي بارك الله فيك")
    }
})

function changeColorOfBtn(){
    money_input.oninput = ()=>{
        if(money_input.value.length >= 1){
            a7seb_btn.style.background = "#214570";
        }else{
            a7seb_btn.style.background = "#bdbdbd";
        }
    }
}
changeColorOfBtn();

// adding_money function

function addFun(){
    adding_money_inpt.oninput = ()=>{
        if(adding_money_inpt.value.length >= 1){
            adding.style.background = "#0d8f75";
        }else{
            adding.style.background = "#bdbdbd";
        }

    }
    adding.addEventListener("click" , (e)=>{
        e.preventDefault();
        if(adding_money_inpt.value != ""){



            number_count.innerHTML = +number_count.innerHTML + +adding_money_inpt.value;
            // zero.innerHTML = +zero.innerHTML - adding_money_inpt.value;

            if(+number_count.innerHTML > money_input.value){
                alert("عذرا المبلغ الإضافي تعدى مبلغك الاصلي");
                number_count.innerHTML = +number_count.innerHTML - +adding_money_inpt.value;
                zero.innerHTML = +zero.innerHTML;
            }else{
                zero.innerHTML = +zero.innerHTML - adding_money_inpt.value;
            }
            adding_money_inpt.value = ""; 
        }else{
            alert("ادخل المبلغ الذي تريد اضافته لمبلغ الزكاة");
        }
        
    })
}

addFun()
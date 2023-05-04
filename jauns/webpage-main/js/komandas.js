// getting all required elements
const searchDropper = document.querySelector(".search-input");
const inputBox = searchDropper.querySelector("input");
const suggBox = searchDropper.querySelector(".autocom-box");
const icon = searchDropper.querySelector(".icon");

 



// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user entered data
    let emptyArray = [];
    if (userData >= 101 && userData <= 630) {
        icon.onclick = ()=>{
            window.location.href = "1_stavs.html";
            
        }/*
    }else if(userData >= 202 && userData <= 228){
        icon.onclick = ()=>{
            window.location.href = "2_stavs.html";
        }

    }else if(userData >= 302 && userData <= 331){
        icon.onclick = ()=>{
            window.location.href = "3_stavs.html";
        }
    }else if(userData >= 402 && userData <= 431){
        icon.onclick = ()=>{
            window.location.href = "4_stavs.html";
        }
    }else if(userData >= 502 && userData <= 533){
        icon.onclick = ()=>{
            window.location.href = "5_stavs.html";
        }
    }else if(userData >= 602 && userData <= 630){
        icon.onclick = ()=>{
            window.location.href = "6_stavs.html";
        }*/
    }
    else {
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user entered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        searchDropper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }
    if (!userData) {
        searchDropper.classList.remove("active"); //hide autocomplete box
    }
}
function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        if (selectData >= 101 && selectData <= 630) {
            window.location.href = "1_stavs.html";
        } /*else if(selectData >= 202 && selectData <= 228){
            window.location.href = "2_stavs.html";
        }else if(selectData >= 302 && selectData <= 331){
            window.location.href = "3_stavs.html";
        }else if(selectData >= 402 && selectData <= 431){
            window.location.href = "4_stavs.html";
        }else if(selectData >= 502 && selectData <= 533){
            window.location.href = "5_stavs.html";
        }else if(selectData >= 602 && selectData <= 630){
            window.location.href = "6_stavs.html";
        }*/else {
            console.log(`Search for ${selectData}`);
        }
    }
    searchDropper.classList.remove("active");
}
function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

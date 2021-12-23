src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js";



$(document).ready(function()
{
        var group = document.getElementByID("#group").val();
        if (group === "Current Assets"){
            $("#sGroups").attr("list","cAssets");
        };
        if (group === "Current Liabilities"){
            $("#sGroups").attr("list","cLiabilities");
        }

    };
    $('input').bind("change", chooseSubGroup);
});


console.log("worked")
$(document).ready(function (){
var start = document.getElementsByName("group")[0];
start.addEventListener('change', function chooseSubGroup(){
if(this.value ==="Current Assets"){
 document.getElementById("sGroups").list="cAssets";
}if(this.value ==="Long Term Assets"){
    
 document.getElementById("sGroups").list="ltAssets";
console.log("wow");
}if(this.value ==="Current Liabilities"){
    console.log("wow");
 document.getElementById("sGroups").list="cLiabilities";
}if(this.value ==="Long Term Liabilities"){
 document.getElementById("sGroups").list="ltLiabilities";
}if(this.value ==="Equity"){
 document.getElementById("sGroups").list="equity";
}if(this.value ==="Income"){
 document.getElementById("sGroups").list="income";
}if(this.value ==="Cost of Sales"){
 document.getElementById("sGroups").list="";
}if(this.value ==="Expenses"){
 document.getElementById("sGroups").list="expense";
}
});
});
document.getElementById("ca").addEventListener('click', chooseSubGroup("current Assets"));
document.getElementById("lta").addEventListener('click', chooseSubGroup("Long Term Assets"));
document.getElementById("cl").addEventListener('click', chooseSubGroup("Current Liabilitites"));
document.getElementById("ltl").addEventListener('click', chooseSubGroup("Long Term Liabilities"));
document.getElementById("e").addEventListener('click', chooseSubGroup("Equity"));
document.getElementById("i").addEventListener('click', chooseSubGroup("Income"));
document.getElementById("cos").addEventListener('click', chooseSubGroup("Cost of Sales"));
document.getElementById("ex").addEventListener('click', chooseSubGroup("Expenses"));



document.getElementById("sGroups").list="cAssets";



function chooseSubGroup(){
    
if(value ==="Current Assets"){
    console.log("wow");
 document.getElementById("sGroups").list="cAssets";
}if(value ==="Long Term Assets"){
 document.getElementById("sGroups").list="ltAssets";
}if(value ==="Current Liabilitites"){
 document.getElementById("sGroups").list="cLiabilities";
}if(value ==="Long Term Liabilities"){
 document.getElementById("sGroups").list="ltLiabilities";
}if(value ==="Equity"){
 document.getElementById("sGroups").list="equity";
}if(value ==="Income"){
 document.getElementById("sGroups").list="income";
}if(value ==="Cost of Sales"){
 document.getElementById("sGroups").list="";
}if(value ==="Expenses"){
 document.getElementById("sGroups").list="expense";
}
else{
console.log("worked")
}
}


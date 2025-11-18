let accExist = "false";

function logIn(){
    console.log(1)
    if (accExist == "true"){}
    else if (accExist == "false"){
        console.log(2)
        document.getElementById("popUp").setAttribute("style","z-index:3")
        document.getElementById("popUpDiv").setAttribute("style","z-index:3")
    }
}

function goBack(){
    document.getElementById("popUp").setAttribute("style","z-index:1")
    document.getElementById("popUpDiv").setAttribute("style","z-index:1")
}


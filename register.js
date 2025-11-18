let errorChecker = [0,0,0,0,0,0,0,0,0,0,0,0]
let popUp = document.getElementById("popUpReg")
let yesError =  document.getElementById("error")
let noError =  document.getElementById("good")
let password = ""

function submit(){
    let checker = errorCheck()

    if(!($("#terms").is(":checked"))){
        console.log("off")
        $("#termsBox").next().remove()
        let termsReq = $('<p id="warnMsgID"></p>')
        $("#termsBox").after(termsReq)
        $("#termsBox").next().text("You must agree on Terms and Conditions")
        $("#termsBox").next().attr("class","termsReq")
        $("#termsBox").attr("style","margin-bottom: 0;")
    }
    else{}


    if(checker == true){
        popUp.setAttribute("style","display: none")
        noError.setAttribute("style","display: none")
        popUp.setAttribute("style","display: flex;")
        yesError.setAttribute("style","display: flex;")
    }
    else if(checker == false){
        popUp.setAttribute("style","display: none")
        yesError.setAttribute("style","display: none")
        popUp.setAttribute("style","display: flex")
        noError.setAttribute("style","display: flex")
    }
}

function goodSubmit(){
    document.getElementById("clearr").submit()
    window.location.href = "index.html"
}

function retryy(){
    popUp.setAttribute("style","display: none")
    yesError.setAttribute("style","display: none")
}   

function clear1(){
    document.getElementById("clearr").reset()
    $("input").each(function(){
        if(this.id == 'terms'){}
        else{blankChecker(this.id)}
    })

    $("select").each(function(){
        $(`#${this.id}`).attr("style","outline: 5px solid red")
        $(`#${this.id}`).next().remove()
        let termsReq = $('<p id="warnMsgID"></p>')
        $(`#${this.id}`).after(termsReq)
        $(`#${this.id}`).next().text("You can't leave this field empty.")
        $(`#${this.id}`).next().attr("class","warningMsg")
    })

}

function noInputMsg(lastIn){
    let warnMsg = $('<p id="warnMsgID"></p>')
    lastIn.after(warnMsg)
    lastIn.next().text("You can't leave this field empty.")
    lastIn.next().attr("class","warningMsg")
}

function blankChecker(lInput){
    let h = undefined
    switch (lInput){
        case'lName':
            h = 0
            break;

        case'fName':
            h = 1
            break;

        case'bDay':
            h = 2
            break;

        case'address':
            h = 3
            break;
    }

    console.log(h)

    let lastIn = $(`#${lInput}`)
    let uInput = String(lastIn.val())
    if(uInput.length < 1){
        if(lastIn.next().length > 0){
            lastIn.next().remove()
            noInputMsg(lastIn)
            lastIn.attr("style","outline: 5px solid red")
        }
        else{
            noInputMsg(lastIn)
            lastIn.attr("style","outline: 5px solid red")
        }
        errorChecker[h] = 0
    }
    else{
        if(lastIn.next().length > 0){
            lastIn.next().remove()
            lastIn.attr("style","outline: 5px solid green")
        }
        else{
            lastIn.attr("style","outline: 5px solid green")
        }
        errorChecker[h] = 1
    }
}

function formChecker(formId){
    switch (formId){
        case 'contact':
            blankChecker(formId)
            let contact = $("#contact").val();
            if(contact.length < 11){
                console.log("too short")
                if($("#contact").val().length === 0){}
                else{
                    $("#contact").attr("style","outline: 5px solid red")
                $("#contact").next().remove()
                let termsReq = $('<p id="warnMsgID"></p>')
                $("#contact").after(termsReq)
                $("#contact").next().text("You must enter 11 digit number. ie 09xxxxxxxxx.")
                $("#contact").next().attr("class","warningMsg")
                }
                errorChecker[4] = 0
            }
            else{
                $("#contact").attr("style","outline: 5px solid green")
                $("#contact").next().remove()
                errorChecker[4] = 1
            }  
            break;

        case 'email':
            blankChecker(formId)
            let email = $("#email").val();
            console.log(email)
            if(email.includes("@") && email.includes(".com")){
            $("#email").next().remove()
            errorChecker[8] = 1
            }
            else{
            if($("#email").val().length === 0){}
            else{
                $("#email").attr("style","outline: 5px solid red")
                $("#email").next().remove()
                let termsReq = $('<p id="warnMsgID"></p>')
                $("#email").after(termsReq)
                $("#email").next().text("Invalid Format. Must include something@something.com")
                $("#email").next().attr("class","warningMsg")
            }
            errorChecker[8] = 0
            }
            break;

        case 'confirmPass':
            blankChecker(formId) 
            let confirmPass = $("#confirmPass").val();
            console.log(confirmPass)
            if(confirmPass != password){
                console.log("mismatch")
                $("#confirmPass").attr("style","outline: 5px solid red")
                if($("#confirmPass").val().length === 0){}
                else{
                    $("#confirmPass").attr("style","outline: 5px solid red")
                    $("#confirmPass").next().remove()
                    let termsReq = $('<p id="warnMsgID"></p>')
                    $("#confirmPass").after(termsReq)
                    $("#confirmPass").next().text("The password does not match.")
                    $("#confirmPass").next().attr("class","warningMsg")
                }
                errorChecker[10] = 0
            }
            else{
                if(confirmPass == 0){
                    $("#confirmPass").attr("style","outline: 5px solid red")  
                    if($("#confirmPass").val().length === 0){}
                    else{
                        $("#confirmPass").attr("style","outline: 5px solid red")
                        $("#confirmPass").next().remove()
                        let termsReq = $('<p id="warnMsgID"></p>')
                        $("#confirmPass").after(termsReq)
                        $("#confirmPass").next().text("The password does not match.")
                        $("#confirmPass").next().attr("class","warningMsg")
                    }
                    errorChecker[10] = 0
                }

                else{
                    $("#confirmPass").attr("style","outline: 5px solid green")
                    $("#confirmPass").next().remove()
                    errorChecker[10] = 1
                }
            }
            break;

        case 'pass':
            blankChecker(formId) 
            let pass = $("#pass").val();
            password = pass
            if(pass.length < 10){
                $("#pass").attr("style","outline: 5px solid red")
                if($("#confirmPass").val().length === 0){}
                    else{
                        $("#pass").attr("style","outline: 5px solid red")
                        $("#pass").next().remove()
                        let termsReq = $('<p id="warnMsgID"></p>')
                        $("#pass").after(termsReq)
                        $("#pass").next().text("The password must be 10 chracters long.")
                        $("#pass").next().attr("class","warningMsg")
                    }
                errorChecker[9] = 0
            }
            else{
                $("#pass").attr("style","outline: 5px solid green")
                $("#pass").next().remove()
                errorChecker[9] = 1
            }
            break;

        case'terms': 
            console.log(1)
            if($("#terms").is(":checked")){
                errorChecker[11] = 1
            }
            else{errorChecker[11] = 0}
            break;
            
        default:
            blankChecker(formId) 
            break;
    }
}

//event listners
$("input").each(function(){
    $(this).click(function(x){
        let formId = x.target.id; 
        formChecker(formId)
    })
})

$("input").each(function(){
    $(this).on('input',function(x){
        let formId = x.target.id; 
        if(formId == 'terms'){}
        else{formChecker(formId)}  
    })
})

$("input").change(function(){
    $(this).trigger('reset', function(x){
        let formId = x.target.id; 
        if(formId == 'terms'){}
        else{formChecker(formId)}  
    })
})

$("#gender").on('click', function(){
    let gender = $("#gender").val();
    console.log(gender)
    if(gender === 'NONE'){
        console.log("uyy pumili ka bawal yan")
        $("#gender").attr("style","outline: 5px solid red")
        $("#gender").next().remove()
        let termsReq = $('<p id="warnMsgID"></p>')
        $("#gender").after(termsReq)
        $("#gender").next().text("You can't leave this field empty.")
        $("#gender").next().attr("class","warningMsg")
        errorChecker[5] = 0
    }
    else{
        $("#gender").attr("style","outline: 5px solid green")
        $("#gender").next().remove()
        errorChecker[5] = 1
    }
})

$("#year").on('click', function(){
    let year = $("#year").val();
    console.log(year)
    if(year === 'NONE'){
        console.log("uyy pumili ka bawal yan")
        $("#year").attr("style","outline: 5px solid red")
        $("#year").attr("style","outline: 5px solid red")
        $("#year").next().remove()
        let termsReq = $('<p id="warnMsgID"></p>')
        $("#year").after(termsReq)
        $("#year").next().text("You can't leave this field empty.")
        $("#year").next().attr("class","warningMsg")
        errorChecker[6] = 0
    }
    else{
        $("#year").attr("style","outline: 5px solid green")
        $("#year").next().remove()
        errorChecker[6] = 1
    }

})

$("#course").on('click', function(){
    let course = $("#course").val();
    console.log(course)
    if(course === 'NONE'){
        console.log("uyy pumili ka bawal yan")
        $("#course").attr("style","outline: 5px solid red")
        $("#course").next().remove()
        let termsReq = $('<p id="warnMsgID"></p>')
        $("#course").after(termsReq)
        $("#course").next().text("You can't leave this field empty.")
        $("#course").next().attr("class","warningMsg")
        errorChecker[7] = 0
    }

    else{
        $("#course").attr("style","outline: 5px solid green")
        $("#course").next().remove()
        errorChecker[7] = 1
        
    }
})

function errorCheck(){
    console.log(errorChecker)
    for(let x = 0; x < 12; x++){
        if(errorChecker[x] === 0){
            console.log('error detected')
            return true
        }
    }
    console.log('no error detected')
    return false
}




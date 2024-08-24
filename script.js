var textare = document.querySelector(".ta")

function change(event){
    if(event.target.textContent == "0"){
        textare.textContent = textare.textContent+"0"
    }
    if(event.target.textContent == "00"){
        textare.textContent = textare.textContent+"00"
    }
    if(event.target.textContent == "1"){
        textare.textContent = textare.textContent+"1"
    }
    if(event.target.textContent == "2"){
        textare.textContent = textare.textContent+"2"
    }
    if(event.target.textContent == "3"){
        textare.textContent = textare.textContent+"3"
    }
    if(event.target.textContent == "4"){
        textare.textContent = textare.textContent+"4"
    }
    if(event.target.textContent == "5"){
        textare.textContent = textare.textContent+"5"
    }
    if(event.target.textContent == "6"){
        textare.textContent = textare.textContent+"6"
    }
    if(event.target.textContent == "7"){
        textare.textContent = textare.textContent+"7"
    }
    if(event.target.textContent == "8"){
        textare.textContent = textare.textContent+"8"
    }
    if(event.target.textContent == "9"){
        textare.textContent = textare.textContent+"9"
    }
    if(event.target.textContent == "+"){
        textare.textContent = textare.textContent+"+"
    }
    if(event.target.textContent == "-"){
        textare.textContent = textare.textContent+"-"
    }
    if(event.target.textContent == "X"){
        textare.textContent = textare.textContent+"X"
    }
    if(event.target.textContent == "/"){
        textare.textContent = textare.textContent+"/"
    }
    if(event.target.textContent == "Mod"){
        textare.textContent = textare.textContent+"%"
    }
    if(event.target.textContent == "C"){
        textare.textContent = " "
    }
    if(event.target.textContent == "."){
        textare.textContent = textare.textContent+"."
    }
    if(event.target.textContent == "Del"){
        var textar = textare.textContent
        var l = textar.length
        l = l-1
        var temp = " "
        for(var i = 0;i<l;i++){
            temp += textar[i]
        }
        textare.textContent = temp

    }
    if(event.target.textContent == "="){
        var texta = textare.textContent
        var len = texta.length
        var op = ' '
        var tempa = " "
        var tempb = " "
        var j = 0
        var a,b
        var ans = 0
        for(var i  = 0;i<len;i++){
            if(texta[i] == "+" || texta[i] == "-" || texta[i] == "X" || texta[i] == "%" || texta[i] == "/"){
                op = texta[i]
                j = i++
                break
            }
            tempa += texta[i]
        }
        if(op == ' '){
            textare.textContent = tempa
        }
        else{
        for(var s = j+1;s<len;s++){
            tempb += texta[s]
        }
        a = Number(tempa)
        b = Number(tempb)
        switch(op){
            case '+':
                ans = a+b
                break
            case '-':
                ans = a-b
                break
            case 'X':
                ans = a*b
                break
            case '%':
                ans = a%b
                break
            case '/':
                ans = a/b
                break

            
        }
        textare.textContent  = ans
    }
}
    

}
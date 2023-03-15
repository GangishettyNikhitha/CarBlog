var userId = "nikhitha@gmail.com"
var pass ="123"

function logintowebpage()
{
    var userGivenId=document.getElementById("usid").value
    var userGivenPass = document.getElementById("pass").value
    if(userId==userGivenId && pass==userGivenPass)
    {
        var fom = document.forms
        fom[0].action="./Html/home.html"
        fom[0].elements[2].type="submit"
    }
    else if(userId==userGivenId && pass!=userGivenPass)
    {
        document.getElementById("result").innerHTML="Wrong Password"
        document.getElementById("passdiv").style.borderColor="Red"
        document.getElementById("emaildiv").style.borderColor="royalblue"
        document.body.style.backgroundImage="linear-gradient(75deg,rgb(225, 65, 91),red)"
    }
    else if(userId!=userGivenId && pass==userGivenPass)
    {
        document.getElementById("result").innerHTML="Wrong UserId"
        document.getElementById("passdiv").style.borderColor="royalblue"
        document.getElementById("emaildiv").style.borderColor="Red"
        document.body.style.backgroundImage="linear-gradient(75deg ,red,purple)"
    }
    else{
        document.getElementById("result").innerHTML="wrong UserId and Password"
        document.getElementById("emaildiv").style.borderColor="Red"
        document.getElementById("passdiv").style.borderColor="Red"
        document.body.style.backgroundColor="red"
        document.body.style.backgroundImage="none"
    }
}
function passvis()
{
    document.getElementById("pass").removeAttribute("type")
    document.getElementById("visible").setAttribute("src","./asset/logo/visible.png")
    document.getElementById("visible").style.transform="rotateY(360deg)"
    document.getElementById("visible").style.transition="transform 0.3s"
}
function passhide()
{
    document.getElementById("pass").setAttribute("type","password")
    document.getElementById("visible").setAttribute("src","./asset/logo/invisible.png")
    document.getElementById("visible").style.transform="rotateY(-360deg)"
    document.getElementById("visible").style.transition="transform 0.3s"
}

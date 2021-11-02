function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("Password").value;
    if(username=="anmol"&& password=="qwerty")
    {
        alert("login successfully");
        return false;
    }
    else
    {
        alert("login failed");
    }
}
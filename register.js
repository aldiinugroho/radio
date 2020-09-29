// Validasi
function valid(){
    var vgender = document.getElementById("gender");
    var vpass = document.getElementById("pass");
    var vpay = document.getElementById("payment");
    var vemail = document.getElementById("email");
    var vnama = document.getElementById("fullname");
    var vagree = document.getElementById("agree");
    var verror = document.getElementById("errors");

    //nama validasi
    if(vnama.value == 0){
        verror.innerText = "*Nama harus diisi.";
        document.getElementById("errors").style.color = "orange";
        return false;
    }

    if(vnama.value.includes(",") || vnama.value.includes(".") || vnama.value.includes("/")
    || vnama.value.includes("<") || vnama.value.includes(">") || vnama.value.includes("?")
    || vnama.value.includes(";") || vnama.value.includes("'") || vnama.value.includes(":")
    || vnama.value.includes("\"") || vnama.value.includes("[") || vnama.value.includes("]")
    || vnama.value.includes("\\") || vnama.value.includes("{") || vnama.value.includes("}")
    || vnama.value.includes("|") || vnama.value.includes("=") || vnama.value.includes("-")
    || vnama.value.includes("+") || vnama.value.includes("_") || vnama.value.includes(")")
    || vnama.value.includes("(") || vnama.value.includes("*") || vnama.value.includes("&")
    || vnama.value.includes("^") || vnama.value.includes("%") || vnama.value.includes("$")
    || vnama.value.includes("#") || vnama.value.includes("@") || vnama.value.includes("!")
    || vnama.value.includes("`") || vnama.value.includes("~")){
        verror.innerText = "*Nama tidak bisa memiliki simbol.";
        document.getElementById("errors").style.color = "orange";
        return false;
    }

    if(vnama.value.includes("1") || vnama.value.includes("2") || vnama.value.includes("3")
    || vnama.value.includes("4") || vnama.value.includes("5") || vnama.value.includes("6")
    || vnama.value.includes("7") || vnama.value.includes("8") || vnama.value.includes("9")){
        verror.innerText = "*Nama tidak bisa memiliki angka.";
        document.getElementById("errors").style.color = "orange";
        return false;
    }

    //email validasi
    if(vemail.value == 0){
        verror.innerText = "*Email harus diisi.";
        document.getElementById("errors").style.color = "orange";
        return false;
    }

    if(vemail.value.startsWith(".") == true || vemail.value.endsWith(".")){
        verror.innerText = "*Email tidak bisa diawali atau diakhiri \".\".";
        document.getElementById("errors").style.color = "orange";
        return false;
    }

    if(vemail.value.startsWith("@") == true || vemail.value.endsWith("@") == true){
        verror.innerText = "*Email tidak bisa diawali atau diakhiri \"@\".";
        document.getElementById("errors").style.color = "orange";
        return false;
    }

    if(vemail.value.includes("@") == false){
        verror.innerText = "*Email harus memiliki \"@\".";
        document.getElementById("errors").style.color = "orange";
        return false;
    }

    if(vemail.value.includes(".") == false){
        verror.innerText = "*Email harus memiliki \".\".";
        document.getElementById("errors").style.color = "orange";
        return false;
    }

    // pass validasi
    if(vpass.value.length == 0){
        verror.innerText = "*Password harus diisi.";
        document.getElementById("errors").style.color = "orange";
        return false;
    }
    
    if(vpass.value.length < 6){
        verror.innerText = "*Password harus lebih dari 5 karakter.";
        document.getElementById("errors").style.color = "orange";
        return false;
    }
    
    if(vpass.value.length > 25){
        verror.innerText = "*Password tidak bisa lebih dari 25 karakter.";
        document.getElementById("errors").style.color = "orange";
        return false;
    }
   
    // gender validasi
    if(vgender.value == 0){
        verror.innerText = "*Gender harus dipilih.";
        document.getElementById("errors").style.color = "orange";
        return false;
    }

    // payment validasi
    if(vpay.value == 0){
        verror.innerText = "*Payment type harus dipilih.";
        document.getElementById("errors").style.color = "orange";
        return false;
    }

    // term validasi
    if(!vagree.checked){
        verror.innerText = "*Anda harus menyetujui terms and conditions.";
        document.getElementById("errors").style.color = "orange";
        return false;
    }

    alert("Terima kasih telah melakukan register dan pembayaran.");
    return true;
}
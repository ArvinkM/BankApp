function getstarted(){
    window.location.href = "register.html";
}

function loginpage(){
    window.location.href = "login.html";
}

function register(){
    // fetching values
   let acno=reg_acno.value
   let uname=reg_name.value
   let pswrd=reg_pswrd.value

    console.log(acno,uname,pswrd)

    account_details={
        acno,
        uname,
        pswrd,
        balance:0
    }

    if(acno in localStorage){
        alert("User already exists. Please login")
    }
    else{
        localStorage.setItem(acno,JSON.stringify(account_details))
        alert("Registration successful")
        window.location.href = "login.html";
    }
}

function login(){
    let acno=login_acno.value
    let pswrd=login_pswrd.value
    console.log(acno,pswrd)


    if(acno in localStorage){
       account_details=JSON.parse(localStorage.getItem(acno));
        if(pswrd==account_details.pswrd){
            alert("Login successful")
            window.location.href = "function.html";
        }
        else{
            alert("Incorrect password")
        }
    }
    else{
        alert("Invalid account number")
    }
}

let amt=0
let totalbalance=0
let withdraw=0

function deposit(){

    let amt=dep_amt.value;
    let acno=dep_acno.value;
    amt=Math.floor(amt)


   

    if(acno in localStorage){
        account_details=JSON.parse(localStorage.getItem(acno));
        if(acno==account_details.acno && amt <=0){
            alert("your amount cannot be 0 or negetive")
        }
        else{
            account_details.balance+=amt;
            localStorage.setItem(acno,JSON.stringify(account_details));
            alert("Your amount has been succesfully added")
            document.getElementById("balance_amt").innerHTML = 
            `<div style="color:red; font-weight:500;">
                Your Current Balance: ${account_details.balance}
            </div>`;
            
        }
    }
    else{
        alert("Account number invalid")

    }
    }
 
    function withdrawamt(){
        let amt = document.getElementById("withdraw_amt").value;
let acno = document.getElementById("withdraw_acno").value;
amt = Math.floor(Number(amt)); 

        if(acno in localStorage){
            account_details=JSON.parse(localStorage.getItem(acno));
            if(acno==account_details.acno && amt <=0){
                alert("amount invalid")
            }
            else if(amt>account_details.balance){
                alert("Insufficient Funds")
            }
            else{
                alert("Bank Balance before withdrawal: " + account_details.balance)
    
                alert("withdrawal amount: " + amt)
                account_details.balance-=amt;
                localStorage.setItem(acno, JSON.stringify(account_details));
                alert("After withdrawal balance : " + account_details.balance) 
                document.getElementById("withdraw_balance").innerHTML=`<div style="color:green; font-weight:500;">
                Your remaining balance: ${account_details.balance}</div>`
            }
        }
   else{
    alert("Invalid account number")
   }
    }


    function logout() {
        localStorage.clear()
        window.location="./index.html";
    }
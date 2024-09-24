console.log("This is iValidate Project")

let result = {
    tag: "",
    free: true,
    role: false,
    user: "me.tanya234",
    email: "me.tanya234@gmail.com",
    score: 0.64,
    state: "deliverable",
    domain: "gmail.com",
    reason: "valid_mailbox",
    mx_found: true,
    catch_all: null,
    disposable: false,
    smtp_check: true,
    did_you_mean: "",
    format_valid: true,
  }

submitBtn.addEventListener("click", async (e)=>{
    e.preventDefault()// beacause once form submit it bydefault reload it
    console.log("Clicked!")//for testing btn is clicked 
    resultCont.innerHTML = `<img width="40px" src="img/loading.svg" alt="">`
    let key = "ema_live_q9vnZVqTey9aN5YMZVk8MBr00IVibxWscbqoemWe"
    let email = document.getElementById("userEmail").value
    let url =`https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ``
    for (key of Object.keys(result)) {

        if(result[key] !== "" && result[key] !== " ")
        {
            str = str + `<div>${key}: ${result[key]} </div>`
        }
    
    }
    console.log(str)
    resultCont.innerHTML = str
    }
)







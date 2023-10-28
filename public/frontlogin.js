async function info(){
    const email = document.getElementById("emailform")
    const pass = document.getElementById("passform")
    
    const corpo = {
        emailvalue: email.value,
        passvalue: pass.value    
    }

    const response = await fetch(
        "/login",
        {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(corpo)
    })
    if( response.status != 200 ) { console.error('erro na requisição') }
    const result = await response.json();
}


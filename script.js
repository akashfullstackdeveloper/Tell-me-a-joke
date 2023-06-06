const btnEl=document.getElementById("btn");
const apiKey="k6o6ma7YuMzYSKpVtCedFA==z0Fu5chjq5SIUVJp";
const jokeEl=document.getElementById("joke");
const options={
    method:"GET",
    headers: {
        "X-Api-Key":apiKey,
    },
};
const apiUrl="https://api.api-ninjas.com/v1/dadjokes?limit="

async function getjoke(){
    try {
        jokeEl.innerText="updating...";
        btnEl.innerText="loading...";
        btnEl.disabled=true;
        const response=await fetch(apiUrl,options);
        const data= await response.json();
        jokeEl.innerText= data[0].joke;
        btnEl.disabled=false;
        btnEl.innerText="tell me a another joke";
    } catch (error) {
        console.log(error);
        jokeEl.innerText="an error happen try again later";
        btnEl.disabled=false;
        btnEl.innerText="tell me a another joke";
    }

}

btnEl.addEventListener("click" ,getjoke);

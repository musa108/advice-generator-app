const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
    console.log(data)
    document.getElementById("advice").innerHTML = `advice #${data.slip.id}`
    document.getElementById("text").innerHTML = `"${data.slip.advice}"`

}
fetchAdvice()
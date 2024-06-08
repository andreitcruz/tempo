
window.addEventListener('load', () => {
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        
        const getWeather = async () => {
            const getData = await fetch(`https://api.weatherapi.com/v1/current.json?key=737235e682bc4a4ca92115308240806&q=${latitude},${longitude}&lang=pt`)


            const res = await getData.json()

            const condicaoContainer = document.querySelector('.condicao')
            const localAtualContainer = document.querySelector('.local-atual')

            console.log(res.current.condition.text) //Condição
            console.log(res.location.name) //cidade
            console.log(res.current.temp_c) //Temperatura
            console.log(res.current.feelslike_c) //SEnsação térmica
            console.log(res.current.condition.wind_kph) //Velocidade do vento

            
       
            const icon = document.createElement('img')
            const condicao = document.createElement('p')
            const cidade = document.createElement('span')
            const temperatura = document.createElement('span')
            const sensTerm = document.createElement('span')
            const velVento = document.createElement('span')

            condicao.innerHTML=res.current.condition.text
            icon.setAttribute('src','https:'+ res.current.condition.icon)

            cidade.innerHTML = res.location.name
            temperatura.innerHTML = res.current.temp_c
            sensTerm.innerText = res.current.feelslike_c
            velVento.innerText = res.current.wind_kph + 'kh'

            condicaoContainer.appendChild(icon)
            condicaoContainer.appendChild(temperatura)
            condicaoContainer.appendChild(condicao)


            localAtualContainer.appendChild(cidade)
            localAtualContainer.appendChild(sensTerm)
            localAtualContainer.appendChild(velVento)
            
        }

        getWeather()
    })
})








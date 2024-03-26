
var numero = document.getElementById('telefono')
var form = document.getElementById('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    window.open(`https://api.whatsapp.com/send?phone=56${numero.value}`)
})



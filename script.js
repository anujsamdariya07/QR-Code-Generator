const box = document.querySelector(".box")
console.log(box)
const urlInput = document.getElementById('qr-code-input')
const generateBtn = document.getElementById('generate-btn')
const qrCodeContainer = document.getElementById('qr-code-container')

const generateQRCode = (event) => {
    event.preventDefault()

    const url = urlInput.value
    console.log(url)
    
    if (url !== '') {
        box.classList.remove("box")
        box.classList.add("box2")

        qrCodeContainer.innerHTML = ''
        new QRCode(qrCodeContainer, {
            text: url, 
            width: 200, 
            height: 200
        })
    } else {
        alert('Please enter a valid url.')
    }
}
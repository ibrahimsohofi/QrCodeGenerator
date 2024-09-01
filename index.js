var inputValue=document.querySelector(".qrValue");
var generateQR=document.querySelector(".generateQR");
var error=document.querySelector(".error");
var qrImg=document.querySelector(".qrImg");
generateQR.addEventListener('click',()=>{
    qrImg.textContent="";
    let qrValue=inputValue.value.trim();
    if (qrValue===''){
        error.innerText='Please enter any text or URL to generate a QR code';
        inputValue.classList.add("input-error");
    }
    else{
        inputValue.classList.remove("input-error");
        error.innerText='';
        let img=document.createElement('img');
        img.className="Img";
        img.alt='Maybe the image is not generated'
        img.src="https://api.qrserver.com/v1/create-qr-code/?data="+qrValue+"&size=150x150";
        qrImg.appendChild(img);
        let downloadImg=document.createElement('a');
        downloadImg.textContent="Download QR code";
        downloadImg.className="download";
        qrImg.appendChild(downloadImg)
        downloadImg.addEventListener('click',()=>{
          fetch(img.src).then(Response=>Response.blob()).then(blob=>{
            const qrUrl = window.URL.createObjectURL(blob);
            downloadImg.href=qrUrl;
            downloadImg.setAttribute('download');
            window.URL.revokeObjectURL(qrUrl);
          })
        })
        inputValue.value=""
    }

})




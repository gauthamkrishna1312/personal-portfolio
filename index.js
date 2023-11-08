function sendMail(){
    var params ={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,
        phone:document.getElementById("phone").value,
    };
    const service_ID = "service_5dzr59r";
    const template_ID = "template_692d77s";
    
    emailjs.send(service_ID, template_ID,params)
       .then(
            res => {
                document.getElementById("name").value="";
                document.getElementById("email").value="";
                document.getElementById("subject").value="";
                document.getElementById("message").value="";
                document.getElementById("phone").value="";
                console.log(res);
            })
            .catch(err => {console.log(err)});
} 

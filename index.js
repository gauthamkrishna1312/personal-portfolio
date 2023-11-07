function sendMail(){
    var params ={
        name:document.getElementById("name"),
        email:document.getElementById("email"),
        subject:document.getElementById("subject"),
        message:document.getElementById("message")
    };
    const service_ID = "service_5dzr59r";
    const template_ID = "template_wb8rhn6";
    
    emailjs.send(service_ID, template_ID,params)
       .then(
            res => {
                document.getElementById("name").value="";
                document.getElementById("email").value="";
                document.getElementById("subject").value="";
                document.getElementById("message").value="";
                console.log(res);
            })
            .catch(err => {console.log(err)})
}

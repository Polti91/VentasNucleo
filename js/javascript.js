



function enviarinfo(v){

    var today = new Date();
    var razonsocial=document.getElementById("rs").value;
    var cuit=document.getElementById("cuit").value;
    var iva=document.getElementById("iva").value;
    var nombre=document.getElementById("nombre").value;
    var rubro=document.getElementById("rubro").value;
    var direccion=document.getElementById("dire").value;
    var localidad=document.getElementById("loca").value;
    var provincia=document.getElementById("prov").value;
    var tellocal=document.getElementById("tellocal").value;
    var cellocal=document.getElementById("cellocal").value;
    var maillocaldata=document.getElementById("maillocal").value;
    var maillocal = maillocaldata.toLowerCase();
    var ig=document.getElementById("ig").value;
    var nombrecontacto=document.getElementById("namecontacto").value;
    var celcontacto=document.getElementById("celcontacto").value;
    var mailcontactodata=document.getElementById("mailcontacto").value;
    var nombrecontactodueno=document.getElementById("namecontactodueno").value;
    var celcontactodueno=document.getElementById("celcontactodueno").value;
    var mailcontactodueno=document.getElementById("mailcontactodueno").value;
    var admincheck=document.getElementById("admincheck").value;
    var mailcontacto = mailcontactodata.toLowerCase();
    var name = "";
    var cuit1=cuit.slice(0, 2);
    var cuit2=cuit.slice(2, 10);
    var cuit3=cuit.slice(10, 11);
    console.log(mailcontacto)
    let cuit4 = cuit1+"-"+cuit2+"-"+cuit3;
    if (tellocal=="") {
      tellocal = "No asignado";
    }
    if (cellocal=="") {
      cellocal = "No asignado";
    }
    if (maillocal=="") {
      maillocal = "No asignado";
    }if (admincheck=="") {
      admincheck = "No asignado";
    }

    //Funcion valida CUIT
    function esCUITValida(inputValor) {
      inputString = inputValor.toString()
      if (inputString.length == 11) {
          var Caracters_1_2 = inputString.charAt(0) + inputString.charAt(1)
          if (Caracters_1_2 == "20" || Caracters_1_2 == "23" || Caracters_1_2 == "24" || Caracters_1_2 == "27" || Caracters_1_2 == "30" || Caracters_1_2 == "33" || Caracters_1_2 == "34") {
              var Count = inputString.charAt(0) * 5 + inputString.charAt(1) * 4 + inputString.charAt(2) * 3 + inputString.charAt(3) * 2 + inputString.charAt(4) * 7 + inputString.charAt(5) * 6 + inputString.charAt(6) * 5 + inputString.charAt(7) * 4 + inputString.charAt(8) * 3 + inputString.charAt(9) * 2 + inputString.charAt(10) * 1
              Division = Count / 11;
              if (Division == Math.floor(Division)) {
                  return true
              }
          }
      }
      return false
  }
  //Funcion valida email
  function validarEmail(valor) {
    re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    if (re.exec(valor.toLowerCase())){
    return true
    } else {
    return false
    }
  }

    if (nombre=='HenryUp'){
      Swal.fire({
        title: 'Podemos hacernos grandes o hacernos miserales',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        showDenyButton: true,
  showCancelButton: true,
        confirmButtonText: 'Hacernos fuertes',
        denyButtonText: `Hacernos miserables`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    Swal.fire('Te hiciste fuerte! La cantidad de trabajo es la misma.', '', 'success')
  } else if (result.isDenied) {
    Swal.fire('Te hiciste miserable :(. La cantidad de trabajo es la misma.', '', 'info')
  }
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://media.tenor.com/E6bTNFTSsWIAAAAj/john-travolta.gif")
          center top
          no-repeat
        `
      }) 
    }
    else if (razonsocial.length=="" || cuit=="" || nombre=="" || direccion=="" || localidad=="" || provincia=="" ||  nombrecontacto=="" || celcontacto=="" || mailcontacto==""){
    
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes completar todos los campos',
      })
    }
    else if(ig==""){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Debe ingresar una cuenta de instagram o especificar si no cuentan con alguna',
        }) 
    }
    else if(iva=="0"){
      
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Debe seleccionar la condición ante el IVA.',
        }) 
    }
    else if((tellocal.length<10) && (tellocal.length>0) || (cellocal.length<10 && cellocal.length>0)  || celcontacto.length<10 ){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Debe introducir un número de telefono válido. Ej: 11 12346789',
          footer: 'Ej: 11 12349876'
        })
    }
    else if(prov=="0"){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Debe seleccionar una provincia',
        })
    }
    else if(validarEmail(mailcontacto)==false){  
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El formato del email de contacto es incorrecto.',
          footer: 'El formato debe ser similar a mi_mail@ejemplo.com'
        }) 
      }
    else if(maillocal !="No asignado" && validarEmail(maillocal)==false){  
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El formato del email del local es incorrecto.',
          footer: 'El formato debe ser similar a mi_mail@ejemplo.com'
        }) 
    }
    else if (esCUITValida(cuit) == false){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'CUIT Inválido',
        footer: 'Recuerde no usar tildes'
      })  
    }
    else{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Completado con exito',
        showConfirmButton: false,
        timer: 1500
      })
      if (v==2) {
        name = "Hola Henry! Te envío mis datos de registro:%0A"+today.toLocaleString()+"%0A%0A"+"*Razón social:* "+razonsocial+"%0A"+"*Cuit/Cuil:* "+cuit4+"%0A"+"*Condición frente al IVA:* "+iva+"%0A"+"*Nombre de fantasía:* "+nombre+"%0A"+"*Rubros:* "+rubro+"%0A"+"*Dirección:* "+direccion+"%0A"+"*Localidad:* "+localidad+"%0A"+"*Provincia:* "+provincia+"%0A"+"*Tel. del local:* "+tellocal+"%0A"+"*Cel. del local:* "+cellocal+"%0A"+"*Email del local:* "+maillocal+"%0A"+"*Instagram (IG) del local:* "+ig+"%0A"+"*Nombre del dueño:* "+nombrecontactodueno+"%0A"+"*Celular del dueño:* "+celcontactodueno+"%0A"+"*Email del dueño:* "+mailcontactodueno+"%0A"+"*Nombre de la persona de contacto:* "+nombrecontacto+"%0A"+"*Celular de la persona de contacto:* "+celcontacto+"%0A"+"*Email del contacto:* "+mailcontacto+"%0A"+"*Email Usuario Administrador Núcleo Check:* "+admincheck;       
        setTimeout(window.open, 2000, 'https://api.whatsapp.com/send?phone=5491164224270&text='+name, '_blank') //CHECK
      } 
      else if (v==1) {
        name = "Hola Henry! Te envío mis datos de registro:%0A"+today.toLocaleString()+"%0A%0A"+"*Razón social:* "+razonsocial+"%0A"+"*Cuit/Cuil:* "+cuit4+"%0A"+"*Condición frente al IVA:* "+iva+"%0A"+"*Nombre de fantasía:* "+nombre+"%0A"+"*Rubros:* "+rubro+"%0A"+"*Dirección:* "+direccion+"%0A"+"*Localidad:* "+localidad+"%0A"+"*Provincia:* "+provincia+"%0A"+"*Tel. del local:* "+tellocal+"%0A"+"*Cel. del local:* "+cellocal+"%0A"+"*Email del local:* "+maillocal+"%0A"+"*Instagram (IG) del local:* "+ig+"%0A"+"*Nombre de la persona de contacto:* "+nombrecontacto+"%0A"+"*Celular de la persona de contacto:* "+celcontacto+"%0A"+"*Email del contacto:* "+mailcontacto;       
        setTimeout(window.open, 2000, 'https://api.whatsapp.com/send?phone=5491164224270&text='+name, '_blank') //NG G1 
      } 
      else if (v==3) {
        name = "Hola Henry! Te envío mis datos de registro:%0A"+today.toLocaleString()+"%0A%0A"+"*Razón social:* "+razonsocial+"%0A"+"*Cuit/Cuil:* "+cuit4+"%0A"+"*Condición frente al IVA:* "+iva+"%0A"+"*Nombre de fantasía:* "+nombre+"%0A"+"*Rubros:* "+rubro+"%0A"+"*Dirección:* "+direccion+"%0A"+"*Localidad:* "+localidad+"%0A"+"*Provincia:* "+provincia+"%0A"+"*Tel. del local:* "+tellocal+"%0A"+"*Cel. del local:* "+cellocal+"%0A"+"*Email del local:* "+maillocal+"%0A"+"*Instagram (IG) del local:* "+ig+"%0A"+"*Nombre de la persona de contacto:* "+nombrecontacto+"%0A"+"*Celular de la persona de contacto:* "+celcontacto+"%0A"+"*Email del contacto:* "+mailcontacto;       
        setTimeout(window.open, 2000, 'https://api.whatsapp.com/send?phone=5491164224270&text='+name, '_blank') //CHECK CHILE
      } 
      else if (v==4) {
        name = "Hola Adrián! Te envío mis datos de registro:%0A"+today.toLocaleString()+"%0A%0A"+"*Razón social:* "+razonsocial+"%0A"+"*Cuit/Cuil:* "+cuit4+"%0A"+"*Condición frente al IVA:* "+iva+"%0A"+"*Nombre de fantasía:* "+nombre+"%0A"+"*Rubros:* "+rubro+"%0A"+"*Dirección:* "+direccion+"%0A"+"*Localidad:* "+localidad+"%0A"+"*Provincia:* "+provincia+"%0A"+"*Tel. del local:* "+tellocal+"%0A"+"*Cel. del local:* "+cellocal+"%0A"+"*Email del local:* "+maillocal+"%0A"+"*Instagram (IG) del local:* "+ig+"%0A"+"*Nombre del dueño:* "+nombrecontactodueno+"%0A"+"*Celular del dueño:* "+celcontactodueno+"%0A"+"*Email del dueño:* "+mailcontactodueno+"%0A"+"*Nombre de la persona de contacto:* "+nombrecontacto+"%0A"+"*Celular de la persona de contacto:* "+celcontacto+"%0A"+"*Email del contacto:* "+mailcontacto+"%0A"+"*Email Usuario Administrador Núcleo Check:* "+admincheck;       
        setTimeout(window.open, 2000, 'https://api.whatsapp.com/send?phone=5493518355047&text='+name, '_blank') //Check Adrián
      } 
      else if (v==5) {
        name = "Hola Lucas! Te envío mis datos de registro:%0A"+today.toLocaleString()+"%0A%0A"+"*Razón social:* "+razonsocial+"%0A"+"*Cuit/Cuil:* "+cuit4+"%0A"+"*Condición frente al IVA:* "+iva+"%0A"+"*Nombre de fantasía:* "+nombre+"%0A"+"*Rubros:* "+rubro+"%0A"+"*Dirección:* "+direccion+"%0A"+"*Localidad:* "+localidad+"%0A"+"*Provincia:* "+provincia+"%0A"+"*Tel. del local:* "+tellocal+"%0A"+"*Cel. del local:* "+cellocal+"%0A"+"*Email del local:* "+maillocal+"%0A"+"*Instagram (IG) del local:* "+ig+"%0A"+"*Nombre del dueño:* "+nombrecontactodueno+"%0A"+"*Celular del dueño:* "+celcontactodueno+"%0A"+"*Email del dueño:* "+mailcontactodueno+"%0A"+"*Nombre de la persona de contacto:* "+nombrecontacto+"%0A"+"*Celular de la persona de contacto:* "+celcontacto+"%0A"+"*Email del contacto:* "+mailcontacto+"%0A"+"*Email Usuario Administrador Núcleo Check:* "+admincheck;       
        setTimeout(window.open, 2000, 'https://api.whatsapp.com/send?phone=5491164772020&text='+name, '_blank') //Check Lucas
      } 
      else if (v==8) {
        name = "Hola Iván! Te envío mis datos de registro:%0A"+today.toLocaleString()+"%0A%0A"+"*Razón social:* "+razonsocial+"%0A"+"*Cuit/Cuil:* "+cuit4+"%0A"+"*Condición frente al IVA:* "+iva+"%0A"+"*Nombre de fantasía:* "+nombre+"%0A"+"*Rubros:* "+rubro+"%0A"+"*Dirección:* "+direccion+"%0A"+"*Localidad:* "+localidad+"%0A"+"*Provincia:* "+provincia+"%0A"+"*Tel. del local:* "+tellocal+"%0A"+"*Cel. del local:* "+cellocal+"%0A"+"*Email del local:* "+maillocal+"%0A"+"*Instagram (IG) del local:* "+ig+"%0A"+"*Nombre del dueño:* "+nombrecontactodueno+"%0A"+"*Celular del dueño:* "+celcontactodueno+"%0A"+"*Email del dueño:* "+mailcontactodueno+"%0A"+"*Nombre de la persona de contacto:* "+nombrecontacto+"%0A"+"*Celular de la persona de contacto:* "+celcontacto+"%0A"+"*Email del contacto:* "+mailcontacto+"%0A"+"*Email Usuario Administrador Núcleo Check:* "+admincheck;       
        setTimeout(window.open, 2000, 'https://api.whatsapp.com/send?phone=5491180591009&text='+name, '_blank') //Check Iván
      } 
      else if (v==6) {
        name = "Hola Adrián! Te envío mis datos de registro:%0A"+today.toLocaleString()+"%0A%0A"+"*Razón social:* "+razonsocial+"%0A"+"*Cuit/Cuil:* "+cuit4+"%0A"+"*Condición frente al IVA:* "+iva+"%0A"+"*Nombre de fantasía:* "+nombre+"%0A"+"*Rubros:* "+rubro+"%0A"+"*Dirección:* "+direccion+"%0A"+"*Localidad:* "+localidad+"%0A"+"*Provincia:* "+provincia+"%0A"+"*Tel. del local:* "+tellocal+"%0A"+"*Cel. del local:* "+cellocal+"%0A"+"*Email del local:* "+maillocal+"%0A"+"*Instagram (IG) del local:* "+ig+"%0A"+"*Nombre de la persona de contacto:* "+nombrecontacto+"%0A"+"*Celular de la persona de contacto:* "+celcontacto+"%0A"+"*Email del contacto:* "+mailcontacto;       
        setTimeout(window.open, 2000, 'https://api.whatsapp.com/send?phone=5493518355047&text='+name, '_blank') //NG G1 Adrián
      } 
      else if (v==7) {

        name = "Hola Lucas! Te envío mis datos de registro:%0A"+today.toLocaleString()+"%0A%0A"+"*Razón social:* "+razonsocial+"%0A"+"*Cuit/Cuil:* "+cuit4+"%0A"+"*Condición frente al IVA:* "+iva+"%0A"+"*Nombre de fantasía:* "+nombre+"%0A"+"*Rubros:* "+rubro+"%0A"+"*Dirección:* "+direccion+"%0A"+"*Localidad:* "+localidad+"%0A"+"*Provincia:* "+provincia+"%0A"+"*Tel. del local:* "+tellocal+"%0A"+"*Cel. del local:* "+cellocal+"%0A"+"*Email del local:* "+maillocal+"%0A"+"*Instagram (IG) del local:* "+ig+"%0A"+"*Nombre de la persona de contacto:* "+nombrecontacto+"%0A"+"*Celular de la persona de contacto:* "+celcontacto+"%0A"+"*Email del contacto:* "+mailcontacto;       
        setTimeout(window.open, 2000, 'https://api.whatsapp.com/send?phone=5491164772020&text='+name, '_blank') //NG G1 Lucas
      } 
      
      else{
        name = "Hola! Te envio mis datos de registro:%0A"+today.toLocaleString()+"%0A%0A"+"*Razón social:* "+razonsocial+"%0A"+"*Cuit:* "+cuit4+"%0A"+"*Condición frente al IVA:* "+iva+"%0A"+"*Nombre de fantasia:* "+nombre+"%0A"+"*Dirección:* "+direccion+"%0A"+"*Localidad:* "+localidad+"%0A"+"*Provincia:* "+provincia+"%0A"+"*Tel. del local:* "+tellocal+"%0A"+"*Cel. del local:* "+cellocal+"%0A"+"*Mail del local:* "+maillocal+"%0A"+"*Instagram (IG) del local:* "+ig+"%0A"+"*Nombre de la persona de contacto:* "+nombrecontacto+"%0A"+"*Celular de la persona de contacto:* "+celcontacto+"%0A"+"*Mail del contacto:* "+mailcontacto;
        
        window.open('https://api.whatsapp.com/send?phone=5492235419261&text='+name, '_blank');
      } 
    }
    
     
    
  
}
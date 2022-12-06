function enviarinfo(v){
    var today = new Date();
    var razonsocial=document.getElementById("rs").value;
    var cuit=document.getElementById("cuit").value;
    var iva=document.getElementById("iva").value;
    var nombre=document.getElementById("nombre").value;
    var direccion=document.getElementById("dire").value;
    var localidad=document.getElementById("loca").value;
    var provincia=document.getElementById("prov").value;
    var tellocal=document.getElementById("tellocal").value;
    var cellocal=document.getElementById("cellocal").value;
    var maillocal=document.getElementById("maillocal").value;
    var ig=document.getElementById("ig").value;
    var nombrecontacto=document.getElementById("namecontacto").value;
    var celcontacto=document.getElementById("celcontacto").value;
    var mailcontacto=document.getElementById("mailcontacto").value;
    let name = "Hola Henry! Te envio mis datos de registro:%0A"+today.toLocaleString()+"%0A%0A"+"*Razón social:* "+razonsocial+"%0A"+"*Cuit:* "+cuit+"%0A"+"*Condición frente al IVA:* "+iva+"%0A"+"*Nombre de fantasia:* "+nombre+"%0A"+"*Dirección:* "+direccion+"%0A"+"*Localidad:* "+localidad+"%0A"+"*Provincia:* "+provincia+"%0A"+"*Tel. del local:* "+tellocal+"%0A"+"*Cel. del local:* "+cellocal+"%0A"+"*Mail del local:* "+maillocal+"%0A"+"*Instagram (IG) del local:* "+ig+"%0A"+"*Nombre de la persona de contacto:* "+nombrecontacto+"%0A"+"*Celular de la persona de contacto:* "+celcontacto+"%0A"+"*Mail del contacto:* "+mailcontacto;
    var cuit1=cuit.slice(0, 2);
    var cuit2=cuit.slice(2, 10);
    var cuit3=cuit.slice(10, 11);
    let cuit4 = cuit1+"-"+cuit2+"-"+cuit3;


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







        
    if (razonsocial=="" || cuit=="" || nombre=="" || direccion=="" || localidad=="" || provincia=="" || tellocal=="" || cellocal=="" || maillocal=="" || ig=="" || nombrecontacto=="" || celcontacto=="" || mailcontacto==""){
      if (iva!="0"){
        alert("Debe completar todos los campos.");
      }
      else{
        alert("Debe seleccionar la condicion ante el IVA.");
      }
    } else if (!maillocal.includes("@") || !mailcontacto.includes("@") || !maillocal.includes(".") || !mailcontacto.includes(".")){
      alert("El formato del mail es incorrecto. El formato debe ser similar a ejemplo@ejemplo.com");
    } else if (esCUITValida(cuit) == false){
      alert("CUIT invalido");   
    }else if (tellocal.length<10 || cellocal.length<10 || celcontacto.length<10){
      alert("Revise los valores asignados en las lenguetas.");
    }
        else if (v==1) {
        name = "Hola Henry! Te envio mis datos de registro:%0A"+today.toLocaleString()+"%0A%0A"+"*Razón social:* "+razonsocial+"%0A"+"*Cuit:* "+cuit4+"%0A"+"*Condición frente al IVA:* "+iva+"%0A"+"*Nombre de fantasia:* "+nombre+"%0A"+"*Dirección:* "+direccion+"%0A"+"*Localidad:* "+localidad+"%0A"+"*Provincia:* "+provincia+"%0A"+"*Tel. del local:* "+tellocal+"%0A"+"*Cel. del local:* "+cellocal+"%0A"+"*Mail del local:* "+maillocal+"%0A"+"*Instagram (IG) del local:* "+ig+"%0A"+"*Nombre de la persona de contacto:* "+nombrecontacto+"%0A"+"*Celular de la persona de contacto:* "+celcontacto+"%0A"+"*Mail del contacto:* "+mailcontacto;
        
        window.open('https://api.whatsapp.com/send?phone=5492235419261&text='+name, '_blank');
      } else if (v==2) {
        name = "Hola Rafael! Te envio mis datos de registro:%0A"+today.toLocaleString()+"%0A%0A"+"*Razón social:* "+razonsocial+"%0A"+"*Cuit:* "+cuit4+"%0A"+"*Condición frente al IVA:* "+iva+"%0A"+"*Nombre de fantasia:* "+nombre+"%0A"+"*Dirección:* "+direccion+"%0A"+"*Localidad:* "+localidad+"%0A"+"*Provincia:* "+provincia+"%0A"+"*Tel. del local:* "+tellocal+"%0A"+"*Cel. del local:* "+cellocal+"%0A"+"*Mail del local:* "+maillocal+"%0A"+"*Instagram (IG) del local:* "+ig+"%0A"+"*Nombre de la persona de contacto:* "+nombrecontacto+"%0A"+"*Celular de la persona de contacto:* "+celcontacto+"%0A"+"*Mail del contacto:* "+mailcontacto;
        
        window.open('https://api.whatsapp.com/send?phone=5492235419261&text='+name, '_blank');
      } 
      else if (v==3) {
        name = "Hola Micaela! Te envio mis datos de registro:%0A"+today.toLocaleString()+"%0A%0A"+"*Razón social:* "+razonsocial+"%0A"+"*Cuit:* "+cuit4+"%0A"+"*Condición frente al IVA:* "+iva+"%0A"+"*Nombre de fantasia:* "+nombre+"%0A"+"*Dirección:* "+direccion+"%0A"+"*Localidad:* "+localidad+"%0A"+"*Provincia:* "+provincia+"%0A"+"*Tel. del local:* "+tellocal+"%0A"+"*Cel. del local:* "+cellocal+"%0A"+"*Mail del local:* "+maillocal+"%0A"+"*Instagram (IG) del local:* "+ig+"%0A"+"*Nombre de la persona de contacto:* "+nombrecontacto+"%0A"+"*Celular de la persona de contacto:* "+celcontacto+"%0A"+"*Mail del contacto:* "+mailcontacto;
        
        window.open('https://api.whatsapp.com/send?phone=5492235419261&text='+name, '_blank');
      } 
      else if (v==4) {
        name = "Hola Tomas! Te envio mis datos de registro:%0A"+today.toLocaleString()+"%0A%0A"+"*Razón social:* "+razonsocial+"%0A"+"*Cuit:* "+cuit4+"%0A"+"*Condición frente al IVA:* "+iva+"%0A"+"*Nombre de fantasia:* "+nombre+"%0A"+"*Dirección:* "+direccion+"%0A"+"*Localidad:* "+localidad+"%0A"+"*Provincia:* "+provincia+"%0A"+"*Tel. del local:* "+tellocal+"%0A"+"*Cel. del local:* "+cellocal+"%0A"+"*Mail del local:* "+maillocal+"%0A"+"*Instagram (IG) del local:* "+ig+"%0A"+"*Nombre de la persona de contacto:* "+nombrecontacto+"%0A"+"*Celular de la persona de contacto:* "+celcontacto+"%0A"+"*Mail del contacto:* "+mailcontacto;
        
        window.open('https://api.whatsapp.com/send?phone=5492235419261&text='+name, '_blank');
      } 
      else if (v==5) {
        name = "Hola José! Te envio mis datos de registro:%0A"+today.toLocaleString()+"%0A%0A"+"*Razón social:* "+razonsocial+"%0A"+"*Cuit:* "+cuit4+"%0A"+"*Condición frente al IVA:* "+iva+"%0A"+"*Nombre de fantasia:* "+nombre+"%0A"+"*Dirección:* "+direccion+"%0A"+"*Localidad:* "+localidad+"%0A"+"*Provincia:* "+provincia+"%0A"+"*Tel. del local:* "+tellocal+"%0A"+"*Cel. del local:* "+cellocal+"%0A"+"*Mail del local:* "+maillocal+"%0A"+"*Instagram (IG) del local:* "+ig+"%0A"+"*Nombre de la persona de contacto:* "+nombrecontacto+"%0A"+"*Celular de la persona de contacto:* "+celcontacto+"%0A"+"*Mail del contacto:* "+mailcontacto;
        
        window.open('https://api.whatsapp.com/send?phone=5492235419261&text='+name, '_blank');
      } 
      else if (v==6) {
        name = "Hola Rolando! Te envio mis datos de registro:%0A"+today.toLocaleString()+"%0A%0A"+"*Razón social:* "+razonsocial+"%0A"+"*Cuit:* "+cuit4+"%0A"+"*Condición frente al IVA:* "+iva+"%0A"+"*Nombre de fantasia:* "+nombre+"%0A"+"*Dirección:* "+direccion+"%0A"+"*Localidad:* "+localidad+"%0A"+"*Provincia:* "+provincia+"%0A"+"*Tel. del local:* "+tellocal+"%0A"+"*Cel. del local:* "+cellocal+"%0A"+"*Mail del local:* "+maillocal+"%0A"+"*Instagram (IG) del local:* "+ig+"%0A"+"*Nombre de la persona de contacto:* "+nombrecontacto+"%0A"+"*Celular de la persona de contacto:* "+celcontacto+"%0A"+"*Mail del contacto:* "+mailcontacto;
        
        window.open('https://api.whatsapp.com/send?phone=5492235419261&text='+name, '_blank');
      } 
      else if (v==7) {
        name = "Hola Juani! Te envio mis datos de registro:%0A"+today.toLocaleString()+"%0A%0A"+"*Razón social:* "+razonsocial+"%0A"+"*Cuit:* "+cuit4+"%0A"+"*Condición frente al IVA:* "+iva+"%0A"+"*Nombre de fantasia:* "+nombre+"%0A"+"*Dirección:* "+direccion+"%0A"+"*Localidad:* "+localidad+"%0A"+"*Provincia:* "+provincia+"%0A"+"*Tel. del local:* "+tellocal+"%0A"+"*Cel. del local:* "+cellocal+"%0A"+"*Mail del local:* "+maillocal+"%0A"+"*Instagram (IG) del local:* "+ig+"%0A"+"*Nombre de la persona de contacto:* "+nombrecontacto+"%0A"+"*Celular de la persona de contacto:* "+celcontacto+"%0A"+"*Mail del contacto:* "+mailcontacto;
        
        window.open('https://api.whatsapp.com/send?phone=5492235419261&text='+name, '_blank');
      } 
      else{
        name = "Hola! Te envio mis datos de registro:%0A"+today.toLocaleString()+"%0A%0A"+"*Razón social:* "+razonsocial+"%0A"+"*Cuit:* "+cuit4+"%0A"+"*Condición frente al IVA:* "+iva+"%0A"+"*Nombre de fantasia:* "+nombre+"%0A"+"*Dirección:* "+direccion+"%0A"+"*Localidad:* "+localidad+"%0A"+"*Provincia:* "+provincia+"%0A"+"*Tel. del local:* "+tellocal+"%0A"+"*Cel. del local:* "+cellocal+"%0A"+"*Mail del local:* "+maillocal+"%0A"+"*Instagram (IG) del local:* "+ig+"%0A"+"*Nombre de la persona de contacto:* "+nombrecontacto+"%0A"+"*Celular de la persona de contacto:* "+celcontacto+"%0A"+"*Mail del contacto:* "+mailcontacto;
        
        window.open('https://api.whatsapp.com/send?phone=5492235419261&text='+name, '_blank');
      } 
    
  
}
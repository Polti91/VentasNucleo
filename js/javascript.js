function enviarinfo(){
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
    let name = "*Razón social:* "+razonsocial+"%0A"+"*Cuit:* "+cuit+"%0A"+"*Condición frente al IVA:* "+iva+"%0A"+"*Nombre de fantasia:* "+nombre+"%0A"+"*Dirección:* "+direccion+"%0A"+"*Localidad:* "+localidad+"%0A"+"*Provincia:* "+provincia+"%0A"+"*Tel. del local:* "+tellocal+"%0A"+"*Cel. del local:* "+cellocal+"%0A"+"*Mail del local:* "+maillocal+"%0A"+"*Instagram (IG) del local:* "+ig+"%0A"+"*Nombre de la persona de contacto:* "+nombrecontacto+"%0A"+"*Celular de la persona de contacto:* "+celcontacto+"%0A"+"*Mail del contacto:* "+mailcontacto;
    // Abrir nuevo tab
    window.open('https://api.whatsapp.com/send?phone=5492235419261&text='+name, '_blank');
  
}
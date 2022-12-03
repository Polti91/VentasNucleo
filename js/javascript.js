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
    let name = razonsocial+"%0A"+cuit+"%0A"+iva+"%0A"+nombre+"%0A"+direccion+"%0A"+localidad+"%0A"+provincia+"%0A"+tellocal+"%0A"+cellocal+"%0A"+maillocal+"%0A"+ig+"%0A"+nombrecontacto+"%0A"+celcontacto+"%0A"+mailcontacto;
    // Abrir nuevo tab
    window.open(name, '_blank');
  
}
document.addEventListener('DOMContentLoaded',()=>{
    
    const inventario=JSON.parse(localStorage.getItem('inventario'));
    const titulo=document.querySelector("#titulo-inventario");
    titulo.textContent="INVENTARIO DE "+ personaje.nombre;
    
});
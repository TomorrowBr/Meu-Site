const btnMenu = document.getElementById('btnMenu');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}

btnMenu.addEventListener('click', toggleMenu);

function getNotification(){
    if(!("Notification" in window)){
        console.log('Navegador não suporta notificações')
    }else if(Notification.permission === "granted"){
        const notify = new Notification('Olá agora você sabera tudo sobre Handel Mercês');
        console.log('1')
    }else if(Notification.permission !== "denied"){
        Notification.requestPermission(function(permission){
            if(permission === "granted"){
                const notify = new Notification('Olá, bem vindo de volta!');
                
            }
        })
    }
}
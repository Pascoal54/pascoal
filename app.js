
        const nav = document.getElementById('nav');
        const toggle = document.getElementById('toggle');
        const closeMenu = document.getElementById('closeMenu');
         



        toggle.addEventListener('change', () => {
            if (toggle.checked) {
                // Mostra o menu e aplica a classe 'show' para a transição
                nav.style.display = 'flex';
                setTimeout(() => {
                    nav.classList.add('show');
                }, 10); // Pequeno atraso para garantir que display: flex seja aplicado
                closeMenu.style.display = 'block';
                openMenu.style.display = 'none';
            } else {
                // Remove a classe 'show' e oculta o menu após a transição
                nav.classList.remove('show');
                setTimeout(() => {
                    nav.style.display = 'none';
                }, 500); // Mesma duração da transição de transform
                closeMenu.style.display = 'none';
                openMenu.style.display = 'block';
            }
        });

        const openMenu = document.getElementById('openMenu');
        window.addEventListener('scroll', () => {
            if (window.scrollY <100) {
                openMenu.style.display ='block';
                
            } else {
                openMenu.style.display = 'none';
            }});



            const openmedia = document.getElementById('openmedia');    
            const viewR = document.getElementById('viewR');    
            const socials = document.getElementById('socials');    
            const call = document.getElementById('call');    
             

            openmedia.addEventListener('change', ()=>{
              if(openmedia.checked){
                viewR.style.display ='flex'
                socials.style.opacity ='1'
                call.src ='arquivo/close.png';
              }  else{
                viewR.style.display ='none'
                socials.style.opacity ='0.7'
                call.src ='arquivo/circled_menu_24px.png';
              }
            })
 
            const socialss = document.getElementById('socials');    
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    socials.style.display ='none';
                    
                } else {
                    socials.style.display = 'flex';
                }});


                
                    const texto = document.getElementById('texto');
                    const resume = document.getElementById('resume');
                    const sobre = document.getElementById('sobre');

                    resume.addEventListener('click',()=>{
                     const texAntigo = `        
Olá, sou  <b>Pascoal Zage</b>, um  <b>programador full stack </b> com uma paixão ardente por criar soluções digitais inovadoras. Com quatro anos de experiência, especializo-me em JavaScript, PHP e MySQL, dominando tanto o front-end quanto o back-end para entregar aplicações robustas e eficientes.
<br><br>
Além disso, sou hábil em CSS, focando fortemente na criação de interfaces responsivas e designs otimizados para web e dispositivos móveis. Minha abordagem combina estética e funcionalidade, garantindo que suas aplicações não só funcionem bem, mas também se destaquem visualmente.
<br><br>
Já trabalhei em diversos projetos desafiadores, sempre buscando a excelência e a inovação em cada linha de código e design. Estou à procura de novas oportunidades para colaborar com equipes visionárias e transformar ideias em soluções impactantes. Se você procura um profissional dedicado e criativo, entre em contato e vamos criar algo incrível juntos!
`;
                const textNew =  ` <b>Programador full stack </b> com 4 anos de experiência. Especializo-me em JavaScript, PHP e MySQL, e sou expert em CSS e design responsivo. Transformo ideias em soluções digitais funcionais e atraentes. Pronto para novos desafios e colaborações criativas. Vamos criar algo incrível juntos!`;
                 resume.style.display = `none`;
                 texto.innerHTML = textNew;
                 sobre.innerHTML = `Resumo`
                        setTimeout(()=>{
                       texto.innerHTML = texAntigo;
                       resume.style.display = `inline`;
                       sobre.innerHTML = `Quem Sou`
                        },10000)
                    })


                    
  //scrolltotop
  /* Up subir*/
window.onscroll = function(){
    scrollFuncion()
 };
 
 function scrollFuncion(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ){
 
       document.getElementById('upScroll').style.display = "block";
    
    }else {
       document.getElementById('upScroll').style.display = "none"; 
    }
 }
 
 function  topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
 }
 
 


 //Envio de email usando EmailJs

 document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validação de e-mail
    const emailField = document.getElementById('email');
    const email = emailField.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(email)) {
        document.getElementById('message').innerHTML = '<span style="color: white;">❌ E-mail inválido. Por favor, insira um e-mail válido.</span>';
        setTimeout(() => {
            document.getElementById('message').style.opacity ='0';
            location.reload(); // Atualiza a página
        }, 10000); // 1000 milissegundos = 1 segundos
        document.getElementById('contact-form').reset(); //limpar tdos campos

        return; // Interrompe o envio do e-mail
    }

    emailjs.sendForm('pascoalzage54', 'pascoalzage', this) //SERVICE_ID e SEU_TEMPLATE_ID 
        .then(function() {
            document.getElementById('message').innerHTML = '<span style="color: white;">✅ Enviado com sucesso!</span>';
            setTimeout(() => {
                document.getElementById('message').style.opacity ='0';
                location.reload(); // Atualiza a página
            }, 2000); // 1000 milissegundos = 1 segundos
            document.getElementById('contact-form').reset(); //limpar tdos campos
        }, function(error) {
            document.getElementById('message').innerHTML = '<span style="color: white;">❌ Falha ao enviar: ' + JSON.stringify(error) + '</span>';
            setTimeout(() => {
                document.getElementById('message').remove();
                location.reload(); // Atualiza a página
            }, 10000); // 000 milissegundos = 1 segundos
            document.getElementById('contact-form').reset(); //limpar tdos campos
        });
});

document.getElementById('callButton').addEventListener('click', function() {
    // Número de telefone no formato padrão para chamadas
    window.location.href = 'tel:+224930620876'; // Substitua pelo seu número
});
//Codigo escrito por Pascoal zage
                         
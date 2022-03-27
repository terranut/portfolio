export const data = {
    about: {
        name: 'Nombre',
        email: 'mail',
        phone: "phone",
        birthday: '22/01/1987',
        location: 'Madrid, España',
        descriptionA: `
        I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development
        and print media.I enjoy turning complex problems into simple, beautiful and intuitive designs.`,
        descriptionB: `        
        My job is to
        build your website so that it is functional and user-friendly but at the same time
        attractive. Moreover, I add personal touch to your product and make sure that is
        eye-catching and easy to use. My aim is to bring across your message and identity in the
        most creative way. I created web design for many famous brand companies.`
    },
    workingOn:[
        {icon:'html5',title:'Web developer',description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. '},
        {icon:'html5',title:'Panadero',description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. '},
        {icon:'html5',title:'Chapero',description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. '},
        {icon:'html5',title:'Ortodoncista',description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. '},
    ],

    socialMedia: [
        { id: 'linkedin', url: '' },
        { id: 'facebook', url: '' },
        { id: 'twitter', url: '' },
        { id: 'instagram', url: '' },
        { id: 'youtube', url: '' },
    ],
    menu: [
        { id: 0, display: "Sobre mí", path: "/" },
        { id: 1, display: "Resumen", path: "/cv" },
        { id: 2, display: "Portfolio", path: "/projects" },
        { id: 3, display: "Blog", path: "/blog" },
        { id: 4, display: "Contacto", path: "/contact" },
    ],
    videos: [
        {
            image: 'https://cdn.cdkeys.com/500x706/media/catalog/product/f/a/fallout_4.jpeg',
            title: 'Asentamientos Fallout 4 - Fábrica de munición automática',
            url: 'https://youtube.com/watch?v=0WiQXLuBbZA',
            text: "De cómo construir una fábrica de munición automática en Fallout 4. Es fácil siguiendo esta guía."
        },
        {
            image: 'https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/minecraft-creeper-face.jpg',
            title: 'Comandos en Minecraft | Trigger',
            url: 'https://www.youtube.com/watch?v=_cEpYy9d3mI',
            text: "Sistema de teletransporte con libros para servidores vanilla survival."
        },
        {
            image: 'https://mipatinete.com/wp-content/uploads/2019/09/patinete-electrico-xiaomi-m365-pro-500x280.jpg',
            title: 'Xiaomi M365 | Patinete | Scooter eléctrico',
            url: 'https://www.youtube.com/watch?v=Gqrd3QqwAgA',
            text: "Review del nuevo patinete eléctrico de Xiaomi Mijia M365. La revolución del transporte."
        },
    ],
    blog: [
        {
            image: 'https://chachageek.com/wp-content/uploads/2021/04/Oxygen-Not-Included-Tube.jpg',
            title: 'Oxygen Not Included. Criaturas',
            url: 'https://chachageek.com/oxygen-not-included-criaturas/',
            text: "Siguiendo con la serie sobre Oxygen Not Inluced. Hoy os quiero hablar sobre las posibilidades que nos trae toda la fauna en el juego..."
        },
        {
            image: 'https://chachageek.com/wp-content/uploads/2021/04/51ldubhs0ZL.jpeg',
            title: 'Hablemos de Dungeon Keeper',
            url: 'https://chachageek.com/hablemos-de-dungeon-keeper/',
            text: "Fue en 1997 cuando Bullfrog publica esta obra de arte de estrategia y rol. Yo tenía unos 10 años cuando lo probé por primera vez..."
        },
        {
            image: 'https://chachageek.com/wp-content/uploads/2021/04/4d53cd5431cbb3f60ee3a69fd79ba729.png',
            title: 'Hablemos de Oxygen Not Included',
            url: 'https://chachageek.com/hablemos-de-oxygen-not-included/',
            text: "ONI u Oxygen Not Included u oxígeno no incluído o más bien ni oxígeno ni agua ni comida incluídos..."
        },


    ],
    skills: [
        {
            id: 0, display: 'Front', list: [
                { id: "Angular", className: "devicon-angularjs-plain-wordmark  colored" },
                { id: "React", className: " devicon-react-original-wordmark colored" },
                { id: "Redux", className: " devicon-redux-original colored" },
                { id: "Storybook", className: " devicon-storybook-plain-wordmark colored" },
                { id: "Bootstrap", className: "devicon-bootstrap-plain-wordmark  colored" },
                { id: "css3", className: "devicon-css3-plain-wordmark colored" },
                { id: "Firebase", className: "devicon-firebase-plain-wordmark colored" },
                { id: "NextJs", className: " devicon-nextjs-original-wordmark colored" },
                { id: "NPM", className: "devicon-npm-original-wordmark colored" },
                { id: "Typescript", className: "devicon-typescript-plain colored" },
                { id: "Javascript", className: "devicon-javascript-plain colored" },
                { id: "HTML5", className: "devicon-html5-plain-wordmark colored" },
                { id: "Figma", className: " devicon-figma-plain colored" },
            ]
        },
        {
            id: 1, display: 'Back', list: [
                { id: "django", className: "devicon-django-plain-wordmark  colored" },
                { id: "Linux", className: " devicon-linux-plain colored" },
                { id: "Mysql", className: "devicon-mysql-plain-wordmark colored" },
                { id: "PHP", className: "devicon-php-plain colored" },
                { id: "Python", className: "devicon-python-plain-wordmark colored" },
                { id: "Git", className: "devicon-git-plain-wordmark colored" },
                { id: "Flask", className: "devicon-flask-original-wordmark colored" },
                { id: "Apcache", className: "devicon-apache-plain-wordmark colored" },
            ]
        },
        {
            id: 2, display: 'Otros', list: [
                { id: "GoogleCloud", className: "devicon-googlecloud-plain-wordmark colored" },
                { id: "Wordpress", className: " devicon-wordpress-plain-wordmark colored" },
                { id: "Photoshop", className: "devicon-photoshop-plain colored" },
                { id: "PremierePro", className: "devicon-premierepro-plain colored" },
                { id: "Trello", className: "devicon-trello-plain-wordmark colored" },
                { id: "Slack", className: "devicon-slack-plain-wordmark colored" },
                { id: "AfterEffects", className: "devicon-aftereffects-plain colored" },
            ]
        },

    ]

}
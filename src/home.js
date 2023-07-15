let homeImg1 = require('./img/home-img.jpg');
import Element from "./elementClass";

const contentDiv = document.querySelector('#content');

export default function createHome() {
    const homeContent = new Element('div')
    .addAttributes({ id: 'home-cont', class: 'content' })
    .addChild(new Element('h2').setInnerText('Welcome to Mocha Haven'))
    .addChild(new Element('p')
    .addAttributes({ class: 'blurb' })
    .setInnerText('At Mocha Haven, we believe that a perfect cup of coffee can transform an ordinary day into an extraordinary one. Nestled in the heart of our community, our café is a sanctuary where coffee enthusiasts and casual visitors alike can indulge in the rich flavors and warm ambiance we have carefully crafted.')) 
    .addChild(new Element ('img').addAttributes({ src: homeImg1, class: 'homeCont-img'}))

    contentDiv.appendChild(homeContent.build());
}
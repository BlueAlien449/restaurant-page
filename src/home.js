let homeImg1 = require('./img/home-img.jpg');
import Element from "./elementClass";

export const contentDiv = document.querySelector('#content');

export default function createHome() {
    const homeContent = new Element('div')
    .addAttributes({ id: 'home-cont', class: 'content' })
    .addChild(new Element('h2').setInnerText('Welcome to Mocha Haven'))
    .addChild(new Element('p').addAttributes({ class: 'blurb' })
    .setInnerText('At Mocha Haven, we believe that a perfect cup of coffee can transform an ordinary day into an extraordinary one. Nestled in the heart of our community, our café is a sanctuary where coffee enthusiasts and casual visitors alike can indulge in the rich flavors and warm ambiance we have carefully crafted.')) 
    .addChild(new Element('img').addAttributes({ src: homeImg1, class: 'homeCont-img'}))
    .addChild(new Element('h2').setInnerText('About Us'))
    .addChild(new Element('p').addAttributes({ id: 'home-about', class: 'about'})
    .setInnerText('Our passion for coffee extends beyond mere beans and brews. We are dedicated to sourcing only the finest, ethically-sourced coffee beans from around the world. Each sip tells a story of the regions and farms that produce the unique flavors we serve. Whether you prefer a velvety smooth latte, a bold and robust espresso shot, or a refreshing cold brew, we have the perfect cup to satisfy your discerning taste buds.'))

    contentDiv.appendChild(homeContent.build());
}
import Element from "./elementClass";
import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";
import { contentDiv } from "./home";

export function loadPage(){
    createNav()
    createHeader() 
    createContact()
    createFooter()
}

export function createNav() {
    const navBar = new Element('div')
    .addAttributes({ id: 'navbar'})
    .addChild(new Element('ul').addAttributes({ id: 'nav-list' })
    .addChild(new Element('li').addAttributes({ id: 'home', class: 'nav-item' }).setInnerText('Home'))
    .addChild(new Element('li').addAttributes({ id: 'menu', class: 'nav-item' }).setInnerText('Menu'))
    .addChild(new Element('li').addAttributes({ id: 'contact', class: 'nav-item' }).setInnerText('Contact')))

    contentDiv.appendChild(navBar.build());
}

export function createHeader() {
    const header = new Element('div')
    .addAttributes({ id: 'header' })
    .addChild(new Element('h1').addAttributes({ id: 'header-title' }).setInnerText('Mocha Haven'))

    contentDiv.appendChild(header.build());
}

export function createFooter() {
    const footer = new Element('div')
    .addAttributes({ id: 'footer' })
    .addChild(new Element('div').addAttributes({ id: 'footer-title' })
    .addChild(new Element('h3').setInnerText('Mocha Haven')))
    .addChild(new Element('div').addAttributes({ id: 'footer-nav' })    
    .addChild(new Element('ul').addAttributes({ id: 'nav-list' })
    .addChild(new Element('li').addAttributes({ id: 'home', class: 'nav-item' }).setInnerText('Home'))
    .addChild(new Element('li').addAttributes({ id: 'menu', class: 'nav-item' }).setInnerText('Menu'))
    .addChild(new Element('li').addAttributes({ id: 'contact', class: 'nav-item' }).setInnerText('Contact'))))
    .addChild(new Element('div').addAttributes({ id: 'footer-text-container' })
    .addChild(new Element('p').addAttributes({ id: 'footer-text' })
    .setInnerText('Indulge in moments of pure delight at Mocha Haven, where exceptional coffee meets warm hospitality')))


    contentDiv.appendChild(footer.build());

}
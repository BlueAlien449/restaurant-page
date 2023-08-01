import Element from "./elementClass";
import { contentLoading } from "./index";

export function loadPage(){
    createNav()
    createHeader()
    createPageContent()
    createFooter()
    contentLoading()
}

export const contentDiv = document.querySelector('#content');

export function createNav() {
    const navBar = new Element('div')
    .addAttributes({ id: 'navbar'})
    .addChild(new Element('ul').addAttributes({ id: 'nav-list' })
    .addChild(new Element('li').addAttributes({ id: 'home', class: 'nav-item', value: '1' }).setInnerText('Home'))
    .addChild(new Element('li').addAttributes({ id: 'menu', class: 'nav-item', value: '2' }).setInnerText('Menu'))
    .addChild(new Element('li').addAttributes({ id: 'contact', class: 'nav-item', value: '3' }).setInnerText('Contact')))

    contentDiv.appendChild(navBar.build());
}

export function createHeader() {
    const header = new Element('div')
    .addAttributes({ id: 'header' })
    .addChild(new Element('h1').addAttributes({ id: 'header-title' }).setInnerText('Mocha Haven'))

    contentDiv.appendChild(header.build());
}

export function createPageContent() {
    const pageContent = new Element('div')
    .addAttributes({ id: 'page-content' })

    contentDiv.appendChild(pageContent.build());
}

export function createFooter() {
    const footer = new Element('div')
    .addAttributes({ id: 'footer' })
    .addChild(new Element('div').addAttributes({ id: 'footer-title-container', class: 'footer-element' })
    .addChild(new Element('h3').setInnerText('Mocha Haven')))
    .addChild(new Element('div').addAttributes({ id: 'footer-nav-container', class: 'footer-element' })    
    .addChild(new Element('ul').addAttributes({ id: 'footer-nav' })
    .addChild(new Element('li').addAttributes({ id: 'footer-home', class: 'nav-item', value: '1'  }).setInnerText('Home'))
    .addChild(new Element('li').addAttributes({ id: 'footer-menu', class: 'nav-item', value: '2'  }).setInnerText('Menu'))
    .addChild(new Element('li').addAttributes({ id: 'footer-contact', class: 'nav-item', value: '3'  }).setInnerText('Contact'))))
    .addChild(new Element('div').addAttributes({ id: 'footer-text-container', class: 'footer-element' })
    .addChild(new Element('p').addAttributes({ id: 'footer-text' })
    .setInnerText('Indulge in moments of pure delight at Mocha Haven, where exceptional coffee meets warm hospitality.')))


    contentDiv.appendChild(footer.build());

}
let contactImg = require('./img/contact-img.jpg');
import Element from "./elementClass";
import { contentDiv } from "./home";

export default function createContact() {
    const contactContent = new Element('div').addAttributes({ id: 'contact-content', class: 'contact-container' })
    .addChild(new Element('div').addAttributes({ id: 'contact-location', class: 'contact-element' })
    .addChild(new Element('h1').addAttributes({ id: 'location-title', class: 'title' }).setInnerText('Location'))
    .addChild(new Element('p').addAttributes({ id: 'location-text'}).setInnerText('Mocha Haven Café 123 Main Street City, State, ZIP')))
    

    .addChild(new Element('div').addAttributes({ id: 'contact-phone', class: 'contact-element' })
    .addChild(new Element('h1').addAttributes({ id: 'phone-title', class: 'title' }).setInnerText('Phone Number'))
    .addChild(new Element('p').addAttributes({ id: 'phone-number'}).setInnerText('+1 (123) 456-7890')))

    .addChild(new Element('div').addAttributes({ id: 'contact-email', class: 'contact-element' })
    .addChild(new Element('h1').addAttributes({ id: 'email-title', class: 'title' }).setInnerText('Email'))
    .addChild(new Element('p').addAttributes({ id: 'email'}).setInnerText('info@mochahaven.com')))

    .addChild(new Element('div').addAttributes({ id: 'contact-hours', class: 'contact-element' })
    .addChild(new Element('h1').addAttributes({ id: 'hours-title', class: 'title' }).setInnerText('Opening Hours'))
    .addChild(new Element('p').addAttributes({ id: 'opening-hours'}).setInnerText('Monday to Friday: 7:00am - 8:00pm'))
    .addChild(new Element('div').addAttributes({ id: 'weekend-hours' }).setInnerText('Saturday and Sunday: 8:00am - 6:00pm')))

    .addChild(new Element('div').addAttributes({ id: 'contact-comment', class: 'contact-element' })
    .addChild(new Element('p').addAttributes({ id: 'contact-text'}).setInnerText("We value your input and strive to provide the best possible experience for our customers. If you have any questions about our menu, special requests, or if there's anything else we can assist you with, please don't hesitate to reach out to us. Our dedicated team is here to ensure your visit to Mocha Haven is nothing short of exceptional.")))

    .addChild(new Element('div').addAttributes({ id: 'contact-image-container', class: 'contact-element' })
    .addChild(new Element('img').addAttributes({ id: 'contact-image'})))
    contentDiv.appendChild(contactContent.build());
}
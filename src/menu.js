let menuImg1 = require('./img/menu-coffee.jpg');
let menuImg2 = require('./img/menu-tea.jpg');
let menuImg3 = require('./img/menu-treats.jpeg');
import Element from "./elementClass";
import { contentDiv } from "./home";

export default function createMenu() {
    const cafeMenu = new Element('div').addAttributes({ id: 'cafeMenu', class: 'content' })
    .addChild(new Element('div').addAttributes({ id: 'coffee', class: 'menu-section' })
    .addChild(new Element('img').addAttributes({ src: menuImg1, id: 'menu-img1', class: 'menu-img' }))
    .addChild(new Element('h2').addAttributes({ class: 'section-title' }).setInnerText('Coffee Specialties'))
    .addChild(new Element('ul').addAttributes({ class: 'menu-element' })
    .addChild(new Element('li').addAttributes({ class: 'menu-element'}).setInnerText('Espresso - A bold and intense shot of espresso to awaken your senses.'))
    .addChild(new Element('li').addAttributes({ class: 'menu-element'}).setInnerText('Cappuccino - The classic combination of espresso, steamed milk, and a velvety layer of foam.'))
    .addChild(new Element('li').addAttributes({ class: 'menu-element'}).setInnerText('Latte - Smooth espresso combined with steamed milk, topped with a creamy foam and a sprinkle of cocoa or cinnamon.'))
    .addChild(new Element('li').addAttributes({ class: 'menu-element'}).setInnerText('Americano - A rich and robust black coffee made with a double shot of espresso and hot water.'))
    .addChild(new Element('li').addAttributes({ class: 'menu-element'}).setInnerText('Mocha - A decadent blend of espresso, steamed milk, and rich chocolate, topped with whipped cream and a drizzle of chocolate syrup.'))))

    .addChild(new Element('div').addAttributes({ id: 'tea', class: 'menu-section' })
    .addChild(new Element('img').addAttributes({ src: menuImg2, id: 'menu-img2', class: 'menu-img' }))
    .addChild(new Element('h2').addAttributes({ class: 'section-title' }).setInnerText('Tea Infusions'))
    .addChild(new Element('ul').addAttributes({ class: 'menu-element' })
    .addChild(new Element('li').addAttributes({ class: 'menu-element'}).setInnerText('Green Tea - A light and refreshing tea with natural antioxidants and a delicate flavor profile.'))
    .addChild(new Element('li').addAttributes({ class: 'menu-element'}).setInnerText('Herbal Infusions - A selection of soothing herbal teas, including chamomile, peppermint, and hibiscus.'))))

    .addChild(new Element('div').addAttributes({ id: 'treats', class: 'menu-section' })
    .addChild(new Element('img').addAttributes({ src: menuImg3, id: 'menu-img3', class: 'menu-img' }))
    .addChild(new Element('h2').addAttributes({ class: 'section-title' }).setInnerText('Indulgent Treats'))
    .addChild(new Element('ul').addAttributes({ class: 'menu-element' })
    .addChild(new Element('li').addAttributes({ class: 'menu-element'}).setInnerText('Artisanal Cakes - Indulge in our heavenly cakes, from moist chocolate to creamy cheesecake.'))
    .addChild(new Element('li').addAttributes({ class: 'menu-element'}).setInnerText('Gourmet Cookies - Savor our homemade cookies, with options like chocolate chip, oatmeal raisin, and snickerdoodle.'))
    .addChild(new Element('li').addAttributes({ class: 'menu-element'}).setInnerText('Freshly Baked Pastries - A delightful assortment of croissants, muffins, scones, and Danish pastries.'))))
    

    contentDiv.appendChild(cafeMenu.build());
}
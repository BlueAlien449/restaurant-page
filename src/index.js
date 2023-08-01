import { loadPage } from "./page-load";
import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";
import './css/style.css'

window.addEventListener('DOMContentLoaded', loadPage);



export function contentLoading(){
    let navButtons = document.querySelectorAll('.nav-item');
    navButtons.forEach(x => x.addEventListener('click', selectPage));
    createHome()
    
    function selectPage(e){
        let currentPage = e.target.value;
        if (currentPage === 1) {
            removePage()
            createHome();
        } else if (currentPage === 2){
            removePage()
            createMenu();
        } else if (currentPage === 3){
            removePage()
            createContact();
        }
    }

    function removePage(){
        let pageContentDiv = document.getElementById('page-content')
        pageContentDiv.removeChild(pageContentDiv.firstChild);
    }
}








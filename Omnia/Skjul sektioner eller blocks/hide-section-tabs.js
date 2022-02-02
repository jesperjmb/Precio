/*FetchData can be removed or replaced with Omnia API*/
function FetchData() {
    /*Hide section tab with the class .tab-section and [hide-tabs] in the content*/
    $tabSections = document.querySelectorAll(".tab-section");    
    for ($tabSection of $tabSections) {
        if ($tabSection.innerText.includes('[hide-tabs]')) {
            $tabSection.style.display = "none";
        }
        else {
            $tabSection.style.display = "block";
        }
    }
    /*Hide section tab with the class .tab-section and [hide-links] in the content. Originally created to specifically hide Process Links tab*/
    $hideLinks = document.querySelectorAll('.tab-section .v-tab:last-of-type')[0];   
    for ($tabSection of $tabSections) {
        if ($tabSection.innerText.includes('[hide-links]')) {
            $hideLinks.style.display = "none"
        }
        else {
            $hideLinks.style.display = "flex";
        }
    }
}
setInterval(FetchData, 0);

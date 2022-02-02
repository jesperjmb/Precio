function FetchData() {
    $tabSections = document.querySelectorAll(".tab-section");    
    for ($tabSection of $tabSections) {
        if ($tabSection.innerText.includes('[hide-tabs]')) {
            $tabSection.style.display = "none";
        }
        else {
            $tabSection.style.display = "block";
        }
    }
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

function FetchData() {
    $sidebarSections = document.querySelectorAll("div.Column_Wrapper:nth-child(2)");    
    for ($sidebarSection of $sidebarSections) {
        if ($sidebarSection.innerText.includes('[hide-sidebar]')) {
            $sidebarSection.style.display = "none";
        }
        else {
            $sidebarSection.style.display = "block";
        }
    }
}
setInterval(FetchData, 0);

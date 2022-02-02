/*FetchData can be removed or replaced with Omnia API*/
/*Hide second column of a section (often a sidebar) if that column contains the tag [hide-sidebar] anywhere in the content*/
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

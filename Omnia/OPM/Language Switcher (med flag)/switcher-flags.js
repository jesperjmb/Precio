/*Adds the possiblity of adding flags to each language*/
/*FetchData can be removed or replaced with Omnia API*/
function FetchData() {
    $flags = document.querySelectorAll(".v-list-item__title, .process-language-switcher .v-select__selection--comma");    
    for ($flag of $flags) {
        if ($flag.innerText.includes('M365')) {
            $flag.classList.add("process-language-switcher-flag", "process-language-switcher-flag-m365");
        }
        if ($flag.innerText.includes('English (United States)')) {
            $flag.classList.add("process-language-switcher-flag", "process-language-switcher-flag-us");
        }
        if ($flag.innerText.includes('Dansk (Danmark)')) {
            $flag.classList.add("process-language-switcher-flag", "process-language-switcher-flag-dk");
        }
        if ($flag.innerText.includes('Svenska (Sverige)')) {
            $flag.classList.add("process-language-switcher-flag", "process-language-switcher-flag-se");
        }
        if ($flag.innerText.includes('Norsk Bokmål (Norge)')) {
            $flag.classList.add("process-language-switcher-flag", "process-language-switcher-flag-no");
        }
        if ($flag.innerText.includes('English (United Kingdom)')) {
            $flag.classList.add("process-language-switcher-flag", "process-language-switcher-flag-gb");
        }
        if ($flag.innerText.includes('Deutsch (Deutschland)')) {
            $flag.classList.add("process-language-switcher-flag", "process-language-switcher-flag-de");
        }
        if ($flag.innerText.includes('Français (France)')) {
            $flag.classList.add("process-language-switcher-flag", "process-language-switcher-flag-fr");
        }
        if ($flag.innerText.includes('English (Australia)')) {
            $flag.classList.add("process-language-switcher-flag", "process-language-switcher-flag-au");
        }
        if ($flag.innerText.includes('Melayu (Malaysia)')) {
            $flag.classList.add("process-language-switcher-flag", "process-language-switcher-flag-my");
        }
        if ($flag.innerText.includes('العربية (تونس)')) {
            $flag.classList.add("process-language-switcher-flag", "process-language-switcher-flag-tn");
        }
    }
}
setInterval(FetchData, 0);

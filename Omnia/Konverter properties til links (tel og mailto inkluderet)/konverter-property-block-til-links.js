var selectDiv = document.querySelectorAll('.company-details .subheading div') /*We target subheadings within a specific class.*/
var interval = setInterval(anchorProperties, 200) /*Defines when the script should run again, if it fails to target any properties*/
var counter = 0;
function anchorProperties(){
    if (selectDiv[0] == null) { /*If no properties were found, try again*/
        selectDiv = document.querySelectorAll('.subheading div')
        console.log('Could not convert properties to links')
    }
    if (selectDiv[0] != null) { /*Run if a property was found*/
        var isPhone = /(\D*\d){8}/; /*Defines what counts as a phonenumber, in this case a property than contains a number equal to, or longer, than 8 digits */
        var isWebpage = /(www|http|\.com|\.se|\.dk)/; /*Defines what counts as a website, in this case properties that contains either www, http, .com, .se, or .dk*/
        var isMail = '@' /*Defines what coutns as a mail, in this case any properties than contains a @ character*/
        document.querySelectorAll('.subheading div').forEach(function (el) {
            if (isPhone.test(el.textContent)) {
                /*Convert the plain text phonenumbers to a clickable TEL: links*/
                el.innerHTML = el.textContent.replace(el.textContent, '<a class="prop-to-link" href="tel:' + el.textContent.replace(/\s+/g, '') + '">' + el.textContent + '</a>')
            }
            if (isWebpage.test(el.textContent)) {
                /*Convert the plain text website links to a clickable URL*/
                el.innerHTML = el.textContent.replace(el.textContent, '<a class="prop-to-link" target="_blank" href="https://' + el.textContent + '">' + el.textContent + '</a>')
            }
            if (el.textContent.includes(isMail)) {
                /*Convert the plain text e-mail to a clickable MAILTO: link*/
                el.innerHTML = el.textContent.replace(el.textContent, '<a class="prop-to-link" href="mailto:' + el.textContent + '">' + el.textContent + '</a>')
            }
        });
        clearInterval(interval) /*If the conversion were successful, clear the interval and stop the script*/
    }
    ++counter /*If the script was not succesful, add to the counter and rerun the script*/
    if (counter >= 20) { /*Defines how many times the script should run if it does not find any properties. When the counter is reached the script will stop*/
        clearInterval(interval) 
    }
}
anchorProperties()

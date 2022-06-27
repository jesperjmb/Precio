var selectDiv = document.querySelectorAll('td div') /*Here we use td and div, to only target the pagerollup columns. Add a class if you want to be more specific*/
var interval = setInterval(anchorProperties, 200) /*Defines when the script should run again, if it fails to target any properties*/
var counter = 0;
function anchorProperties(){
    if (selectDiv[0] == null) { /*If no properties were found, try again*/
        selectDiv = document.querySelectorAll('td div')
        console.log('Could not convert properties to links')
    }
    if (selectDiv[0] != null) { /*Run if a property was found*/
        var isWebpage = /(www|http|\.com|\.se|\.dk)/; /*Only target website links*/
        //console.log('Sucess')
        document.querySelectorAll('td div').forEach(function (el) { /*Go through each website link found*/
            if (isWebpage.test(el.textContent)) {
                //console.log(el.textContent)
                /*Convert the plain text link to a clickable URL*/
                el.innerHTML = el.textContent.replace(el.textContent, '<a class="prop-to-link" target="_blank" href="https://' + el.textContent + '">' + el.textContent + '</a>')
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

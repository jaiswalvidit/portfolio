
//opening and closing of sidemenu
var sidemenu=document.getElementById("sidemenu");
        
function openMenu()
{sidemenu.style.right="0px";
}
function closeMenu()
{sidemenu.style.right="-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbyKOHtgfxycWdVTxvtfdkoqxWT62lLnlYaFZ8aE5fXqFP1pjH0RNqjT5YfUsE6ZtBTw/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg=document.getElementById("msg")
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML="Message sent successfully!!"
                setTimeout(function()
                {
                    msg.innerHTML=""
                },5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })


        var names = ['Software Engineer', 'Fullstack Developer', 'Competitive Programmer'];
        var currentIndex = 0;
    
        function changeName() {
            var element = document.getElementById('name');
    
            // Check if names array is not empty
            if (names.length > 0) {
                var currentName = names[currentIndex];
    
                // Clear the content before displaying the new name
                element.innerHTML = '';
    
                // Use map to create an array of promises
                var promises = Array.from(currentName).map((char, index) => {
                    return new Promise(resolve => {
                        setTimeout(() => {
                            element.innerHTML += char;
                            resolve();
                        }, 100 * index); // Adjust the delay (in milliseconds) between characters
                    });
                });
    
                // Use Promise.all to wait for all promises to resolve
                Promise.all(promises).then(() => {
                    // Move to the next name after displaying all characters
                    currentIndex = (currentIndex + 1) % names.length;
                });
            } else {
                // Display a line break if the names array is empty
                element.innerHTML = '<br>';
            }
        }
    
        // Initial setup
        changeName();
    
        // Change name every 5 seconds
        setInterval(changeName, 5000);
        var tab_links=document.getElementsByClassName("tab-links");
        var tab_contents=document.getElementsByClassName("tab-contents");
        function opentab(tabname)
        {
            for(tab_link of tab_links)
            {
                tab_link.classList.remove("active-link");
            }
            for(tab_link of tab_contents)
            {
                tab_link.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link"); 
            document.getElementById(tabname).classList.add("active-tab");
        }
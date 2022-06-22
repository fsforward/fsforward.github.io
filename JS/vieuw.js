//var viewMode = getCookie("view-mode");
//if(viewMode == "desktop"){
//    viewport.setAttribute('content', 'width=1024');
//}else if (viewMode == "mobile"){
//    viewport.setAttribute('content', 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no');
//}

/* When the user clicks on the button,
                toggle between hiding and showing the dropdown content */
                function myFunction() {
                    myDropdown1.classList.remove('show1');
                    myDropdown2.classList.remove('show2');
                    myDropdown3.classList.remove('show3');
                    myDropdown4.classList.remove('show4');
                    document.getElementById("myDropdown").classList.toggle("show");
                    }
    
                    // Close the dropdown menu if the user clicks outside of it
                    window.onclick = function(event) {
                    if (!event.target.matches('.dropbtn')) {
                        var dropdowns = document.getElementsByClassName("dropdown-content");
                        var i;
                        for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')) {
                            openDropdown.classList.remove('show');
                        }
                    }
                }
            }

/* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    function myFunction1() {
        myDropdown.classList.remove('show');
        myDropdown2.classList.remove('show2');
        myDropdown3.classList.remove('show3');
        myDropdown4.classList.remove('show4');
        document.getElementById("myDropdown1").classList.toggle("show1");
        }

        // Close the dropdown menu if the user clicks outside of it
        window.onclick = function(event) {
        if (!event.target.matches('.dropbtn1')) {
            var dropdowns = document.getElementsByClassName("dropdown-content1");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show1')) {
                openDropdown.classList.remove('show1');
            }
        }
    }
} 

/* When the user clicks on the button,
                toggle between hiding and showing the dropdown content */
                function myFunction2() {
                    myDropdown.classList.remove('show');
                    myDropdown1.classList.remove('show1');
                    myDropdown3.classList.remove('show3');
                    myDropdown4.classList.remove('show4');
                    document.getElementById("myDropdown2").classList.toggle("show2");
                    }
    
                    // Close the dropdown menu if the user clicks outside of it
                    window.onclick = function(event) {
                    if (!event.target.matches('.dropbtn2')) {
                        var dropdowns = document.getElementsByClassName("dropdown-content2");
                        var i;
                        for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show2')) {
                            openDropdown.classList.remove('show2');
                        }
                    }
                }
            } 

/* When the user clicks on the button,
                toggle between hiding and showing the dropdown content */
                function myFunction3() {
                    myDropdown.classList.remove('show');
                    myDropdown1.classList.remove('show1');
                    myDropdown2.classList.remove('show2');
                    myDropdown4.classList.remove('show4');
                    document.getElementById("myDropdown3").classList.toggle("show3");
                    }
    
                    // Close the dropdown menu if the user clicks outside of it
                    window.onclick = function(event) {
                    if (!event.target.matches('.dropbtn3')) {
                        var dropdowns = document.getElementsByClassName("dropdown-content3");
                        var i;
                        for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show3')) {
                            openDropdown.classList.remove('show3');
                        }
                    }
                }
            } 

/* When the user clicks on the button,
                toggle between hiding and showing the dropdown content */
                function myFunction4() {
                    myDropdown.classList.remove('show');
                    myDropdown1.classList.remove('show1');
                    myDropdown2.classList.remove('show2');
                    myDropdown3.classList.remove('show3');
                    document.getElementById("myDropdown4").classList.toggle("show4");
                    }
    
                    // Close the dropdown menu if the user clicks outside of it
                    window.onclick = function(event) {
                    if (!event.target.matches('.dropbtn4')) {
                        var dropdowns = document.getElementsByClassName("dropdown-content4");
                        var i;
                        for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show4')) {
                            openDropdown.classList.remove('show4');
                        }
                    }
                }
            } 
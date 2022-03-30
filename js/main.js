/* ==== SWIPER ==== */
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
  
    // Pagination
    pagination: {
        el: '.swiper-pagination',
    },
  
    // Directional arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

/* ==== QUALIFICATION TABS ==== */

function experience(evt, expType) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(expType).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

/* === EMAIL CONTACT === */
window.addEventListener("DOMContentLoaded", function() {

    var form = document.getElementById("my-form");
    var status = document.getElementById("status");

    function success() {
        form.reset()
        status.classList.add('success');
        status.innerHTML = "Message successfully sent!";
    }

    function error() {
        form.reset()
        status.classList.add('error');
        status.innerHTML = "Error sending message!";
    }

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error)
    });
});

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}

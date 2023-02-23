// Credits to: https://andrewlock.net/simple-obfuscation-of-email-addresses-using-javascript/

// Find all the elements on the page that use class="eml-protected"
var allElements = document.getElementsByClassName("eml-protected");

// Loop through all the elements, and update them
for (var i = 0; i < allElements.length; i++) {
    updateAnchor(allElements[i])
}

function updateAnchor(el) {
    // fetch the hex-encoded string
    var encoded = el.innerHTML;

    // decode the email, using the decodeEmail() function from before
    var decoded = decodeEmail(encoded);

    // Replace the text (displayed) content
    el.textContent = decoded;

    // Set the link to be a "mailto:" link
    el.href = 'mailto:' + decoded;
}

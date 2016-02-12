var headerImage = (function headerImage() {

    function init(el, url) {
        var img = new Image();

        img.src = url;
        img.onload = function () {
            el.style.backgroundImage = 'url(' + url + ')';
        };
    }

    return {
        init: init
    };
})();

var typedTagline = (function typedTagline() {

    function updateTagline(el, words, delay) {
        var allergy = allergies.pop();
        words.unshift(allergy);
        var letters = allergy.split('');
        var written = '';

        setTimeout(updateTagline.bind(null, el, words, delay), 1000 + (((allergy.length * 2) + 1) * delay));

        letters.forEach(function addLetters(letter, i) {
            setTimeout(function() {
                written += letter;

                el.innerHTML = written;
            }, delay * i);
        });

        letters.forEach(function deleteLetters(letter, i) {
            setTimeout(function() {
                written = written.slice(0, -1);

                el.innerHTML = written;
            }, 1000 + ((allergy.length) + 1) * delay + (delay * i));
        });
    }

    return {
        init: updateTagline
    };
})();

var allergies = ['DAIRY FREE', 'VEGAN', 'PALEO', 'KOSHER', 'HALAL', 'GLUTEN FREE'];

setTimeout(function () {
    typedTagline.init(document.querySelector('.type'), allergies, 200);
    headerImage.init(document.querySelector('.header'), './bg.jpg');
});

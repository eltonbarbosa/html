var SinglePage = {

    getInnerHeigh : function () {
        document.getElementById('home').style.height = "auto";
        document.getElementById('portfolio').style.height = "auto";
        document.getElementById('sobre').style.height = "auto";
    },

    onMoveContent : function () {

        var yOffset = window.pageYOffset;
        var currenHeight = window.innerHeight;

        $(".item-nav").removeClass("currentContent");

        if (yOffset < currenHeight) {
            $("#nav-home").addClass("currentContent");
        } else if (yOffset < (2 * currenHeight)) {
            $("#nav-portfolio").addClass("currentContent");
        } else if (yOffset >= (2 * currenHeight)) {
            $("#nav-sobre").addClass("currentContent");
        }
    }
};

window.addEventListener('load',SinglePage.getInnerHeigh);
window.addEventListener('resize',SinglePage.getInnerHeigh);
window.addEventListener('scroll', SinglePage.onMoveContent);
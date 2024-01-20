// Gestion menu hamburger (responsive)
function menuResponsiveClic() {
    const navLinks = document.querySelectorAll(".nav-item");
    const menuToggle = document.getElementById("navbarSupportedContent");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            new bootstrap.Collapse(menuToggle).toggle();
        });
    });
}
menuResponsiveClic();

function enableDarkMode(){
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    }else{
        document.body.classList.remove('light');
        document.body.classList.add('dark');
    }
}

addProjetBooki();
addProjet724();
addProjetBluel();
addProjetKasa();
addProjetEco();
addProjetTomsen();
filtersButton();
addSkillsTest();
addSkillsOrga();
addSkillsDev();

var cursor = {
    delay: 8,
    _x: 0,
    _y: 0,
    endX: window.innerWidth / 2,
    endY: window.innerHeight / 2,
    cursorVisible: !0,
    cursorEnlarged: !1,
    $dot: document.querySelector(".cursor-dot"),
    $outline: document.querySelector(".cursor-dot-outline"),
    init: function() {
        this.dotSize = this.$dot.offsetWidth,
        this.outlineSize = this.$outline.offsetWidth,
        this.setupEventListeners(),
        this.animateDotOutline()
    },
    setupEventListeners: function() {
        var e = this;
        document.querySelectorAll("a, .mousebutton").forEach(function(t) {
            t.addEventListener("mouseover", function() {
                e.cursorEnlarged = !0,
                e.toggleCursorSize()
            }),
            t.addEventListener("mouseout", function() {
                e.cursorEnlarged = !1,
                e.toggleCursorSize()
            })
        }),
        document.addEventListener("mousedown", function() {
            e.cursorEnlarged = !0,
            e.toggleCursorSize()
        }),
        document.addEventListener("mouseup", function() {
            e.cursorEnlarged = !1,
            e.toggleCursorSize()
        }),
        document.addEventListener("mousemove", function(t) {
            e.cursorVisible = !0,
            e.toggleCursorVisibility(),
            e.endX = t.pageX,
            e.endY = t.pageY,
            e.$dot.style.top = e.endY + "px",
            e.$dot.style.left = e.endX + "px"
        }),
        document.addEventListener("mouseenter", function(t) {
            e.cursorVisible = !0,
            e.toggleCursorVisibility(),
            e.$dot.style.opacity = 1,
            e.$outline.style.opacity = 1
        }),
        document.addEventListener("mouseleave", function(t) {
            e.cursorVisible = !0,
            e.toggleCursorVisibility(),
            e.$dot.style.opacity = 0,
            e.$outline.style.opacity = 0
        })
    },
    animateDotOutline: function() {
        var t = this;
        t._x += (t.endX - t._x) / t.delay,
        t._y += (t.endY - t._y) / t.delay,
        t.$outline.style.top = t._y + "px",
        t.$outline.style.left = t._x + "px",
        requestAnimationFrame(this.animateDotOutline.bind(t))
    },
    toggleCursorSize: function() {
        var t = this;
        t.cursorEnlarged ? (t.$dot.style.transform = "translate(-50%, -50%) scale(0.75)",
        t.$outline.style.transform = "translate(-50%, -50%) scale(1.5)") : (t.$dot.style.transform = "translate(-50%, -50%) scale(1)",
        t.$outline.style.transform = "translate(-50%, -50%) scale(1)")
    },
    toggleCursorVisibility: function() {
        var t = this;
        t.cursorVisible ? (t.$dot.style.opacity = 1,
        t.$outline.style.opacity = 1) : (t.$dot.style.opacity = 0,
        t.$outline.style.opacity = 0)
    }
};
cursor.init();  
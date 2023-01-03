addEventListener("load",() => { // "load" is safe but "DOMContentLoaded" starts earlier
    var index = 0;
    const slides = document.querySelectorAll(".slides");
    const classHide = "slides-hidden", count = slides.length;
    nextSlide();
    function nextSlide() {
        slides[(index ++) % count].classList.add(classHide);
        slides[index % count].classList.remove(classHide);
        setTimeout(nextSlide, 500);
    }
    // As a developer,
    // I want a set of smoke tests that .fetch critical assets for my portfolio
    // So that I set a foundation for a Continuous Integration Report page
    // setup test helpers
    mocha.setup('bdd');
    describe("Version 1 of Continuous Integration Reporting", () => {
        const errorMessage = 'Response status code is not 200';
        const basePrefix = 'http://'
        const baseDomain = 'sajjad.local:5173';
        // home
        describe("Home page", () => {
            it("Should respond with response status 200", () => {
                return fetch(basePrefix + baseDomain)
                    .then((response) => {
                        return chai.assert(response.status === 200, errorMessage);
                    });
            });
            it("Should have a loading animation", () => {
                return fetch(basePrefix + baseDomain + '/images/loading/loading.gif')
                    .then((response) => {
                        return chai.assert(response.status === 200, errorMessage);
                    });
            });
            it("Should have a floppy disc easter egg", () => {
                return fetch(basePrefix + baseDomain + '/images/desktop/floppy.png')
                    .then((response) => {
                        return chai.assert(response.status === 200, errorMessage);
                    });
            });
            it("Should have a logo", () => {
                return fetch(basePrefix + baseDomain + '/images/branding/logo.png')
                    .then((response) => {
                        return chai.assert(response.status === 200, errorMessage);
                    });
            });
        });
        // desktop
        describe("Desktop page", () => {
            it("Should respond with response status 200", () => {
                return fetch(basePrefix + baseDomain + '/desktop')
                    .then((response) => {
                        return chai.assert(response.status === 200, errorMessage);
                    });
            });
            it("Should have a home icon", () => {
                return fetch(basePrefix + baseDomain + '/images/desktop/icons/home.png')
                    .then((response) => {
                        return chai.assert(response.status === 200, errorMessage);
                    });
            });
            it("Should have a stargirl icon", () => {
                return fetch(basePrefix + baseDomain + '/images/desktop/icons/stargirl.png')
                    .then((response) => {
                        return chai.assert(response.status === 200, errorMessage);
                    });
            });
            it("Should have a pyrmd icon", () => {
                return fetch(basePrefix + baseDomain + '/images/desktop/icons/pyrmd.png')
                    .then((response) => {
                        return chai.assert(response.status === 200, errorMessage);
                    });
            });
        });
        // tech
        describe("Tech page", () => {
            it("Should respond with response status 200", () => {
                return fetch(basePrefix + baseDomain + '/tech')
                    .then((response) => {
                        return chai.assert(response.status === 200, errorMessage);
                    });
            });
        });
    });
    // run tests
    mocha.run();
});
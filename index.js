// -- listen for dom load
document.addEventListener("DOMContentLoaded", () => {
    
    // -- Toggle Button Funcitonality

    let body = document.querySelector('body');

    document.addEventListener('click', darkMode)

    function darkMode(event) {
        if (event.target.matches('.toggle-switch')) {
            if (body.classList.contains('dark')) {
                body.classList.remove('dark')
            } else {
                body.classList.add('dark')
            }
        }

        if (event.target.matches('.toggle-dark')) {
            if (body.classList.contains('dark')) {
                body.classList.remove('dark')
            } else {
                body.classList.add('dark')
            }
        }
    }




    // -- Intersection Observer
    let header     = document.querySelector('.header'),
        headerText = document.querySelectorAll('.slide'),
        codeSample = document.querySelectorAll('.code-example'),
        headerImg  = document.querySelector('.head-img'),
        article5   = document.querySelectorAll('.article-5'),
        article6   = document.querySelectorAll('.article-6'),
        article7   = document.querySelectorAll('.article-7'),
        article8   = document.querySelectorAll('.article-8'),
        article9   = document.querySelectorAll('.article-9'),
        article10  = document.querySelectorAll('.article-10'),
        product1   = document.querySelectorAll('.product-1'),
        product2   = document.querySelectorAll('.product-2'),
        product3   = document.querySelectorAll('.product-3'),
        product4   = document.querySelectorAll('.product-4'),
        user1      = document.querySelectorAll('.user-1'),
        user2      = document.querySelectorAll('.user-2'),
        user3      = document.querySelectorAll('.user-3'),
        user4      = document.querySelectorAll('.user-4'),
        user5      = document.querySelectorAll('.user-5');

    // -- observe code block
    observeCode = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add('anim-up')
            }
        })
    })

    codeSample.forEach(area => {
        observeCode.observe(area)
    })

    // -- observe header
    observeHeader = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add('header-anim')
            }
        })
    })

    observeHeader.observe(header)

    // -- observe header text
    observeHeaderText = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.style.animation = `header-text 1.7s cubic-bezier(0.76, 0, 0.24, 1) ${entry.target.dataset.delay} forwards`
            }
        })
    })

    headerText.forEach(area => {
        observeHeaderText.observe(area)
    })

    // -- observe header img
    observeHeaderImg = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add('img-intro')
            }
        })
    })

    observeHeaderImg.observe(headerImg)

    // -- observe Article 5
    observeArticle5 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.style.pointerEvents = 'none'
                entry.target.style.animation = `fade-up 1.7s cubic-bezier(0.76, 0, 0.24, 1) ${entry.target.dataset.delay} forwards`
                setTimeout(function () {
                    entry.target.style.opacity = 1
                    entry.target.style.animation = ``
                    entry.target.style.pointerEvents = 'auto'
                }, 2000)
                observeArticle5.unobserve(entry.target)
            }
        })
    })

    article5.forEach(area => {
        observeArticle5.observe(area)
    })

    // -- observe Article 6
    observeArticle6 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.pointerEvents = 'none'
                entry.target.style.animation = `fade-up 1.7s cubic-bezier(0.76, 0, 0.24, 1) ${entry.target.dataset.delay} forwards`
                setTimeout(function () {
                    entry.target.style.opacity = 1;
                    entry.target.style.animation = ``;
                    entry.target.pointerEvents = 'auto';
                }, 2000)
                observeArticle6.unobserve(entry.target)
            }
        })
    })

    article6.forEach(area => {
        observeArticle6.observe(area)
    })

    // -- observe Article 7
    observeArticle7 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.pointerEvents = 'none'
                entry.target.style.animation = `fade-up 1.7s cubic-bezier(0.76, 0, 0.24, 1) ${entry.target.dataset.delay} forwards`
                setTimeout(function () {
                    entry.target.style.opacity = 1;
                    entry.target.style.animation = ``;
                    entry.target.pointerEvents = 'auto';
                }, 2000)
                observeArticle7.unobserve(entry.target)
            }
        })
    })

    article7.forEach(area => {
        observeArticle7.observe(area)
    })

    // -- observe Article 8
    observeArticle8 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.pointerEvents = 'none'
                entry.target.style.animation = `fade-up 1.7s cubic-bezier(0.76, 0, 0.24, 1) ${entry.target.dataset.delay} forwards`
                setTimeout(function () {
                    entry.target.style.opacity = 1;
                    entry.target.style.animation = ``;
                    entry.target.pointerEvents = 'auto'
                }, 2000)
                observeArticle8.unobserve(entry.target)
            }
        })
    })

    article8.forEach(area => {
        observeArticle8.observe(area)
    })

    // -- observe Article 9
    observeArticle9 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.pointerEvents = 'none';
                entry.target.style.animation = `fade-up 1.7s cubic-bezier(0.76, 0, 0.24, 1) ${entry.target.dataset.delay} forwards`
                setTimeout(function () {
                    entry.target.style.opacity = 1;
                    entry.target.style.animation = ``;
                    entry.target.pointerEvents = 'auto'
                }, 2000)
                observeArticle9.unobserve(entry.target)
            }
        })
    })

    article9.forEach(area => {
        observeArticle9.observe(area)
    })

    // -- observe Article 10
    observeArticle10 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.pointerEvents = 'none'
                entry.target.style.animation = `fade-up 1.7s cubic-bezier(0.76, 0, 0.24, 1) ${entry.target.dataset.delay} forwards`
                setTimeout(function () {
                    entry.target.style.opacity = 1;
                    entry.target.style.animation = ``;
                    entry.target.pointerEvents = 'auto'
                }, 2000)
                observeArticle10.unobserve(entry.target)
            }
        })
    })

    article10.forEach(area => {
        observeArticle10.observe(area)
    })

    // -- observe Product 1
    observeProduct1 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.pointerEvents = 'none'
                entry.target.style.animation = `fade-up 1.7s cubic-bezier(0.76, 0, 0.24, 1) ${entry.target.dataset.delay} forwards`
                setTimeout(function () {
                    entry.target.style.opacity = 1;
                    entry.target.style.animation = ``;
                    entry.target.pointerEvents = 'auto'
                }, 2000)
                observeProduct1.unobserve(entry.target)
            }
        })
    })

    product1.forEach(area => {
        observeProduct1.observe(area)
    })
    
    // -- observe Product 2
    observeProduct2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.pointerEvents = 'none'
                entry.target.style.animation = `fade-up 1.7s cubic-bezier(0.76, 0, 0.24, 1) ${entry.target.dataset.delay} forwards`
                setTimeout(function () {
                    entry.target.style.opacity = 1;
                    entry.target.style.animation = ``;
                    entry.target.pointerEvents = 'auto'
                }, 2000)
                observeProduct2.unobserve(entry.target)
            }
        })
    })

    product2.forEach(area => {
        observeProduct2.observe(area)
    })

    // -- observe Product 3
    observeProduct3 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.pointerEvents = 'none'
                entry.target.style.animation = `fade-up 1.7s cubic-bezier(0.76, 0, 0.24, 1) ${entry.target.dataset.delay} forwards`
                setTimeout(function () {
                    entry.target.style.opacity = 1;
                    entry.target.style.animation = ``;
                    entry.target.pointerEvents = 'auto'
                }, 2000)
                observeProduct3.unobserve(entry.target)
            }
        })
    })

    product3.forEach(area => {
        observeProduct3.observe(area)
    })

    // -- observe Product 4
    observeProduct4 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.pointerEvents = 'none'
                entry.target.style.animation = `fade-up 1.7s cubic-bezier(0.76, 0, 0.24, 1) ${entry.target.dataset.delay} forwards`
                setTimeout(function () {
                    entry.target.style.opacity = 1;
                    entry.target.style.animation = ``;
                    entry.target.pointerEvents = 'auto'
                }, 2000)
                observeProduct4.unobserve(entry.target)
            }
        })
    })

    product4.forEach(area => {
        observeProduct4.observe(area)
    })

    // -- observe User 1
    observeUser1 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.pointerEvents = 'none'
                entry.target.style.animation = `fade-up 1.7s cubic-bezier(0.76, 0, 0.24, 1) ${entry.target.dataset.delay} forwards`
                setTimeout(function () {
                    entry.target.style.opacity = 1;
                    entry.target.style.animation = ``;
                    entry.target.pointerEvents = 'auto'
                }, 2000)
                observeUser1.unobserve(entry.target)
            }
        })
    })

    user1.forEach(area => {
        observeUser1.observe(area)
    })

    // -- observe User 2
    observeUser2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.pointerEvents = 'none'
                entry.target.style.animation = `fade-up 1.7s cubic-bezier(0.76, 0, 0.24, 1) ${entry.target.dataset.delay} forwards`
                setTimeout(function () {
                    entry.target.style.opacity = 1;
                    entry.target.style.animation = ``;
                    entry.target.pointerEvents = 'auto'
                }, 2000)
                observeUser2.unobserve(entry.target)
            }
        })
    })

    user2.forEach(area => {
        observeUser2.observe(area)
    })

    // -- observe User 3
    observeUser3 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.pointerEvents = 'none'
                entry.target.style.animation = `fade-up 1.7s cubic-bezier(0.76, 0, 0.24, 1) ${entry.target.dataset.delay} forwards`
                setTimeout(function(){
                    entry.target.style.opacity = 1;
                    entry.target.style.animation = ``;
                    entry.target.pointerEvents = 'auto'
                },2000)
                observeUser3.unobserve(entry.target)
            }
        })
    })

    user3.forEach(area => {
        observeUser3.observe(area)
    })

    // -- observe User 4
    observeUser4 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.pointerEvents = 'none'
                entry.target.style.animation = `fade-up 1.7s cubic-bezier(0.76, 0, 0.24, 1) ${entry.target.dataset.delay} forwards`
                setTimeout(function () {
                    entry.target.style.opacity = 1;
                    entry.target.style.animation = ``;
                    entry.target.pointerEvents = 'auto'
                }, 2000)
                observeUser4.unobserve(entry.target)
            }
        })
    })

    user4.forEach(area => {
        observeUser4.observe(area)
    })

    // -- observe User 4
    observeUser5 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.pointerEvents = 'none'
                entry.target.style.animation = `fade-up 1.7s cubic-bezier(0.76, 0, 0.24, 1) ${entry.target.dataset.delay} forwards`
                setTimeout(function () {
                    entry.target.style.opacity = 1;
                    entry.target.style.animation = ``;
                    entry.target.pointerEvents = 'auto'
                }, 2000)
                observeUser5.unobserve(entry.target)
            }
        })
    })

    user5.forEach(area => {
        observeUser5.observe(area)
    })

});

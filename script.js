const openbtn = document.querySelector('.openbtn1');
const overlay = document.querySelector('.overlay')
const closebtn = document.querySelector('.closeacc2')
const openaccount = document.querySelector('.openaccount')
const learnmore = document.querySelector('.ui')
const sec1 = document.querySelector('.sec-1')
const rightel = document.querySelector('.right1')

const full = document.querySelector('.fullagain')
console.log(full)

//modal window
const openwindow = function () {
    openbtn.classList.remove('hidden');
    overlay.classList.remove('hidden')
}

const closewindow = function () {
    openbtn.classList.add('hidden')
    overlay.classList.add('hidden')
}

openaccount.addEventListener('click', openwindow);
overlay.addEventListener('click', closewindow);
closebtn.addEventListener('click', closewindow);

document.addEventListener('keydown', function (e) {

    if (e.key == 'Escape' && !(openbtn.classList.contains('hidden'))) {
        closewindow();
    }
})

//learnmore scroll
learnmore.addEventListener('click', function () {
    sec1.scrollIntoView({ behavior: 'smooth' })
})

//blurring navbar menu
rightel.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(e.target);

    if (e.target.classList.contains('navl')) {
        const targethref = e.target.getAttribute('href');
        console.log(targethref);
        document.querySelector(targethref).scrollIntoView({ behavior: 'smooth' })
    }
})

const mouseoverout = function (e, o) {
    if (e.target.classList.contains('navl')) {

        const siblings = e.target.closest('.right1').querySelectorAll('.navl')
        const logo = e.target.closest('nav').querySelectorAll('.logo2')
        console.log(siblings, logo);

        siblings.forEach(element => {
            if (element != e.target) {
                element.style.opacity = o;
            }
        });
        logo.forEach(e => {
            e.style.opacity = o;
        })
    }
}

rightel.addEventListener('mouseover', function (e) {
    mouseoverout(e, 0.5)
})
rightel.addEventListener('mouseout', function (e) {
    mouseoverout(e, 1)
})


//scrolling from navbar
const navbar = document.querySelector('nav');
const header = document.querySelector('header');


const navHeight = navbar.getBoundingClientRect().height;

const callbackfunct = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navbar.classList.remove('sticky');
        } else {
            navbar.classList.add('sticky');
        }
    });
}


const observer = new IntersectionObserver(callbackfunct, {
    root: null,
    threshold: 0,
    rootMargin: `-350px`
});


observer.observe(header);

//operations tabbed component
const operationsbtn = document.querySelector('.js1')

operationsbtn.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn')) {
        const clicked = e.target.dataset.content;
        console.log(clicked);
        const allButtons = document.querySelectorAll('.btn');
        console.log(allButtons);
        const allContents = document.querySelectorAll('.itp1');
        console.log(allContents);

        allButtons.forEach(button => button.classList.remove('activebtn'));
        allContents.forEach(content => content.classList.add('hidden'));

        e.target.classList.add('activebtn');
        document.querySelector(`.${clicked}`).classList.remove('hidden');
    }
});

//section loading revealing
const sectionall = document.querySelectorAll('.sectionall');

const callbackfunct2 = function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('sectionhidden');
            observer.unobserve(entry.target);
        }
    });
};

const sectionobs = new IntersectionObserver(callbackfunct2, {
    root: null,
    threshold: 0
});



sectionall.forEach(section => {
    sectionobs.observe(section);
});


//lazy loading images
const imagesall = document.querySelectorAll('.i11');

const callbackfunct3 = function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.addEventListener('load', function () {
                entry.target.classList.remove('lazy');
                observer.unobserve(entry.target);
            });
            entry.target.src = entry.target.dataset.src;
        }
    });
};

const imageobs = new IntersectionObserver(callbackfunct3, {
    root: null,
    threshold: 0.15, // when 15% of image is visible
});

imagesall.forEach(e => {
    imageobs.observe(e);
});

//SLIDER WITH DOTS AND ARROWS
const slider = function () {
    const slides = document.querySelectorAll('.two2');
    const btnLeft = document.querySelector('.arr1');
    const btnRight = document.querySelector('.arrow3');
    const dotContainer = document.querySelector('.dots');

    let curSlide = 0;
    const maxSlide = slides.length;

    const activateDot = function (slide) {
        document
            .querySelectorAll('.dot1')
            .forEach(dot => dot.classList.remove('dotsactive'));

        document
            .querySelector(`.dot1[data-dotnumber="${slide}"]`)
            .classList.add('dotsactive');
    };

    const goToSlide = function (slide) {
        slides.forEach((s, i) => {
            s.style.transform = `translateX(${100 * (i - slide)}%)`;

        });

    };

    // Next slide
    const nextSlide = function () {
        if (curSlide === maxSlide - 1) {
            curSlide = 0;
        } else {
            curSlide++;
        }

        goToSlide(curSlide);
        activateDot(curSlide);
    };

    const prevSlide = function () {
        if (curSlide === 0) {
            curSlide = maxSlide - 1;
        } else {
            curSlide--;
        }
        goToSlide(curSlide);
        activateDot(curSlide);
    };


    const init = function () {
        goToSlide(0);
        activateDot(0);
    };
    init();

    // Event handlers for arrows
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') prevSlide();
        e.key === 'ArrowRight' && nextSlide();
    });

    //event delegation for moving with dots
    dotContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('dot1')) {
            const slide = e.target.dataset.dotnumber;
            goToSlide(slide);
            activateDot(slide);
        }

    });

};

slider();






const userenter = document.querySelector('.userinfo');
const pinenter = document.querySelector('.pininfo');
const btnenter = document.querySelector('.ns')
const userenter2 = document.querySelector('.user');
const pinenter2 = document.querySelector('.pin');
const btnenter2 = document.querySelector('.righta')
const cbdate = document.querySelector('.cd')
const tb = document.querySelector('.to');
const inn = document.querySelector('.inn');
const out = document.querySelector('.outt')
const int = document.querySelector('.intt')
const sort = document.querySelector('.sort')
const tname = document.querySelector('.rec')
const tamount = document.querySelector('.amount')
const tbtn = document.querySelector('.tmbtn')
const reql = document.querySelector('.reql')
const reqbtn = document.querySelector('.reqra')
const closeus = document.querySelector('.closeus')
const closepin = document.querySelector('.closepin')
const closebtn2 = document.querySelector('.closebtn2')
const main = document.querySelector('aside')
const balance = document.querySelector('.balance')
const lefty = document.querySelector('.lefty')
const time = document.querySelector('.timer')
const l = document.querySelector('.l')
const fullpage = document.querySelector('.full')
userenter.value = pinenter.value = '';
userenter2.value = pinenter2.value = '';
tname.value = tamount.value = '';
reql.value = '';
closeus.value = closepin.value = '';
let curacc, sorted = false;
const acc1 = {
    owner: 'Jane Doe',
    pin: 1111,
    mov: [100, -200, 300, -400, 500, 600],
    movdate: ['2024-02-08T05:31:34.441Z', '2024-02-07T05:31:34.441Z', '2024-02-06T05:31:34.441Z', '2024-02-05T05:31:34.441Z', '2024-02-04T05:31:34.441Z', '2024-02-03T05:31:34.441Z']
}

const acc2 = {
    owner: 'Kane Smith',
    pin: 2222,
    mov: [100, 900, 300, -400, 1000, -600],
    movdate: ['2024-02-08T05:31:34.441Z', '2024-02-07T05:31:34.441Z', '2024-02-06T05:31:34.441Z', '2024-02-05T05:31:34.441Z', '2024-02-04T05:31:34.441Z', '2024-02-03T05:31:34.441Z']
}
const acc3 = {
    owner: 'Virat Kohli',
    pin: 3333,
    mov: [100, -9200, 30000, -400, 500, -6000],
    movdate: ['2024-02-08T05:31:34.441Z', '2024-02-07T05:31:34.441Z', '2024-02-06T05:31:34.441Z', '2024-02-05T05:31:34.441Z', '2024-02-04T05:31:34.441Z', '2024-02-03T05:31:34.441Z']
}
const acc4 = {
    owner: 'Rohit Sharma',
    pin: 4444,
    mov: [10000, -2000, 3000, -40990, 500000, -600],
    movdate: ['2024-02-08T05:31:34.441Z', '2024-02-07T05:31:34.441Z', '2024-02-06T05:31:34.441Z', '2024-02-05T05:31:34.441Z', '2024-02-04T05:31:34.441Z', '2024-02-03T05:31:34.441Z']
}

const accounts = [acc1, acc2, acc3, acc4];

userenter.value = pinenter.value = '';
userenter2.value = pinenter2.value = '';
const accun = function (a) {
    a.forEach(a => {
        a.un = a.owner.toLowerCase().split(' ').map((a) => a[0]).join('')
    });
}

accun(accounts)

const accbalance = function (a) {
    tb.textContent = 0;
    a.balance = a.mov.reduce((ac, a) => ac + a, 0)
    console.log(a.balance);
    tb.textContent = `${a.balance}`;
}

const date1 = function (d1) {
    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    const dp = Math.round((new Date() - d1) / oneDay); // Find the difference in days
    if (dp === 0) return 'today';
    if (dp === 1) return 'yesterday';
    return new Intl.DateTimeFormat(navigator.language).format(d1);
}

const accmov = function (a, s = false) {
    lefty.innerHTML = '';
    const m = s ? a.mov.slice().sort((a, b) => a - b) : a.mov;
    console.log(m);

    m.forEach(function (movement, i) {
        const date = date1(new Date(a.movdate[i]));
        const transactionType = movement > 0 ? 'depo' : 'with';
        const transactionAmount = Math.abs(movement);

        const html = `
    <div class="${transactionType}">
        <p>${i + 1}</p>
        <p>${date}</p>
        <p>${transactionAmount}</p>
    </div>
`;
        lefty.insertAdjacentHTML('afterbegin', html);
    });
}



const accsum = function (a) {
    const income = a.mov.filter((a) => a > 0).reduce((ac, a) => ac + a, 0)
    inn.textContent = income;
    const outcome = a.mov.filter((a) => a < 0).reduce((ac, a) => ac + a, 0)
    out.textContent = Math.abs(outcome);
    const interest = a.mov.reduce((ac, a) => Math.round(((ac + a) * 1.2) / 100), 0)
    int.textContent = interest + "%";
}



const update = function (a) {
    accmov(a)
    accbalance(a)
    accsum(a)
}

btnenter.addEventListener('click', function (e) {
    e.preventDefault();
    curacc = accounts.find((a) => a.un === userenter.value)
    console.log(curacc);



    if (curacc.pin === +pinenter.value) {
        fullpage.style.display = 'none';
        l.textContent = `Welcome to your account , Mr. ${curacc.owner}`
        main.classList.remove('hidden')
        balance.classList.remove('hidden')
        document.querySelector('article').classList.remove('hidden')
        update(curacc)
        const a = new Date();
        cbdate.textContent = new Intl.DateTimeFormat(navigator.language
        ).format(a);

        userenter.value = pinenter.value = '';
        userenter2.value = pinenter2.value = '';
        tname.value = tamount.value = '';
        reql.value = '';
        closeus.value = closepin.value = '';
    }

})

btnenter2.addEventListener('click', function (e) {
    e.preventDefault();
    curacc = accounts.find((a) => a.un === userenter2.value)
    console.log(curacc);



    if (curacc.pin === +pinenter2.value) {
        fullpage.style.display = 'none';
        l.textContent = `Welcome to your account , Mr. ${curacc.owner}`
        main.classList.remove('hidden')
        balance.classList.remove('hidden')
        document.querySelector('article').classList.remove('hidden')
        update(curacc)
        const a = new Date();
        cbdate.textContent = new Intl.DateTimeFormat(navigator.language
        ).format(a);

        userenter.value = pinenter.value = '';
        userenter2.value = pinenter2.value = '';
        tname.value = tamount.value = '';
        reql.value = '';
        closeus.value = closepin.value = '';
    }

})

sort.addEventListener('click', function (e) {
    e.preventDefault()
    accmov(curacc, !sorted)
    sorted = !sorted;
})


tbtn.addEventListener('click', function (e) {
    e.preventDefault();
    const tnName = tname.value;
    const tam = +tamount.value;
    const recipientAccount = accounts.find(account => account.un === tnName);
    document.querySelector('.transfer1').textContent = 'Transfering in a few seconds...'
    if (recipientAccount && tam < curacc.balance && tnName !== curacc.un) {
        setTimeout(function (a) {
            document.querySelector('.transfer1').textContent = 'Transfer Money'
            curacc.mov.push(-tam);
            recipientAccount.mov.push(tam);
            curacc.movdate.push(new Date());
            recipientAccount.movdate.push(new Date());
            update(curacc);
            tname.value = '';
            tamount.value = '';
            userenter.value = pinenter.value = '';
            userenter2.value = pinenter2.value = '';
            tname.value = tamount.value = '';
            reql.value = '';
            closeus.value = closepin.value = '';
        }, 5000)
    }
});


reqbtn.addEventListener('click', function (e) {
    e.preventDefault()
    const rl = +reql.value;
    document.querySelector('.rll').textContent = 'Loan to be approved in a few seconds...'
    if (rl <= 800000) {
        setTimeout(function (a) {
            document.querySelector('.rll').textContent = 'Request Loan'
            curacc.mov.push(rl);
            curacc.movdate.push(new Date())
            update(curacc)
            rl.value = '';
            userenter.value = pinenter.value = '';
            userenter2.value = pinenter2.value = '';
            tname.value = tamount.value = '';
            reql.value = '';
            closeus.value = closepin.value = '';
        }, 5000)



    }



})

closebtn2.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.clpara').textContent = 'Closing account in a few seconds...';

    if (closeus.value === curacc.un && +closepin.value === curacc.pin) {
        setTimeout(function () {
            document.querySelector('.clpara').textContent = 'Close account';
            const accountIndex = accounts.findIndex((acc) => acc.un === closeus.value);
            accounts.splice(accountIndex, 1);
            console.log(accounts);
            main.classList.add('hidden')
            balance.classList.add('hidden')
            document.querySelector('footer').style.opacity = 0;
            l.textContent = 'Log In To Get Started';
        }, 5000);

    }
});



//got back to website
const logo = document.querySelector('.lo')

logo.addEventListener('click', function () {
    fullpage.style.display = 'inline';
    main.classList.add('hidden')
    balance.classList.add('hidden')
    document.querySelector('.firstly').classList.add('hidden')
    openbtn.classList.add('hidden')
    overlay.classList.add('hidden')
})
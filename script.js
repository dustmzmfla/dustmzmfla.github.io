// =========================
// CURSOR
// GPU 합성 레이어만 사용 (left/top 제거 → transform)
// body:has() 셀렉터 대신 JS로 직접 클래스 토글
// =========================
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
let rafId = null;

// GPU 레이어 미리 확보
cursor.style.willChange = 'transform';
ring.style.willChange = 'transform';

document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
}, { passive: true });

function animCursor() {
    cursor.style.transform = `translate(${mx}px, ${my}px)`;
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(animCursor);
}
animCursor();

// hover 상태를 body:has() 대신 JS 이벤트로 처리
// → CSS :has() 재계산 비용 제거
document.addEventListener('mouseover', e => {
    if (e.target.closest('.proj-card') || e.target.closest('a')) {
        cursor.classList.add('is-hover');
        ring.classList.add('is-hover');
    }
}, { passive: true });

document.addEventListener('mouseout', e => {
    if (e.target.closest('.proj-card') || e.target.closest('a')) {
        cursor.classList.remove('is-hover');
        ring.classList.remove('is-hover');
    }
}, { passive: true });


// =========================
// BLOB 배경
// =========================
const blobs = document.querySelectorAll('.blob');

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function randomColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsla(${hue}, 85%, 60%, 0.18)`;
}

function animateBlob(blob) {
    blob.style.transform = `translate(${random(-5, 5)}vw, ${random(-5, 5)}vh) scale(${random(0.8, 1.2)})`;

    function update() {
        const x = random(-12, 12);
        const y = random(-12, 12);
        const size = random(12, 25);
        const scale = random(0.8, 1.25);
        const duration = random(2500, 4500);

        blob.style.transition = `transform ${duration}ms linear, width ${duration}ms linear, height ${duration}ms linear, background-color ${duration}ms linear`;
        blob.style.transform = `translate(${x}vw, ${y}vh) scale(${scale})`;
        blob.style.width = `${size}vw`;
        blob.style.height = `${size}vw`;
        blob.style.backgroundColor = randomColor();

        requestAnimationFrame(() => { setTimeout(update, duration * 0.75); });
    }
    update();
}

blobs.forEach(animateBlob);


// =========================
// NAV SCROLL
// =========================
window.addEventListener('scroll', () => {
    document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });


// =========================
// REVEAL ON SCROLL
// =========================
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
        if (e.isIntersecting) {
            setTimeout(() => {
                e.target.classList.add('visible');
            }, 60 * (e.target.dataset.delay || 0));
            io.unobserve(e.target);
        }
    });
}, { threshold: 0.12 });
revealEls.forEach((el, i) => { el.dataset.delay = i % 4; io.observe(el); });


// =========================
// COUNT UP
// =========================
function countUp(el) {
    const target = parseFloat(el.dataset.count);
    if (!target || isNaN(target)) return;
    let current = 0;
    const duration = 1200;
    const step = target / (duration / 16);

    function update() {
        current += step;
        if (current >= target) {
            el.textContent = target;
            return;
        }
        el.textContent = Number.isInteger(target) ? Math.floor(current) : current.toFixed(1);
        requestAnimationFrame(update);
    }
    update();
}

window.numIo = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            countUp(e.target);
            window.numIo.unobserve(e.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => {
    if (el.dataset.count !== '') {
        window.numIo.observe(el);
    }
});


// =========================
// MODAL
// =========================
function openModal(i) {
    const p = window.projects[i];
    document.getElementById('modalCompany').textContent = `${p.brand} · ${p.year}`;
    document.getElementById('modalTitle').textContent = p.title;
    document.getElementById('modalDesc').textContent = p.details;
    document.getElementById('modalThumb').innerHTML = `
        <a href="${p.img}" target="_blank">
            <img src="${p.img}" alt="${p.title}" loading="lazy" decoding="async"/>
        </a>
    `;
    document.getElementById('modalTags').innerHTML =
        p.code.map(t => `<span class="modal-tag">${t}</span>`).join('');
    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal(e) {
    if (!e || e.target === document.getElementById('modalOverlay') || e.currentTarget.classList.contains('modal-close')) {
        document.getElementById('modalOverlay').classList.remove('open');
        document.body.style.overflow = '';
    }
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });


// =========================
// 로고 타이핑
// =========================
const logo = document.querySelector('#logo');
const text = 'HAENOO';
const typingSpeed = 120;
const deletingSpeed = 70;
const waitAfterTyping = 5000;
const waitAfterDeleting = 1000;
let index = 0;
let isDeleting = false;

function typeLoop() {
    if (!isDeleting) {
        logo.textContent = text.slice(0, index + 1);
        index++;
        if (index === text.length) {
            isDeleting = true;
            setTimeout(typeLoop, waitAfterTyping);
            return;
        }
        setTimeout(typeLoop, typingSpeed);
    } else {
        logo.textContent = text.slice(0, index - 1);
        index--;
        if (index === 0) {
            isDeleting = false;
            setTimeout(typeLoop, waitAfterDeleting);
            return;
        }
        setTimeout(typeLoop, deletingSpeed);
    }
}
typeLoop();


// =========================
// HERO — 연도 & 경력
// =========================
const today = new Date();
const year = today.getFullYear();
document.querySelectorAll('.this-year').forEach(el => { el.textContent = year; });

const startDate = new Date(2020, 6);
const totalMonths =
    (today.getFullYear() - startDate.getFullYear()) * 12 +
    (today.getMonth() - startDate.getMonth());
const experience = (totalMonths / 12).toFixed(1);
const phEl = document.querySelector('#ph');
if (phEl) {
    phEl.setAttribute('data-count', experience);
    window.numIo.observe(phEl);
}
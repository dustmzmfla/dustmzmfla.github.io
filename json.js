document.addEventListener('DOMContentLoaded', () => {

    // =========================
    // TICKER
    // =========================

    async function loadTicker() {
        const res = await fetch('./json/skills.json');
        const data = await res.json();
        const ticker = document.querySelector('#ticker');
        if (!ticker) return;

        let items = [];
        data.forEach(group => {
            const dotClass = group.category.toLowerCase() === 'code' ? '' : 'd3';
            group.tags.forEach(tag => {
                items.push({ name: tag, dotClass });
            });
        });

        items = items.sort(() => Math.random() - 0.5);

        const createItems = () => items.map(item => `
            <div class="ticker-item">
                <div class="ticker-dot ${item.dotClass}"></div>
                ${item.name}
            </div>
        `).join('');

        ticker.innerHTML = createItems() + createItems();
    }

    loadTicker();


    // =========================
    // SKILLS
    // =========================

    async function loadSkills() {
        const res = await fetch('./json/skills.json');
        const data = await res.json();
        const skillsGrid = document.querySelector('#skills-grid');
        if (!skillsGrid) return;

        skillsGrid.innerHTML = '';
        data.forEach((group, index) => {
            const skillGroup = document.createElement('div');
            skillGroup.className = 'skill-group reveal';
            skillGroup.dataset.delay = index % 4;
            skillGroup.innerHTML = `
                <div class="sg-category">${group.category}</div>
                <div class="sg-tags">
                    ${group.tags.map(tag => `<span class="sg-tag">${tag}</span>`).join('')}
                </div>
            `;
            skillsGrid.appendChild(skillGroup);

            if (typeof io !== 'undefined') {
                io.observe(skillGroup);
            }
        });
    }

    loadSkills();


    // =========================
    // PROJECTS
    // =========================

    window.projects = [];

    // 현재 활성 필터 & 필터된 목록 기준 렌더 인덱스
    let activeFilter = 'all';
    let filteredProjects = [];  // 현재 필터에 해당하는 프로젝트 배열
    let renderIndex = 0;        // filteredProjects 기준 렌더된 개수
    const perLoad = 9;

    const projectsGrid = document.querySelector('#proj-grid');
    const moreBtn = document.querySelector('.more-btn');

    async function loadProjects() {
        if (!projectsGrid) return;

        const res = await fetch('./json/projects.json');
        const data = await res.json();

        // 최신순
        window.projects = [...data].reverse();

        const totalProjects = window.projects.length;
        const totalCompanies = new Set(window.projects.map(p => p.brand)).size;

        // proj-count
        const projCount = document.querySelector('#proj-count');
        if (projCount) {
            projCount.setAttribute('data-count', totalProjects);
            if (window.numIo) window.numIo.observe(projCount);
        }

        // com-count
        const comCount = document.querySelector('#com-count');
        if (comCount) {
            comCount.setAttribute('data-count', totalCompanies);
            if (window.numIo) window.numIo.observe(comCount);
        }

        // 필터 버튼 생성
        buildFilters(totalProjects);

        // 초기 렌더 (all, 9개)
        setFilter('all');
    }

    loadProjects();


    // =========================
    // FILTER BUILD
    // =========================

    function buildFilters(totalProjects) {
        const filterRow = document.querySelector('.filter-row');
        if (!filterRow) return;

        const codeSet = new Set();
        window.projects.forEach(p => p.code.forEach(c => codeSet.add(c)));
        const codes = [...codeSet].sort();

        const yearSet = new Set();
        window.projects.forEach(p => yearSet.add(p.year));
        const years = [...yearSet].sort();

        const buttons = [
            { label: `All (${totalProjects})`, value: 'all' },
            ...codes.map(c => ({ label: c, value: c.toLowerCase() })),
            ...years.map(y => ({ label: y, value: y })),
        ];

        filterRow.innerHTML = buttons.map((btn, i) => `
            <button
                class="filter-btn${i === 0 ? ' active' : ''}"
                data-filter="${btn.value}"
            >${btn.label}</button>
        `).join('');

        filterRow.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                filterRow.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                setFilter(btn.dataset.filter);
            });
        });
    }


    // =========================
    // SET FILTER
    // 필터 변경 시 그리드 초기화 후 9개 새로 렌더
    // =========================

    function setFilter(filter) {
        activeFilter = filter;
        const f = filter.toLowerCase();

        // 필터에 맞는 프로젝트 추리기
        filteredProjects = window.projects.filter(p => {
            if (f === 'all') return true;
            const tags = `${p.code.join(',').toLowerCase()},${p.year}`;
            return tags.includes(f);
        });

        // 그리드 비우기
        projectsGrid.innerHTML = '';
        renderIndex = 0;

        // 첫 9개 렌더
        appendFiltered();
    }


    // =========================
    // APPEND FILTERED
    // filteredProjects 기준으로 다음 9개 DOM에 추가
    // =========================

    function appendFiltered() {
        const next = filteredProjects.slice(renderIndex, renderIndex + perLoad);

        next.forEach((project) => {
            // window.projects 전체 기준 원래 인덱스 (모달용)
            const realIndex = window.projects.indexOf(project);
            projectsGrid.appendChild(createCard(project, realIndex));
        });

        renderIndex += next.length;
        updateMoreButton();
    }


    // =========================
    // CARD 생성
    // =========================

    function createCard(project, realIndex) {
        const projectCard = document.createElement('div');
        projectCard.className = 'proj-card reveal';
        projectCard.dataset.delay = renderIndex % 6;
        projectCard.dataset.tags = `${project.code.join(',').toLowerCase()},${project.year}`;
        projectCard.setAttribute('onclick', `openModal(${realIndex})`);

        const devicesTags = project.devices.map(device => `
            <span class="proj-device">${device}</span>
        `).join('');

        const codeTags = project.code.map(code => `
            <span class="proj-tag">${code}</span>
        `).join('');

        projectCard.innerHTML = `
            <div class="proj-thumb">
                <div class="proj-num">${String(realIndex + 1).padStart(3, '0')}</div>
                <div class="proj-thumb-inner">
                    <img src="${project.img}" alt="${project.title}" loading="lazy" decoding="async"/>
                </div>
            </div>
            <div class="proj-body">
                <div class="proj-shorts">
                    <div class="proj-company">${project.brand} · ${project.year}</div>
                    <div class="proj-devices">${devicesTags}</div>
                </div>
                <div class="proj-text">
                    <div class="proj-name">${project.title}</div>
                    <div class="proj-desc">${project.shorts}</div>
                </div>
                <div class="proj-tags">${codeTags}</div>
            </div>
            <div class="proj-arrow">↗</div>
        `;

        if (typeof io !== 'undefined') {
            io.observe(projectCard);
        }

        return projectCard;
    }


    // =========================
    // MORE BUTTON
    // =========================

    function updateMoreButton() {
        if (!moreBtn) return;

        const remain = filteredProjects.length - renderIndex;

        if (remain <= 0) {
            moreBtn.style.display = 'none';
            return;
        }

        moreBtn.style.display = 'flex';
        moreBtn.innerHTML = `<span>↓</span> ${remain}개 프로젝트 더 보기`;
    }

    if (moreBtn) {
        moreBtn.addEventListener('click', () => {
            appendFiltered();
        });
    }


    // =========================
    // EXPERIENCE
    // =========================
    async function loadExp() {
        // 경력 데이터
        const expRes = await fetch('./json/experience.json');
        const expData = await expRes.json();

        // 프로젝트 데이터
        const projectRes = await fetch('./json/projects.json');
        const projectData = await projectRes.json();
        const exp = document.querySelector('#exp-list');

        if (!exp) return;
        
        const reverseData = [...expData].reverse();
        const projectCountMap = {};

        projectData.forEach(project => {
            const company = project.company;

            if (!company) return;
            if (!projectCountMap[company]) {
                projectCountMap[company] = 0;
            }
            projectCountMap[company]++;
        });

        exp.innerHTML = '';
        reverseData.forEach((item, index) => {
            const expItem = document.createElement('div');
            expItem.className = 'exp-item reveal';
            expItem.dataset.delay = index % 4;
            const currentText = index === 0 ? `<div class="exp-current">재직중</div>` : '';
            let companyKey = '';
            switch(item.company) {
                case 'ADDWARD':
                    companyKey = 'ADDWARD';
                    break;

                case 'ZIPPLE':
                    companyKey = 'SIDE1';
                    break;

                case 'GOLFZON CLOUD':
                    companyKey = 'GOLFZON';
                    break;

                case '프리랜서':
                    companyKey = 'FREE1';
                    break;

            }

            // 프로젝트 개수
            const count =
                projectCountMap[companyKey] || 0;

            expItem.innerHTML = `
                <div>

                    <div class="exp-period">
                        ${item.year}
                    </div>

                    ${currentText}

                </div>

                <div>

                    <div class="exp-company">
                        ${item.company}
                    </div>

                    <div class="exp-role">
                        ${item.role}
                    </div>

                    <div class="exp-desc">
                        ${item.desc}
                    </div>

                </div>

                <div class="exp-count">

                    <strong>${count}</strong>
                    Projects

                </div>
            `;

            exp.appendChild(expItem);

            // reveal 연결
            if (typeof io !== 'undefined') {

                io.observe(expItem);

            }

        });

    }

    loadExp();
});
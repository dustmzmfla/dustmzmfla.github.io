
// 팝업 내용 데이터

for( let popupData of projects ) {
    if( popupData.key == 'samsung' ) {
        for (let z=0; z<popupData.title.length; z++) {
            const template = `
            <div class="popup" id="${popupData.tab[z]}">
                <div class="popup-background"></div>
                    <div class="popup-wrapper">
                        <div class="popup-inner">
                            <header class="popup-header">
                                <h3>${popupData.title[z]}</h3>
                                <div class="popup-close"><img src="./img/lnr-cross.svg" alt="닫기"></div>
                            </header>
                            <div class="popup-body">
                                <div class="preview">
                                    <span>이미지 눌러서 보기</span>
                                    <ul>
                                        <li><a href="./img/projects/samsung/${popupData.pcImg[z]}" target="_blank"><img src="./img/projects/samsung/${popupData.pcImg[z]}" alt="미리보기 이미지" title="PC"></a></li>
                                        <li><a href="./img/projects/samsung/${popupData.moImg[z]}" target="_blank"><img src="./img/projects/samsung/${popupData.moImg[z]}" alt="미리보기 이미지" title="MOBILE"></a></li>
                                    </ul>
                                </div>
                                <p class="explain">${popupData.contents[z]}</p>
                                <a href="${popupData.pcURL[z]}" class="pc visit ${popupData.code[z]}" target="_blank">방문하기</a>
                                <a href="${popupData.pcURL[z]}" class="mo visit ${popupData.code[z]}" target="_blank">방문하기</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            $('.samsung-popup').append(template);
        }
    }else if( popupData.key == 'kyobo' ) {
        for (let z=0; z<popupData.title.length; z++) {
            const template = `
            <div class="popup" id="${popupData.tab[z]}">
                <div class="popup-background"></div>
                    <div class="popup-wrapper">
                        <div class="popup-inner">
                            <header class="popup-header">
                                <h3>${popupData.title[z]}</h3>
                                <div class="popup-close"><img src="./img/lnr-cross.svg" alt="닫기"></div>
                            </header>
                            <div class="popup-body">
                                <div class="preview">
                                    <span>이미지 눌러서 보기</span>
                                    <ul>
                                        <li><a href="./img/projects/kyobo/${popupData.pcImg[z]}" target="_blank"><img src="./img/projects/kyobo/${popupData.pcImg[z]}" alt="미리보기 이미지" title="PC"></a></li>
                                        <li><a href="./img/projects/kyobo/${popupData.moImg[z]}" target="_blank"><img src="./img/projects/kyobo/${popupData.moImg[z]}" alt="미리보기 이미지" title="MOBILE"></a></li>
                                    </ul>
                                </div>
                                <p class="explain">${popupData.contents[z]}</p>
                                <a href="${popupData.pcURL[z]}" class="pc visit ${popupData.code[z]}" target="_blank">방문하기</a>
                                <a href="${popupData.pcURL[z]}" class="mo visit ${popupData.code[z]}" target="_blank">방문하기</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            $('.kyobo-popup').append(template);
        }
    }else if( popupData.key == 'meritz' ) {
        for (let z=0; z<popupData.title.length; z++) {
            const template = `
            <div class="popup" id="${popupData.tab[z]}">
                <div class="popup-background"></div>
                    <div class="popup-wrapper">
                        <div class="popup-inner">
                            <header class="popup-header">
                                <h3>${popupData.title[z]}</h3>
                                <div class="popup-close"><img src="./img/lnr-cross.svg" alt="닫기"></div>
                            </header>
                            <div class="popup-body">
                                <div class="preview">
                                    <span>이미지 눌러서 보기</span>
                                    <ul>
                                        <li><a href="./img/projects/meritz/${popupData.pcImg[z]}" target="_blank"><img src="./img/projects/meritz/${popupData.pcImg[z]}" alt="미리보기 이미지" title="PC"></a></li>
                                        <li class="${popupData.code[z]}"><a href="./img/projects/meritz/${popupData.moImg[z]}" target="_blank"><img src="./img/projects/meritz/${popupData.moImg[z]}" alt="미리보기 이미지" title="MOBILE"></a></li>
                                    </ul>
                                </div>
                                <p class="explain">${popupData.contents[z]}</p>
                                <a href="${popupData.pcURL[z]}" class="pc visit ${popupData.code[z]}" target="_blank">방문하기</a>
                                <a href="${popupData.pcURL[z]}" class="mo visit ${popupData.code[z]}" target="_blank">방문하기</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            $('.meritz-popup').append(template);
        }
    }else if( popupData.key == 'AIG' ) {
        for (let z=0; z<popupData.title.length; z++) {
            const template = `
            <div class="popup" id="${popupData.tab[z]}">
                <div class="popup-background"></div>
                    <div class="popup-wrapper">
                        <div class="popup-inner">
                            <header class="popup-header">
                                <h3>${popupData.title[z]}</h3>
                                <div class="popup-close"><img src="./img/lnr-cross.svg" alt="닫기"></div>
                            </header>
                            <div class="popup-body">
                                <div class="preview">
                                    <span>이미지 눌러서 보기</span>
                                    <ul>
                                        <li><a href="./img/projects/aig/${popupData.pcImg[z]}" target="_blank"><img src="./img/projects/aig/${popupData.pcImg[z]}" alt="미리보기 이미지" title="PC"></a></li>
                                    </ul>
                                </div>
                                <p class="explain">${popupData.contents[z]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            $('.aig-popup').append(template);
        }
    }else if( popupData.key == 'hana' ) {
        for (let z=0; z<popupData.title.length; z++) {
            const template = `
            <div class="popup" id="${popupData.tab[z]}">
                <div class="popup-background"></div>
                    <div class="popup-wrapper">
                        <div class="popup-inner">
                            <header class="popup-header">
                                <h3>${popupData.title[z]}</h3>
                                <div class="popup-close"><img src="./img/lnr-cross.svg" alt="닫기"></div>
                            </header>
                            <div class="popup-body">
                                <div class="preview">
                                    <span>이미지 눌러서 보기</span>
                                    <ul>
                                        <li><a href="./img/projects/hana/${popupData.pcImg[z]}" target="_blank"><img src="./img/projects/hana/${popupData.pcImg[z]}" alt="미리보기 이미지" title="PC"></a></li>
                                    </ul>
                                </div>
                                <p class="explain">${popupData.contents[z]}</p>
                                <a href="${popupData.pcURL[z]}" class="pc visit" target="_blank">방문하기</a>
                                <a href="${popupData.pcURL[z]}" class="mo visit" target="_blank">방문하기</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            $('.hana-popup').append(template);
        }
    }else if( popupData.key == 'kolon' ) {
        for (let z=0; z<popupData.title.length; z++) {
            const template = `
            <div class="popup" id="${popupData.tab[z]}">
                <div class="popup-background"></div>
                    <div class="popup-wrapper">
                        <div class="popup-inner">
                            <header class="popup-header">
                                <h3>${popupData.title[z]}</h3>
                                <div class="popup-close"><img src="./img/lnr-cross.svg" alt="닫기"></div>
                            </header>
                            <div class="popup-body">
                                <div class="preview">
                                    <span>이미지 눌러서 보기</span>
                                    <ul>
                                        <li><a href="./img/projects/kolon/${popupData.pcImg[z]}" target="_blank"><img src="./img/projects/kolon/${popupData.pcImg[z]}" alt="미리보기 이미지" title="PC"></a></li>
                                    </ul>
                                </div>
                                <p class="explain">${popupData.contents[z]}</p>
                                <a href="${popupData.pcURL[z]}" class="pc visit" target="_blank">방문하기</a>
                                <a href="${popupData.pcURL[z]}" class="mo visit" target="_blank">방문하기</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            $('.kolon-popup').append(template);
        }
    }else if( popupData.key == 'thek' ) {
        for (let z=0; z<popupData.title.length; z++) {
            const template = `
            <div class="popup" id="${popupData.tab[z]}">
                <div class="popup-background"></div>
                    <div class="popup-wrapper">
                        <div class="popup-inner">
                            <header class="popup-header">
                                <h3>${popupData.title[z]}</h3>
                                <div class="popup-close"><img src="./img/lnr-cross.svg" alt="닫기"></div>
                            </header>
                            <div class="popup-body">
                                <div class="preview">
                                    <span>이미지 눌러서 보기</span>
                                    <ul>
                                        <li><a href="./img/projects/thek/${popupData.pcImg[z]}" target="_blank"><img src="./img/projects/thek/${popupData.pcImg[z]}" alt="미리보기 이미지" title="PC"></a></li>
                                    </ul>
                                </div>
                                <p class="explain">${popupData.contents[z]}</p>
                                <a href="${popupData.moURL[z]}" class="pc visit" target="_blank">방문하기</a>
                                <a href="${popupData.moURL[z]}" class="mo visit" target="_blank">방문하기</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            $('.thek-popup').append(template);
        }
    }else if( popupData.key == 'aia' ) {
        for (let z=0; z<popupData.title.length; z++) {
            const template = `
            <div class="popup" id="${popupData.tab[z]}">
                <div class="popup-background"></div>
                    <div class="popup-wrapper">
                        <div class="popup-inner">
                            <header class="popup-header">
                                <h3>${popupData.title[z]}</h3>
                                <div class="popup-close"><img src="./img/lnr-cross.svg" alt="닫기"></div>
                            </header>
                            <div class="popup-body">
                                <div class="preview">
                                    <span>이미지 눌러서 보기</span>
                                    <ul>
                                        <li><a href="./img/projects/aia/${popupData.pcImg[z]}" target="_blank"><img src="./img/projects/aia/${popupData.pcImg[z]}" alt="미리보기 이미지" title="PC"></a></li>
                                    </ul>
                                </div>
                                <p class="explain">${popupData.contents[z]}</p>
                                <a href="${popupData.moURL[z]}" class="pc visit" target="_blank">방문하기</a>
                                <a href="${popupData.moURL[z]}" class="mo visit" target="_blank">방문하기</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            $('.aia-popup').append(template);
        }
    }else if( popupData.key == 'lg' ) {
        for (let z=0; z<popupData.title.length; z++) {
            const template = `
            <div class="popup" id="${popupData.tab[z]}">
                <div class="popup-background"></div>
                    <div class="popup-wrapper">
                        <div class="popup-inner">
                            <header class="popup-header">
                                <h3>${popupData.title[z]}</h3>
                                <div class="popup-close"><img src="./img/lnr-cross.svg" alt="닫기"></div>
                            </header>
                            <div class="popup-body">
                                <div class="preview">
                                    <span>이미지 눌러서 보기</span>
                                    <ul>
                                        <li><a href="./img/projects/lg/${popupData.pcImg[z]}" target="_blank"><img src="./img/projects/lg/${popupData.pcImg[z]}" alt="미리보기 이미지" title="PC"></a></li>
                                    </ul>
                                </div>
                                <p class="explain">${popupData.contents[z]}</p>
                                <a href="${popupData.pcURL[z]}" class="pc visit" target="_blank">방문하기</a>
                                <a href="${popupData.pcURL[z]}" class="mo visit" target="_blank">방문하기</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            $('.lg-popup').append(template);
        }
    }else if( popupData.key == 'teddyx' ) {
        for (let z=0; z<popupData.title.length; z++) {
            const template = `
            <div class="popup" id="${popupData.tab[z]}">
                <div class="popup-background"></div>
                    <div class="popup-wrapper">
                        <div class="popup-inner">
                            <header class="popup-header">
                                <h3>${popupData.title[z]}</h3>
                                <div class="popup-close"><img src="./img/lnr-cross.svg" alt="닫기"></div>
                            </header>
                            <div class="popup-body">
                                <div class="preview">
                                    <span>이미지 눌러서 보기</span>
                                    <ul>
                                        <li><a href="./img/projects/teddyx/${popupData.pcImg[z]}" target="_blank"><img src="./img/projects/teddyx/${popupData.pcImg[z]}" alt="미리보기 이미지" title="PC"></a></li>
                                    </ul>
                                </div>
                                <p class="explain">${popupData.contents[z]}</p>
                                <a href="${popupData.pcURL[z]}" class="pc visit" target="_blank">방문하기</a>
                                <a href="${popupData.pcURL[z]}" class="mo visit" target="_blank">방문하기</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            $('.teddyx-popup').append(template);
        }
    }else if( popupData.key == 'addward' ) {
        for (let z=0; z<popupData.title.length; z++) {
            const template = `
            <div class="popup" id="${popupData.tab[z]}">
                <div class="popup-background"></div>
                    <div class="popup-wrapper">
                        <div class="popup-inner">
                            <header class="popup-header">
                                <h3>${popupData.title[z]}</h3>
                                <div class="popup-close"><img src="./img/lnr-cross.svg" alt="닫기"></div>
                            </header>
                            <div class="popup-body">
                                <div class="preview">
                                    <span>이미지 눌러서 보기</span>
                                    <ul>
                                        <li><a href="./img/projects/addward/${popupData.pcImg[z]}" target="_blank"><img src="./img/projects/addward/${popupData.pcImg[z]}" alt="미리보기 이미지" title="PC"></a></li>
                                    </ul>
                                </div>
                                <p class="explain">${popupData.contents[z]}</p>
                                <a href="${popupData.pcURL[z]}" class="pc visit" target="_blank">방문하기</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            $('.addward-popup').append(template);
        }
    }else if( popupData.key == 'mstm' ) {
        for (let z=0; z<popupData.title.length; z++) {
            const template = `
            <div class="popup" id="${popupData.tab[z]}">
                <div class="popup-background"></div>
                    <div class="popup-wrapper">
                        <div class="popup-inner">
                            <header class="popup-header">
                                <h3>${popupData.title[z]}</h3>
                                <div class="popup-close"><img src="./img/lnr-cross.svg" alt="닫기"></div>
                            </header>
                            <div class="popup-body">
                                <div class="preview">
                                    <span>이미지 눌러서 보기</span>
                                    <ul>
                                        <li><a href="./img/projects/mstm/${popupData.pcImg[z]}" target="_blank"><img src="./img/projects/mstm/${popupData.pcImg[z]}" alt="미리보기 이미지" title="PC"></a></li>
                                    </ul>
                                </div>
                                <p class="explain">${popupData.contents[z]}</p>
                                <a href="${popupData.pcURL[z]}" class="pc visit" target="_blank">방문하기</a>
                                <a href="${popupData.pcURL[z]}" class="mo visit" target="_blank">방문하기</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            $('.mstm-popup').append(template);
        }
    }else if( popupData.key == 'taxin' ) {
        for (let z=0; z<popupData.title.length; z++) {
            const template = `
            <div class="popup" id="${popupData.tab[z]}">
                <div class="popup-background"></div>
                    <div class="popup-wrapper">
                        <div class="popup-inner">
                            <header class="popup-header">
                                <h3>${popupData.title[z]}</h3>
                                <div class="popup-close"><img src="./img/lnr-cross.svg" alt="닫기"></div>
                            </header>
                            <div class="popup-body">
                                <div class="preview">
                                    <span>이미지 눌러서 보기</span>
                                    <ul>
                                        <li><a href="./img/projects/taxin/${popupData.pcImg[z]}" target="_blank"><img src="./img/projects/taxin/${popupData.pcImg[z]}" alt="미리보기 이미지" title="PC"></a></li>
                                    </ul>
                                </div>
                                <p class="explain">${popupData.contents[z]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            $('.taxin-popup').append(template);
        }
    }else if( popupData.key == 'todes' ) {
        for (let z=0; z<popupData.title.length; z++) {
            const template = `
            <div class="popup" id="${popupData.tab[z]}">
                <div class="popup-background"></div>
                    <div class="popup-wrapper">
                        <div class="popup-inner">
                            <header class="popup-header">
                                <h3>${popupData.title[z]}</h3>
                                <div class="popup-close"><img src="./img/lnr-cross.svg" alt="닫기"></div>
                            </header>
                            <div class="popup-body">
                                <div class="preview">
                                    <span>이미지 눌러서 보기</span>
                                    <ul>
                                        <li><a href="./img/projects/todes/${popupData.pcImg[z]}" target="_blank"><img src="./img/projects/todes/${popupData.pcImg[z]}" alt="미리보기 이미지" title="PC"></a></li>
                                    </ul>
                                </div>
                                <p class="explain">${popupData.contents[z]}</p>
                                <a href="${popupData.pcURL[z]}" class="pc visit" target="_blank">방문하기</a>
                                <a href="${popupData.pcURL[z]}" class="mo visit" target="_blank">방문하기</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            $('.todes-popup').append(template);
        }
    }else if( popupData.key == 'utomo' ) {
        for (let z=0; z<popupData.title.length; z++) {
            const template = `
            <div class="popup" id="${popupData.tab[z]}">
                <div class="popup-background"></div>
                    <div class="popup-wrapper">
                        <div class="popup-inner">
                            <header class="popup-header">
                                <h3>${popupData.title[z]}</h3>
                                <div class="popup-close"><img src="./img/lnr-cross.svg" alt="닫기"></div>
                            </header>
                            <div class="popup-body">
                                <div class="preview">
                                    <span>이미지 눌러서 보기</span>
                                    <ul>
                                        <li><a href="./img/projects/utomo/${popupData.pcImg[z]}" target="_blank"><img src="./img/projects/utomo/${popupData.pcImg[z]}" alt="미리보기 이미지" title="PC"></a></li>
                                    </ul>
                                </div>
                                <p class="explain">${popupData.contents[z]}</p>
                                <a href="${popupData.pcURL[z]}" class="pc visit" target="_blank">방문하기</a>
                                <a href="${popupData.pcURL[z]}" class="mo visit" target="_blank">방문하기</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            $('.utomo-popup').append(template);
        }
    }
}
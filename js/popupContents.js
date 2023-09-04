
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
                                <h3>삼성화재 ${popupData.title[z]}</h3>
                                <div class="popup-close"><img src="./img/lnr-cross.svg" alt="닫기"></div>
                            </header>
                            <div class="popup-body">
                                <div class="preview">
                                    <span>이미지 펼쳐보기</span>
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
    }
}
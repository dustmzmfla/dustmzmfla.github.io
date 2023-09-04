// 프로젝트 데이터 집어넣기

for (let data of projects) {

    if( data.key == 'samsung' ) {
        for (let j=0; j<data.title.length; j++) {
            const template = `
                <div class="grid-children">
                    <div class="grid-img"><img src="./img/projects/${data.key}/${data.pcImg[j]}" alt="프로젝트 이미지"></div>
                    <div class="grid-contents">
                        <h3 class="title ${data.responsive}">${data.title[j]}</h3>
                        <div class="detail">
                            <dl>
                                <dt>작업기간 :</dt>
                                <dt>${data.day}</dt>
                            </dl>
                            <dl>
                                <dt>사용언어 :</dt>
                                <dt>${data.lang}</dt>
                            </dl>
                        </div>
                        <div class="bar">
                            <p>기여도</p>
                            <div class="graph">${data.percentage}%</div>
                        </div>
                        <div class="grid-btns">
                            <button type="button" class="img-sample ${data.key[j]}-driver">펼쳐보기<div class="color"></div></button>
                            <a class="pc" href="${data.pcURL[j]}" target="_blank"><div class="color"></div>바로가기</a>
                            <a class="mo" href="${data.moURL[j]}" target="_blank"><div class="color"></div>바로가기</a>
                        </div>
                    </div>
                </div>
            `;
            $('.samsung .grid').append(template);
        }
    }else if ( data.key == 'kyobo' ) {
        for (let j=0; j<data.title.length; j++) {
            const template = `
                <div class="grid-children">
                    <div class="grid-img"><img src="./img/projects/${data.key}/${data.pcImg[j]}" alt="프로젝트 이미지"></div>
                    <div class="grid-contents">
                        <h3 class="title ${data.responsive[j]}">${data.title[j]}</h3>
                        <div class="detail">
                            <dl>
                                <dt>작업기간 :</dt>
                                <dt>${data.day}</dt>
                            </dl>
                            <dl>
                                <dt>사용언어 :</dt>
                                <dt>${data.lang}</dt>
                            </dl>
                        </div>
                        <div class="bar">
                            <p>기여도</p>
                            <div class="graph">${data.percentage}%</div>
                        </div>
                        <div class="grid-btns">
                            <button type="button" class="img-sample ${data.key[j]}-driver">펼쳐보기<div class="color"></div></button>
                            <a class="pc" href="${data.pcURL[j]}" target="_blank"><div class="color"></div>바로가기</a>
                            <a class="mo" href="${data.moURL[j]}" target="_blank"><div class="color"></div>바로가기</a>
                        </div>
                    </div>
                </div>
            `;
            $('.kyobo .grid').append(template);
        }
    }else if ( data.key == 'meritz' ) {
        for (let j=0; j<data.title.length; j++) {
            const template = `
                <div class="grid-children">
                    <div class="grid-img"><img src="./img/projects/${data.key}/${data.pcImg[j]}" alt="프로젝트 이미지"></div>
                    <div class="grid-contents">
                        <h3 class="title ${data.responsive}">${data.title[j]}</h3>
                        <div class="detail">
                            <dl>
                                <dt>작업기간 :</dt>
                                <dt>${data.day[j]}</dt>
                            </dl>
                            <dl>
                                <dt>사용언어 :</dt>
                                <dt>${data.lang}</dt>
                            </dl>
                        </div>
                        <div class="bar">
                            <p>기여도</p>
                            <div class="graph">${data.percentage}%</div>
                        </div>
                        <div class="grid-btns">
                            <button type="button" class="img-sample ${data.key[j]}-driver">펼쳐보기<div class="color"></div></button>
                            <a href="${data.pcURL[j]}" target="_blank"><div class="color"></div>바로가기</a>
                        </div>
                    </div>
                </div>
            `;
            $('.meritz .grid').append(template);
        }
    }else if ( data.key == 'AIG' ) {
        for (let j=0; j<data.title.length; j++) {
            const template = `
                <div class="grid-children">
                    <div class="grid-img"><img src="./img/projects/${data.key}/${data.pcImg[j]}" alt="프로젝트 이미지"></div>
                    <div class="grid-contents">
                        <h3 class="title ${data.responsive}">${data.title[j]}</h3>
                        <div class="detail">
                            <dl>
                                <dt>작업기간 :</dt>
                                <dt>${data.day}</dt>
                            </dl>
                            <dl>
                                <dt>사용언어 :</dt>
                                <dt>${data.lang}</dt>
                            </dl>
                        </div>
                        <div class="bar">
                            <p>기여도</p>
                            <div class="graph my${data.percentage}">${data.percentage}%</div>
                        </div>
                        <div class="grid-btns">
                            <button type="button" class="img-sample ${data.keydriver}">펼쳐보기<div class="color"></div></button>
                        </div>
                    </div>
                </div>
            `;
            $('.aig .grid').append(template);
        }
    }else if ( data.key == 'hana' ) {
        for (let j=0; j<data.title.length; j++) {
            const template = `
                <div class="grid-children">
                    <div class="grid-img"><img src="./img/projects/${data.key}/${data.pcImg[j]}" alt="프로젝트 이미지"></div>
                    <div class="grid-contents">
                        <h3 class="title ${data.responsive}">${data.title[j]}</h3>
                        <div class="detail">
                            <dl>
                                <dt>작업기간 :</dt>
                                <dt>${data.day[j]}</dt>
                            </dl>
                            <dl>
                                <dt>사용언어 :</dt>
                                <dt>${data.lang}</dt>
                            </dl>
                        </div>
                        <div class="bar">
                            <p>기여도</p>
                            <div class="graph">${data.percentage}%</div>
                        </div>
                        <div class="grid-btns">
                            <button type="button" class="img-sample ${data.key[j]}-driver">펼쳐보기<div class="color"></div></button>
                            <a href="${data.pcURL[j]}" target="_blank"><div class="color"></div>바로가기</a>
                        </div>
                    </div>
                </div>
            `;
            $('.hana .grid').append(template);
        }
    }else if ( data.key == 'kolon' ) {
        for (let j=0; j<data.title.length; j++) {
            const template = `
                <div class="grid-children">
                    <div class="grid-img"><img src="./img/projects/${data.key}/${data.pcImg[j]}" alt="프로젝트 이미지"></div>
                    <div class="grid-contents">
                        <h3 class="title ${data.responsive}">${data.title[j]}</h3>
                        <div class="detail">
                            <dl>
                                <dt>작업기간 :</dt>
                                <dt>${data.day[j]}</dt>
                            </dl>
                            <dl>
                                <dt>사용언어 :</dt>
                                <dt>${data.lang}</dt>
                            </dl>
                        </div>
                        <div class="bar">
                            <p>기여도</p>
                            <div class="graph my${data.percentage[j]}">${data.percentage[j]}%</div>
                        </div>
                        <div class="grid-btns">
                            <button type="button" class="img-sample ${data.key[j]}-driver">펼쳐보기<div class="color"></div></button>
                            <a href="${data.pcURL}" target="_blank"><div class="color"></div>바로가기</a>
                        </div>
                    </div>
                </div>
            `;
            $('.kolon .grid').append(template);
        }
    }else if ( data.key == 'thek' ) {
        for (let j=0; j<data.title.length; j++) {
            const template = `
                <div class="grid-children">
                    <div class="grid-img"><img src="./img/projects/${data.key}/${data.pcImg[j]}" alt="프로젝트 이미지"></div>
                    <div class="grid-contents">
                        <h3 class="title ${data.responsive}">${data.title[j]}</h3>
                        <div class="detail">
                            <dl>
                                <dt>작업기간 :</dt>
                                <dt>${data.day[j]}</dt>
                            </dl>
                            <dl>
                                <dt>사용언어 :</dt>
                                <dt>${data.lang}</dt>
                            </dl>
                        </div>
                        <div class="bar">
                            <p>기여도</p>
                            <div class="graph">${data.percentage}%</div>
                        </div>
                        <div class="grid-btns">
                            <button type="button" class="img-sample ${data.key[j]}-driver">펼쳐보기<div class="color"></div></button>
                            <a href="${data.pcURL}" target="_blank"><div class="color"></div>바로가기</a>
                        </div>
                    </div>
                </div>
            `;
            $('.thek .grid').append(template);
        }
    }else if ( data.key == 'aia' ) {
        for (let j=0; j<data.title.length; j++) {
            const template = `
                <div class="grid-children">
                    <div class="grid-img"><img src="./img/projects/${data.key}/${data.pcImg[j]}" alt="프로젝트 이미지"></div>
                    <div class="grid-contents">
                        <h3 class="title ${data.responsive}">${data.title[j]}</h3>
                        <div class="detail">
                            <dl>
                                <dt>작업기간 :</dt>
                                <dt>${data.day}</dt>
                            </dl>
                            <dl>
                                <dt>사용언어 :</dt>
                                <dt>${data.lang}</dt>
                            </dl>
                        </div>
                        <div class="bar">
                            <p>기여도</p>
                            <div class="graph">${data.percentage}%</div>
                        </div>
                        <div class="grid-btns">
                            <button type="button" class="img-sample ${data.key[j]}-driver">펼쳐보기<div class="color"></div></button>
                            <a href="${data.pcURL}" target="_blank"><div class="color"></div>바로가기</a>
                        </div>
                    </div>
                </div>
            `;
            $('.aia .grid').append(template);
        }
    }else if ( data.key == 'lg' ) {
        for (let j=0; j<data.title.length; j++) {
            const template = `
                <div class="grid-children">
                    <div class="grid-img"><img src="./img/projects/${data.key}/${data.pcImg[j]}" alt="프로젝트 이미지"></div>
                    <div class="grid-contents">
                        <h3 class="title ${data.responsive}">${data.title[j]}</h3>
                        <div class="detail">
                            <dl>
                                <dt>작업기간 :</dt>
                                <dt>${data.day}</dt>
                            </dl>
                            <dl>
                                <dt>사용언어 :</dt>
                                <dt>${data.lang}</dt>
                            </dl>
                        </div>
                        <div class="bar">
                            <p>기여도</p>
                            <div class="graph">${data.percentage}%</div>
                        </div>
                        <div class="grid-btns">
                            <button type="button" class="img-sample ${data.key[j]}-driver">펼쳐보기<div class="color"></div></button>
                            <a href="${data.pcURL}" target="_blank"><div class="color"></div>바로가기</a>
                        </div>
                    </div>
                </div>
            `;
            $('.lg .grid').append(template);
        }
    }else if ( data.key == 'teddyx' ) {
        for (let j=0; j<data.title.length; j++) {
            const template = `
                <div class="grid-children">
                    <div class="grid-img"><img src="./img/projects/${data.key}/${data.pcImg[j]}" alt="프로젝트 이미지"></div>
                    <div class="grid-contents">
                        <h3 class="title ${data.responsive}">${data.title[j]}</h3>
                        <div class="detail">
                            <dl>
                                <dt>작업기간 :</dt>
                                <dt>${data.day}</dt>
                            </dl>
                            <dl>
                                <dt>사용언어 :</dt>
                                <dt>${data.lang}</dt>
                            </dl>
                        </div>
                        <div class="bar">
                            <p>기여도</p>
                            <div class="graph">${data.percentage}%</div>
                        </div>
                        <div class="grid-btns">
                            <button type="button" class="img-sample ${data.key[j]}-driver">펼쳐보기<div class="color"></div></button>
                            <a href="${data.pcURL}" target="_blank"><div class="color"></div>바로가기</a>
                        </div>
                    </div>
                </div>
            `;
            $('.teddyx .grid').append(template);
        }
    }else if ( data.key == 'addward' ) {
        for (let j=0; j<data.title.length; j++) {
            const template = `
                <div class="grid-children">
                    <div class="grid-img"><img src="./img/projects/${data.key}/${data.pcImg[j]}" alt="프로젝트 이미지"></div>
                    <div class="grid-contents">
                        <h3 class="title ${data.responsive}">${data.title[j]}</h3>
                        <div class="detail">
                            <dl>
                                <dt>작업기간 :</dt>
                                <dt>${data.day}</dt>
                            </dl>
                            <dl>
                                <dt>사용언어 :</dt>
                                <dt>${data.lang}</dt>
                            </dl>
                        </div>
                        <div class="bar">
                            <p>기여도</p>
                            <div class="graph">${data.percentage}%</div>
                        </div>
                        <div class="grid-btns">
                            <button type="button" class="img-sample ${data.key[j]}-driver">펼쳐보기<div class="color"></div></button>
                            <a class="pc" href="${data.pcURL[j]}" target="_blank"><div class="color"></div>바로가기</a>
                            <a href="${data.pcURL}" target="_blank"><div class="color"></div>바로가기</a>
                        </div>
                    </div>
                </div>
            `;
            $('.addward .grid').append(template);
        }
    }else if ( data.key == 'mstm' ) {
        for (let j=0; j<data.title.length; j++) {
            const template = `
                <div class="grid-children">
                    <div class="grid-img"><img src="./img/projects/${data.key}/${data.pcImg[j]}" alt="프로젝트 이미지"></div>
                    <div class="grid-contents">
                        <h3 class="title ${data.responsive}">${data.title[j]}</h3>
                        <div class="detail">
                            <dl>
                                <dt>작업기간 :</dt>
                                <dt>${data.day}</dt>
                            </dl>
                            <dl>
                                <dt>사용언어 :</dt>
                                <dt>${data.lang}</dt>
                            </dl>
                        </div>
                        <div class="bar">
                            <p>기여도</p>
                            <div class="graph">${data.percentage}%</div>
                        </div>
                        <div class="grid-btns">
                            <button type="button" class="img-sample ${data.key[j]}-driver">펼쳐보기<div class="color"></div></button>
                            <a href="${data.pcURL}" target="_blank"><div class="color"></div>바로가기</a>
                        </div>
                    </div>
                </div>
            `;
            $('.mstm .grid').append(template);
        }
    }else if ( data.key == 'taxin' ) {
        for (let j=0; j<data.title.length; j++) {
            const template = `
                <div class="grid-children">
                    <div class="grid-img"><img src="./img/projects/${data.key}/${data.pcImg[j]}" alt="프로젝트 이미지"></div>
                    <div class="grid-contents">
                        <h3 class="title ${data.responsive}">${data.title[j]}</h3>
                        <div class="detail">
                            <dl>
                                <dt>작업기간 :</dt>
                                <dt>${data.day}</dt>
                            </dl>
                            <dl>
                                <dt>사용언어 :</dt>
                                <dt>${data.lang}</dt>
                            </dl>
                        </div>
                        <div class="bar">
                            <p>기여도</p>
                            <div class="graph">${data.percentage}%</div>
                        </div>
                        <div class="grid-btns">
                            <button type="button" class="img-sample ${data.key[j]}-driver">펼쳐보기<div class="color"></div></button>
                        </div>
                    </div>
                </div>
            `;
            $('.taxin .grid').append(template);
        }
    }else if ( data.key == 'todes' ) {
        for (let j=0; j<data.title.length; j++) {
            const template = `
                <div class="grid-children">
                    <div class="grid-img"><img src="./img/projects/${data.key}/${data.pcImg[j]}" alt="프로젝트 이미지"></div>
                    <div class="grid-contents">
                        <h3 class="title ${data.responsive}">${data.title[j]}</h3>
                        <div class="detail">
                            <dl>
                                <dt>작업기간 :</dt>
                                <dt>${data.day}</dt>
                            </dl>
                            <dl>
                                <dt>사용언어 :</dt>
                                <dt>${data.lang}</dt>
                            </dl>
                        </div>
                        <div class="bar">
                            <p>기여도</p>
                            <div class="graph">${data.percentage}%</div>
                        </div>
                        <div class="grid-btns">
                            <button type="button" class="img-sample ${data.key[j]}-driver">펼쳐보기<div class="color"></div></button>
                            <a href="${data.pcURL}" target="_blank"><div class="color"></div>바로가기</a>
                        </div>
                    </div>
                </div>
            `;
            $('.todes .grid').append(template);
        }
    }else if ( data.key == 'utomo' ) {
        for (let j=0; j<data.title.length; j++) {
            const template = `
                <div class="grid-children">
                    <div class="grid-img"><img src="./img/projects/${data.key}/${data.pcImg[j]}" alt="프로젝트 이미지"></div>
                    <div class="grid-contents">
                        <h3 class="title ${data.responsive}">${data.title[j]}</h3>
                        <div class="detail">
                            <dl>
                                <dt>작업기간 :</dt>
                                <dt>${data.day}</dt>
                            </dl>
                            <dl>
                                <dt>사용언어 :</dt>
                                <dt>${data.lang}</dt>
                            </dl>
                        </div>
                        <div class="bar">
                            <p>기여도</p>
                            <div class="graph">${data.percentage}%</div>
                        </div>
                        <div class="grid-btns">
                            <button type="button" class="img-sample ${data.key[j]}-driver">펼쳐보기<div class="color"></div></button>
                            <a href="${data.pcURL}" target="_blank"><div class="color"></div>바로가기</a>
                        </div>
                    </div>
                </div>
            `;
            $('.utomo .grid').append(template);
        }
    }


}
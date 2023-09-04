// 프로젝트 데이터 집어넣기
projects.map(function(data,i){


    // 삼성 템플릿
    const samTem = `
        <div class="grid-children">
            <div class="grid-img"><img src="./img/projects/samsung/${projects[0].pcImg[i]}" alt="프로젝트 이미지"></div>
            <div class="grid-contents">
                <h3 class="title">${projects[0].title[i]}</h3>
                <div class="detail">
                    <dl>
                        <dt>작업기간 :</dt>
                        <dt>${projects[0].day}</dt>
                    </dl>
                    <dl>
                        <dt>사용언어 :</dt>
                        <dt>${projects[0].lang}</dt>
                    </dl>
                </div>
                <div class="bar">
                    <p>기여도</p>
                    <div class="graph">${projects[0].percentage}%</div>
                </div>
                <div class="grid-btns">
                    <button type="button" class="img-sample ${projects[0].key}-driver">펼쳐보기<div class="color"></div></button>
                    <a class="pc" href="${projects[0].pcURL[i]}" target="_blank"><div class="color"></div>바로가기</a>
                    <a class="mo" href="${projects[0].moURL[i]}" target="_blank"><div class="color"></div>바로가기</a>
                </div>
            </div>
        </div>
    `;

    // 교보 템플릿
    const kyoTem = `
        <div class="grid-children">
            <div class="grid-img"><img src="./img/projects/kyobo/${projects[1].pcImg[i]}" alt="프로젝트 이미지"></div>
            <div class="grid-contents">
                <h3 class="title">${projects[1].title[i]}</h3>
                <div class="detail">
                    <dl>
                        <dt>작업기간 :</dt>
                        <dt>${projects[1].day}</dt>
                    </dl>
                    <dl>
                        <dt>사용언어 :</dt>
                        <dt>${projects[1].lang}</dt>
                    </dl>
                </div>
                <div class="bar">
                    <p>기여도</p>
                    <div class="graph">${projects[1].percentage}%</div>
                </div>
                <div class="grid-btns">
                    <button type="button" class="img-sample ${projects[1].key}-driver">펼쳐보기<div class="color"></div></button>
                    <a class="pc" href="${projects[1].pcURL[i]}" target="_blank"><div class="color"></div>바로가기</a>
                    <a class="mo" href="${projects[1].moURL[i]}" target="_blank"><div class="color"></div>바로가기</a>
                </div>
            </div>
        </div>
    `;

    // 메리츠 템플릿
    const meTem = `
        <div class="grid-children">
            <div class="grid-img"><img src="./img/projects/meritz/${projects[2].pcImg[i]}" alt="프로젝트 이미지"></div>
            <div class="grid-contents">
                <h3 class="title">${projects[2].title[i]}</h3>
                <div class="detail">
                    <dl>
                        <dt>작업기간 :</dt>
                        <dt>${projects[2].day[i]}</dt>
                    </dl>
                    <dl>
                        <dt>사용언어 :</dt>
                        <dt>${projects[2].lang}</dt>
                    </dl>
                </div>
                <div class="bar">
                    <p>기여도</p>
                    <div class="graph">${projects[2].percentage}%</div>
                </div>
                <div class="grid-btns">
                    <button type="button" class="img-sample ${projects[2].key}-driver">펼쳐보기<div class="color"></div></button>
                    <a class="pc" href="${projects[2].pcURL[i]}" target="_blank"><div class="color"></div>바로가기</a>
                    <a class="mo" href="${projects[2].moURL[i]}" target="_blank"><div class="color"></div>바로가기</a>
                </div>
            </div>
        </div>
    `;

    // AIG 템플릿
    const aigTem = `
        <div class="grid-children">
            <div class="grid-img"><img src="./img/projects/aig/${projects[3].pcImg[i]}" alt="프로젝트 이미지"></div>
            <div class="grid-contents">
                <h3 class="title">${projects[3].title[i]}</h3>
                <div class="detail">
                    <dl>
                        <dt>작업기간 :</dt>
                        <dt>${projects[3].day}</dt>
                    </dl>
                    <dl>
                        <dt>사용언어 :</dt>
                        <dt>${projects[3].lang}</dt>
                    </dl>
                </div>
                <div class="bar">
                    <p>기여도</p>
                    <div class="graph my${projects[3].percentage}">${projects[3].percentage}%</div>
                </div>
                <div class="grid-btns">
                    <button type="button" class="img-sample ${projects[3].key}-driver">펼쳐보기<div class="color"></div></button>
                </div>
            </div>
        </div>
    `;

    // 하나손해보험 템플릿
    const hanaTem = `
        <div class="grid-children">
            <div class="grid-img"><img src="./img/projects/hana/${projects[4].pcImg[i]}" alt="프로젝트 이미지"></div>
            <div class="grid-contents">
                <h3 class="title">${projects[4].title[i]}</h3>
                <div class="detail">
                    <dl>
                        <dt>작업기간 :</dt>
                        <dt>${projects[4].day[i]}</dt>
                    </dl>
                    <dl>
                        <dt>사용언어 :</dt>
                        <dt>${projects[4].lang}</dt>
                    </dl>
                </div>
                <div class="bar">
                    <p>기여도</p>
                    <div class="graph">${projects[4].percentage}%</div>
                </div>
                <div class="grid-btns">
                    <button type="button" class="img-sample ${projects[4].key}-driver">펼쳐보기<div class="color"></div></button>
                    <a class="pc" href="${projects[4].pcURL[i]}" target="_blank"><div class="color"></div>바로가기</a>
                    <a class="mo" href="${projects[4].moURL[i]}" target="_blank"><div class="color"></div>바로가기</a>
                </div>
            </div>
        </div>
    `;

    // 코오롱 템플릿
    const kolonTem = `
        <div class="grid-children">
            <div class="grid-img"><img src="./img/projects/kolon/${projects[5].pcImg[i]}" alt="프로젝트 이미지"></div>
            <div class="grid-contents">
                <h3 class="title">${projects[5].title[i]}</h3>
                <div class="detail">
                    <dl>
                        <dt>작업기간 :</dt>
                        <dt>${projects[5].day[i]}</dt>
                    </dl>
                    <dl>
                        <dt>사용언어 :</dt>
                        <dt>${projects[5].lang}</dt>
                    </dl>
                </div>
                <div class="bar">
                    <p>기여도</p>
                    <div class="graph my${projects[5].percentage[i]}">${projects[5].percentage[i]}%</div>
                </div>
                <div class="grid-btns">
                    <button type="button" class="img-sample ${projects[5].key}-driver">펼쳐보기<div class="color"></div></button>
                    <a href="${projects[5].pcURL[i]}" target="_blank"><div class="color"></div>바로가기</a>
                </div>
            </div>
        </div>
    `;

    // 교직원공제회 템플릿
    const thekTem = `
        <div class="grid-children">
            <div class="grid-img"><img src="./img/projects/thek/${projects[6].pcImg[i]}" alt="프로젝트 이미지"></div>
            <div class="grid-contents">
                <h3 class="title">${projects[6].title[i]}</h3>
                <div class="detail">
                    <dl>
                        <dt>작업기간 :</dt>
                        <dt>${projects[6].day[i]}</dt>
                    </dl>
                    <dl>
                        <dt>사용언어 :</dt>
                        <dt>${projects[6].lang}</dt>
                    </dl>
                </div>
                <div class="bar">
                    <p>기여도</p>
                    <div class="graph">${projects[6].percentage}%</div>
                </div>
                <div class="grid-btns">
                    <button type="button" class="img-sample ${projects[6].key}-driver">펼쳐보기<div class="color"></div></button>
                    <a href="${projects[6].pcURL[i]}" target="_blank"><div class="color"></div>바로가기</a>
                </div>
            </div>
        </div>
    `;

    // AIA 템플릿
    const aiaTem = `
        <div class="grid-children">
            <div class="grid-img"><img src="./img/projects/aia/${projects[7].pcImg[i]}" alt="프로젝트 이미지"></div>
            <div class="grid-contents">
                <h3 class="title">${projects[7].title[i]}</h3>
                <div class="detail">
                    <dl>
                        <dt>작업기간 :</dt>
                        <dt>${projects[7].day}</dt>
                    </dl>
                    <dl>
                        <dt>사용언어 :</dt>
                        <dt>${projects[7].lang}</dt>
                    </dl>
                </div>
                <div class="bar">
                    <p>기여도</p>
                    <div class="graph">${projects[7].percentage}%</div>
                </div>
                <div class="grid-btns">
                    <button type="button" class="img-sample ${projects[7].key}-driver">펼쳐보기<div class="color"></div></button>
                    <a href="${projects[7].pcURL[i]}" target="_blank"><div class="color"></div>바로가기</a>
                </div>
            </div>
        </div>
    `;

    // LG 템플릿
    const lgTem = `
        <div class="grid-children">
            <div class="grid-img"><img src="./img/projects/lg/${projects[8].pcImg[i]}" alt="프로젝트 이미지"></div>
            <div class="grid-contents">
                <h3 class="title">${projects[8].title[i]}</h3>
                <div class="detail">
                    <dl>
                        <dt>작업기간 :</dt>
                        <dt>${projects[8].day}</dt>
                    </dl>
                    <dl>
                        <dt>사용언어 :</dt>
                        <dt>${projects[8].lang}</dt>
                    </dl>
                </div>
                <div class="bar">
                    <p>기여도</p>
                    <div class="graph">${projects[8].percentage}%</div>
                </div>
                <div class="grid-btns">
                    <button type="button" class="img-sample ${projects[8].key}-driver">펼쳐보기<div class="color"></div></button>
                    <a href="${projects[8].pcURL[i]}" target="_blank"><div class="color"></div>바로가기</a>
                </div>
            </div>
        </div>
    `;

    $('.samsung .grid').append(samTem);
    $('.kyobo .grid').append(kyoTem);
    $('.meritz .grid').append(meTem);
    $('.aig .grid').append(aigTem);
    $('.hana .grid').append(hanaTem);
    $('.kolon .grid').append(kolonTem);
    $('.thek .grid').append(thekTem);
    $('.aia .grid').append(aiaTem);
    $('.lg .grid').append(lgTem);
});
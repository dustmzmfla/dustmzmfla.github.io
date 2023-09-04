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

    $('.samsung .grid').append(samTem);
    $('.kyobo .grid').append(kyoTem);
});
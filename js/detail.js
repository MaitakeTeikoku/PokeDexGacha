const audioSoundSrc = document.getElementById('audioSound');

async function displayDetail() {
    // ユーザ名を取得できているか確認
    existUserName();
    // ユーザ名を表示
    setElem("userName", userNameLocal);

    // ガチャの設定を取得
    await getSetting();

    // Getパラメータの値を取得
    const url = new URL(window.location.href);
    const params = url.searchParams;

    let numDex;
    let valueRare;
    let valueShiny;
    
    if(params.has("dex") && params.has("shiny")) {
        numDex = parseFloat(params.get("dex"));
        valueRare = rareGet(numDex);
        valueShiny = false;
        if (params.get("shiny") == "1") {
            valueShiny = true
        }
    } else {
        window.location.href = './signIn.html';
    }

    // カードを生成
    await createCard(numDex, valueShiny, valueRare);
    
    // 鳴き声のURLを取得
    audioSoundSrc.src = audioSoundSrcGet(numDex);
}

// 鳴き声を再生する関数
function audioSound() {
    audio(audioSoundSrc);
}

displayDetail();
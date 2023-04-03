// オーディオを一度ミュート解除したか判別
let audioPlayOnce = false;
// オーディオを取得
let volumeBgm = 0.8;

const audioBgmSrc = document.getElementById('audioBgm');
audioBgmSrc.volume = volumeBgm;
audioBgmSrc.loop = true;

const audioGetSrc = document.getElementById('audioGet');
audioGetSrc.volume = volumeBgm;

const audioSoundSrc = document.getElementById('audioSound');

// タイムアウトのID
let timeOutBgm;
let timeOutSound;
let timeOutFadeIn;



// index.htmlが開かれたときに実行する関数
async function displayIndex() {
    // ユーザ名を取得できているか確認
    existUserName();
    // ユーザ名を表示
    setElem("userName", userNameLocal);

    // ガチャの設定を取得
    await getSetting();
    // ガチャの設定を表示
    setElem("countDexSum", dexRange);
    setElem("countShinyRandom", countShinyRandom);
    setElem("countRare4Random", countRare4Random);
    setElem("countRare3Random", countRare3Random);
    setElem("countRare2Random", countRare2Random);
    setElem("countRare1Random", countRare1Random);
    setElem("countRare4Sum", listRare4.length);
    setElem("countRare3Sum", listRare3.length);
    setElem("countRare2Sum", listRare2.length);
    setElem("countRare1Sum", listRare1.length);

    // POSTのbody
    let formData = new FormData();
    formData.set('action', "canGacha");
    formData.set('userName', userNameLocal);

    // ガチャを引けるか確認、POST
    await fetch(urlApi, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        setElem("infoGacha", data.message);
        if (data.result) {
            // ガチャを引くボタンを活性化する
            elemDisabled("buttonGacha",false);
        } else {
            // ガチャを引くボタンを非活性化する
            elemDisabled("buttonGacha",true);
            audioBgmSrc.src = "./audio/01Opening.mp3";
        }
    })
    .catch(error => {
        setElem("infoGacha", "読み込み完了");
        setElem("info", "ガチャ確認エラー");
        setElem("infoDetail", error);
    });

    // オーディオをミュート
    audioMute();
    
}

async function gacha() {
    // ガチャの確率の説明を非表示
    elemDisplay("settingGacha", "none");

    // 背景をリセット
    document.body.style.background = "url('')";

    // ガチャを引くボタンを非活性化する
    elemDisabled("buttonGacha", true);
    // カードを非表示
    elemVisibility("card", "hidden");
    // 画面の画像をリセット
    setElem("ul1", "");

    // ユーザ名を取得できているか確認
    existUserName();

    // POST通信の情報を表示
    setElem("info", "ガチャを引いています...");
    setElem("infoDetail", "更新や移動をすると、結果が保存されない場合があります。");
    
    let numDex;
    let valueShiny;
    let valueRare;
    let canGachaValue;

    // GAS経由でGoogleスプレッドシートに記入
    const formData = new FormData();
    formData.set('action', "gacha");
    formData.set('userName', userNameLocal);
    formData.set('password', passwordLocal);

    // ポケモンを登録
    await fetch(urlApi, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        if (data.result) {
            setElem("info", "セーブ完了！");
            setElem("infoDetail", data.message);
            if (data.newDex) {
                // 背景をセット
                document.body.style.background = "url('./img/pokeBall.png')";
            }

            numDex = data.numDex;
            valueShiny = data.valueShiny;
            valueRare = data.valueRare;
            canGachaValue = data.canGachaValue;

            setElem("infoGacha", canGachaValue.message);
            
        } else {
            setElem("info", "セーブエラー");
            setElem("infoDetail", data.message);
        }
    })
    .catch(error => {
        setElem("info", "セーブエラー");
        setElem("infoDetail", error);
    });
    
    
    // カードを生成
    await createCard(numDex, valueShiny, valueRare);

    // 鳴き声のURLを取得
    audioSoundSrc.src = audioSoundSrcGet(numDex);

    clearTimeout(timeOutSound);
    timeOutSound = setTimeout(
        function() {
            audio(audioSoundSrc);
        }
        ,1000
    );

    // BGM再生
    audioBgmSrc.pause();
    audio(audioGetSrc);

    clearTimeout(timeOutBgm);
    timeOutBgm = setTimeout(
        function() {
            audioPlay(audioBgmSrc);
            audioPlayOnce =true;
        }
        ,23000
    );

    if (canGachaValue.result) {
        // ガチャを引くボタンを活性化する
        elemDisabled("buttonGacha",false);
    }
}



//オーディオをフェードインで再生する関数
function audioPlay(src) {
    src.volume = 0;
    src.play(); //クリックしたら音を再生
    clearTimeout(timeOutFadeIn);
    fadeIn(src);
}
// フェードイン
function fadeIn(src) {
  let volume = src.volume;
  if (volume < volumeBgm) {
    src.volume = Math.ceil((volume+0.1)*10)/10;
    timeOutFadeIn = setTimeout(
        function() {
            fadeIn(src);
        }
        ,200
    );
  }
}

// muteの切り替え
function audioMute() {
    if (audioGetSrc.muted && audioBgmSrc.muted && audioSoundSrc.muted) {
        if (!audioPlayOnce && audioBgmSrc.paused && audioGetSrc.paused) {
            // BGM再生
            audio(audioBgmSrc);
            audioPlayOnce =true;
        }

        audioGetSrc.muted = false;
        audioBgmSrc.muted = false;
        audioSoundSrc.muted = false;

        setElem("audioMute", "ミュートする");
    } else {
        audioGetSrc.muted = true;
        audioBgmSrc.muted = true;
        audioSoundSrc.muted = true;

        setElem("audioMute", "ミュート解除");
    }
}



displayIndex();
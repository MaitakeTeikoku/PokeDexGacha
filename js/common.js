// カードデータにアクセスするAPIのURLを指定
const urlApi = 'https://script.google.com/macros/s/AKfycbxGmg35QHAQz8tRVccGJxet3QRmSmTvfiQAWaFNy0Once4OG0PYCxVgHSi7vwObcng/exec';

let gachaTodayMax;
let dexRange;
let listRare4;
let listRare3;
let listRare2;
let listRare1;
let countShinyRandom;
let countRare4Random;
let countRare3Random;
let countRare2Random;
let countRare1Random;
let pointCountDex;
let pointShiny;
let pointRare4;
let pointRare3;
let pointRare2;
let pointRare1;

// ユーザ名をローカルストレージから取得
const userNameLocal = localStorage.getItem('userName');
// 秘密の暗号をローカルストレージから取得
const passwordLocal = localStorage.getItem('password');

// ユーザ名を取得できているか確認する関数
function existUserName() {
    if (userNameLocal == null) {
        window.location.href = './signIn.html';
    }
}

// ログアウトボタンが押された時の関数
function logout() {
    // ローカルストレージをクリア
    localStorage.clear();
    window.location.reload(true);
}

// 要素をinnerTextでセットする関数(value=""で要素をリセット)
function setElem(id, value) {
    const elem = document.getElementById(id);
    elem.innerText = value;
}

// 要素の活性/非活性を切り替え(false/true)
function elemDisabled(id, d) {
    const elem = document.getElementById(id);
    elem.disabled = d;
}

// 要素の表示/非表示を切り替え(visible/hidden)
function elemVisibility(id, v) {
    const elem = document.getElementById(id);
    elem.style.visibility = v;
}

// 要素の表示/非表示を切り替え(block/none)
function elemDisplay(id, d) {
    const elem = document.getElementById(id);
    elem.style.display = d;
}

// ガチャの設定を取得
async function getSetting() {

    // POSTのbody
    let formData = new FormData();
    formData.set('action', "setting");

    // ガチャの設定ヲ取得、POST
    await fetch(urlApi, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        gachaTodayMax = data.gachaTodayMax;
        dexRange = data.dexRange;
        listRare4 = data.listRare4;
        listRare3 = data.listRare3;
        listRare2 = data.listRare2;
        listRare1 = data.listRare1;
        countShinyRandom = data.countShinyRandom;
        countRare4Random = data.countRare4Random;
        countRare3Random = data.countRare3Random;
        countRare2Random = data.countRare2Random;
        countRare1Random = data.countRare1Random;
        pointCountDex = data.pointCountDex;
        pointShiny = data.pointShiny;
        pointRare4 = data.pointRare4;
        pointRare3 = data.pointRare3;
        pointRare2 = data.pointRare2;
        pointRare1 = data.pointRare1;d
    })
    .catch(error => {
    });
}

// レア度を取得する関数
function rareGet(num) {
    let rare = 0;
    if (listRare4.includes(num)) {
        rare = 4;
    } else if (listRare3.includes(num)) {
        rare = 3;
    } else if (listRare2.includes(num)) {
        rare = 2;
    } else if (listRare1.includes(num)) {
        rare = 1;
    }
    return rare;
}

//オーディオを初めから再生する関数
function audio(src) {
    src.currentTime = 0; //連続クリックに対応
    src.play(); //クリックしたら音を再生
}

// 鳴き声のURLを取得する関数
function audioSoundSrcGet(numDex) {
    const numDexStr = String(numDex).padStart(4, '0');
    soundSrc = "./audio/sound/" + numDexStr + ".mp3";

    return soundSrc;
}

// カードを作成する関数
async function createCard(numDex, valueShiny, valueRare) {

    // 背景用のタイプ色
    const colors = {
        normal: '#C6C6A7aa',
        fire: '#F5AC78aa',
        water: '#9DB7F5aa',
        grass: '#A7DB8Daa',
        electric: '#FAE078aa',
        ice: '#BCE6E6aa',
        fighting: '#D67873aa',
        poison: '#C183C1aa',
        ground: '#EBD69Daa',
        flying: '#C6B7F5aa',
        psychic: '#FA92B2aa',
        bug: '#C6D16Eaa',
        rock: '#D1C17Daa',
        ghost: '#A292BCaa',
        dragon: '#A27DFAaa',
        dark: '#A29288aa',
        steel: '#D1D1E0aa',
        fairy: '#F4BDC9aa'
    }

    
    // PokeAPIに接続
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + numDex);
    const resData = await res.json();
    /*
    // ポケモンの画像を取得
    let imgSrc;
    if (valueShiny) {
        // 色違い
        imgSrc = resData['sprites']['other']['official-artwork']['front_shiny'];
    } else {
        // デフォルト
        imgSrc = resData['sprites']['other']['official-artwork']['front_default'];
    }
    */
    const numDexStr = String(numDex).padStart(4, '0');
    let imgSrc;
    if (valueShiny) {
        // 色違い
        imgSrc = "./img/officialArtworkShiny/oaS" + numDexStr + ".png";
    } else {
        // デフォルト
        imgSrc = "./img/officialArtworkDefault/oaD" + numDexStr + ".png";
    }
    
    /*
    // PokeAPIに接続
    const resSpecies = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + numDex);
    const resSpeciesData = await resSpecies.json();

    let name;
    // 画像のポケモンの名前を取得
    for (j = 0; j < resSpeciesData['names'].length; ++j) {
        // 日本語の名前を検索
        if (resSpeciesData['names'][j]['language']['name'] == "ja") {
            name = (resSpeciesData['names'][j]["name"]);
            break;
        }
    }
    */
    const name = pokeNamesList[numDexStr];

    // タイプ1を取得
    const type1 = resData['types'][0]['type']['name'];
    // 色に変換
    const color1 = colors[type1];

    let color2 = color1;
    if (resData['types'][1]) {
        // タイプ2を取得
        const type2 = resData['types'][1]['type']['name'];
        // 色に変換
        color2 = colors[type2];
    }

    // タイプに合わせて背景画像を変更
    const bgType1 = document.getElementById("bgType1");
    bgType1.style.backgroundColor = color1;
    const bgType2 = document.getElementById("bgType2");
    bgType2.style.backgroundColor = color2;

    // 親要素
    const ul1 = document.getElementById('ul1');
    // 追加する要素を作成
    const li1 = document.createElement('li');
    li1.innerHTML = "<img src =" + imgSrc + ">";
    // 親要素の末尾に追加
    ul1.appendChild(li1);
    li1.classList.add("li1");
    li1.classList.add("li1Index");

    // リストの中にリストを追加
    const ul2 = document.createElement('ul');
    li1.appendChild(ul2);
    ul2.classList.add("ul2");
    ul2.classList.add("ul2Index");

    // 名前を追加
    const li2Name = document.createElement('li');
    li2Name.innerHTML = name;
    ul2.appendChild(li2Name);
    li2Name.classList.add("li2Name");

    // レア度と色違いによって背景色を変更
    switch (valueRare) {
        case 4:
            if (valueShiny == 1) {
                li1.classList.add("liRare4Shiny");
            } else {
                li1.classList.add("liRare4Default");
            }
            break;
        case 3:
            if (valueShiny == 1) {
                li1.classList.add("liRare3Shiny");
            } else {
                li1.classList.add("liRare3Default");
            }
            break;
        case 2:
            if (valueShiny == 1) {
                li1.classList.add("liRare2Shiny");
            } else {
                li1.classList.add("liRare2Default");
            }
            break;
        case 1:
            if (valueShiny == 1) {
                li1.classList.add("liRare1Shiny");
            } else {
                li1.classList.add("liRare1Default");
            }
            break;
        default:
            if (valueShiny == 1) {
                li1.classList.add("liRare0Shiny");
            } else {
                li1.classList.add("liRare0Default");
            }
    }
    // カードを表示
    elemVisibility("card", "visible");
}
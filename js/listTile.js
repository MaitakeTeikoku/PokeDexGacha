// 図鑑リストの種類、カード
const dexListType = "tile";

// 鳴き声
let audioSoundSrc = document.getElementById('audioSound');

// 図鑑リストをタイルで表示する関数
async function dexListTile(data) {

    // 親要素
    let ul1 = document.getElementById("ul1");
    //子要素が存在する限り繰り返す
    while (ul1.firstChild) {
        //最初の要素を削除
        ul1.removeChild(ul1.firstChild);
    }

    // PokeAPIからポケモンの情報を取得
    for (i = 1; i <= data.length; ++i) {  
        // PokeAPIに接続
        let res = await fetch("https://pokeapi.co/api/v2/pokemon/" + i);
        let resData = await res.json();
        // ポケモンの画像を取得
        let imgSrc;

        // 色違いの判定
        if (data[i-1] == "1") {
            // 色違い
            imgSrc = resData['sprites']['front_shiny'];
        } else {
            // デフォルト
            imgSrc = resData['sprites']['front_default'];
        }

        // 追加する要素を作成
        let li1 = document.createElement('li');
        li1.innerHTML = "<img src =" + imgSrc + ">";
        // 親要素の末尾に追加
        ul1.appendChild(li1);
        li1.classList.add("li1");
        li1.classList.add("li1ListTile");

        // 取得しているか判定
        if (data[i-1] == "0" || data[i-1] == "1") {
            li1.classList.add("li1Bright");
            li1.classList.add("li1Disabled");

            (function(i){
                // 詳細へのリンク
                li1.addEventListener('click',function(){
                    // 鳴き声のURLを取得
                    audioSoundSrc.src = audioSoundSrcGet(i);
                    audio(audioSoundSrc);
                });
            })(i);

        } else {
            li1.classList.add("li1Display");
        }

        // レア度と色違いによって背景色を変更
        if (listRare4.includes(i)) {
            if (data[i-1] == "1") {
                li1.classList.add("liRare4Shiny");
            } else {
                li1.classList.add("liRare4Default");
            }
        } else if (listRare3.includes(i)) {
            if (data[i-1] == "1") {
                li1.classList.add("liRare3Shiny");
            } else {
                li1.classList.add("liRare3Default");
            }
        } else if (listRare2.includes(i)) {
            if (data[i-1] == "1") {
                li1.classList.add("liRare2Shiny");
            } else {
                li1.classList.add("liRare2Default");
            }
        } else if (listRare1.includes(i)) {
            if (data[i-1] == "1") {
                li1.classList.add("liRare1Shiny");
            } else {
                li1.classList.add("liRare1Default");
            }
        } else {
            if (data[i-1] == "1") {
                li1.classList.add("liRare0Shiny");
            } else {
                li1.classList.add("liRare0Default");
            }
        }

        progress.value++;
    }

    elemDisabled("checkbox", false);
    setElem("info", "読み込み完了！");
}
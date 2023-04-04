// 図鑑リストの種類、カード
const dexListType = "card";

// 図鑑リストをカードで表示する関数
async function dexListCard(data) {
    // 親要素
    const ul1 = document.getElementById("ul1");
    //子要素が存在する限り繰り返す
    while (ul1.firstChild) {
        //最初の要素を削除
        ul1.removeChild(ul1.firstChild);
    }

    // PokeAPIからポケモンの情報を取得
    for (i = 1; i <= data.length; ++i) {
        /*
        // PokeAPIに接続
        let res = await fetch("https://pokeapi.co/api/v2/pokemon/" + i);
        let resData = await res.json();
        // ポケモンの画像を取得
        let imgSrc;

        // 色違いの判定
        if (data[i-1] == "1") {
            // 色違い
            imgSrc = resData['sprites']['other']['official-artwork']['front_shiny'];
        } else {
            // デフォルト
            imgSrc = resData['sprites']['other']['official-artwork']['front_default'];
        }
        */
        let numDexStr = String(i).padStart(4, '0');
        let imgSrc;
        // 色違いの判定
        if (data[i-1] == "1") {
            // 色違い
            imgSrc = "./img/officialArtworkShiny/oaS" + numDexStr + ".png";
        } else {
            // デフォルト
            imgSrc = "./img/officialArtworkDefault/oaD" + numDexStr + ".png";
        }


        // 追加する要素を作成
        var li1 = document.createElement('li');
        li1.innerHTML = "<img src =" + imgSrc + ">";
        // 親要素の末尾に追加
        ul1.appendChild(li1);
        li1.classList.add("li1");
        li1.classList.add("li1List");
        
        
        let typeSum = "　";
        
        let name = "??????";
        
        // 取得しているか判定
        if (data[i-1] == "0" || data[i-1] == "1") {
            /*
            // タイプ1を取得
            let type1 = resData['types'][0]['type']['name'];
            // タイプの日本語名取得
            let type1Jpn = typeJpn[type1];
            typeSum = type1Jpn;

            let type2Jpn = "";
            if (resData['types'][1]) {
                // タイプ2を取得
                let type2 = resData['types'][1]['type']['name'];
                // タイプの日本語名取得
                type2Jpn = typeJpn[type2];
                typeSum = type1Jpn + " / " + type2Jpn;
            }
            */
            const type1 = pokeTypesList[numDexStr][0];
            const type2 = pokeTypesList[numDexStr][1];

            typeSum = typeJpn[type1];
            if (type1 != type2) {
                typeSum = typeJpn[type1] + " / " + typeJpn[type2];
            }


            /*
            // PokeAPIに接続
            let resSpecies = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + i);
            let resSpeciesData = await resSpecies.json();
            // 画像のポケモンの名前を取得
            for (j = 0; j < resSpeciesData['names'].length; ++j) {
                // 日本語の名前を検索
                if (resSpeciesData['names'][j]['language']['name'] == "ja") {
                    name = (resSpeciesData['names'][j]["name"]);
                    break;
                }
            }
            */
            name = pokeNamesList[numDexStr];

            (function(i){
                // 詳細へのリンク
                li1.addEventListener('click',function(){
                    location.href = "./detail.html?dex=" + i + "&shiny=" + data[i-1];
                });
            })(i);

            li1.classList.add("li1Bright");
            
        } else {
            li1.classList.add("li1Display");
        }

        // リストの中にリストを追加
        var ul2 = document.createElement('ul');
        li1.appendChild(ul2);
        ul2.classList.add("ul2");
        ul2.classList.add("ul2List");

        // 図鑑番号を追加
        var li2I = document.createElement('li');
        li2I.innerHTML = "No." + String(i).padStart(4, '0');
        ul2.appendChild(li2I);
        li2I.classList.add("li2I");

        // 名前を追加
        var li2Name = document.createElement('li');
        li2Name.innerHTML = name;
        ul2.appendChild(li2Name);
        li2Name.classList.add("li2Name");

        // タイプを追加
        var li2Type = document.createElement('li');
        li2Type.innerHTML = typeSum;
        ul2.appendChild(li2Type);
        li2Type.classList.add("li2Type");

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
// 図鑑リストの種類、カード
const dexListType = "table";

// 図鑑リストを表で表示する関数
async function dexListTable(data) {
    // テーブルを取得
    const tableList = document.getElementById("tableList");

    // PokeAPIからポケモンの情報を取得
    for (i = 1; i <= data.length; ++i) {  

        // 色違いの判定
        let shiny = "";
        if (data[i-1] == "1") {
            // 色違い
            shiny = "★";
        }

        // レア度の判定
        let rare = rareGet(i);

        // 表の一番最後に1行追加、-1
        let tr = tableList.insertRow(-1); 

        let name = "??????";

        // 取得しているか判定
        if (data[i-1] == "0" || data[i-1] == "1") {

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

            name = "<a href='./detail.html?dex=" + i + "&shiny=" + data[i-1] + "'>" + name + "</a>"

            tr.classList.add("trBright");
        }

        // 図鑑番号を表示
        td0List = tr.insertCell(0);
        td0List.innerHTML = "No." + String(i).padStart(4, '0');
        td0List.classList.add("td0List");

        // 名前を追加
        td1List = tr.insertCell(1);
        td1List.innerHTML = name;
        td1List.classList.add("td1List");

        // 色違いを追加
        td2List = tr.insertCell(2);
        td2List.innerHTML = shiny;
        td2List.classList.add("td2List");

        // レア度を追加
        td3List = tr.insertCell(3);
        td3List.innerHTML = rare;
        td3List.classList.add("td3List");

        document.getElementById('progress').value++;
    }

    progress.value++;

    setElem("info", "読み込み完了！");
}
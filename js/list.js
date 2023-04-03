// プログレスバーを取得
const progress = document.getElementById("progress");

// 図鑑が開かれたときに実行する関数
async function displayList() {
    // ユーザ名を取得できているか確認
    existUserName();
    // ユーザ名を表示
    setElem("userName", userNameLocal);

    // ガチャの設定を取得
    await getSetting();
    // ガチャの設定を表示
    setElem("countDexSum", dexRange);
    setElem("countRare4Sum", listRare4.length);
    setElem("countRare3Sum", listRare3.length);
    setElem("countRare2Sum", listRare2.length);
    setElem("countRare1Sum", listRare1.length);

    progress.max = parseInt(dexRange);
    
    // POSTのbody
    let formData = new FormData();
    formData.set('action', "list");
    formData.set('userName', userNameLocal);

    // 図鑑を取得、POST
    await fetch(urlApi, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        // 見つけた数などを表示
        displayCount(data);

        switch (dexListType) {
            case "card":
                // 図鑑リストをカードで表示
                dexListCard(data[2][0]);
                break;
            
            case "tile":
                // 図鑑リストをカードで表示
                dexListTile(data[2][0]);
                break;
                
            case "table":
                // 図鑑リストを表で表示
                dexListTable(data[2][0]);
                break;

            default:
        }
        
    })
    .catch(error => {
        setElem("info", "読み込みエラー");
        setElem("infoDetail", error);
    });
}

// 見つけた数などを表示する関数
function displayCount(data) {
    // 見つけた数
    const countDex = data[0][0];
    // 色違いの数
    const countShiny = data[0][1];
    // レア度の数を表示
    const countRare4 = data[0][2];
    const countRare3 = data[0][3];
    const countRare2 = data[0][4];
    const countRare1 = data[0][5];
    // ガチャを回した合計数
    const gachaSum = data[1];
    
    // 見つけた数を表示
    setElem("countDex", countDex);
    // 色違いの数を表示
    setElem("countShiny", countShiny);
    // レア度の数を表示
    setElem("countRare4", countRare4);
    setElem("countRare3", countRare3);
    setElem("countRare2", countRare2);
    setElem("countRare1", countRare1);
    // ガチャを回した合計数を表示
    setElem("gachaSum", gachaSum);
}

// 見つけたポケモンだけ表示する関数
function checkbox() {
    var li1Display = document.getElementsByClassName("li1Display");
    
    for (i = 0 ; i < li1Display.length ; i++) {
        if (document.getElementById("checkbox").checked) {
            li1Display[i].style.display ="none";
        } else {
            li1Display[i].style.display ="block";
        }
    }

}

displayList();
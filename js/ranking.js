// ranking.htmlが開かれたときに実行する関数
async function displayRanking() {
    // ガチャの設定を取得
    await getSetting();
    // ガチャの設定を表示
    setElem("pointDexSum", pointCountDex);
    setElem("pointShiny", pointShiny);
    setElem("pointRare4", pointRare4);
    setElem("pointRare3", pointRare3);
    setElem("pointRare2", pointRare2);
    setElem("pointRare1", pointRare1);
    setElem("countDexSum", dexRange);
    setElem("countRare4Sum", listRare4.length);
    setElem("countRare3Sum", listRare3.length);
    setElem("countRare2Sum", listRare2.length);
    setElem("countRare1Sum", listRare1.length);

    // POSTのbody
    let formData = new FormData();
    formData.set('action', "ranking");

    // ランキングを取得、POST
    await fetch(urlApi, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        // 図鑑を作成する関数にデータを渡す
        setTable(data);
        setElem("info", "読み込み完了！");
    })
    .catch(error => {
        setElem("info", "読み込みエラー");
        setElem("infoDetail", error);
    });
}

function setTable(data) {
    // テーブルを取得
    const tableRanking = document.getElementById("tableRanking");

    for (i = 0; i < data.length; ++i) {
        let tr = tableRanking.insertRow(-1); //引数-1 : 表の一番最後に1行追加
        if (data[i][0] == userNameLocal) {
            tr.classList.add("trMe");
        }

        // 順位を表示
        tdRank = tr.insertCell(0);
        tdRank.innerHTML = i+1 ;
        tdRank.classList.add("tdRank");

        //  情報を表示
        for (j = 0; j < data[i].length; ++j) {
            td = tr.insertCell(j + 1);
            td.innerHTML = data[i][j];
            let tdId = "td"+j;
            td.classList.add(tdId);
        }
    }
}

displayRanking()
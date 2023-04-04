/*
// タイプの日本語変換
const typeJpn = {
    normal: 'ノーマル',
    fire: 'ほのお',
    water: 'みず',
    grass: 'くさ',
    electric: 'でんき',
    ice: 'こおり',
    fighting: 'かくとう',
    poison: 'どく',
    ground: 'じめん',
    flying: 'ひこう',
    psychic: 'エスパー',
    bug: 'むし',
    rock: 'いわ',
    ghost: 'ゴースト',
    dragon: 'ドラゴン',
    dark: 'あく',
    steel: 'はがね',
    fairy: 'フェアリー'
};
*/

// ポケモンの日本語名
const pokeNamesList = {
    "0001": "フシギダネ",
    "0002": "フシギソウ",
    "0003": "フシギバナ",
    "0004": "ヒトカゲ",
    "0005": "リザード",
    "0006": "リザードン",
    "0007": "ゼニガメ",
    "0008": "カメール",
    "0009": "カメックス",
    "0010": "キャタピー",
    "0011": "トランセル",
    "0012": "バタフリー",
    "0013": "ビードル",
    "0014": "コクーン",
    "0015": "スピアー",
    "0016": "ポッポ",
    "0017": "ピジョン",
    "0018": "ピジョット",
    "0019": "コラッタ",
    "0020": "ラッタ",
    "0021": "オニスズメ",
    "0022": "オニドリル",
    "0023": "アーボ",
    "0024": "アーボック",
    "0025": "ピカチュウ",
    "0026": "ライチュウ",
    "0027": "サンド",
    "0028": "サンドパン",
    "0029": "ニドラン♀",
    "0030": "ニドリーナ",
    "0031": "ニドクイン",
    "0032": "ニドラン♂",
    "0033": "ニドリーノ",
    "0034": "ニドキング",
    "0035": "ピッピ",
    "0036": "ピクシー",
    "0037": "ロコン",
    "0038": "キュウコン",
    "0039": "プリン",
    "0040": "プクリン",
    "0041": "ズバット",
    "0042": "ゴルバット",
    "0043": "ナゾノクサ",
    "0044": "クサイハナ",
    "0045": "ラフレシア",
    "0046": "パラス",
    "0047": "パラセクト",
    "0048": "コンパン",
    "0049": "モルフォン",
    "0050": "ディグダ",
    "0051": "ダグトリオ",
    "0052": "ニャース",
    "0053": "ペルシアン",
    "0054": "コダック",
    "0055": "ゴルダック",
    "0056": "マンキー",
    "0057": "オコリザル",
    "0058": "ガーディ",
    "0059": "ウインディ",
    "0060": "ニョロモ",
    "0061": "ニョロゾ",
    "0062": "ニョロボン",
    "0063": "ケーシィ",
    "0064": "ユンゲラー",
    "0065": "フーディン",
    "0066": "ワンリキー",
    "0067": "ゴーリキー",
    "0068": "カイリキー",
    "0069": "マダツボミ",
    "0070": "ウツドン",
    "0071": "ウツボット",
    "0072": "メノクラゲ",
    "0073": "ドククラゲ",
    "0074": "イシツブテ",
    "0075": "ゴローン",
    "0076": "ゴローニャ",
    "0077": "ポニータ",
    "0078": "ギャロップ",
    "0079": "ヤドン",
    "0080": "ヤドラン",
    "0081": "コイル",
    "0082": "レアコイル",
    "0083": "カモネギ",
    "0084": "ドードー",
    "0085": "ドードリオ",
    "0086": "パウワウ",
    "0087": "ジュゴン",
    "0088": "ベトベター",
    "0089": "ベトベトン",
    "0090": "シェルダー",
    "0091": "パルシェン",
    "0092": "ゴース",
    "0093": "ゴースト",
    "0094": "ゲンガー",
    "0095": "イワーク",
    "0096": "スリープ",
    "0097": "スリーパー",
    "0098": "クラブ",
    "0099": "キングラー",
    "0100": "ビリリダマ",
    "0101": "マルマイン",
    "0102": "タマタマ",
    "0103": "ナッシー",
    "0104": "カラカラ",
    "0105": "ガラガラ",
    "0106": "サワムラー",
    "0107": "エビワラー",
    "0108": "ベロリンガ",
    "0109": "ドガース",
    "0110": "マタドガス",
    "0111": "サイホーン",
    "0112": "サイドン",
    "0113": "ラッキー",
    "0114": "モンジャラ",
    "0115": "ガルーラ",
    "0116": "タッツー",
    "0117": "シードラ",
    "0118": "トサキント",
    "0119": "アズマオウ",
    "0120": "ヒトデマン",
    "0121": "スターミー",
    "0122": "バリヤード",
    "0123": "ストライク",
    "0124": "ルージュラ",
    "0125": "エレブー",
    "0126": "ブーバー",
    "0127": "カイロス",
    "0128": "ケンタロス",
    "0129": "コイキング",
    "0130": "ギャラドス",
    "0131": "ラプラス",
    "0132": "メタモン",
    "0133": "イーブイ",
    "0134": "シャワーズ",
    "0135": "サンダース",
    "0136": "ブースター",
    "0137": "ポリゴン",
    "0138": "オムナイト",
    "0139": "オムスター",
    "0140": "カブト",
    "0141": "カブトプス",
    "0142": "プテラ",
    "0143": "カビゴン",
    "0144": "フリーザー",
    "0145": "サンダー",
    "0146": "ファイヤー",
    "0147": "ミニリュウ",
    "0148": "ハクリュー",
    "0149": "カイリュー",
    "0150": "ミュウツー",
    "0151": "ミュウ",
    "0152": "チコリータ",
    "0153": "ベイリーフ",
    "0154": "メガニウム",
    "0155": "ヒノアラシ",
    "0156": "マグマラシ",
    "0157": "バクフーン",
    "0158": "ワニノコ",
    "0159": "アリゲイツ",
    "0160": "オーダイル",
    "0161": "オタチ",
    "0162": "オオタチ",
    "0163": "ホーホー",
    "0164": "ヨルノズク",
    "0165": "レディバ",
    "0166": "レディアン",
    "0167": "イトマル",
    "0168": "アリアドス",
    "0169": "クロバット",
    "0170": "チョンチー",
    "0171": "ランターン",
    "0172": "ピチュー",
    "0173": "ピィ",
    "0174": "ププリン",
    "0175": "トゲピー",
    "0176": "トゲチック",
    "0177": "ネイティ",
    "0178": "ネイティオ",
    "0179": "メリープ",
    "0180": "モココ",
    "0181": "デンリュウ",
    "0182": "キレイハナ",
    "0183": "マリル",
    "0184": "マリルリ",
    "0185": "ウソッキー",
    "0186": "ニョロトノ",
    "0187": "ハネッコ",
    "0188": "ポポッコ",
    "0189": "ワタッコ",
    "0190": "エイパム",
    "0191": "ヒマナッツ",
    "0192": "キマワリ",
    "0193": "ヤンヤンマ",
    "0194": "ウパー",
    "0195": "ヌオー",
    "0196": "エーフィ",
    "0197": "ブラッキー",
    "0198": "ヤミカラス",
    "0199": "ヤドキング",
    "0200": "ムウマ",
    "0201": "アンノーン",
    "0202": "ソーナンス",
    "0203": "キリンリキ",
    "0204": "クヌギダマ",
    "0205": "フォレトス",
    "0206": "ノコッチ",
    "0207": "グライガー",
    "0208": "ハガネール",
    "0209": "ブルー",
    "0210": "グランブル",
    "0211": "ハリーセン",
    "0212": "ハッサム",
    "0213": "ツボツボ",
    "0214": "ヘラクロス",
    "0215": "ニューラ",
    "0216": "ヒメグマ",
    "0217": "リングマ",
    "0218": "マグマッグ",
    "0219": "マグカルゴ",
    "0220": "ウリムー",
    "0221": "イノムー",
    "0222": "サニーゴ",
    "0223": "テッポウオ",
    "0224": "オクタン",
    "0225": "デリバード",
    "0226": "マンタイン",
    "0227": "エアームド",
    "0228": "デルビル",
    "0229": "ヘルガー",
    "0230": "キングドラ",
    "0231": "ゴマゾウ",
    "0232": "ドンファン",
    "0233": "ポリゴン２",
    "0234": "オドシシ",
    "0235": "ドーブル",
    "0236": "バルキー",
    "0237": "カポエラー",
    "0238": "ムチュール",
    "0239": "エレキッド",
    "0240": "ブビィ",
    "0241": "ミルタンク",
    "0242": "ハピナス",
    "0243": "ライコウ",
    "0244": "エンテイ",
    "0245": "スイクン",
    "0246": "ヨーギラス",
    "0247": "サナギラス",
    "0248": "バンギラス",
    "0249": "ルギア",
    "0250": "ホウオウ",
    "0251": "セレビィ",
    "0252": "キモリ",
    "0253": "ジュプトル",
    "0254": "ジュカイン",
    "0255": "アチャモ",
    "0256": "ワカシャモ",
    "0257": "バシャーモ",
    "0258": "ミズゴロウ",
    "0259": "ヌマクロー",
    "0260": "ラグラージ",
    "0261": "ポチエナ",
    "0262": "グラエナ",
    "0263": "ジグザグマ",
    "0264": "マッスグマ",
    "0265": "ケムッソ",
    "0266": "カラサリス",
    "0267": "アゲハント",
    "0268": "マユルド",
    "0269": "ドクケイル",
    "0270": "ハスボー",
    "0271": "ハスブレロ",
    "0272": "ルンパッパ",
    "0273": "タネボー",
    "0274": "コノハナ",
    "0275": "ダーテング",
    "0276": "スバメ",
    "0277": "オオスバメ",
    "0278": "キャモメ",
    "0279": "ペリッパー",
    "0280": "ラルトス",
    "0281": "キルリア",
    "0282": "サーナイト",
    "0283": "アメタマ",
    "0284": "アメモース",
    "0285": "キノココ",
    "0286": "キノガッサ",
    "0287": "ナマケロ",
    "0288": "ヤルキモノ",
    "0289": "ケッキング",
    "0290": "ツチニン",
    "0291": "テッカニン",
    "0292": "ヌケニン",
    "0293": "ゴニョニョ",
    "0294": "ドゴーム",
    "0295": "バクオング",
    "0296": "マクノシタ",
    "0297": "ハリテヤマ",
    "0298": "ルリリ",
    "0299": "ノズパス",
    "0300": "エネコ",
    "0301": "エネコロロ",
    "0302": "ヤミラミ",
    "0303": "クチート",
    "0304": "ココドラ",
    "0305": "コドラ",
    "0306": "ボスゴドラ",
    "0307": "アサナン",
    "0308": "チャーレム",
    "0309": "ラクライ",
    "0310": "ライボルト",
    "0311": "プラスル",
    "0312": "マイナン",
    "0313": "バルビート",
    "0314": "イルミーゼ",
    "0315": "ロゼリア",
    "0316": "ゴクリン",
    "0317": "マルノーム",
    "0318": "キバニア",
    "0319": "サメハダー",
    "0320": "ホエルコ",
    "0321": "ホエルオー",
    "0322": "ドンメル",
    "0323": "バクーダ",
    "0324": "コータス",
    "0325": "バネブー",
    "0326": "ブーピッグ",
    "0327": "パッチール",
    "0328": "ナックラー",
    "0329": "ビブラーバ",
    "0330": "フライゴン",
    "0331": "サボネア",
    "0332": "ノクタス",
    "0333": "チルット",
    "0334": "チルタリス",
    "0335": "ザングース",
    "0336": "ハブネーク",
    "0337": "ルナトーン",
    "0338": "ソルロック",
    "0339": "ドジョッチ",
    "0340": "ナマズン",
    "0341": "ヘイガニ",
    "0342": "シザリガー",
    "0343": "ヤジロン",
    "0344": "ネンドール",
    "0345": "リリーラ",
    "0346": "ユレイドル",
    "0347": "アノプス",
    "0348": "アーマルド",
    "0349": "ヒンバス",
    "0350": "ミロカロス",
    "0351": "ポワルン",
    "0352": "カクレオン",
    "0353": "カゲボウズ",
    "0354": "ジュペッタ",
    "0355": "ヨマワル",
    "0356": "サマヨール",
    "0357": "トロピウス",
    "0358": "チリーン",
    "0359": "アブソル",
    "0360": "ソーナノ",
    "0361": "ユキワラシ",
    "0362": "オニゴーリ",
    "0363": "タマザラシ",
    "0364": "トドグラー",
    "0365": "トドゼルガ",
    "0366": "パールル",
    "0367": "ハンテール",
    "0368": "サクラビス",
    "0369": "ジーランス",
    "0370": "ラブカス",
    "0371": "タツベイ",
    "0372": "コモルー",
    "0373": "ボーマンダ",
    "0374": "ダンバル",
    "0375": "メタング",
    "0376": "メタグロス",
    "0377": "レジロック",
    "0378": "レジアイス",
    "0379": "レジスチル",
    "0380": "ラティアス",
    "0381": "ラティオス",
    "0382": "カイオーガ",
    "0383": "グラードン",
    "0384": "レックウザ",
    "0385": "ジラーチ",
    "0386": "デオキシス",
    "0387": "ナエトル",
    "0388": "ハヤシガメ",
    "0389": "ドダイトス",
    "0390": "ヒコザル",
    "0391": "モウカザル",
    "0392": "ゴウカザル",
    "0393": "ポッチャマ",
    "0394": "ポッタイシ",
    "0395": "エンペルト",
    "0396": "ムックル",
    "0397": "ムクバード",
    "0398": "ムクホーク",
    "0399": "ビッパ",
    "0400": "ビーダル",
    "0401": "コロボーシ",
    "0402": "コロトック",
    "0403": "コリンク",
    "0404": "ルクシオ",
    "0405": "レントラー",
    "0406": "スボミー",
    "0407": "ロズレイド",
    "0408": "ズガイドス",
    "0409": "ラムパルド",
    "0410": "タテトプス",
    "0411": "トリデプス",
    "0412": "ミノムッチ",
    "0413": "ミノマダム",
    "0414": "ガーメイル",
    "0415": "ミツハニー",
    "0416": "ビークイン",
    "0417": "パチリス",
    "0418": "ブイゼル",
    "0419": "フローゼル",
    "0420": "チェリンボ",
    "0421": "チェリム",
    "0422": "カラナクシ",
    "0423": "トリトドン",
    "0424": "エテボース",
    "0425": "フワンテ",
    "0426": "フワライド",
    "0427": "ミミロル",
    "0428": "ミミロップ",
    "0429": "ムウマージ",
    "0430": "ドンカラス",
    "0431": "ニャルマー",
    "0432": "ブニャット",
    "0433": "リーシャン",
    "0434": "スカンプー",
    "0435": "スカタンク",
    "0436": "ドーミラー",
    "0437": "ドータクン",
    "0438": "ウソハチ",
    "0439": "マネネ",
    "0440": "ピンプク",
    "0441": "ペラップ",
    "0442": "ミカルゲ",
    "0443": "フカマル",
    "0444": "ガバイト",
    "0445": "ガブリアス",
    "0446": "ゴンベ",
    "0447": "リオル",
    "0448": "ルカリオ",
    "0449": "ヒポポタス",
    "0450": "カバルドン",
    "0451": "スコルピ",
    "0452": "ドラピオン",
    "0453": "グレッグル",
    "0454": "ドクロッグ",
    "0455": "マスキッパ",
    "0456": "ケイコウオ",
    "0457": "ネオラント",
    "0458": "タマンタ",
    "0459": "ユキカブリ",
    "0460": "ユキノオー",
    "0461": "マニューラ",
    "0462": "ジバコイル",
    "0463": "ベロベルト",
    "0464": "ドサイドン",
    "0465": "モジャンボ",
    "0466": "エレキブル",
    "0467": "ブーバーン",
    "0468": "トゲキッス",
    "0469": "メガヤンマ",
    "0470": "リーフィア",
    "0471": "グレイシア",
    "0472": "グライオン",
    "0473": "マンムー",
    "0474": "ポリゴンＺ",
    "0475": "エルレイド",
    "0476": "ダイノーズ",
    "0477": "ヨノワール",
    "0478": "ユキメノコ",
    "0479": "ロトム",
    "0480": "ユクシー",
    "0481": "エムリット",
    "0482": "アグノム",
    "0483": "ディアルガ",
    "0484": "パルキア",
    "0485": "ヒードラン",
    "0486": "レジギガス",
    "0487": "ギラティナ",
    "0488": "クレセリア",
    "0489": "フィオネ",
    "0490": "マナフィ",
    "0491": "ダークライ",
    "0492": "シェイミ",
    "0493": "アルセウス",
    "0494": "ビクティニ",
    "0495": "ツタージャ",
    "0496": "ジャノビー",
    "0497": "ジャローダ",
    "0498": "ポカブ",
    "0499": "チャオブー",
    "0500": "エンブオー",
    "0501": "ミジュマル",
    "0502": "フタチマル",
    "0503": "ダイケンキ",
    "0504": "ミネズミ",
    "0505": "ミルホッグ",
    "0506": "ヨーテリー",
    "0507": "ハーデリア",
    "0508": "ムーランド",
    "0509": "チョロネコ",
    "0510": "レパルダス",
    "0511": "ヤナップ",
    "0512": "ヤナッキー",
    "0513": "バオップ",
    "0514": "バオッキー",
    "0515": "ヒヤップ",
    "0516": "ヒヤッキー",
    "0517": "ムンナ",
    "0518": "ムシャーナ",
    "0519": "マメパト",
    "0520": "ハトーボー",
    "0521": "ケンホロウ",
    "0522": "シママ",
    "0523": "ゼブライカ",
    "0524": "ダンゴロ",
    "0525": "ガントル",
    "0526": "ギガイアス",
    "0527": "コロモリ",
    "0528": "ココロモリ",
    "0529": "モグリュー",
    "0530": "ドリュウズ",
    "0531": "タブンネ",
    "0532": "ドッコラー",
    "0533": "ドテッコツ",
    "0534": "ローブシン",
    "0535": "オタマロ",
    "0536": "ガマガル",
    "0537": "ガマゲロゲ",
    "0538": "ナゲキ",
    "0539": "ダゲキ",
    "0540": "クルミル",
    "0541": "クルマユ",
    "0542": "ハハコモリ",
    "0543": "フシデ",
    "0544": "ホイーガ",
    "0545": "ペンドラー",
    "0546": "モンメン",
    "0547": "エルフーン",
    "0548": "チュリネ",
    "0549": "ドレディア",
    "0550": "バスラオ",
    "0551": "メグロコ",
    "0552": "ワルビル",
    "0553": "ワルビアル",
    "0554": "ダルマッカ",
    "0555": "ヒヒダルマ",
    "0556": "マラカッチ",
    "0557": "イシズマイ",
    "0558": "イワパレス",
    "0559": "ズルッグ",
    "0560": "ズルズキン",
    "0561": "シンボラー",
    "0562": "デスマス",
    "0563": "デスカーン",
    "0564": "プロトーガ",
    "0565": "アバゴーラ",
    "0566": "アーケン",
    "0567": "アーケオス",
    "0568": "ヤブクロン",
    "0569": "ダストダス",
    "0570": "ゾロア",
    "0571": "ゾロアーク",
    "0572": "チラーミィ",
    "0573": "チラチーノ",
    "0574": "ゴチム",
    "0575": "ゴチミル",
    "0576": "ゴチルゼル",
    "0577": "ユニラン",
    "0578": "ダブラン",
    "0579": "ランクルス",
    "0580": "コアルヒー",
    "0581": "スワンナ",
    "0582": "バニプッチ",
    "0583": "バニリッチ",
    "0584": "バイバニラ",
    "0585": "シキジカ",
    "0586": "メブキジカ",
    "0587": "エモンガ",
    "0588": "カブルモ",
    "0589": "シュバルゴ",
    "0590": "タマゲタケ",
    "0591": "モロバレル",
    "0592": "プルリル",
    "0593": "ブルンゲル",
    "0594": "ママンボウ",
    "0595": "バチュル",
    "0596": "デンチュラ",
    "0597": "テッシード",
    "0598": "ナットレイ",
    "0599": "ギアル",
    "0600": "ギギアル",
    "0601": "ギギギアル",
    "0602": "シビシラス",
    "0603": "シビビール",
    "0604": "シビルドン",
    "0605": "リグレー",
    "0606": "オーベム",
    "0607": "ヒトモシ",
    "0608": "ランプラー",
    "0609": "シャンデラ",
    "0610": "キバゴ",
    "0611": "オノンド",
    "0612": "オノノクス",
    "0613": "クマシュン",
    "0614": "ツンベアー",
    "0615": "フリージオ",
    "0616": "チョボマキ",
    "0617": "アギルダー",
    "0618": "マッギョ",
    "0619": "コジョフー",
    "0620": "コジョンド",
    "0621": "クリムガン",
    "0622": "ゴビット",
    "0623": "ゴルーグ",
    "0624": "コマタナ",
    "0625": "キリキザン",
    "0626": "バッフロン",
    "0627": "ワシボン",
    "0628": "ウォーグル",
    "0629": "バルチャイ",
    "0630": "バルジーナ",
    "0631": "クイタラン",
    "0632": "アイアント",
    "0633": "モノズ",
    "0634": "ジヘッド",
    "0635": "サザンドラ",
    "0636": "メラルバ",
    "0637": "ウルガモス",
    "0638": "コバルオン",
    "0639": "テラキオン",
    "0640": "ビリジオン",
    "0641": "トルネロス",
    "0642": "ボルトロス",
    "0643": "レシラム",
    "0644": "ゼクロム",
    "0645": "ランドロス",
    "0646": "キュレム",
    "0647": "ケルディオ",
    "0648": "メロエッタ",
    "0649": "ゲノセクト"
}
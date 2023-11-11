var buff_kbn = [
    "power_up", 
    "element_up", 
    "mindeye", 
    "defense_down", 
    "element_down", 
    "fragile", 
    "critical_up", 
    "critical_damege", 
    "critical_element", 
    "critical_damege_element", 
    "charge",
    "element_field",
    "destruction_rete_up",
    "",
    "fightingspirit",
    "misfortune",
    "funnel",
    "funnel",
    "strong_break",
    "dp_defense_down",
    ];

var skill_buff = [
    {"buff_id":1,"buff_kind":11,"buff_element":1,"chara_id":4,"style_id":0,"buff_name":"メメント・モリ","ref_status_1":0,"ref_status_2":0,"min_power":50.00,"max_power":50.00,"sp_cost":12,"param_limit":0,"max_lv":1,"skill_attack":7,"only_me":0,"only_first":0},
    {"buff_id":2,"buff_kind":3,"buff_element":0,"chara_id":10,"style_id":0,"buff_name":"トリック・カノン","ref_status_1":5,"ref_status_2":6,"min_power":30.00,"max_power":45.00,"sp_cost":13,"param_limit":138,"max_lv":1,"skill_attack":9,"only_me":0,"only_first":0},
    {"buff_id":3,"buff_kind":11,"buff_element":3,"chara_id":10,"style_id":0,"buff_name":"トリック・カノン","ref_status_1":0,"ref_status_2":0,"min_power":50.00,"max_power":50.00,"sp_cost":13,"param_limit":0,"max_lv":1,"skill_attack":9,"only_me":0,"only_first":0},
    {"buff_id":4,"buff_kind":6,"buff_element":0,"chara_id":14,"style_id":0,"buff_name":"星屑の航路","ref_status_1":5,"ref_status_2":0,"min_power":40.00,"max_power":70.00,"sp_cost":13,"param_limit":264,"max_lv":13,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":5,"buff_kind":3,"buff_element":0,"chara_id":15,"style_id":0,"buff_name":"デストロイ","ref_status_1":5,"ref_status_2":6,"min_power":20.00,"max_power":30.00,"sp_cost":14,"param_limit":147,"max_lv":1,"skill_attack":11,"only_me":0,"only_first":0},
    {"buff_id":6,"buff_kind":11,"buff_element":2,"chara_id":18,"style_id":0,"buff_name":"ダイヤモンド・ダスト","ref_status_1":0,"ref_status_2":0,"min_power":50.00,"max_power":50.00,"sp_cost":12,"param_limit":0,"max_lv":1,"skill_attack":14,"only_me":0,"only_first":0},
    {"buff_id":7,"buff_kind":0,"buff_element":0,"chara_id":6,"style_id":20,"buff_name":"リバイブ・ヴェール","ref_status_1":5,"ref_status_2":0,"min_power":50.00,"max_power":65.00,"sp_cost":11,"param_limit":216,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":8,"buff_kind":10,"buff_element":0,"chara_id":31,"style_id":0,"buff_name":"エレガンス・シェル","ref_status_1":5,"ref_status_2":0,"min_power":20.00,"max_power":30.00,"sp_cost":11,"param_limit":216,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":9,"buff_kind":1,"buff_element":1,"chara_id":25,"style_id":0,"buff_name":"慈愛の波動","ref_status_1":5,"ref_status_2":0,"min_power":65.00,"max_power":80.00,"sp_cost":9,"param_limit":232,"max_lv":13,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":10,"buff_kind":3,"buff_element":0,"chara_id":29,"style_id":0,"buff_name":"魔炎閃獄門","ref_status_1":5,"ref_status_2":6,"min_power":30.00,"max_power":45.00,"sp_cost":14,"param_limit":147,"max_lv":1,"skill_attack":30,"only_me":0,"only_first":0},
    {"buff_id":11,"buff_kind":0,"buff_element":0,"chara_id":4,"style_id":35,"buff_name":"ウィッシュカムトゥルー","ref_status_1":5,"ref_status_2":0,"min_power":75.00,"max_power":90.00,"sp_cost":10,"param_limit":240,"max_lv":10,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":12,"buff_kind":1,"buff_element":5,"chara_id":33,"style_id":0,"buff_name":"小鳥たちへのシンフォニー","ref_status_1":5,"ref_status_2":0,"min_power":65.00,"max_power":80.00,"sp_cost":11,"param_limit":135,"max_lv":13,"skill_attack":35,"only_me":0,"only_first":0},
    {"buff_id":13,"buff_kind":6,"buff_element":0,"chara_id":34,"style_id":0,"buff_name":"必滅！ヴェインキック","ref_status_1":0,"ref_status_2":0,"min_power":70.00,"max_power":70.00,"sp_cost":14,"param_limit":0,"max_lv":1,"skill_attack":36,"only_me":1,"only_first":0},
    {"buff_id":14,"buff_kind":11,"buff_element":4,"chara_id":45,"style_id":0,"buff_name":"光芒一閃","ref_status_1":0,"ref_status_2":0,"min_power":50.00,"max_power":50.00,"sp_cost":12,"param_limit":0,"max_lv":1,"skill_attack":38,"only_me":0,"only_first":0},
    {"buff_id":15,"buff_kind":11,"buff_element":5,"chara_id":20,"style_id":0,"buff_name":"アクロマティックバレット","ref_status_1":0,"ref_status_2":0,"min_power":50.00,"max_power":50.00,"sp_cost":12,"param_limit":0,"max_lv":1,"skill_attack":39,"only_me":0,"only_first":0},
    {"buff_id":16,"buff_kind":14,"buff_element":0,"chara_id":22,"style_id":0,"buff_name":"ハートフル・ボマー","ref_status_1":0,"ref_status_2":0,"min_power":0.00,"max_power":0.00,"sp_cost":14,"param_limit":0,"max_lv":1,"skill_attack":40,"only_me":0,"only_first":0},
    {"buff_id":17,"buff_kind":0,"buff_element":0,"chara_id":10,"style_id":45,"buff_name":"アブソリュートフェノメノン","ref_status_1":5,"ref_status_2":0,"min_power":75.00,"max_power":90.00,"sp_cost":9,"param_limit":232,"max_lv":10,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":18,"buff_kind":6,"buff_element":0,"chara_id":10,"style_id":45,"buff_name":"アブソリュートフェノメノン","ref_status_1":0,"ref_status_2":0,"min_power":70.00,"max_power":70.00,"sp_cost":9,"param_limit":0,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":19,"buff_kind":7,"buff_element":0,"chara_id":10,"style_id":45,"buff_name":"アブソリュートフェノメノン","ref_status_1":0,"ref_status_2":0,"min_power":30.00,"max_power":30.00,"sp_cost":9,"param_limit":0,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":20,"buff_kind":5,"buff_element":0,"chara_id":11,"style_id":46,"buff_name":"フリージング・スペル","ref_status_1":6,"ref_status_2":5,"min_power":35.00,"max_power":50.00,"sp_cost":14,"param_limit":147,"max_lv":1,"skill_attack":41,"only_me":0,"only_first":0},
    {"buff_id":21,"buff_kind":2,"buff_element":0,"chara_id":27,"style_id":0,"buff_name":"宙舞うハイテンション","ref_status_1":5,"ref_status_2":0,"min_power":35.00,"max_power":50.00,"sp_cost":14,"param_limit":147,"max_lv":1,"skill_attack":43,"only_me":0,"only_first":0},
    {"buff_id":22,"buff_kind":5,"buff_element":0,"chara_id":36,"style_id":0,"buff_name":"覇道妄執我突邁進","ref_status_1":6,"ref_status_2":5,"min_power":35.00,"max_power":50.00,"sp_cost":14,"param_limit":149,"max_lv":1,"skill_attack":46,"only_me":0,"only_first":0},
    {"buff_id":23,"buff_kind":1,"buff_element":4,"chara_id":13,"style_id":51,"buff_name":"レイジング・レインディア","ref_status_1":5,"ref_status_2":0,"min_power":65.00,"max_power":80.00,"sp_cost":11,"param_limit":135,"max_lv":1,"skill_attack":48,"only_me":0,"only_first":0},
    {"buff_id":24,"buff_kind":1,"buff_element":3,"chara_id":6,"style_id":53,"buff_name":"二律背反スパークピッキング","ref_status_1":5,"ref_status_2":0,"min_power":65.00,"max_power":80.00,"sp_cost":15,"param_limit":147,"max_lv":1,"skill_attack":51,"only_me":0,"only_first":0},
    {"buff_id":25,"buff_kind":1,"buff_element":2,"chara_id":14,"style_id":54,"buff_name":"フローズン・スペクタクル","ref_status_1":5,"ref_status_2":0,"min_power":65.00,"max_power":80.00,"sp_cost":9,"param_limit":232,"max_lv":10,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":26,"buff_kind":0,"buff_element":0,"chara_id":38,"style_id":0,"buff_name":"第七計 無中生有","ref_status_1":5,"ref_status_2":0,"min_power":75.00,"max_power":90.00,"sp_cost":11,"param_limit":248,"max_lv":13,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":27,"buff_kind":16,"buff_element":0,"chara_id":38,"style_id":0,"buff_name":"第七計 無中生有","ref_status_1":0,"ref_status_2":0,"min_power":5.00,"max_power":5.00,"sp_cost":11,"param_limit":0,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":28,"buff_kind":3,"buff_element":0,"chara_id":1,"style_id":57,"buff_name":"迅雷風烈","ref_status_1":5,"ref_status_2":6,"min_power":30.00,"max_power":45.00,"sp_cost":16,"param_limit":149,"max_lv":1,"skill_attack":53,"only_me":0,"only_first":0},
    {"buff_id":29,"buff_kind":0,"buff_element":0,"chara_id":2,"style_id":58,"buff_name":"スーパーセル","ref_status_1":5,"ref_status_2":0,"min_power":75.00,"max_power":90.00,"sp_cost":13,"param_limit":150,"max_lv":1,"skill_attack":54,"only_me":1,"only_first":0},
    {"buff_id":30,"buff_kind":1,"buff_element":4,"chara_id":50,"style_id":59,"buff_name":"エンジェルズ・レイ","ref_status_1":5,"ref_status_2":0,"min_power":40.00,"max_power":55.00,"sp_cost":15,"param_limit":147,"max_lv":1,"skill_attack":55,"only_me":1,"only_first":0},
    {"buff_id":31,"buff_kind":1,"buff_element":1,"chara_id":28,"style_id":0,"buff_name":"夢見る幻想覚醒","ref_status_1":5,"ref_status_2":0,"min_power":65.00,"max_power":80.00,"sp_cost":12,"param_limit":256,"max_lv":13,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":32,"buff_kind":8,"buff_element":1,"chara_id":28,"style_id":0,"buff_name":"夢見る幻想覚醒","ref_status_1":0,"ref_status_2":0,"min_power":85.00,"max_power":85.00,"sp_cost":12,"param_limit":0,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":33,"buff_kind":9,"buff_element":1,"chara_id":28,"style_id":0,"buff_name":"夢見る幻想覚醒","ref_status_1":0,"ref_status_2":0,"min_power":45.00,"max_power":45.00,"sp_cost":12,"param_limit":0,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":34,"buff_kind":2,"buff_element":0,"chara_id":30,"style_id":0,"buff_name":"快感・スプリント！","ref_status_1":5,"ref_status_2":0,"min_power":35.00,"max_power":50.00,"sp_cost":11,"param_limit":216,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":35,"buff_kind":5,"buff_element":0,"chara_id":21,"style_id":0,"buff_name":"破滅でおやすみ","ref_status_1":6,"ref_status_2":5,"min_power":35.00,"max_power":50.00,"sp_cost":13,"param_limit":150,"max_lv":1,"skill_attack":58,"only_me":0,"only_first":0},
    {"buff_id":36,"buff_kind":15,"buff_element":0,"chara_id":21,"style_id":0,"buff_name":"破滅でおやすみ","ref_status_1":0,"ref_status_2":0,"min_power":0.00,"max_power":0.00,"sp_cost":13,"param_limit":0,"max_lv":1,"skill_attack":58,"only_me":0,"only_first":0},
    {"buff_id":37,"buff_kind":0,"buff_element":0,"chara_id":18,"style_id":67,"buff_name":"ルーイン・イリュージョン","ref_status_1":5,"ref_status_2":0,"min_power":75.00,"max_power":90.00,"sp_cost":10,"param_limit":240,"max_lv":10,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":38,"buff_kind":6,"buff_element":0,"chara_id":18,"style_id":67,"buff_name":"ルーイン・イリュージョン","ref_status_1":0,"ref_status_2":0,"min_power":70.00,"max_power":70.00,"sp_cost":10,"param_limit":0,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":39,"buff_kind":7,"buff_element":0,"chara_id":18,"style_id":67,"buff_name":"ルーイン・イリュージョン(初回)","ref_status_1":0,"ref_status_2":0,"min_power":30.00,"max_power":30.00,"sp_cost":10,"param_limit":0,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":1},
    {"buff_id":40,"buff_kind":2,"buff_element":0,"chara_id":18,"style_id":67,"buff_name":"ルーイン・イリュージョン(初回)","ref_status_1":5,"ref_status_2":0,"min_power":35.00,"max_power":50.00,"sp_cost":10,"param_limit":240,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":1},
    {"buff_id":41,"buff_kind":4,"buff_element":1,"chara_id":3,"style_id":68,"buff_name":"神楽浄火・閃","ref_status_1":5,"ref_status_2":6,"min_power":45.00,"max_power":60.00,"sp_cost":15,"param_limit":147,"max_lv":1,"skill_attack":62,"only_me":0,"only_first":0},
    {"buff_id":42,"buff_kind":11,"buff_element":1,"chara_id":3,"style_id":68,"buff_name":"神楽浄火・閃","ref_status_1":0,"ref_status_2":0,"min_power":65.00,"max_power":65.00,"sp_cost":0,"param_limit":0,"max_lv":1,"skill_attack":62,"only_me":0,"only_first":0},
    {"buff_id":43,"buff_kind":15,"buff_element":0,"chara_id":40,"style_id":0,"buff_name":"狂気乱舞のカーリー","ref_status_1":0,"ref_status_2":0,"min_power":0.00,"max_power":0.00,"sp_cost":0,"param_limit":0,"max_lv":1,"skill_attack":71,"only_me":0,"only_first":0},
    {"buff_id":44,"buff_kind":3,"buff_element":0,"chara_id":42,"style_id":0,"buff_name":"君に咲くグラナータ","ref_status_1":5,"ref_status_2":6,"min_power":20.00,"max_power":30.00,"sp_cost":13,"param_limit":140,"max_lv":1,"skill_attack":72,"only_me":0,"only_first":0},
    {"buff_id":45,"buff_kind":4,"buff_element":5,"chara_id":42,"style_id":0,"buff_name":"君に咲くグラナータ","ref_status_1":5,"ref_status_2":6,"min_power":30.00,"max_power":45.00,"sp_cost":13,"param_limit":140,"max_lv":1,"skill_attack":72,"only_me":0,"only_first":0},
    {"buff_id":46,"buff_kind":17,"buff_element":0,"chara_id":18,"style_id":76,"buff_name":"次の主役はあなた(破壊率200%以上)","ref_status_1":0,"ref_status_2":0,"min_power":3.00,"max_power":3.00,"sp_cost":14,"param_limit":0,"max_lv":1,"skill_attack":73,"only_me":1,"only_first":0},
    {"buff_id":47,"buff_kind":5,"buff_element":0,"chara_id":25,"style_id":77,"buff_name":"とどけ！ 誓いのしるし","ref_status_1":6,"ref_status_2":5,"min_power":35.00,"max_power":50.00,"sp_cost":16,"param_limit":152,"max_lv":1,"skill_attack":75,"only_me":0,"only_first":0},
    {"buff_id":48,"buff_kind":4,"buff_element":2,"chara_id":15,"style_id":78,"buff_name":"にゃんこ大魔法","ref_status_1":5,"ref_status_2":6,"min_power":45.00,"max_power":60.00,"sp_cost":14,"param_limit":146,"max_lv":1,"skill_attack":76,"only_me":0,"only_first":0},
    {"buff_id":49,"buff_kind":17,"buff_element":0,"chara_id":23,"style_id":0,"buff_name":"漆黒トランスサーブ","ref_status_1":0,"ref_status_2":0,"min_power":3.00,"max_power":3.00,"sp_cost":14,"param_limit":0,"max_lv":1,"skill_attack":77,"only_me":1,"only_first":0},
    {"buff_id":50,"buff_kind":9,"buff_element":5,"chara_id":43,"style_id":81,"buff_name":"シーサイドベルセルク","ref_status_1":0,"ref_status_2":0,"min_power":45.00,"max_power":45.00,"sp_cost":15,"param_limit":0,"max_lv":1,"skill_attack":78,"only_me":1,"only_first":0},
    {"buff_id":51,"buff_kind":11,"buff_element":4,"chara_id":4,"style_id":83,"buff_name":"レディ・イン・ミラージュ","ref_status_1":0,"ref_status_2":0,"min_power":65.00,"max_power":65.00,"sp_cost":15,"param_limit":0,"max_lv":1,"skill_attack":80,"only_me":0,"only_first":0},
    {"buff_id":52,"buff_kind":6,"buff_element":0,"chara_id":4,"style_id":83,"buff_name":"レディ・イン・ミラージュ","ref_status_1":0,"ref_status_2":0,"min_power":65.00,"max_power":65.00,"sp_cost":15,"param_limit":0,"max_lv":1,"skill_attack":80,"only_me":0,"only_first":0},
    {"buff_id":53,"buff_kind":7,"buff_element":0,"chara_id":4,"style_id":83,"buff_name":"レディ・イン・ミラージュ","ref_status_1":0,"ref_status_2":0,"min_power":30.00,"max_power":30.00,"sp_cost":15,"param_limit":0,"max_lv":1,"skill_attack":80,"only_me":0,"only_first":0},
    {"buff_id":54,"buff_kind":17,"buff_element":0,"chara_id":5,"style_id":84,"buff_name":"破壊のシニシズム","ref_status_1":0,"ref_status_2":0,"min_power":3.00,"max_power":3.00,"sp_cost":15,"param_limit":0,"max_lv":1,"skill_attack":81,"only_me":1,"only_first":0},
    {"buff_id":55,"buff_kind":7,"buff_element":0,"chara_id":35,"style_id":85,"buff_name":"唯雅粛正","ref_status_1":0,"ref_status_2":0,"min_power":30.00,"max_power":30.00,"sp_cost":18,"param_limit":0,"max_lv":1,"skill_attack":83,"only_me":1,"only_first":0},
    {"buff_id":56,"buff_kind":3,"buff_element":0,"chara_id":45,"style_id":86,"buff_name":"御稲荷神話","ref_status_1":5,"ref_status_2":6,"min_power":30.00,"max_power":45.00,"sp_cost":14,"param_limit":143,"max_lv":1,"skill_attack":85,"only_me":0,"only_first":0},
    {"buff_id":57,"buff_kind":5,"buff_element":0,"chara_id":45,"style_id":86,"buff_name":"御稲荷神話","ref_status_1":6,"ref_status_2":5,"min_power":35.00,"max_power":50.00,"sp_cost":14,"param_limit":143,"max_lv":1,"skill_attack":85,"only_me":0,"only_first":0},
    {"buff_id":58,"buff_kind":18,"buff_element":0,"chara_id":2,"style_id":88,"buff_name":"光輝の夜明け","ref_status_1":0,"ref_status_2":0,"min_power":0.00,"max_power":0.00,"sp_cost":14,"param_limit":0,"max_lv":1,"skill_attack":86,"only_me":0,"only_first":0},
    {"buff_id":59,"buff_kind":9,"buff_element":4,"chara_id":26,"style_id":89,"buff_name":"爽籟に舞う仁慈","ref_status_1":0,"ref_status_2":0,"min_power":45.00,"max_power":45.00,"sp_cost":14,"param_limit":0,"max_lv":1,"skill_attack":87,"only_me":1,"only_first":0},
    {"buff_id":60,"buff_kind":3,"buff_element":0,"chara_id":29,"style_id":90,"buff_name":"ほてるししむら","ref_status_1":5,"ref_status_2":6,"min_power":40.00,"max_power":55.00,"sp_cost":10,"param_limit":135,"max_lv":10,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":61,"buff_kind":19,"buff_element":0,"chara_id":29,"style_id":90,"buff_name":"ほてるししむら","ref_status_1":5,"ref_status_2":6,"min_power":80.00,"max_power":140.00,"sp_cost":10,"param_limit":135,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":62,"buff_kind":1,"buff_element":5,"chara_id":17,"style_id":91,"buff_name":"神崎流忍術・散華","ref_status_1":5,"ref_status_2":0,"min_power":65.00,"max_power":80.00,"sp_cost":15,"param_limit":147,"max_lv":10,"skill_attack":89,"only_me":1,"only_first":0},
    {"buff_id":63,"buff_kind":8,"buff_element":3,"chara_id":38,"style_id":92,"buff_name":"霓裳羽衣ノ舞・霹靂","ref_status_1":5,"ref_status_2":0,"min_power":50.00,"max_power":80.00,"sp_cost":11,"param_limit":248,"max_lv":10,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":64,"buff_kind":9,"buff_element":3,"chara_id":38,"style_id":92,"buff_name":"霓裳羽衣ノ舞・霹靂","ref_status_1":0,"ref_status_2":0,"min_power":45.00,"max_power":45.00,"sp_cost":11,"param_limit":0,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":65,"buff_kind":12,"buff_element":0,"chara_id":26,"style_id":0,"buff_name":"純愛アンビシャス","ref_status_1":0,"ref_status_2":0,"min_power":50.00,"max_power":50.00,"sp_cost":14,"param_limit":0,"max_lv":1,"skill_attack":42,"only_me":0,"only_first":0},
    {"buff_id":66,"buff_kind":12,"buff_element":0,"chara_id":26,"style_id":0,"buff_name":"純愛アンビシャス+","ref_status_1":0,"ref_status_2":0,"min_power":50.00,"max_power":50.00,"sp_cost":14,"param_limit":0,"max_lv":1,"skill_attack":94,"only_me":0,"only_first":0},
    {"buff_id":67,"buff_kind":0,"buff_element":0,"chara_id":47,"style_id":0,"buff_name":"三日月宗近+","ref_status_1":5,"ref_status_2":0,"min_power":75.00,"max_power":90.00,"sp_cost":10,"param_limit":146,"max_lv":1,"skill_attack":95,"only_me":1,"only_first":0},
    {"buff_id":1000,"buff_kind":0,"buff_element":0,"chara_id":0,"style_id":0,"buff_name":"アタッカライズ","ref_status_1":5,"ref_status_2":0,"min_power":50.00,"max_power":65.00,"sp_cost":4,"param_limit":450,"max_lv":1,"skill_attack":0,"only_me":1,"only_first":0},
    {"buff_id":1001,"buff_kind":0,"buff_element":0,"chara_id":4,"style_id":0,"buff_name":"エンハンス","ref_status_1":5,"ref_status_2":0,"min_power":50.00,"max_power":65.00,"sp_cost":6,"param_limit":208,"max_lv":10,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":1002,"buff_kind":0,"buff_element":0,"chara_id":10,"style_id":0,"buff_name":"エンハンス","ref_status_1":5,"ref_status_2":0,"min_power":50.00,"max_power":65.00,"sp_cost":6,"param_limit":208,"max_lv":10,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":1003,"buff_kind":0,"buff_element":0,"chara_id":18,"style_id":0,"buff_name":"エンハンス","ref_status_1":5,"ref_status_2":0,"min_power":50.00,"max_power":65.00,"sp_cost":6,"param_limit":208,"max_lv":10,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":1004,"buff_kind":0,"buff_element":0,"chara_id":20,"style_id":0,"buff_name":"エンハンス","ref_status_1":5,"ref_status_2":0,"min_power":50.00,"max_power":65.00,"sp_cost":6,"param_limit":208,"max_lv":10,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":1005,"buff_kind":0,"buff_element":0,"chara_id":28,"style_id":0,"buff_name":"エンハンス","ref_status_1":5,"ref_status_2":0,"min_power":50.00,"max_power":65.00,"sp_cost":6,"param_limit":208,"max_lv":10,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":1006,"buff_kind":0,"buff_element":0,"chara_id":33,"style_id":0,"buff_name":"エンハンス","ref_status_1":5,"ref_status_2":0,"min_power":50.00,"max_power":65.00,"sp_cost":6,"param_limit":208,"max_lv":10,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":1007,"buff_kind":0,"buff_element":0,"chara_id":38,"style_id":0,"buff_name":"エンハンス","ref_status_1":5,"ref_status_2":0,"min_power":50.00,"max_power":65.00,"sp_cost":6,"param_limit":208,"max_lv":10,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":1008,"buff_kind":0,"buff_element":0,"chara_id":43,"style_id":0,"buff_name":"導きの号令","ref_status_1":5,"ref_status_2":0,"min_power":50.00,"max_power":65.00,"sp_cost":8,"param_limit":224,"max_lv":10,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":1009,"buff_kind":0,"buff_element":0,"chara_id":2,"style_id":0,"buff_name":"クールダウン","ref_status_1":5,"ref_status_2":0,"min_power":75.00,"max_power":90.00,"sp_cost":5,"param_limit":200,"max_lv":10,"skill_attack":0,"only_me":1,"only_first":0},
    {"buff_id":1010,"buff_kind":0,"buff_element":0,"chara_id":13,"style_id":0,"buff_name":"クールダウン","ref_status_1":5,"ref_status_2":0,"min_power":75.00,"max_power":90.00,"sp_cost":5,"param_limit":200,"max_lv":10,"skill_attack":0,"only_me":1,"only_first":0},
    {"buff_id":1011,"buff_kind":0,"buff_element":0,"chara_id":19,"style_id":0,"buff_name":"クールダウン","ref_status_1":5,"ref_status_2":0,"min_power":75.00,"max_power":90.00,"sp_cost":5,"param_limit":200,"max_lv":10,"skill_attack":0,"only_me":1,"only_first":0},
    {"buff_id":1012,"buff_kind":0,"buff_element":0,"chara_id":35,"style_id":0,"buff_name":"クールダウン","ref_status_1":5,"ref_status_2":0,"min_power":75.00,"max_power":90.00,"sp_cost":5,"param_limit":200,"max_lv":10,"skill_attack":0,"only_me":1,"only_first":0},
    {"buff_id":1013,"buff_kind":0,"buff_element":0,"chara_id":10,"style_id":0,"buff_name":"ドーピング","ref_status_1":5,"ref_status_2":0,"min_power":75.00,"max_power":90.00,"sp_cost":7,"param_limit":216,"max_lv":10,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":1014,"buff_kind":0,"buff_element":0,"chara_id":38,"style_id":0,"buff_name":"臥龍天命","ref_status_1":5,"ref_status_2":0,"min_power":75.00,"max_power":90.00,"sp_cost":7,"param_limit":216,"max_lv":10,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":1015,"buff_kind":0,"buff_element":0,"chara_id":28,"style_id":0,"buff_name":"決戦前夜","ref_status_1":5,"ref_status_2":0,"min_power":75.00,"max_power":90.00,"sp_cost":7,"param_limit":216,"max_lv":10,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":1016,"buff_kind":0,"buff_element":0,"chara_id":4,"style_id":0,"buff_name":"フィルエンハンス","ref_status_1":5,"ref_status_2":0,"min_power":50.00,"max_power":65.00,"sp_cost":9,"param_limit":232,"max_lv":10,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":1017,"buff_kind":0,"buff_element":0,"chara_id":18,"style_id":0,"buff_name":"フィルエンハンス","ref_status_1":5,"ref_status_2":0,"min_power":50.00,"max_power":65.00,"sp_cost":9,"param_limit":232,"max_lv":10,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":1018,"buff_kind":0,"buff_element":0,"chara_id":20,"style_id":0,"buff_name":"フィルエンハンス","ref_status_1":5,"ref_status_2":0,"min_power":50.00,"max_power":65.00,"sp_cost":9,"param_limit":232,"max_lv":10,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":1019,"buff_kind":0,"buff_element":0,"chara_id":13,"style_id":0,"buff_name":"キリングエッジ","ref_status_1":5,"ref_status_2":0,"min_power":35.00,"max_power":50.00,"sp_cost":9,"param_limit":129,"max_lv":1,"skill_attack":0,"only_me":1,"only_first":0},
    {"buff_id":1020,"buff_kind":0,"buff_element":0,"chara_id":19,"style_id":0,"buff_name":"ハネ殺し","ref_status_1":5,"ref_status_2":0,"min_power":35.00,"max_power":50.00,"sp_cost":5,"param_limit":120,"max_lv":1,"skill_attack":999,"only_me":1,"only_first":0},
    {"buff_id":1021,"buff_kind":0,"buff_element":0,"chara_id":13,"style_id":0,"buff_name":"デディケイトギフト","ref_status_1":5,"ref_status_2":0,"min_power":75.00,"max_power":90.00,"sp_cost":5,"param_limit":200,"max_lv":10,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":1022,"buff_kind":0,"buff_element":0,"chara_id":44,"style_id":0,"buff_name":"空","ref_status_1":5,"ref_status_2":0,"min_power":50.00,"max_power":65.00,"sp_cost":5,"param_limit":200,"max_lv":10,"skill_attack":0,"only_me":1,"only_first":0},
    {"buff_id":1023,"buff_kind":0,"buff_element":0,"chara_id":48,"style_id":0,"buff_name":"細雪","ref_status_1":5,"ref_status_2":0,"min_power":75.00,"max_power":90.00,"sp_cost":6,"param_limit":208,"max_lv":10,"skill_attack":0,"only_me":1,"only_first":0},
    {"buff_id":1024,"buff_kind":0,"buff_element":0,"chara_id":9,"style_id":0,"buff_name":"残心撃","ref_status_1":5,"ref_status_2":0,"min_power":35.00,"max_power":50.00,"sp_cost":4,"param_limit":126,"max_lv":1,"skill_attack":999,"only_me":1,"only_first":0},
    {"buff_id":1101,"buff_kind":1,"buff_element":4,"chara_id":4,"style_id":0,"buff_name":"ホーリーエンハンス","ref_status_1":5,"ref_status_2":0,"min_power":65.00,"max_power":80.00,"sp_cost":6,"param_limit":208,"max_lv":10,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":1102,"buff_kind":1,"buff_element":5,"chara_id":43,"style_id":0,"buff_name":"赤面スティグマ","ref_status_1":5,"ref_status_2":0,"min_power":65.00,"max_power":80.00,"sp_cost":5,"param_limit":200,"max_lv":10,"skill_attack":0,"only_me":1,"only_first":0},
    {"buff_id":1103,"buff_kind":1,"buff_element":2,"chara_id":17,"style_id":0,"buff_name":"淡雪","ref_status_1":5,"ref_status_2":0,"min_power":65.00,"max_power":80.00,"sp_cost":4,"param_limit":192,"max_lv":10,"skill_attack":0,"only_me":1,"only_first":0},
    {"buff_id":1104,"buff_kind":1,"buff_element":5,"chara_id":23,"style_id":0,"buff_name":"被害妄想","ref_status_1":5,"ref_status_2":0,"min_power":65.00,"max_power":80.00,"sp_cost":4,"param_limit":192,"max_lv":10,"skill_attack":0,"only_me":1,"only_first":0},
    {"buff_id":1105,"buff_kind":1,"buff_element":3,"chara_id":37,"style_id":0,"buff_name":"ライトニングロア","ref_status_1":5,"ref_status_2":0,"min_power":40.00,"max_power":55.00,"sp_cost":4,"param_limit":129,"max_lv":1,"skill_attack":0,"only_me":1,"only_first":0},
    {"buff_id":1106,"buff_kind":1,"buff_element":4,"chara_id":48,"style_id":0,"buff_name":"夢十夜","ref_status_1":5,"ref_status_2":0,"min_power":40.00,"max_power":55.00,"sp_cost":9,"param_limit":132,"max_lv":1,"skill_attack":0,"only_me":1,"only_first":0},
    {"buff_id":1107,"buff_kind":1,"buff_element":5,"chara_id":48,"style_id":0,"buff_name":"大切り盛り","ref_status_1":5,"ref_status_2":0,"min_power":40.00,"max_power":55.00,"sp_cost":6,"param_limit":123,"max_lv":1,"skill_attack":0,"only_me":1,"only_first":0},
    {"buff_id":1108,"buff_kind":1,"buff_element":3,"chara_id":47,"style_id":0,"buff_name":"とある衝撃","ref_status_1":5,"ref_status_2":0,"min_power":65.00,"max_power":80.00,"sp_cost":5,"param_limit":200,"max_lv":10,"skill_attack":0,"only_me":1,"only_first":0},
    {"buff_id":1201,"buff_kind":2,"buff_element":0,"chara_id":50,"style_id":0,"buff_name":"インサイト","ref_status_1":5,"ref_status_2":0,"min_power":35.00,"max_power":50.00,"sp_cost":5,"param_limit":200,"max_lv":10,"skill_attack":0,"only_me":1,"only_first":0},
    {"buff_id":1301,"buff_kind":3,"buff_element":0,"chara_id":38,"style_id":0,"buff_name":"臥龍演舞斬","ref_status_1":5,"ref_status_2":6,"min_power":30.00,"max_power":45.00,"sp_cost":6,"param_limit":123,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":1302,"buff_kind":3,"buff_element":0,"chara_id":3,"style_id":0,"buff_name":"ハードブレード","ref_status_1":5,"ref_status_2":6,"min_power":30.00,"max_power":45.00,"sp_cost":8,"param_limit":129,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":1303,"buff_kind":3,"buff_element":0,"chara_id":15,"style_id":0,"buff_name":"ウィザードショット","ref_status_1":5,"ref_status_2":6,"min_power":30.00,"max_power":45.00,"sp_cost":4,"param_limit":117,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":1351,"buff_kind":3,"buff_element":0,"chara_id":21,"style_id":0,"buff_name":"レイジングシャウト","ref_status_1":5,"ref_status_2":6,"min_power":20.00,"max_power":30.00,"sp_cost":5,"param_limit":120,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":1352,"buff_kind":3,"buff_element":0,"chara_id":24,"style_id":0,"buff_name":"ラブカ・ブレード","ref_status_1":5,"ref_status_2":6,"min_power":20.00,"max_power":30.00,"sp_cost":6,"param_limit":123,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":1401,"buff_kind":4,"buff_element":3,"chara_id":11,"style_id":0,"buff_name":"ミストイングレイブ","ref_status_1":5,"ref_status_2":6,"min_power":45.00,"max_power":60.00,"sp_cost":7,"param_limit":126,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":1402,"buff_kind":4,"buff_element":5,"chara_id":21,"style_id":0,"buff_name":"先に逝くなよ","ref_status_1":5,"ref_status_2":6,"min_power":45.00,"max_power":60.00,"sp_cost":6,"param_limit":123,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":1403,"buff_kind":4,"buff_element":1,"chara_id":29,"style_id":0,"buff_name":"ヴィクタープラクティス","ref_status_1":5,"ref_status_2":6,"min_power":45.00,"max_power":60.00,"sp_cost":6,"param_limit":123,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":1404,"buff_kind":4,"buff_element":4,"chara_id":47,"style_id":0,"buff_name":"夜雨","ref_status_1":5,"ref_status_2":6,"min_power":45.00,"max_power":60.00,"sp_cost":9,"param_limit":131,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":1405,"buff_kind":4,"buff_element":5,"chara_id":47,"style_id":0,"buff_name":"夜雨","ref_status_1":5,"ref_status_2":6,"min_power":45.00,"max_power":60.00,"sp_cost":9,"param_limit":131,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":1451,"buff_kind":4,"buff_element":1,"chara_id":29,"style_id":0,"buff_name":"怒裂昂","ref_status_1":5,"ref_status_2":6,"min_power":30.00,"max_power":45.00,"sp_cost":8,"param_limit":129,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":1452,"buff_kind":4,"buff_element":2,"chara_id":16,"style_id":0,"buff_name":"ビスコッティ","ref_status_1":5,"ref_status_2":6,"min_power":30.00,"max_power":45.00,"sp_cost":9,"param_limit":129,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":1501,"buff_kind":5,"buff_element":0,"chara_id":45,"style_id":0,"buff_name":"呪怨の矢","ref_status_1":6,"ref_status_2":5,"min_power":35.00,"max_power":50.00,"sp_cost":5,"param_limit":120,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":1502,"buff_kind":5,"buff_element":0,"chara_id":24,"style_id":0,"buff_name":"ディープブロー","ref_status_1":6,"ref_status_2":5,"min_power":35.00,"max_power":50.00,"sp_cost":5,"param_limit":120,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":1551,"buff_kind":5,"buff_element":0,"chara_id":3,"style_id":0,"buff_name":"ネイキッドイレイザー","ref_status_1":6,"ref_status_2":5,"min_power":35.00,"max_power":50.00,"sp_cost":9,"param_limit":132,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":1552,"buff_kind":5,"buff_element":0,"chara_id":45,"style_id":0,"buff_name":"薙の矢","ref_status_1":6,"ref_status_2":5,"min_power":35.00,"max_power":50.00,"sp_cost":7,"param_limit":126,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":1553,"buff_kind":5,"buff_element":0,"chara_id":24,"style_id":0,"buff_name":"大海原","ref_status_1":6,"ref_status_2":5,"min_power":35.00,"max_power":50.00,"sp_cost":6,"param_limit":129,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":1600,"buff_kind":6,"buff_element":0,"chara_id":0,"style_id":0,"buff_name":"クリティカルシンキング","ref_status_1":5,"ref_status_2":0,"min_power":40.00,"max_power":70.00,"sp_cost":5,"param_limit":450,"max_lv":1,"skill_attack":0,"only_me":1,"only_first":0},
    {"buff_id":1601,"buff_kind":6,"buff_element":0,"chara_id":15,"style_id":0,"buff_name":"ルーンバースト","ref_status_1":5,"ref_status_2":0,"min_power":35.00,"max_power":45.00,"sp_cost":9,"param_limit":132,"max_lv":1,"skill_attack":999,"only_me":1,"only_first":0},
    {"buff_id":1602,"buff_kind":6,"buff_element":0,"chara_id":39,"style_id":0,"buff_name":"ホールドアップマインド","ref_status_1":5,"ref_status_2":0,"min_power":35.00,"max_power":45.00,"sp_cost":8,"param_limit":224,"max_lv":10,"skill_attack":0,"only_me":1,"only_first":0},
    {"buff_id":1603,"buff_kind":6,"buff_element":0,"chara_id":35,"style_id":0,"buff_name":"冀望","ref_status_1":5,"ref_status_2":0,"min_power":40.00,"max_power":70.00,"sp_cost":8,"param_limit":216,"max_lv":10,"skill_attack":0,"only_me":1,"only_first":0},
    {"buff_id":1700,"buff_kind":7,"buff_element":0,"chara_id":0,"style_id":0,"buff_name":"コンセントレーション","ref_status_1":5,"ref_status_2":0,"min_power":10.00,"max_power":20.00,"sp_cost":4,"param_limit":450,"max_lv":1,"skill_attack":0,"only_me":1,"only_first":0},
    {"buff_id":2001,"buff_kind":10,"buff_element":0,"chara_id":35,"style_id":0,"buff_name":"冀望","ref_status_1":5,"ref_status_2":0,"min_power":20.00,"max_power":30.00,"sp_cost":8,"param_limit":216,"max_lv":1,"skill_attack":0,"only_me":1,"only_first":0},
    {"buff_id":2002,"buff_kind":10,"buff_element":0,"chara_id":33,"style_id":0,"buff_name":"聖域のカンタータ","ref_status_1":5,"ref_status_2":0,"min_power":20.00,"max_power":30.00,"sp_cost":7,"param_limit":216,"max_lv":10,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":2003,"buff_kind":10,"buff_element":0,"chara_id":47,"style_id":0,"buff_name":"メイドの嗜み","ref_status_1":5,"ref_status_2":0,"min_power":20.00,"max_power":30.00,"sp_cost":5,"param_limit":200,"max_lv":10,"skill_attack":0,"only_me":1,"only_first":0},
    {"buff_id":2051,"buff_kind":10,"buff_element":0,"chara_id":32,"style_id":0,"buff_name":"ハイセンス・ショット","ref_status_1":5,"ref_status_2":0,"min_power":20.00,"max_power":30.00,"sp_cost":6,"param_limit":123,"max_lv":1,"skill_attack":0,"only_me":1,"only_first":0},
    {"buff_id":2052,"buff_kind":10,"buff_element":0,"chara_id":35,"style_id":0,"buff_name":"残心","ref_status_1":5,"ref_status_2":0,"min_power":20.00,"max_power":30.00,"sp_cost":6,"param_limit":123,"max_lv":1,"skill_attack":0,"only_me":1,"only_first":0},
    {"buff_id":2053,"buff_kind":10,"buff_element":0,"chara_id":36,"style_id":0,"buff_name":"喧嘩上等！！","ref_status_1":5,"ref_status_2":0,"min_power":20.00,"max_power":30.00,"sp_cost":9,"param_limit":132,"max_lv":1,"skill_attack":0,"only_me":1,"only_first":0},
    {"buff_id":2401,"buff_kind":14,"buff_element":0,"chara_id":6,"style_id":0,"buff_name":"きらめきのエール","ref_status_1":0,"ref_status_2":0,"min_power":0.00,"max_power":0.00,"sp_cost":8,"param_limit":0,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":2501,"buff_kind":15,"buff_element":0,"chara_id":11,"style_id":0,"buff_name":"カースサイス","ref_status_1":0,"ref_status_2":0,"min_power":0.00,"max_power":0.00,"sp_cost":4,"param_limit":0,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":2502,"buff_kind":15,"buff_element":0,"chara_id":45,"style_id":0,"buff_name":"天変の相","ref_status_1":0,"ref_status_2":0,"min_power":0.00,"max_power":0.00,"sp_cost":5,"param_limit":0,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":2503,"buff_kind":15,"buff_element":0,"chara_id":45,"style_id":0,"buff_name":"神妙","ref_status_1":0,"ref_status_2":0,"min_power":0.00,"max_power":0.00,"sp_cost":8,"param_limit":0,"max_lv":1,"skill_attack":0,"only_me":0,"only_first":0},
    {"buff_id":2601,"buff_kind":16,"buff_element":0,"chara_id":13,"style_id":0,"buff_name":"イチコロスマイル","ref_status_1":0,"ref_status_2":0,"min_power":5.00,"max_power":5.00,"sp_cost":5,"param_limit":0,"max_lv":1,"skill_attack":0,"only_me":1,"only_first":0},
    {"buff_id":2602,"buff_kind":16,"buff_element":0,"chara_id":34,"style_id":0,"buff_name":"バックラッシュ","ref_status_1":0,"ref_status_2":0,"min_power":5.00,"max_power":5.00,"sp_cost":5,"param_limit":0,"max_lv":1,"skill_attack":0,"only_me":1,"only_first":0},
    {"buff_id":2701,"buff_kind":17,"buff_element":0,"chara_id":17,"style_id":0,"buff_name":"心意活性","ref_status_1":5,"ref_status_2":0,"min_power":2.00,"max_power":3.00,"sp_cost":5,"param_limit":129,"max_lv":1,"skill_attack":0,"only_me":1,"only_first":0},
    {"buff_id":2702,"buff_kind":17,"buff_element":0,"chara_id":39,"style_id":0,"buff_name":"ホールドアップマインド","ref_status_1":0,"ref_status_2":0,"min_power":2.00,"max_power":2.00,"sp_cost":8,"param_limit":0,"max_lv":1,"skill_attack":0,"only_me":1,"only_first":0},
    {"buff_id":2703,"buff_kind":17,"buff_element":0,"chara_id":46,"style_id":0,"buff_name":"ブリリアント・グローリー","ref_status_1":5,"ref_status_2":0,"min_power":2.00,"max_power":3.00,"sp_cost":7,"param_limit":208,"max_lv":1,"skill_attack":0,"only_me":1,"only_first":0},
    ]
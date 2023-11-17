let ability_list = [
    {"ability_id":1,"ability_name":"灼熱の陣","ability_explan":"バトル開始時 前衛にいると火属性強化フィールド(弱)を展開","ability_short_explan":"火属性強化フィールド(弱)を展開","ability_target":0,"ability_kind":4,"ability_element":1,"ability_type":1,"ability_power":20},
    {"ability_id":2,"ability_name":"凍れる陣","ability_explan":"バトル開始時 前衛にいると氷属性強化フィールド(弱)を展開","ability_short_explan":"氷属性強化フィールド(弱)を展開","ability_target":0,"ability_kind":4,"ability_element":2,"ability_type":1,"ability_power":20},
    {"ability_id":3,"ability_name":"雷鳴の陣","ability_explan":"バトル開始時 前衛にいると雷属性強化フィールド(弱)を展開","ability_short_explan":"雷属性強化フィールド(弱)を展開","ability_target":0,"ability_kind":4,"ability_element":3,"ability_type":1,"ability_power":20},
    {"ability_id":4,"ability_name":"栄光の陣","ability_explan":"バトル開始時 前衛にいると光属性強化フィールド(弱)を展開","ability_short_explan":"光属性強化フィールド(弱)を展開","ability_target":0,"ability_kind":4,"ability_element":4,"ability_type":1,"ability_power":20},
    {"ability_id":5,"ability_name":"闇夜の陣","ability_explan":"バトル開始時 前衛にいると闇属性強化フィールド(弱)を展開","ability_short_explan":"闇属性強化フィールド(弱)を展開","ability_target":0,"ability_kind":4,"ability_element":5,"ability_type":1,"ability_power":20},
    {"ability_id":6,"ability_name":"狂乱の型","ability_explan":"バトル開始時 前衛にいると自身の連撃数(大ダメージ)+3(1回)","ability_short_explan":"連撃数(大ダメージ)+3(1回)","ability_target":5,"ability_kind":5,"ability_element":0,"ability_type":1,"ability_power":120},
    {"ability_id":201,"ability_name":"火の強威","ability_explan":"行動開始時に前衛にいると自身の火属性のスキル攻撃力+25%","ability_short_explan":"火属性のスキル攻撃力+25%","ability_target":1,"ability_kind":1,"ability_element":1,"ability_type":1,"ability_power":25},
    {"ability_id":202,"ability_name":"氷の強威","ability_explan":"行動開始時に前衛にいると自身の氷属性のスキル攻撃力+25%","ability_short_explan":"氷属性のスキル攻撃力+25%","ability_target":1,"ability_kind":1,"ability_element":2,"ability_type":1,"ability_power":25},
    {"ability_id":203,"ability_name":"雷の強威","ability_explan":"行動開始時に前衛にいると自身の雷属性のスキル攻撃力+25%","ability_short_explan":"雷属性のスキル攻撃力+25%","ability_target":1,"ability_kind":1,"ability_element":3,"ability_type":1,"ability_power":25},
    {"ability_id":204,"ability_name":"光の強威","ability_explan":"行動開始時に前衛にいると自身の光属性のスキル攻撃力+25%","ability_short_explan":"光属性のスキル攻撃力+25%","ability_target":1,"ability_kind":1,"ability_element":4,"ability_type":1,"ability_power":25},
    {"ability_id":205,"ability_name":"闇の強威","ability_explan":"行動開始時に前衛にいると自身の闇属性のスキル攻撃力+25%","ability_short_explan":"闇属性のスキル攻撃力+25%","ability_target":1,"ability_kind":1,"ability_element":5,"ability_type":1,"ability_power":25},
    {"ability_id":206,"ability_name":"星空","ability_explan":"行動開始時 前衛にいるとチームのクリティカル率+10%","ability_short_explan":"クリティカル率+10%","ability_target":2,"ability_kind":2,"ability_element":0,"ability_type":1,"ability_power":10},
    {"ability_id":207,"ability_name":"英雄の凱歌","ability_explan":"行動開始時 前衛にいるとチームのスキル攻撃力+10%","ability_short_explan":"スキル攻撃力+10%","ability_target":2,"ability_kind":1,"ability_element":0,"ability_type":1,"ability_power":10},
    {"ability_id":208,"ability_name":"怒涛","ability_explan":"行動開始時 前衛にいると自身のクリティカルダメージ+30%","ability_short_explan":"クリティカルダメージ+30%","ability_target":1,"ability_kind":3,"ability_element":0,"ability_type":1,"ability_power":30},
    {"ability_id":209,"ability_name":"技巧","ability_explan":"行動開始時 前衛にいると自身のクリティカル率+30%","ability_short_explan":"クリティカル率+30%","ability_target":1,"ability_kind":2,"ability_element":0,"ability_type":1,"ability_power":30},
    {"ability_id":210,"ability_name":"高揚","ability_explan":"行動開始時 前衛にいるとトークン1つにつき 攻撃力+5%","ability_short_explan":"トークン1つにつき 攻撃力+5%","ability_target":1,"ability_kind":6,"ability_element":0,"ability_type":2,"ability_power":5},
    {"ability_id":211,"ability_name":"野生の勘","ability_explan":"行動開始時 前衛にいると確率で スキル攻撃力+30%","ability_short_explan":"確率で スキル攻撃力+30%","ability_target":1,"ability_kind":1,"ability_element":0,"ability_type":2,"ability_power":30},
    {"ability_id":212,"ability_name":"勇猛","ability_explan":"行動開始時に前衛 & DP100%以上のとき自身のスキル攻撃力+30%","ability_short_explan":"DP100%以上のときスキル攻撃力+30%","ability_target":1,"ability_kind":1,"ability_element":0,"ability_type":2,"ability_power":30},
    {"ability_id":213,"ability_name":"陽動作戦","ability_explan":"行動開始時に前衛 & DP30%以下のとき前衛のスキル攻撃力+30%","ability_short_explan":"DP30%以下のときスキル攻撃力+30%","ability_target":2,"ability_kind":1,"ability_element":0,"ability_type":2,"ability_power":30},
    {"ability_id":214,"ability_name":"壮烈","ability_explan":"行動開始時に前衛 & DP80%以上のとき自身のスキル攻撃力+20%","ability_short_explan":"DP80%以上のときスキル攻撃力+20%","ability_target":1,"ability_kind":1,"ability_element":0,"ability_type":2,"ability_power":20},
    {"ability_id":217,"ability_name":"雷の采配","ability_explan":"行動開始時に前衛 & DP80%以上のとき前衛の雷属性のスキル攻撃力+18%","ability_short_explan":"DP80%以上のとき雷属性のスキル攻撃力+18%","ability_target":2,"ability_kind":1,"ability_element":3,"ability_type":2,"ability_power":18},
    {"ability_id":218,"ability_name":"光の采配","ability_explan":"行動開始時に前衛 & DP80%以上のとき前衛の光属性のスキル攻撃力+18%","ability_short_explan":"DP80%以上のとき光属性のスキル攻撃力+18%","ability_target":2,"ability_kind":1,"ability_element":4,"ability_type":2,"ability_power":18},
    {"ability_id":220,"ability_name":"決心","ability_explan":"行動開始時に前衛 & SP15以上のとき自身のスキル攻撃力+30%","ability_short_explan":"SP15以上のときスキル攻撃力+30%","ability_target":1,"ability_kind":1,"ability_element":0,"ability_type":2,"ability_power":30},
    {"ability_id":221,"ability_name":"鋭気","ability_explan":"行動開始時に前衛 & 敵が挑発または注目状態のとき自身のスキル攻撃力+30%","ability_short_explan":"敵が挑発または注目状態のときスキル攻撃力+30%","ability_target":1,"ability_kind":1,"ability_element":0,"ability_type":2,"ability_power":30},
    {"ability_id":222,"ability_name":"弱化","ability_explan":"行動開始時に前衛にいると敵の防御力-10%","ability_short_explan":"敵の防御力-10%","ability_target":2,"ability_kind":7,"ability_element":0,"ability_type":1,"ability_power":10},
    {"ability_id":225,"ability_name":"雷の制圧","ability_explan":"行動開始時に前衛 & DP80%以上のとき敵の雷属性の防御力-18%","ability_short_explan":"DP80%以上のとき敵の雷属性の防御力-18%","ability_target":2,"ability_kind":7,"ability_element":3,"ability_type":1,"ability_power":18},
    {"ability_id":301,"ability_name":"専心","ability_explan":"オーバードライブ開始時 前衛にいると自身のスキル攻撃力+20%","ability_short_explan":"OD開始時 前衛にいるとスキル攻撃力+20%","ability_target":1,"ability_kind":1,"ability_element":0,"ability_type":2,"ability_power":20},
    {"ability_id":401,"ability_name":"火の波動","ability_explan":"味方全体の火属性スキル攻撃力を常時+10%","ability_short_explan":"火属性スキル攻撃力を常時+10%","ability_target":3,"ability_kind":1,"ability_element":1,"ability_type":1,"ability_power":10},
    {"ability_id":402,"ability_name":"氷の波動","ability_explan":"味方全体の氷属性スキル攻撃力を常時+10%","ability_short_explan":"氷属性スキル攻撃力を常時+10%","ability_target":3,"ability_kind":1,"ability_element":2,"ability_type":1,"ability_power":10},
    {"ability_id":403,"ability_name":"雷の波動","ability_explan":"味方全体の雷属性スキル攻撃力を常時+10%","ability_short_explan":"雷属性スキル攻撃力を常時+10%","ability_target":3,"ability_kind":1,"ability_element":3,"ability_type":1,"ability_power":10},
    {"ability_id":404,"ability_name":"光の波動","ability_explan":"味方全体の光属性スキル攻撃力を常時+10%","ability_short_explan":"光属性スキル攻撃力を常時+10%","ability_target":3,"ability_kind":1,"ability_element":4,"ability_type":1,"ability_power":10},
    {"ability_id":405,"ability_name":"闇の波動","ability_explan":"味方全体の闇属性スキル攻撃力を常時+10%","ability_short_explan":"闇属性スキル攻撃力を常時+10%","ability_target":3,"ability_kind":1,"ability_element":5,"ability_type":1,"ability_power":10},
    {"ability_id":501,"ability_name":"気転","ability_explan":"自身がかけたスキル攻撃力アップの効果量+25%","ability_short_explan":"自身がかけたスキル攻撃力アップの効果量+25%","ability_target":4,"ability_kind":8,"ability_element":0,"ability_type":1,"ability_power":25},
    {"ability_id":502,"ability_name":"侵食","ability_explan":"自身がかけた防御力ダウンの効果量+25%","ability_short_explan":"自身がかけた防御力ダウンの効果量+25%","ability_target":4,"ability_kind":9,"ability_element":0,"ability_type":1,"ability_power":25},
    {"ability_id":1001,"ability_name":"威嚇の叫び","ability_explan":"バトル開始時 前衛にいると高確率で敵をスタン","ability_short_explan":"","ability_target":0,"ability_kind":0,"ability_element":0,"ability_type":0,"ability_power":0},
    {"ability_id":1002,"ability_name":"洗練","ability_explan":"バトル開始時 前衛にいると自身のトークン+5","ability_short_explan":"","ability_target":0,"ability_kind":0,"ability_element":0,"ability_type":0,"ability_power":0},
    {"ability_id":1003,"ability_name":"厄災","ability_explan":"バトル開始時 前衛にいると敵を厄状態(2ターン)","ability_short_explan":"","ability_target":0,"ability_kind":0,"ability_element":0,"ability_type":0,"ability_power":0},
    {"ability_id":1004,"ability_name":"俊敏","ability_explan":"バトル開始時 前衛にいると自身のSP+5","ability_short_explan":"","ability_target":0,"ability_kind":0,"ability_element":0,"ability_type":0,"ability_power":0},
    {"ability_id":1101,"ability_name":"閃光","ability_explan":"ターン開始時に前衛にいると自身のSP+1","ability_short_explan":"","ability_target":0,"ability_kind":0,"ability_element":0,"ability_type":0,"ability_power":0},
    {"ability_id":1102,"ability_name":"くじけぬ心","ability_explan":"ターン開始時 前衛 & ブレイク状態のとき自身のDPを復活(1回)","ability_short_explan":"","ability_target":0,"ability_kind":0,"ability_element":0,"ability_type":0,"ability_power":0},
    {"ability_id":1103,"ability_name":"向上心","ability_explan":"ターン開始時 前衛にいるとオーバードライブゲージ+5%","ability_short_explan":"","ability_target":0,"ability_kind":0,"ability_element":0,"ability_type":0,"ability_power":0},
    {"ability_id":1104,"ability_name":"賢守","ability_explan":"ターン開始時 前衛にいると自身の防御力+30%","ability_short_explan":"","ability_target":0,"ability_kind":0,"ability_element":0,"ability_type":0,"ability_power":0},
    {"ability_id":1105,"ability_name":"博愛の心","ability_explan":"ターン開始時 前衛にいると前衛のDP+10%","ability_short_explan":"","ability_target":0,"ability_kind":0,"ability_element":0,"ability_type":0,"ability_power":0},
    {"ability_id":1106,"ability_name":"慈愛の心","ability_explan":"ターン開始時 前衛にいると味方全体のDP+7%","ability_short_explan":"","ability_target":0,"ability_kind":0,"ability_element":0,"ability_type":0,"ability_power":0},
    {"ability_id":1201,"ability_name":"鮮烈","ability_explan":"行動開始時に前衛にいると自身のスキル攻撃時の破壊率上昇量+30%","ability_short_explan":"","ability_target":0,"ability_kind":0,"ability_element":0,"ability_type":0,"ability_power":0},
    {"ability_id":1202,"ability_name":"強烈","ability_explan":"行動開始時に前衛にいると前衛のスキル攻撃時の破壊率上昇量+20%","ability_short_explan":"","ability_target":0,"ability_kind":0,"ability_element":0,"ability_type":0,"ability_power":0},
    {"ability_id":1501,"ability_name":"恵風","ability_explan":"自身がかけた回復スキルの効果量+20%","ability_short_explan":"","ability_target":0,"ability_kind":0,"ability_element":0,"ability_type":0,"ability_power":0},
    {"ability_id":1502,"ability_name":"堅忍","ability_explan":"敵行動開始時に前衛 & DP破損状態で自身の防御力+50%","ability_short_explan":"","ability_target":0,"ability_kind":0,"ability_element":0,"ability_type":0,"ability_power":0},
    {"ability_id":1503,"ability_name":"戦勲","ability_explan":"ダメージを与えた敵1体につきトークンを1上昇(追撃を除く)","ability_short_explan":"","ability_target":0,"ability_kind":0,"ability_element":0,"ability_type":0,"ability_power":0},
    {"ability_id":1504,"ability_name":"戦士の祝福","ability_explan":"スキルでDP回復効果を受けるとトークンを1上昇","ability_short_explan":"","ability_target":0,"ability_kind":0,"ability_element":0,"ability_type":0,"ability_power":0},
    ]
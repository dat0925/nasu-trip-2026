/* ==========================================================================
   那須 2泊3日 ── 出発日別データ
   index.html / compare.html の両方がこのファイルを読み込みます。

   宿泊料は全日程 2026年8月28日 20:00 時点で じゃらんnet の
   日付指定プラン一覧（大人2名＋小学生1名・1室）から取得した実測値です。
   推定・按分は使っていません。空室と料金は動くので、再調査したら
   下の stay の数字を書き換えてください（合計・ポイント・グラフは自動計算）。
   ========================================================================== */
(function (global) {
  'use strict';

  /* ---------- 出発日によらない固定費（3名合計・税込） ---------- */
  var FIXED = [
    { key:'steak',     label:'ステーキ食べ放題 C',        sub:'1,900円 × 3名・ねむりんで現地精算',      value:5700  },
    { key:'nasuhai',   label:'那須ハイランドパーク',      sub:'ファンタジーパスセット・前売り割引（−900円）', value:15700 },
    { key:'trickart',  label:'那須とりっくあーとぴあ',    sub:'2館共通券',                              value:6100  },
    { key:'treasure',  label:'トレジャーストーンパーク',  sub:'地下鉱山＋クリスタルリバー',              value:4200  },
    { key:'transport', label:'交通費',                    sub:'東北道往復ETC 約8,600＋ガソリン 約5,700', value:14300 },
    { key:'misc',      label:'昼食3回・軽食・お土産',     sub:'概算',                                    value:15000 }
  ];
  var FIXED_TOTAL = FIXED.reduce(function (s, r) { return s + r.value; }, 0); /* = 61,000 */

  var BUDGET = { target: 150000, limit: 200000 };
  var SURVEYED = '2026年8月28日 20:00';

  /* ---------- 出発日別データ ----------------------------------------------
     stay.* は じゃらん実測。
       price  … じゃらん表示の3名合計（税込・クーポン適用前）
       coupon … その部屋で取得できるクーポンの合計額
       point  … 加算予定じゃらんポイント（還元率は日程ごとに違う）
       stock  … 「あと◯部屋」表示。null は残室数の表示なし
     ------------------------------------------------------------------------ */
  var DEPARTURES = [

  /* ===================== 10/9（金）発 ===================== */
  {
    id:'1009',
    tabDate:'10/9', tabDow:'金',
    range:'2026.10.09 FRI – 10.11 SUN',
    rangeJa:'10/9（金）〜 10/11（日）',
    eyebrow:'Nasu Highland &mdash; Three Days in Autumn',
    weekendType:'3連休の前半',
    crowd:4,
    stay:{
      nemurin:{ date:'10/9（金）泊', price:34000, coupon:8800, point:4080, stock:2,
                plan:'ノンアルコール基本プラン', room:'別館 ツインルーム【禁煙】' },
      sunvalley:{ date:'10/10（土）泊', price:69795, coupon:0, point:8375, stock:null,
                plan:'「万里」中華＆和食バイキング', room:'☆戸建てふくろうの森☆ 洋室',
                note:'この日は<strong>ガーデンスウィート メゾネットが満室</strong>で、同じ万里プランの最安が戸建てタイプになります。' },
      epinard:{ date:'10/10（土）泊', price:95679, coupon:0, point:11481, stock:null,
                plan:'【早期割引42】和洋中100種バイキング', room:'【和洋室】絆ファミリールーム／禁煙' }
    },
    epinardDeadline:'8/29',
    epinardDeadlineNote:'10/10 泊の42日前＝8/29 が期限。<strong>残り1日</strong>です。',
    days:[
      { tag:'DAY 1', date:'10/9（金）',  theme:'移動 ＋ 屋内アトラクション ＋ ねむりん' },
      { tag:'DAY 2', date:'10/10（土）', theme:'那須ハイランドパーク ＋ リゾートホテル' },
      { tag:'DAY 3', date:'10/11（日）', theme:'ゆっくり ＋ お土産 ＋ 帰路' }
    ],
    departTime:'08:30',
    departNote:'東北自動車道で那須ICへ（首都圏から約2.5〜3時間）。平日朝は首都高・東北道の通勤渋滞があるので、7時台より 8:30 以降の出発の方が結局早く着きます。',
    d1times:{ lunch:'11:30', trick:'13:00', treasure:'15:00', checkin:'16:30', dinner:'18:00', bath:'20:30' },
    d3times:{ breakfast:'08:30', spa:'10:00', checkout:'11:00', souvenir:'11:30', lunch:'13:00' },
    returnTime:'14:00',
    returnNote:'日曜夕方の東北道上りは混みます。14時台に那須ICへ乗れると安心。翌 10/12（月・スポーツの日）が丸ごと休養日として残ります。',
    day2Note:'土曜なので那須ハイは終日にぎわいます。開園（9:30）と同時に入って人気アトラクションから回る作戦で。',
    availability:{ tone:'', text:'ねむりん禁煙室 残2・ホテルは高値' },
    availabilityNote:'ねむりんは<strong>別館ツインの禁煙室が残2</strong>で、10/10発と違って部屋を選べます。ただし2泊目が 10/10（土・3連休初日）になるため、<strong>サンバレーはガーデンスウィート メゾネットが満室</strong>、エピナールも 95,679円 と6日程で最高値です。',
    foliage:'那須岳山頂〜ロープウェイ山頂駅（標高1,700m級）が色づき始め〜見頃入り。ロープウェイに乗れば紅葉の先端を見られます。那須高原の麓はまだ緑。',
    pros:[
      'ねむりんが 34,000円・<strong>禁煙室が残2</strong>。10/10発より11,000円安く、部屋も選べます。',
      '10/12（月・スポーツの日）が<strong>丸ごと予備日</strong>。渋滞を避けて日曜に帰り、月曜は家でゆっくりできます。',
      '2日目（土曜）に那須ハイをまるごと当てられるので、雨天順延の余地もあります。'
    ],
    cons:[
      '<strong>2泊目が3連休初日の土曜</strong>で、ホテル側が跳ね上がります。サンバレーは 69,795円（他の週末より約1.8万円高い）、エピナールは 95,679円で6日程の最高値。',
      'そのためA案の総額は 155,995円と、連休を外した4日程より<strong>約2.9万円高く</strong>なります。',
      '金曜に<strong>学校とお仕事の調整</strong>が必要です（娘は1日お休み）。',
      '10/10（土）は3連休の初日。那須IC〜那須街道の下り渋滞がこの週で最も激しい日です。'
    ],
    verdict:'ねむりんは安く取れるのに、2泊目が連休初日の土曜になるせいでホテル代が跳ねる日程。3連休を使いたい人向けです。'
  },

  /* ===================== 10/10（土）発 ===================== */
  {
    id:'1010',
    tabDate:'10/10', tabDow:'土',
    range:'2026.10.10 SAT – 10.12 MON',
    rangeJa:'10/10（土）〜 10/12（月・祝）',
    eyebrow:'Nasu Highland &mdash; Three Days in Autumn',
    weekendType:'3連休まるごと',
    crowd:5,
    stay:{
      nemurin:{ date:'10/10（土）泊', price:45000, coupon:11000, point:5400, stock:1,
                plan:'ノンアルコール基本プラン', room:'別館 ツインルーム【喫煙】',
                note:'<strong>禁煙室・コテージは全て満室</strong>。空いているのはこの喫煙室1室だけです。' },
      sunvalley:{ date:'10/11（日・祝前）泊', price:63855, coupon:0, point:7662, stock:null,
                plan:'「万里」中華＆和食バイキング', room:'★ガーデンスウィート★ メゾネット' },
      epinard:{ date:'10/11（日・祝前）泊', price:82158, coupon:0, point:9858, stock:null,
                plan:'【早期割引42】和洋中100種バイキング', room:'【和洋室】絆ファミリールーム／禁煙' }
    },
    epinardDeadline:'8/30',
    epinardDeadlineNote:'10/11 泊の42日前＝8/30 が期限。<strong>残り2日</strong>です。',
    days:[
      { tag:'DAY 1', date:'10/10（土）',            theme:'移動 ＋ 屋内アトラクション ＋ ねむりん' },
      { tag:'DAY 2', date:'10/11（日）',            theme:'那須ハイランドパーク ＋ リゾートホテル' },
      { tag:'DAY 3', date:'10/12（月・スポーツの日）', theme:'ゆっくり ＋ お土産 ＋ 帰路' }
    ],
    departTime:'07:30',
    departNote:'東北自動車道で那須ICへ（首都圏から約2.5〜3時間）。3連休初日なので下りの渋滞を避けて早出が正解です。',
    d1times:{ lunch:'10:30', trick:'12:00', treasure:'14:30', checkin:'16:30', dinner:'18:00', bath:'20:30' },
    d3times:{ breakfast:'08:30', spa:'10:00', checkout:'11:00', souvenir:'11:30', lunch:'13:00' },
    returnTime:'14:00',
    returnNote:'連休最終日は上りが激しく渋滞します。14時より遅くなると帰宅が大幅に遅れるので、早めの出発が安全。',
    day2Note:'連休の中日。那須ハイは1年で最も混む部類の日です。ファンタジーパスの列を考えると開園待ちがおすすめ。',
    availability:{ tone:'r', text:'ねむりん 残り1部屋（喫煙）' },
    availabilityNote:'<strong>ねむりんは 10/10 の空きが「別館ツインルーム【喫煙】」1室のみ</strong>。禁煙室・コテージは全て満室です。ここが最大のボトルネックなので、この日程で行くならまずこの1室を確保してください。',
    foliage:'那須岳山頂〜ロープウェイ山頂駅（標高1,700m級）が色づき始め〜見頃入り。那須高原の麓はまだ緑。',
    pros:[
      '<strong>学校もお仕事も休まずに行ける</strong>唯一の日程。3連休をまるごと使えます。',
      'サンバレーはガーデンスウィート メゾネットが取れます（10/9発だと満室）。'
    ],
    cons:[
      'A案の総額 158,855円は<strong>6日程で最も高い</strong>。連休を外した4日程より約3.2万円高くなります。',
      'ねむりんは<strong>残1室・喫煙の別館ツインのみ</strong>。子ども連れで喫煙室は避けたいところですが、選択の余地がありません。',
      '往路（連休初日）・復路（連休最終日）とも渋滞のピークにぶつかります。'
    ],
    verdict:'休みを取らずに行ける代わりに、価格・混雑・部屋の選択肢すべてを諦める日程です。'
  },

  /* ===================== 10/16（金）発 ===================== */
  {
    id:'1016',
    tabDate:'10/16', tabDow:'金',
    range:'2026.10.16 FRI – 10.18 SUN',
    rangeJa:'10/16（金）〜 10/18（日）',
    eyebrow:'Nasu Highland &mdash; Three Days in Autumn',
    weekendType:'通常の週末',
    crowd:2,
    stay:{
      nemurin:{ date:'10/16（金）泊', price:34000, coupon:8800, point:4080, stock:1,
                plan:'ノンアルコール基本プラン', room:'別館 ツインルーム【禁煙】' },
      sunvalley:{ date:'10/17（土）泊', price:51975, coupon:11000, point:1038, stock:null,
                plan:'「万里」中華＆和食バイキング', room:'★ガーデンスウィート★ メゾネット' },
      epinard:{ date:'10/17（土）泊', price:73226, coupon:0, point:1464, stock:null,
                plan:'【早期割引42】和洋中100種バイキング', room:'【和洋室】絆ファミリールーム／禁煙' }
    },
    epinardDeadline:'9/5',
    epinardDeadlineNote:'10/17 泊の42日前＝9/5 が期限。まだ1週間以上の余裕があります。',
    days:[
      { tag:'DAY 1', date:'10/16（金）', theme:'移動 ＋ 屋内アトラクション ＋ ねむりん' },
      { tag:'DAY 2', date:'10/17（土）', theme:'那須ハイランドパーク ＋ リゾートホテル' },
      { tag:'DAY 3', date:'10/18（日）', theme:'ゆっくり ＋ お土産 ＋ 帰路' }
    ],
    departTime:'08:30',
    departNote:'東北自動車道で那須ICへ（首都圏から約2.5〜3時間）。連休を外した平日なので、通勤時間帯さえ避ければ道はすいています。',
    d1times:{ lunch:'11:30', trick:'13:00', treasure:'15:00', checkin:'16:30', dinner:'18:00', bath:'20:30' },
    d3times:{ breakfast:'08:30', spa:'10:00', checkout:'11:00', souvenir:'11:30', lunch:'13:00' },
    returnTime:'14:30',
    returnNote:'連休ではない日曜なので、上りの渋滞は3連休最終日ほどではありません。15時前後の出発でも大丈夫。',
    day2Note:'連休を外した土曜。那須ハイは適度な混み具合で、待ち時間が最も短く済む日程です。',
    availability:{ tone:'g', text:'両泊とも確保可・ねむりん禁煙室 残1' },
    availabilityNote:'ねむりんは<strong>別館ツインの禁煙室が残1</strong>。サンバレーのメゾネットとエピナールの絆ファミリールームはどちらも空いており、<strong>A案・B案のどちらも成立する</strong>日程です。ねむりんが1室しかないので、押さえるならここから。',
    foliage:'ロープウェイ山麓駅〜大丸温泉（標高1,300m前後）が見頃。ドライブしながら紅葉のグラデーションを楽しめる時期です。',
    pros:[
      '<strong>A案 127,175円は6日程で最安タイ</strong>。10/10発より <strong>31,680円</strong> 安く、目標15万円を大きく下回ります。',
      'サンバレーに<strong>11,000円分のクーポン</strong>が出ています（3連休の2日程には出ていません）。',
      '<strong>B案（エピナール絆＋早割42）が159,426円で取れる</strong>のは、6日程中この日と10/30発だけ。10/23発と11/6発はエピナールがほぼ満室です。',
      'ねむりんの<strong>禁煙室</strong>が取れて、じゃらんポイントも12%还元が効く（10/23発以降は2%に落ちます）。',
      '連休も紅葉ピークも外しているので、那須ハイの待ち時間も那須街道の渋滞も軽い日程です。'
    ],
    cons:[
      'ねむりんの禁煙室は<strong>残1室</strong>。早めに押さえないと喫煙室かコテージになります。',
      '金曜に<strong>学校とお仕事の調整</strong>が必要です。',
      '祝日が絡まないので、3日目に疲れが残ったまま月曜を迎えます。'
    ],
    verdict:'最安タイでポイント還元率も高く、A案B案どちらも選べる唯一の日程。総合力では頭ひとつ抜けています。'
  },

  /* ===================== 10/23（金）発 ===================== */
  {
    id:'1023',
    tabDate:'10/23', tabDow:'金',
    range:'2026.10.23 FRI – 10.25 SUN',
    rangeJa:'10/23（金）〜 10/25（日）',
    eyebrow:'Nasu Highland &mdash; Peak Foliage',
    weekendType:'紅葉ピークの週末',
    crowd:4,
    stay:{
      nemurin:{ date:'10/23（金）泊', price:36000, coupon:8800, point:720, stock:1,
                plan:'ノンアルコール基本プラン', room:'本館 和洋室12畳 “杏子”【禁煙】',
                note:'<strong>別館ツインの禁煙室は満室</strong>。禁煙で取るならこの本館和洋室（36,000円）、喫煙でよければ別館ツインが34,000円です。' },
      sunvalley:{ date:'10/24（土）泊', price:51975, coupon:11000, point:1038, stock:null,
                plan:'「万里」中華＆和食バイキング', room:'★ガーデンスウィート★ メゾネット' },
      epinard:{ date:'10/24（土）泊', price:81931, coupon:0, point:1638, stock:null,
                plan:'【室数限定】訳ありプラン（和洋中バイキング）', room:'部屋タイプおまかせ',
                note:'<strong>絆ファミリールームも早期割引42も満室</strong>。この日にエピナールへ泊まる手段は、部屋おまかせ・チェックイン／夕食が遅めの「訳ありプラン」しか残っていません。' }
    },
    epinardDeadline:'—',
    epinardDeadlineNote:'この日程は<strong>早期割引42のプランが満室</strong>のため、早割の期限は関係ありません。',
    days:[
      { tag:'DAY 1', date:'10/23（金）', theme:'移動 ＋ 屋内アトラクション ＋ ねむりん' },
      { tag:'DAY 2', date:'10/24（土）', theme:'那須ハイランドパーク ＋ リゾートホテル' },
      { tag:'DAY 3', date:'10/25（日）', theme:'紅葉ドライブ ＋ お土産 ＋ 帰路' }
    ],
    departTime:'08:30',
    departNote:'東北自動車道で那須ICへ（首都圏から約2.5〜3時間）。紅葉シーズンの週末は那須IC出口から那須街道が渋滞するので、午前中に抜けておきたいところ。',
    d1times:{ lunch:'11:30', trick:'13:00', treasure:'15:00', checkin:'16:30', dinner:'18:00', bath:'20:30' },
    d3times:{ breakfast:'08:30', spa:'10:00', checkout:'11:00', souvenir:'11:30', lunch:'13:00' },
    returnTime:'14:30',
    returnNote:'帰り道にもみじラインや那須街道の紅葉を回収してから帰るのもあり。ただし紅葉渋滞を見込んで少し早めに動くのが安全です。',
    day2Note:'紅葉ピーク週の土曜。那須ハイそのものより、行き帰りの那須街道の渋滞に時間を取られます。',
    availability:{ tone:'r', text:'エピナール ほぼ満室' },
    availabilityNote:'<strong>エピナールは2食付が「訳ありプラン」1本しか残っていません</strong>（絆ファミリールームも早期割引42も満室）。ねむりんも別館ツインの禁煙室が埋まっていて、禁煙なら本館和洋室 36,000円になります。サンバレーのメゾネットは無事なので、<strong>この日程はA案向き</strong>です。',
    foliage:'<strong>那須高原一帯が紅葉ピーク</strong>。つつじ吊橋・殺生石・那須平成の森（標高1,000m前後）が一年で最も美しい週です。',
    pros:[
      '<strong>紅葉が一年で最も美しい週</strong>。つつじ吊橋や殺生石まわりの景色は他の日程と別物です。',
      'A案 129,175円で、10/10発より <strong>29,680円</strong> 安く済みます。サンバレーのメゾネットも11,000円クーポン付きで確保できます。',
      '記念日の写真を撮るなら、背景の質がいちばん高い日程。'
    ],
    cons:[
      '<strong>エピナール（B案）が実質つぶれています。</strong>絆ファミリールームも早割42も満室で、残るのは部屋おまかせ・夕食遅めの訳ありプラン 81,931円のみ。',
      'ねむりんは<strong>別館ツインの禁煙室が満室</strong>。禁煙だと本館和洋室で2,000円高くなります。',
      'じゃらんポイントが<strong>2%まで落ちます</strong>（10/16発までは12%）。実質負担は見た目の差以上に開きます。',
      '那須街道の<strong>紅葉渋滞</strong>がピーク。移動時間を多めに見ておく必要があります。',
      'トレジャーストーンパークは 10/20〜22 がメンテナンス休場。10/23 の営業再開日なので、念のため事前確認を。'
    ],
    verdict:'景色は文句なしの一番。ただしエピナールが取れず、ポイント還元率も落ちるので、A案で割り切る日程です。'
  },

  /* ===================== 10/30（金）発 ===================== */
  {
    id:'1030',
    tabDate:'10/30', tabDow:'金',
    range:'2026.10.30 FRI – 11.01 SUN',
    rangeJa:'10/30（金）〜 11/1（日）',
    eyebrow:'Nasu Highland &mdash; Halloween Weekend',
    weekendType:'ハロウィンの週末',
    crowd:3,
    stay:{
      nemurin:{ date:'10/30（金）泊', price:34000, coupon:8800, point:680, stock:2,
                plan:'ノンアルコール基本プラン', room:'別館 ツインルーム【禁煙】',
                note:'この日はコテージ2棟と本館和洋室も空いています（36,000〜38,500円）。' },
      sunvalley:{ date:'10/31（土）泊', price:51975, coupon:11000, point:1038, stock:null,
                plan:'「万里」中華＆和食バイキング', room:'★ガーデンスウィート★ メゾネット' },
      epinard:{ date:'10/31（土）泊', price:77819, coupon:0, point:1556, stock:null,
                plan:'【早期割引42】和洋中100種バイキング', room:'【和洋室】絆ファミリールーム／禁煙' }
    },
    epinardDeadline:'9/19',
    epinardDeadlineNote:'10/31 泊の42日前＝9/19 が期限。3週間以上の余裕があります。',
    days:[
      { tag:'DAY 1', date:'10/30（金）', theme:'移動 ＋ 屋内アトラクション ＋ ねむりん' },
      { tag:'DAY 2', date:'10/31（土）', theme:'那須ハイ（ハロウィン）＋ リゾートホテル' },
      { tag:'DAY 3', date:'11/1（日）',  theme:'ゆっくり ＋ お土産 ＋ 帰路' }
    ],
    departTime:'08:30',
    departNote:'東北自動車道で那須ICへ（首都圏から約2.5〜3時間）。11月が目前なので、朝の那須高原は5℃前後まで冷えます。上着を車に積んでおいてください。',
    d1times:{ lunch:'11:30', trick:'13:00', treasure:'15:00', checkin:'16:30', dinner:'18:00', bath:'20:30' },
    d3times:{ breakfast:'08:30', spa:'10:00', checkout:'11:00', souvenir:'11:30', lunch:'13:00' },
    returnTime:'14:30',
    returnNote:'11/1（日）。連休ではないので上りの渋滞は穏やかです。',
    day2Note:'10/31 はハロウィン当日。那須ハイもハロウィン仕様の装飾・イベントになる時期で、仮装した来園者も見られます。',
    availability:{ tone:'g', text:'6日程で最も部屋が選べる' },
    availabilityNote:'ねむりんは<strong>別館ツイン禁煙が残2に加えて、コテージ2棟と本館和洋室も空いています</strong>（6日程で最も選択肢が広い）。サンバレーのメゾネット、エピナールの絆ファミリールーム＋早割42もどちらも確保でき、<strong>A案・B案の両方が成立</strong>します。',
    foliage:'那須街道・那須ガーデンアウトレット周辺（標高500〜800m）の紅葉が見頃。山頂部は落葉していますが、麓の紅葉は最盛期に入ります。',
    pros:[
      '<strong>A案 127,175円で最安タイ。</strong>10/10発より <strong>31,680円</strong> 安くなります。',
      '10/31 が<strong>ハロウィン当日</strong>。那須ハイがイベント仕様になる時期で、娘には特別な1日になります。',
      '<strong>部屋の選択肢が6日程で最も広い</strong>。ねむりんはコテージ（36,500〜38,500円）に上げることもできます。',
      'B案（エピナール絆＋早割42）が 77,819円で取れます。11/6発や10/23発では取れないプランです。'
    ],
    cons:[
      '<strong>朝晩の冷え込みが本格化</strong>（那須高原の11月上旬は最低気温5℃前後）。防寒着が必須です。',
      'じゃらんポイントが<strong>2%まで落ちます</strong>（10/16発までは12%）。',
      '那須岳山頂〜ロープウェイ周辺は落葉済み。山の紅葉を見たいなら10/23発の方が上です。',
      '金曜に学校とお仕事の調整が必要です。'
    ],
    verdict:'最安タイ＋ハロウィン＋部屋が選べる、という三拍子。B案に上げる余地も残っている日程です。'
  },

  /* ===================== 11/6（金）発 ===================== */
  {
    id:'1106',
    tabDate:'11/6', tabDow:'金',
    range:'2026.11.06 FRI – 11.08 SUN',
    rangeJa:'11/6（金）〜 11/8（日）',
    eyebrow:'Nasu Highland &mdash; Late Autumn, Off Season',
    weekendType:'オフシーズン入りの週末',
    crowd:1,
    stay:{
      nemurin:{ date:'11/6（金）泊', price:34000, coupon:8800, point:680, stock:2,
                plan:'ノンアルコール基本プラン', room:'別館 ツインルーム【禁煙】',
                note:'この日もコテージ2棟と本館和洋室が空いています（36,000〜38,500円）。' },
      sunvalley:{ date:'11/7（土）泊', price:51975, coupon:11000, point:7796, stock:null,
                plan:'「万里」中華＆和食バイキング', room:'★ガーデンスウィート★ メゾネット',
                note:'この日だけ<strong>じゃらんポイントが15%</strong>と高く設定されています（他の週末は2%）。' },
      epinard:{ date:'11/7（土）泊', price:81931, coupon:0, point:1638, stock:null,
                plan:'【室数限定】訳ありプラン（和洋中バイキング）', room:'部屋タイプおまかせ',
                note:'<strong>絆ファミリールームも早期割引42も満室</strong>。残っているのはベビールーム／キッズルーム系（87,601円〜）と、この訳ありプランだけです。' }
    },
    epinardDeadline:'—',
    epinardDeadlineNote:'この日程は<strong>早期割引42のプランが満室</strong>のため、早割の期限は関係ありません。',
    days:[
      { tag:'DAY 1', date:'11/6（金）', theme:'移動 ＋ 屋内アトラクション ＋ ねむりん' },
      { tag:'DAY 2', date:'11/7（土）', theme:'那須ハイランドパーク ＋ リゾートホテル' },
      { tag:'DAY 3', date:'11/8（日）', theme:'ゆっくり ＋ お土産 ＋ 帰路' }
    ],
    departTime:'08:30',
    departNote:'東北自動車道で那須ICへ（首都圏から約2.5〜3時間）。11月の那須高原は朝の最低気温が2〜5℃まで下がります。ダウンや手袋まで積んでおいてください。',
    d1times:{ lunch:'11:30', trick:'13:00', treasure:'15:00', checkin:'16:30', dinner:'18:00', bath:'20:30' },
    d3times:{ breakfast:'08:30', spa:'10:00', checkout:'11:00', souvenir:'11:30', lunch:'13:00' },
    returnTime:'14:30',
    returnNote:'11/8（日）。オフシーズンの日曜なので、東北道の上りはこの6日程で最もすいています。',
    day2Note:'11月の土曜。那須ハイは一年で最も空いている時期のひとつで、待ち時間はほぼありません。ただし丸1日屋外なので、最高気温12〜14℃・風が冷たい前提の服装で。',
    availability:{ tone:'', text:'ねむりんは余裕・エピナールは満室' },
    availabilityNote:'ねむりんは<strong>別館ツイン禁煙が残2、コテージ・本館和洋室も空き</strong>。サンバレーのメゾネットも取れます。一方<strong>エピナールは絆ファミリールームも早期割引42も満室</strong>で、残るのはベビー／キッズルーム系か訳ありプランのみ。<strong>この日程もA案向き</strong>です。',
    foliage:'那須高原の紅葉は終盤。山は落葉して初冬の景色になり、代わりに那須街道・黒磯・塩原方面（標高500m前後）の紅葉が見頃を迎えます。茶臼岳が初冠雪していれば、紅葉と雪山を同時に見られる時期。',
    pros:[
      '<strong>A案の実質負担 118,699円は6日程で断然最安。</strong>サンバレーのポイント還元が<strong>この日だけ15%</strong>（他の週末は2%）で、7,796ptが戻ってきます。',
      '<strong>どこも空いています。</strong>那須ハイの待ち時間、那須街道の渋滞、東北道の帰り道すべてが一年で最も軽い時期。',
      'ねむりんは禁煙室が残2、コテージも選べます。',
      '寒い時期ほど温泉が効きます。ねむりんの貸切風呂6種とサンバレーの3源泉めぐりは、この季節がいちばん気持ちいいはず。'
    ],
    cons:[
      '<strong>エピナール（B案）が実質つぶれています。</strong>絆も早割42も満室で、残るのは訳ありプラン 81,931円かキッズルーム系 87,601円〜。',
      '<strong>寒さが本番</strong>です。那須高原の11月上旬は最低2〜5℃／最高12〜14℃。那須ハイで丸1日屋外なので、ダウン・手袋・カイロは必須。',
      'トレジャーストーンパークの<strong>クリスタルリバーは屋外・水を使う</strong>発掘です。11月だと手が冷たくてつらいので、屋内の地下鉱山を中心に組む方が無難。',
      '山の紅葉はほぼ終わっています。那須岳やロープウェイの紅葉が目当てなら10/23発の方が上です。',
      '金曜に学校とお仕事の調整が必要です。'
    ],
    verdict:'ポイント還元15%が効いて実質負担は断然最安。空き具合も一番。引き換えに払うのは寒さと、エピナールという選択肢です。'
  }

  ];

  /* ---------- 計算 ---------- */
  function pack(s) {
    return { gross:s.price, coupon:s.coupon, net:s.price - s.coupon, point:s.point,
             rate:s.point / s.price, stock:s.stock, plan:s.plan, room:s.room,
             date:s.date, note:s.note || '' };
  }

  function calc(dep) {
    var nem = pack(dep.stay.nemurin);
    var sv  = pack(dep.stay.sunvalley);
    var ep  = pack(dep.stay.epinard);

    var A = { total: nem.net + sv.net + FIXED_TOTAL, point: nem.point + sv.point };
    A.real = A.total - A.point;
    var B = { total: nem.net + ep.net + FIXED_TOTAL, point: nem.point + ep.point };
    B.real = B.total - B.point;

    return { nemurin:nem, sunvalley:sv, epinard:ep, fixedTotal:FIXED_TOTAL, A:A, B:B };
  }

  /* ---------- ヘルパ ---------- */
  function yen(n) { return Number(n).toLocaleString('ja-JP'); }
  function pct(r) { return (Math.round(r * 1000) / 10) + '%'; }

  function byId(id) {
    for (var i = 0; i < DEPARTURES.length; i++) {
      if (DEPARTURES[i].id === id) return DEPARTURES[i];
    }
    return null;
  }

  DEPARTURES.forEach(function (d) { d.calc = calc(d); d.verified = true; });

  global.NASU = {
    FIXED: FIXED,
    FIXED_TOTAL: FIXED_TOTAL,
    BUDGET: BUDGET,
    DEPARTURES: DEPARTURES,
    DEFAULT_ID: '1010',
    surveyed: SURVEYED,
    calc: calc,
    yen: yen,
    pct: pct,
    byId: byId
  };

})(window);

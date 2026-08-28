/* ==========================================================================
   那須 2泊3日 ── 出発日別データ
   index.html / compare.html の両方がこのファイルを読み込みます。
   金額を実際の見積りに差し替えるときは、下の rates だけを書き換えてください。
   （クーポン・ポイント・合計はすべて自動計算されます）
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

  /* ---------- 割引ルール ---------- */
  var POINT_RATE      = 0.12;  /* じゃらん ポイント還元率 */
  var EPINARD_EARLY   = 0.10;  /* エピナール【早期割引42】10%OFF */
  var SUNVALLEY_CPN   = 3000;  /* サンバレー じゃらん宿クーポン */

  /* ねむりんの じゃらん宿クーポンは「◯◯円以上で△△円引き」の階段式。
     宿泊料が下がると使えるクーポンの額も下がるので、そこも含めて計算する。 */
  function nemurinCoupon(rate) {
    if (rate >= 40000) return 7500;
    if (rate >= 30000) return 5000;
    if (rate >= 20000) return 3000;
    return 0;
  }

  var BUDGET = { target: 150000, limit: 200000 };

  /* ---------- 出発日別データ ----------------------------------------------
     rates は「クーポン・割引を引く前」の3名合計・税込（じゃらん表示価格）。
       nemurin   … ねむりん ノンアルコール基本プラン（別館ツインルーム）
       sunvalley … サンバレー那須 ガーデンスウィート メゾネット
       epinard   … エピナール那須 和洋室《絆》の通常料金（早割前）
     10/10発のみ 2026/8/28 実地調査の確定値。ほかの4日程は推定値。
     ------------------------------------------------------------------------ */
  var DEPARTURES = [

  /* ===================== 10/9（金）発 ===================== */
  {
    id:'1009',
    tabDate:'10/9', tabDow:'金',
    range:'2026.10.09 FRI – 10.11 SUN',
    rangeJa:'10/9（金）〜 10/11（日）',
    eyebrow:'Nasu Highland &mdash; Three Days in Autumn',
    verified:false,
    weekendType:'3連休の前半',
    crowd:4,
    rates:{ nemurin:36000, sunvalley:60200, epinard:86100 },
    stayDates:{ n1:'10/9（金）泊', n2:'10/10（土）泊' },
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
    availability:{ tone:'g', text:'空室は比較的余裕あり（推定）' },
    availabilityNote:'金曜泊なので、10/10（土）泊と違って<strong>禁煙室やコテージも選べる可能性が高い</strong>日程です。ただし直前の3連休効果で土曜（2泊目）は埋まりやすいので、ホテル側を先に押さえるのが安全。',
    foliage:'那須岳山頂〜ロープウェイ山頂駅（標高1,700m級）が色づき始め〜見頃入り。ロープウェイに乗れば紅葉の先端を見られます。那須高原の麓はまだ緑。',
    pros:[
      '<strong>3連休を絡められる日程では最安</strong>。1泊目が金曜泊なのがそのまま効いています（全6日程では11/6発に次ぐ2番目）。',
      '10/12（月・スポーツの日）が<strong>丸ごと予備日</strong>。渋滞を避けて日曜に帰り、月曜は家でゆっくりできます。',
      '2日目（土曜）に那須ハイをまるごと当てられるので、雨天順延の余地もあります。'
    ],
    cons:[
      '金曜に<strong>学校とお仕事の調整</strong>が必要です（梗華ちゃんは1日お休み）。',
      '10/10（土）は3連休の初日。那須IC〜那須街道の下り渋滞がこの週で最も激しい日です。'
    ],
    verdict:'費用を最優先するならこの日程。金曜1日を空けられるかどうかがすべてです。'
  },

  /* ===================== 10/10（土）発 ===================== */
  {
    id:'1010',
    tabDate:'10/10', tabDow:'土',
    range:'2026.10.10 SAT – 10.12 MON',
    rangeJa:'10/10（土）〜 10/12（月・祝）',
    eyebrow:'Nasu Highland &mdash; Three Days in Autumn',
    verified:true,
    weekendType:'3連休まるごと',
    crowd:5,
    rates:{ nemurin:45000, sunvalley:63855, epinard:91287 },
    stayDates:{ n1:'10/10（土）泊', n2:'10/11（日・祝前）泊' },
    epinardDeadline:'8/30',
    epinardDeadlineNote:'10/11 泊の42日前＝8/30 が期限。',
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
    availability:{ tone:'r', text:'ねむりん 残り1部屋' },
    availabilityNote:'<strong>ねむりんは 10/10 の空きが「別館ツインルーム【喫煙】」1室のみ</strong>。禁煙室・コテージは全て満室です。ここが最大のボトルネックなので、まずこの1室を確保してください。',
    foliage:'那須岳山頂〜ロープウェイ山頂駅（標高1,700m級）が色づき始め〜見頃入り。那須高原の麓はまだ緑。',
    pros:[
      '<strong>学校もお仕事も休まずに行ける</strong>唯一の日程。3連休をまるごと使えます。',
      '6日程で唯一、<strong>実際に空室と価格を確認済み</strong>の確定数字です。'
    ],
    cons:[
      '6日程で<strong>最も高い</strong>（1泊目が土曜泊、2泊目が連休中日）。',
      'ねむりんは残1室・喫煙の別館ツインのみ。選択の余地がありません。',
      '往路（連休初日）・復路（連休最終日）とも渋滞のピークにぶつかります。'
    ],
    verdict:'休みを取らずに行ける代わりに、価格と混雑と部屋の選択肢を諦める日程です。'
  },

  /* ===================== 10/16（金）発 ===================== */
  {
    id:'1016',
    tabDate:'10/16', tabDow:'金',
    range:'2026.10.16 FRI – 10.18 SUN',
    rangeJa:'10/16（金）〜 10/18（日）',
    eyebrow:'Nasu Highland &mdash; Three Days in Autumn',
    verified:false,
    weekendType:'通常の週末',
    crowd:2,
    rates:{ nemurin:37100, sunvalley:62000, epinard:88700 },
    stayDates:{ n1:'10/16（金）泊', n2:'10/17（土）泊' },
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
    availability:{ tone:'g', text:'空室に余裕あり（推定）' },
    availabilityNote:'3連休を外した通常週末なので、<strong>ねむりんの禁煙室やコテージも選べる可能性が高い</strong>日程です。10月の週末では最も部屋の選択肢が広いと見込まれます。',
    foliage:'ロープウェイ山麓駅〜大丸温泉（標高1,300m前後）が見頃。ドライブしながら紅葉のグラデーションを楽しめる時期です。',
    pros:[
      '<strong>10月の週末では混雑と価格のバランスが最良</strong>。連休を外した通常週末なので、どの施設も待ち時間が短くて済みます。',
      '10月内なら、ねむりんの<strong>部屋を選べる</strong>可能性が最も高い日程（禁煙室・コテージ）。',
      '10/10発より <strong>約7,000円安く</strong>、紅葉は一段進みます。'
    ],
    cons:[
      '金曜に<strong>学校とお仕事の調整</strong>が必要です。',
      '祝日が絡まないので、3日目に疲れが残ったまま月曜を迎えます。'
    ],
    verdict:'10月中に行くなら、安さ・空き具合・紅葉の総合点でこの日程が一番バランスが取れています。'
  },

  /* ===================== 10/23（金）発 ===================== */
  {
    id:'1023',
    tabDate:'10/23', tabDow:'金',
    range:'2026.10.23 FRI – 10.25 SUN',
    rangeJa:'10/23（金）〜 10/25（日）',
    eyebrow:'Nasu Highland &mdash; Peak Foliage',
    verified:false,
    weekendType:'紅葉ピークの週末',
    crowd:4,
    rates:{ nemurin:38900, sunvalley:65000, epinard:93000 },
    stayDates:{ n1:'10/23（金）泊', n2:'10/24（土）泊' },
    epinardDeadline:'9/12',
    epinardDeadlineNote:'10/24 泊の42日前＝9/12 が期限。2週間以上の余裕があります。',
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
    availability:{ tone:'', text:'紅葉需要で埋まりやすい（推定）' },
    availabilityNote:'那須高原の紅葉ピークにあたるため、<strong>宿は早めに埋まります</strong>。金曜泊なので3連休よりは取りやすいものの、この日程を狙うなら9月中の予約が安心です。',
    foliage:'<strong>那須高原一帯が紅葉ピーク</strong>。つつじ吊橋・殺生石・那須平成の森（標高1,000m前後）が一年で最も美しい週です。',
    pros:[
      '<strong>紅葉が一年で最も美しい週</strong>。つつじ吊橋や殺生石まわりの景色は他の日程と別物です。',
      '3連休を外しているので、宿代は10/10発より<strong>約2,500円安い</strong>です。',
      '記念日の写真を撮るなら、背景の質がいちばん高い日程。'
    ],
    cons:[
      '<strong>金曜発の5日程では宿代が最も高い</strong>（紅葉ハイシーズン料金）。',
      '那須街道の<strong>紅葉渋滞</strong>がピーク。移動時間を多めに見ておく必要があります。',
      'トレジャーストーンパークは 10/20〜22 がメンテナンス休場。10/23 の営業再開日なので、念のため事前確認を。',
      '金曜に学校とお仕事の調整が必要です。'
    ],
    verdict:'費用より景色を取る日程。誕生日と20周年の写真を最優先するならここです。'
  },

  /* ===================== 10/30（金）発 ===================== */
  {
    id:'1030',
    tabDate:'10/30', tabDow:'金',
    range:'2026.10.30 FRI – 11.01 SUN',
    rangeJa:'10/30（金）〜 11/1（日）',
    eyebrow:'Nasu Highland &mdash; Halloween Weekend',
    verified:false,
    weekendType:'ハロウィンの週末',
    crowd:3,
    rates:{ nemurin:37400, sunvalley:62600, epinard:89500 },
    stayDates:{ n1:'10/30（金）泊', n2:'10/31（土）泊' },
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
    availability:{ tone:'g', text:'空室は比較的余裕あり（推定）' },
    availabilityNote:'紅葉のピークをやや過ぎ、3連休でもないため<strong>部屋は取りやすい</strong>見込みです。ねむりんの禁煙室・コテージも狙えます。',
    foliage:'那須街道・那須ガーデンアウトレット周辺（標高500〜800m）の紅葉が見頃。山頂部は落葉していますが、麓の紅葉は最盛期に入ります。',
    pros:[
      '10/31 が<strong>ハロウィン当日</strong>。那須ハイがイベント仕様になる時期で、梗華ちゃんには特別な1日になります。',
      '麓の紅葉が見頃。那須ガーデンアウトレットでのお土産タイムも紅葉のなかで過ごせます。',
      '3連休を外しているので、10/10発より<strong>約6,400円安い</strong>です。'
    ],
    cons:[
      '<strong>朝晩の冷え込みが本格化</strong>（那須高原の11月上旬は最低気温5℃前後）。防寒着が必須です。',
      '那須岳山頂〜ロープウェイ周辺は落葉済み。山の紅葉を見たいなら10/23発の方が上です。',
      '金曜に学校とお仕事の調整が必要です。'
    ],
    verdict:'ハロウィンという+αが乗る日程。寒さ対策さえすれば、価格・空き・イベントのバランスは良好です。'
  },

  /* ===================== 11/6（金）発 ===================== */
  {
    id:'1106',
    tabDate:'11/6', tabDow:'金',
    range:'2026.11.06 FRI – 11.08 SUN',
    rangeJa:'11/6（金）〜 11/8（日）',
    eyebrow:'Nasu Highland &mdash; Late Autumn, Off Season',
    verified:false,
    weekendType:'オフシーズン入りの週末',
    crowd:1,
    rates:{ nemurin:34900, sunvalley:58400, epinard:83500 },
    stayDates:{ n1:'11/6（金）泊', n2:'11/7（土）泊' },
    epinardDeadline:'9/26',
    epinardDeadlineNote:'11/7 泊の42日前＝9/26 が期限。1ヶ月近い余裕があります。',
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
    availability:{ tone:'g', text:'空室に最も余裕あり（推定）' },
    availabilityNote:'紅葉シーズンが終わり、スキー・イルミネーションの冬需要が始まる前の<strong>端境期</strong>です。6日程のなかで最も部屋を選びやすく、ねむりんの禁煙室・コテージも十分に狙えると見込まれます。',
    foliage:'那須高原の紅葉は終盤。山は落葉して初冬の景色になり、代わりに那須街道・黒磯・塩原方面（標高500m前後）の紅葉が見頃を迎えます。茶臼岳が初冠雪していれば、紅葉と雪山を同時に見られる時期。',
    pros:[
      '<strong>6日程で最安</strong>。紅葉ピークを過ぎた端境期の相場がそのまま効いています。',
      '<strong>どこも空いています。</strong>那須ハイの待ち時間、那須街道の渋滞、宿の混み具合すべてが一年で最も軽い時期。',
      'ねむりんの<strong>部屋を最も選びやすい</strong>日程。禁煙室やコテージも十分に狙えます。',
      '寒い時期ほど温泉が効きます。ねむりんの貸切風呂6種とサンバレーの3源泉めぐりは、この季節がいちばん気持ちいいはず。'
    ],
    cons:[
      '<strong>寒さが本番</strong>です。那須高原の11月上旬は最低2〜5℃／最高12〜14℃。那須ハイで丸1日屋外なので、ダウン・手袋・カイロは必須。',
      'トレジャーストーンパークの<strong>クリスタルリバーは屋外・水を使う</strong>発掘です。11月だと手が冷たくてつらいので、屋内の地下鉱山を中心に組む方が無難。',
      '山の紅葉はほぼ終わっています。那須岳やロープウェイの紅葉が目当てなら10/23発の方が上です。',
      '金曜に学校とお仕事の調整が必要です。'
    ],
    verdict:'安さ・空き具合・温泉の気持ちよさで選ぶなら、この日程が最も有利。引き換えに払うのは「寒さ」です。'
  }

  ];

  /* ---------- 計算 ---------- */
  function calc(dep) {
    var r = dep.rates;

    var nemCoupon = nemurinCoupon(r.nemurin);
    var nemNet    = r.nemurin - nemCoupon;

    var svNet     = r.sunvalley - SUNVALLEY_CPN;

    var epNet     = Math.floor(r.epinard * (1 - EPINARD_EARLY));
    var epDiscount= r.epinard - epNet;

    var ptNem = Math.floor(r.nemurin   * POINT_RATE);
    var ptSv  = Math.floor(r.sunvalley * POINT_RATE);
    var ptEp  = Math.floor(epNet       * POINT_RATE);

    var totalA = nemNet + svNet + FIXED_TOTAL;
    var totalB = nemNet + epNet + FIXED_TOTAL;
    var ptA = ptNem + ptSv;
    var ptB = ptNem + ptEp;

    return {
      nemurin:{ gross:r.nemurin, coupon:nemCoupon, net:nemNet, point:ptNem },
      sunvalley:{ gross:r.sunvalley, coupon:SUNVALLEY_CPN, net:svNet, point:ptSv },
      epinard:{ gross:r.epinard, discount:epDiscount, net:epNet, point:ptEp },
      fixedTotal:FIXED_TOTAL,
      A:{ total:totalA, point:ptA, real:totalA - ptA },
      B:{ total:totalB, point:ptB, real:totalB - ptB }
    };
  }

  /* ---------- ヘルパ ---------- */
  function yen(n) { return Number(n).toLocaleString('ja-JP'); }

  function byId(id) {
    for (var i = 0; i < DEPARTURES.length; i++) {
      if (DEPARTURES[i].id === id) return DEPARTURES[i];
    }
    return null;
  }

  DEPARTURES.forEach(function (d) { d.calc = calc(d); });

  global.NASU = {
    FIXED: FIXED,
    FIXED_TOTAL: FIXED_TOTAL,
    BUDGET: BUDGET,
    POINT_RATE: POINT_RATE,
    EPINARD_EARLY: EPINARD_EARLY,
    SUNVALLEY_CPN: SUNVALLEY_CPN,
    DEPARTURES: DEPARTURES,
    DEFAULT_ID: '1010',
    surveyed: '2026年8月28日',
    calc: calc,
    yen: yen,
    byId: byId,
    nemurinCoupon: nemurinCoupon
  };

})(window);

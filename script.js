// ==========================================
// 1. 完整 78 張塔羅牌庫與核心關鍵字
// ==========================================
const tarotDeck = [
    // 大阿爾克那 (0-21)
    { name: "愚者", upright: "新起點、冒險、純真、自由", reverse: "輕率、魯莽、逃避、不負責任" },
    { name: "魔術師", upright: "創造力、顯化、專注、才華", reverse: "欺騙、懷才不遇、計畫受阻" },
    { name: "女祭司", upright: "直覺、潛意識、內在智慧、靜止", reverse: "流於表面、理智壓抑、秘密曝光" },
    { name: "女皇", upright: "豐盛、母愛、自然、創造力、熱情", reverse: "過度控制、缺乏安全感、創造力停滯" },
    { name: "皇帝", upright: "權威、穩定、結構、控制、保護", reverse: "專制、暴政、缺乏自律、權力動搖" },
    { name: "教皇", upright: "傳統、精神引導、體制、神聖契約", reverse: "盲從、叛逆、打破傳統、教條主義" },
    { name: "戀人", upright: "和諧、愛、關係、核心選擇", reverse: "不合、逃避抉擇、關係失衡" },
    { name: "戰車", upright: "意志力、勝利、控馭衝突、前進", reverse: "失控、方向錯誤、挫折、侵略性" },
    { name: "力量", upright: "內在勇氣、耐性、溫柔體恤、掌控", reverse: "自我懷疑、軟弱、濫用暴力" },
    { name: "隱者", upright: "內省、尋求真理、孤獨、靈性指引", reverse: "孤立、拒絕建議、迷失方向" },
    { name: "命運之輪", upright: "轉折點、好運、因果、重大機緣", reverse: "壞運氣、抗拒改變、陷入惡性循環" },
    { name: "正義", upright: "公平、誠實、法律、客觀因果", reverse: "不公、偏見、推卸責任、法律糾紛" },
    { name: "倒吊人", upright: "犧牲、換位思考、暫停、臣服", reverse: "無謂的犧牲、拖延、掙扎、盲目抗拒" },
    { name: "死神", upright: "終結、大轉變、新生、割捨過去", reverse: "抗拒恐懼、拖延痛苦、死灰復燃" },
    { name: "節制", upright: "平衡、淨化、融合、煉金術轉化", reverse: "失衡、溝通不良、缺乏節制" },
    { name: "惡魔", upright: "物質束縛、慾望、執著、陰暗面", reverse: "覺醒、擺脫束縛、精神自由" },
    { name: "高塔", upright: "突發劇變、幻象瓦解、啟示、崩解", reverse: "危機現曙光、恐懼改變、避免全面崩潰" },
    { name: "星星", upright: "希望、靈感、靈性寧靜、指引", reverse: "失望、悲觀、靈感枯竭" },
    { name: "月亮", upright: "不安、幻象、潛意識、未知的恐懼", reverse: "恐懼釋放、撥雲見日、真相大白" },
    { name: "太陽", upright: "活力、成功、喜悅、光明磊落", reverse: "短暫失意、過度自信、熱情消退" },
    { name: "審判", upright: "覺醒、重大決定、重生、因果召喚", reverse: "自我懷疑、拒絕召喚、錯失良機" },
    { name: "世界", upright: "圓滿、達成目標、旅程結束、完美融入", reverse: "未竟之功、缺乏突破、差最後一步" },
    
    // 小阿爾克那 - 權杖
    { name: "權杖一", upright: "新計畫、熱情行動、靈感萌芽", reverse: "缺乏動力、計畫延誤、三分鐘熱度" },
    { name: "權杖二", upright: "規劃未來、抉擇、海外拓展", reverse: "猶豫不決、安全感不足、目光短淺" },
    { name: "權杖三", upright: "遠見、合作成功、擴張版圖", reverse: "期待落空、團隊不和、遭遇瓶頸" },
    { name: "權杖四", upright: "穩定、慶祝、和諧家庭/團隊", reverse: "基礎不穩、短暫和諧、內部矛盾" },
    { name: "權杖五", upright: "競爭、衝突、意見分歧、混亂", reverse: "衝突結束、達成妥協、迴避問題" },
    { name: "權杖六", upright: "勝利、獲得認同、載譽歸來", reverse: "落敗、缺乏賞識、虛榮心重" },
    { name: "權杖七", upright: "捍衛立場、堅持到底、克服挑戰", reverse: "勢單力薄、放棄抵抗、過度防衛" },
    { name: "權杖八", upright: "快速進展、訊息傳遞、旅行", reverse: "延誤、衝動行事、溝通受阻" },
    { name: "權杖九", upright: "防禦、最後考驗、警惕心", reverse: "防線崩潰、身心俱疲、過度猜忌" },
    { name: "權杖十", upright: "責任重大、壓力過載、咬牙苦撐", reverse: "釋放壓力、拒絕承擔、徹底崩潰" },
    { name: "權杖侍從", upright: "好消息、好學、充滿活力的年輕人", reverse: "不成熟、口無遮攔、缺乏計畫" },
    { name: "權杖騎士", upright: "勇往直前、充滿自信、效率卓越", reverse: "魯莽、脾氣暴躁、半途而廢" },
    { name: "權杖皇后", upright: "自信、熱情、大方、具影響力的女性", reverse: "嫉妒心強、情緒化、過度掌控" },
    { name: "權杖國王", upright: "領袖魅力、遠見、掌控大局的決策者", reverse: "獨裁、衝動、嚴厲無情" },

    // 小阿爾克那 - 聖杯
    { name: "聖杯一", upright: "新感情、愛滿溢、情緒覺醒", reverse: "情感壓抑、錯失真愛、情緒化" },
    { name: "聖杯二", upright: "戀情萌芽、平等合作、和諧契合", reverse: "關係裂痕、溝通不良、利益衝突" },
    { name: "聖杯三", upright: "慶祝、社交聚會、友誼長存", reverse: "三人行糾紛、過度放縱、小團體排外" },
    { name: "聖杯四", upright: "冷漠、倦怠、忽視眼前的機會", reverse: "重新投入、接受挑戰、新視野" },
    { name: "聖杯五", upright: "悲傷、專注於失去、失望遺憾", reverse: "走出陰霾、釋懷、接受現實" },
    { name: "聖杯六", upright: "童年回憶、舊情復燃、安全感", reverse: "沉溺過去、無法前進、告別純真" },
    { name: "聖杯七", upright: "幻象、選擇眾多、不切實際的美夢", reverse: "看清現實、做出抉擇、大夢初醒" },
    { name: "聖杯八", upright: "追尋更高意義、毅然離去、捨棄不滿足", reverse: "不願放棄、重回舊路、原地踏步" },
    { name: "聖杯九", upright: "願望實現、物質與精神滿足、自得其樂", reverse: "貪心不足、表面風光、內心空虛" },
    { name: "聖杯十", upright: "家庭圓滿、真愛長存、情感終極幸福", reverse: "家庭不和、情感疏離、表象和諧" },
    { name: "聖杯侍從", upright: "情感敏感、藝術靈感、直覺強烈的年輕人", reverse: "情緒勒索、逃避現實、缺乏安全感" },
    { name: "聖杯騎士", upright: "浪漫、邀請、追求理想的使者", reverse: "花言巧語、不切實際、情感欺騙" },
    { name: "聖杯皇后", upright: "溫柔體貼、同理心、直覺敏銳的女性", reverse: "過度敏感、情緒化、過度依賴" },
    { name: "聖杯國王", upright: "情感穩定、成熟智慧、具同理心的導師", reverse: "情感勒索、虛偽、善於操控人心" },

    // 小阿爾克那 - 寶劍
    { name: "寶劍一", upright: "理智突破、思想清晰、關鍵勝利", reverse: "混亂迷茫、誤用權力、計畫難產" },
    { name: "寶劍二", upright: "僵局、逃避抉擇、內心拉扯", reverse: "打破僵局、看清真相、被迫抉擇" },
    { name: "寶劍三", upright: "心碎、背叛、情感傷痛", reverse: "傷口癒合、釋懷、走出陰霾" },
    { name: "寶劍四", upright: "休息、沉澱、暫停行動", reverse: "重新出發、打破沉默、過度勞累" },
    { name: "寶劍五", upright: "自私的勝利、衝突、代價慘重", reverse: "和解機會、放下執著、恩怨未了" },
    { name: "寶劍六", upright: "渡過難關、漸入佳境、療癒之旅", reverse: "困境重重、抗拒改變、舊事重提" },
    { name: "寶劍七", upright: "欺瞞、走捷徑、獨自籌謀", reverse: "東窗事發、良心譴責、正道行事" },
    { name: "寶劍八", upright: "自我束縛、作繭自縛、作壁上觀", reverse: "打破限制、重獲自由、找到出路" },
    { name: "寶劍九", upright: "焦慮失眠、過度擔憂、精神折磨", reverse: "噩夢結束、正視恐懼、心理重建" },
    { name: "寶劍十", upright: "慘痛結束、跌入谷底、物極必反", reverse: "死而復生、局勢好轉、抗拒結束" },
    { name: "寶劍侍從", upright: "警惕、敏銳、蒐集情報的年輕人", reverse: "八卦口舌、憤世嫉俗、眼高手低" },
    { name: "寶劍騎士", upright: "雷厲風行、理智批判、衝鋒陷陣", reverse: "盲目衝動、傷人傷己、缺乏耐性" },
    { name: "寶劍皇后", upright: "獨立理智、言詞犀利、洞察力極強的女性", reverse: "刻薄寡情、怨婦心態、偏激不公" },
    { name: "寶劍國王", upright: "絕對理智、專業權威、公正冷靜的裁判", reverse: "冷酷無情、偏見獨裁、思維僵化" },

    // 小阿爾克那 - 錢幣
    { name: "錢幣一", upright: "財富新契機、物質豐碩、務實基礎", reverse: "投資失利、浪費資源、時機未到" },
    { name: "錢幣二", upright: "尋求平衡、資金周轉、多工處理", reverse: "失衡、超支、分心導致失敗" },
    { name: "錢幣三", upright: "團隊合作、專業技術、初見成效", reverse: "缺乏默契、偷工減料、技術不精" },
    { name: "錢幣四", upright: "守財、渴望安全感、掌控欲", reverse: "過度揮霍、固執不化、破財消災" },
    { name: "錢幣五", upright: "物質匱乏、困境、被孤立的危機", reverse: "困境翻身、重新獲助、走出貧困" },
    { name: "錢幣六", upright: "慷慨施予、資源分配、平衡互助", reverse: "不平等條約、自私施捨、負債" },
    { name: "錢幣七", upright: "耐心等待、評估成果、面臨抉擇", reverse: "急於求成、投資錯誤、心血白費" },
    { name: "錢幣八", upright: "匠人精神、專注工作、精益求精", reverse: "缺少耐性、工作倦怠、投機取巧" },
    { name: "錢幣九", upright: "物質獨立、優雅富足、自給自足", reverse: "外強中乾、過度消費、依賴他人" },
    { name: "錢幣十", upright: "家族富裕、長遠穩定、傳承實業", reverse: "遺產糾紛、忽視精神、家庭財務危機" },
    { name: "錢幣侍從", upright: "務實好學、儲蓄、踏實發展的年輕人", reverse: "眼高手低、愛慕虛榮、浪費金錢" },
    { name: "錢幣騎士", upright: "穩健可靠、勤奮務實、效率驚人", reverse: "墨守成規、停滯不前、過度現實" },
    { name: "錢幣皇后", upright: "高貴務實、善於理財、溫暖豐盛的女性", reverse: "過度拜金、不安全感、生活失衡" },
    { name: "錢幣國王", upright: "商業帝國、富足權威、務實的成功領袖", reverse: "唯利一圖、固執守舊、財務危機" }
];

// 2. 牌陣定義配置
const spreads = {
    single: [{ title: "核心導引 (Guidance)" }],
    triangle: [
        { title: "過去 (Past)" },
        { title: "現在 (Present)" },
        { title: "未來 (Future)" }
    ],
    celtic: [
        { title: "1. 現狀/核心" }, { title: "2. 阻礙/助力" }, { title: "3. 潛意識/根基" },
        { title: "4. 過去/已發生" }, { title: "5. 意識/目標" }, { title: "6. 即將到來" },
        { title: "7. 當事人狀態" }, { title: "8. 周遭環境" }, { title: "9. 期望或恐懼" },
        { title: "10. 最終結果" }
    ]
};

let currentSpreadCards = [];
let flippedState = [];

document.getElementById('shuffle-btn').addEventListener('click', doShuffle);
document.getElementById('spread-select').addEventListener('change', initSpreadLayout);
document.getElementById('ai-btn').addEventListener('click', callAIInterpretation);

function initSpreadLayout() {
    const spreadType = document.getElementById('spread-select').value;
    const container = document.getElementById('card-spread-container');
    const interpretationZone = document.getElementById('interpretation-zone');
    
    container.className = `card-spread ${spreadType}-layout`;
    container.innerHTML = "";
    interpretationZone.innerHTML = `<h3>已切換至：${document.getElementById('spread-select').selectedOptions[0].text}</h3><p>請輸入問題，並點擊下方「靈性洗牌」。</p>`;
    
    document.getElementById('ai-response-zone').style.display = 'none';
    currentSpreadCards = [];
    flippedState = [];

    spreads[spreadType].forEach((slot, idx) => {
        const slotDiv = document.createElement('div');
        slotDiv.className = 'card-slot';
        slotDiv.innerHTML = `
            <span class="slot-title">${slot.title}</span>
            <div class="card" id="tarot-card-${idx}" onclick="handleCardClick(${idx})">
                <div class="card-inner">
                    <div class="card-front">🔮</div>
                    <div class="card-back" id="tarot-back-${idx}"></div>
                </div>
            </div>
        `;
        container.appendChild(slotDiv);
        flippedState.push(false);
    });
}

function doShuffle() {
    const spreadType = document.getElementById('spread-select').value;
    const currentSlots = spreads[spreadType];
    
    currentSlots.forEach((_, idx) => {
        const el = document.getElementById(`tarot-card-${idx}`);
        if(el) el.classList.remove('flipped');
        flippedState[idx] = false;
    });

    let fullShuffled = [...tarotDeck].sort(() => 0.5 - Math.random());
    currentSpreadCards = [];

    for (let i = 0; i < currentSlots.length; i++) {
        const isUpright = Math.random() > 0.45;
        currentSpreadCards.push({
            ...fullShuffled[i],
            orientation: isUpright ? "正位" : "逆位"
        });
    }

    document.getElementById('interpretation-zone').innerHTML = `<h3>能量場已就緒</h3><p>請依序點選上方卡牌進行翻牌。完成後點擊下方按鈕進行 AI 廣東話深度解牌。</p>`;
    document.getElementById('ai-response-zone').style.display = 'none';
}

function handleCardClick(index) {
    if (currentSpreadCards.length === 0) return;
    const cardElement = document.getElementById(`tarot-card-${index}`);
    const backElement = document.getElementById(`tarot-back-${index}`);
    const cardData = currentSpreadCards[index];
    const spreadType = document.getElementById('spread-select').value;
    const slotTitle = spreads[spreadType][index].title;

    if (!flippedState[index]) {
        const isUpright = cardData.orientation === "正位";
        backElement.innerHTML = `
            <div class="card-name" style="font-size:0.75rem;">${cardData.name}</div>
            <div class="card-orient" style="color: ${isUpright ? '#1b5e20' : '#b71c1c'}; font-size:0.65rem;">${cardData.orientation}</div>
        `;
        cardElement.classList.add('flipped');
        flippedState[index] = true;
    }

    const currentKeywords = cardData.orientation === "正位" ? cardData.upright : cardData.reverse;
    document.getElementById('interpretation-zone').innerHTML = `
        <h3>位置：${slotTitle}</h3>
        <p><strong>牌名：</strong>${cardData.name} (${cardData.orientation})</p>
        <div class="active-detail"><strong>基礎牌意：</strong>${currentKeywords}</div>
    `;
}

// ==================== 核心：OpenRouter 香港免 VPN 直連解牌 ====================
async function callAIInterpretation() {
    const apiKey = document.getElementById('api-key-input').value.trim();
    const question = document.getElementById('client-question').value.trim();
    
    if (!apiKey) {
        alert("請先在網頁最上方輸入你的 OpenRouter API Key！");
        return;
    }
    if (currentSpreadCards.length === 0) {
        alert("請先點擊『靈性洗牌』進行抽牌！");
        return;
    }

    const responseZone = document.getElementById('ai-response-zone');
    const contentDiv = document.getElementById('ai-content');
    
    responseZone.style.display = 'block';
    contentDiv.innerHTML = "🔮 數位大師正在香港雲端節點冥想、感應磁場、組織廣東話解牌語言中，請稍候 10-15 秒...";

    const spreadType = document.getElementById('spread-select').value;
    let cardDetailsText = "";
    currentSpreadCards.forEach((card, idx) => {
        const slotTitle = spreads[spreadType][idx].title;
        cardDetailsText += `位置：${slotTitle}，抽到卡牌：${card.name} (${card.orientation})\n`;
    });

    // 系統提示詞：將靈魂與語氣注入 AI 占卜大師
    const systemPrompt = `你是一位專業且極具同理心的香港本土塔羅占卜大師。
你說話的風格必須完全使用道地的香港廣東話口語（香港話），語氣要溫暖、像朋友聊天一樣親切，同時具有深刻的心理與情感洞察力。

【核心用字與風格規範】：
1. 必須多使用香港人日常情感口語，例如：「為你問既係...問題」、「雖然係...但我都會開一個牌局睇吓...」、「呢張牌顯示你哋...」、「有啲阻礙」、「好似有互動」、「抽倒嘅係...」、「一時衝動聯絡，一時又縮返」、「估嚟估去」、「總括而言」、「建議你可以再主動啲打破呢個關口」。
2. 結構要求：
   - 第一段開場白：針對客人的問題進行溫暖、貼心的廣東話開場，告訴他你會如何看這個牌局。
   - 中間解牌段落：每張牌獨立成段，開頭必須使用「🃏」符號，逐一將卡牌的「名稱」、「正逆位」與「牌陣位置」融合，講出通俗易懂、富有情感的人性化分析。不要使用死板的牌意背誦，要融入客人的情境中。
   - 最後一段：以「總括而言」開頭，給出一個具體、溫暖且有建設性的行動建議。`;

    const userPrompt = `問卜者的問題：${question || "未提供具體問題，請做綜合心理與運勢導引。"}

抽出的卡牌資料：
${cardDetailsText}

請為他撰寫一篇充滿人情味、結構清晰的廣東話塔羅牌局深度解讀。`;

    try {
        // 使用 OpenRouter 香港直連網址
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
                'HTTP-Referer': 'https://my-tarot-app.vercel.app', 
                'X-Title': 'Hong Kong Tarot App'
            },
            body: JSON.stringify({
                // 使用性價比最高、速度飛快且支援廣東話的最新 Google Gemini 2.5 Flash
                model: 'google/gemini-2.5-flash', 
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: userPrompt }
                ],
                temperature: 0.7
            })
        });

        const data = await response.json();
        if (data.choices && data.choices[0]) {
            contentDiv.innerHTML = data.choices[0].message.content;
        } else {
            console.error(data);
            contentDiv.innerHTML = "❌ 哎呀，API 傳回了錯誤。請確認你的 OpenRouter 帳戶是否有足夠餘額，或 Key 是否輸入正確。";
        }
    } catch (error) {
        console.error(error);
        contentDiv.innerHTML = "❌ 網路連線失敗，請確認你的 iPhone 網路狀態後再試一次！";
    }
}

// 頁面初始化
window.onload = initSpreadLayout;

// 簡化版大阿爾克那牌組，供基礎占卜與核心邏輯運作
const tarotDeck = [
    { name: "愚者", keyword: "開始、自由、冒險" },
    { name: "魔術師", keyword: "創造力、專注、行動力" },
    { name: "女祭司", keyword: "直覺、潛意識、智慧" },
    { name: "女皇", keyword: "豐收、熱情、自然" },
    { name: "皇帝", keyword: "控制、穩定、權威" },
    { name: "教皇", keyword: "傳統、精神引導、體制" },
    { name: "戀人", keyword: "選擇、和諧、關係" },
    { name: "戰車", keyword: "意志力、勝利、前進" },
    { name: "力量", keyword: "勇氣、耐性、內在力量" },
    { name: "隱者", keyword: "內省、孤獨、尋求真理" },
    { name: "命運之輪", keyword: "轉折點、運氣、因果" },
    { name: "正義", keyword: "公平、誠實、法律" },
    { name: "倒吊人", keyword: "犧牲、換位思考、等待" },
    { name: "死神", keyword: "結束、轉變、新生" },
    { name: "節制", keyword: "平衡、淨化、融合" },
    { name: "惡魔", keyword: "束縛、慾望、物質主義" },
    { name: "高塔", keyword: "劇變、啟示、崩解" },
    { name: "星星", keyword: "希望、靈感、寧靜" },
    { name: "月亮", keyword: "不安、幻象、潛意識" },
    { name: "太陽", keyword: "活力、成功、喜悅" },
    { name: "審判", keyword: "覺醒、重生、重大決定" },
    { name: "世界", keyword: "圓滿、達成、旅程結束" }
];

let currentSpread = [];
let flippedCards = [false, false, false];

document.getElementById('shuffle-btn').addEventListener('click', startShuffle);

function startShuffle() {
    // 重置所有卡牌狀態
    flippedCards = [false, false, false];
    const interpretationZone = document.getElementById('interpretation-zone');
    interpretationZone.innerHTML = "牌陣已備好，請依序點擊上方卡牌進行解牌。";
    
    for (let i = 0; i < 3; i++) {
        const cardElement = document.getElementById(`card-${i}`);
        cardElement.classList.remove('flipped');
    }

    // 洗牌並抽取三張不重複的牌
    let shuffled = [...tarotDeck].sort(() => 0.5 - Math.random());
    currentSpread = [];
    
    for (let i = 0; i < 3; i++) {
        // 隨機決定正逆位 (50% 機率)
        const isUpright = Math.random() > 0.5;
        currentSpread.push({
            ...shuffled[i],
            orientation: isUpright ? "正位" : "逆位"
        });
    }
}

function flipCard(index) {
    if (currentSpread.length === 0) {
        alert("請先點擊『靈性洗牌』按鈕！");
        return;
    }
    
    const cardElement = document.getElementById(`card-${index}`);
    
    if (!flippedCards[index]) {
        // 設定牌面文字
        const backElement = document.getElementById(`back-${index}`);
        const cardData = currentSpread[index];
        
        backElement.innerHTML = `
            <div style="font-size:1rem; margin-bottom:5px;">${cardData.name}</div>
            <div style="color:${cardData.orientation === '正位' ? 'green' : 'red'}; font-size:0.8rem;">
                ${cardData.orientation}
            </div>
        `;
        
        // 執行翻牌動畫
        cardElement.classList.add('flipped');
        flippedCards[index] = true;
        
        // 更新下方即時解牌提示
        updateInterpretation();
    }
}

function updateInterpretation() {
    const positions = ["過去", "現在", "未來"];
    let htmlContent = "<h3>當前牌陣解讀提示：</h3><ul style='list-style:none; padding:10px 0;'>";
    
    flippedCards.forEach((isFlipped, idx) => {
        if (isFlipped) {
            const card = currentSpread[idx];
            htmlContent += `<li style='margin-bottom:8px;'><strong>【${positions[idx]}】</strong> ${card.name} (${card.orientation})：${card.keyword}</li>`;
        }
    });
    
    htmlContent += "</ul>";
    document.getElementById('interpretation-zone').innerHTML = htmlContent;
}

// 畫面載入時自動先洗一次牌
window.onload = startShuffle;
{\rtf1\ansi\ansicpg1252\cocoartf2818
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // \uc0\u31777 \u21270 \u29256 \u22823 \u38463 \u29246 \u20811 \u37027 \u29260 \u32068 \u65292 \u20379 \u22522 \u30990 \u21344 \u21340 \u33287 \u26680 \u24515 \u37007 \u36655 \u36939 \u20316 \
const tarotDeck = [\
    \{ name: "\uc0\u24858 \u32773 ", keyword: "\u38283 \u22987 \u12289 \u33258 \u30001 \u12289 \u20882 \u38570 " \},\
    \{ name: "\uc0\u39764 \u34899 \u24107 ", keyword: "\u21109 \u36896 \u21147 \u12289 \u23560 \u27880 \u12289 \u34892 \u21205 \u21147 " \},\
    \{ name: "\uc0\u22899 \u31085 \u21496 ", keyword: "\u30452 \u35258 \u12289 \u28507 \u24847 \u35672 \u12289 \u26234 \u24935 " \},\
    \{ name: "\uc0\u22899 \u30343 ", keyword: "\u35920 \u25910 \u12289 \u29105 \u24773 \u12289 \u33258 \u28982 " \},\
    \{ name: "\uc0\u30343 \u24093 ", keyword: "\u25511 \u21046 \u12289 \u31337 \u23450 \u12289 \u27402 \u23041 " \},\
    \{ name: "\uc0\u25945 \u30343 ", keyword: "\u20659 \u32113 \u12289 \u31934 \u31070 \u24341 \u23566 \u12289 \u39636 \u21046 " \},\
    \{ name: "\uc0\u25088 \u20154 ", keyword: "\u36984 \u25799 \u12289 \u21644 \u35559 \u12289 \u38364 \u20418 " \},\
    \{ name: "\uc0\u25136 \u36554 ", keyword: "\u24847 \u24535 \u21147 \u12289 \u21213 \u21033 \u12289 \u21069 \u36914 " \},\
    \{ name: "\uc0\u21147 \u37327 ", keyword: "\u21191 \u27683 \u12289 \u32784 \u24615 \u12289 \u20839 \u22312 \u21147 \u37327 " \},\
    \{ name: "\uc0\u38577 \u32773 ", keyword: "\u20839 \u30465 \u12289 \u23396 \u29544 \u12289 \u23563 \u27714 \u30495 \u29702 " \},\
    \{ name: "\uc0\u21629 \u36939 \u20043 \u36650 ", keyword: "\u36681 \u25240 \u40670 \u12289 \u36939 \u27683 \u12289 \u22240 \u26524 " \},\
    \{ name: "\uc0\u27491 \u32681 ", keyword: "\u20844 \u24179 \u12289 \u35488 \u23526 \u12289 \u27861 \u24459 " \},\
    \{ name: "\uc0\u20498 \u21514 \u20154 ", keyword: "\u29351 \u29298 \u12289 \u25563 \u20301 \u24605 \u32771 \u12289 \u31561 \u24453 " \},\
    \{ name: "\uc0\u27515 \u31070 ", keyword: "\u32080 \u26463 \u12289 \u36681 \u35722 \u12289 \u26032 \u29983 " \},\
    \{ name: "\uc0\u31680 \u21046 ", keyword: "\u24179 \u34913 \u12289 \u28136 \u21270 \u12289 \u34701 \u21512 " \},\
    \{ name: "\uc0\u24801 \u39764 ", keyword: "\u26463 \u32283 \u12289 \u24958 \u26395 \u12289 \u29289 \u36074 \u20027 \u32681 " \},\
    \{ name: "\uc0\u39640 \u22612 ", keyword: "\u21127 \u35722 \u12289 \u21855 \u31034 \u12289 \u23849 \u35299 " \},\
    \{ name: "\uc0\u26143 \u26143 ", keyword: "\u24076 \u26395 \u12289 \u38728 \u24863 \u12289 \u23527 \u38748 " \},\
    \{ name: "\uc0\u26376 \u20142 ", keyword: "\u19981 \u23433 \u12289 \u24187 \u35937 \u12289 \u28507 \u24847 \u35672 " \},\
    \{ name: "\uc0\u22826 \u38525 ", keyword: "\u27963 \u21147 \u12289 \u25104 \u21151 \u12289 \u21916 \u24709 " \},\
    \{ name: "\uc0\u23529 \u21028 ", keyword: "\u35258 \u37266 \u12289 \u37325 \u29983 \u12289 \u37325 \u22823 \u27770 \u23450 " \},\
    \{ name: "\uc0\u19990 \u30028 ", keyword: "\u22291 \u28415 \u12289 \u36948 \u25104 \u12289 \u26053 \u31243 \u32080 \u26463 " \}\
];\
\
let currentSpread = [];\
let flippedCards = [false, false, false];\
\
document.getElementById('shuffle-btn').addEventListener('click', startShuffle);\
\
function startShuffle() \{\
    // \uc0\u37325 \u32622 \u25152 \u26377 \u21345 \u29260 \u29376 \u24907 \
    flippedCards = [false, false, false];\
    const interpretationZone = document.getElementById('interpretation-zone');\
    interpretationZone.innerHTML = "\uc0\u29260 \u38499 \u24050 \u20633 \u22909 \u65292 \u35531 \u20381 \u24207 \u40670 \u25802 \u19978 \u26041 \u21345 \u29260 \u36914 \u34892 \u35299 \u29260 \u12290 ";\
    \
    for (let i = 0; i < 3; i++) \{\
        const cardElement = document.getElementById(`card-$\{i\}`);\
        cardElement.classList.remove('flipped');\
    \}\
\
    // \uc0\u27927 \u29260 \u20006 \u25277 \u21462 \u19977 \u24373 \u19981 \u37325 \u35079 \u30340 \u29260 \
    let shuffled = [...tarotDeck].sort(() => 0.5 - Math.random());\
    currentSpread = [];\
    \
    for (let i = 0; i < 3; i++) \{\
        // \uc0\u38568 \u27231 \u27770 \u23450 \u27491 \u36870 \u20301  (50% \u27231 \u29575 )\
        const isUpright = Math.random() > 0.5;\
        currentSpread.push(\{\
            ...shuffled[i],\
            orientation: isUpright ? "\uc0\u27491 \u20301 " : "\u36870 \u20301 "\
        \});\
    \}\
\}\
\
function flipCard(index) \{\
    if (currentSpread.length === 0) \{\
        alert("\uc0\u35531 \u20808 \u40670 \u25802 \u12302 \u38728 \u24615 \u27927 \u29260 \u12303 \u25353 \u37397 \u65281 ");\
        return;\
    \}\
    \
    const cardElement = document.getElementById(`card-$\{index\}`);\
    \
    if (!flippedCards[index]) \{\
        // \uc0\u35373 \u23450 \u29260 \u38754 \u25991 \u23383 \
        const backElement = document.getElementById(`back-$\{index\}`);\
        const cardData = currentSpread[index];\
        \
        backElement.innerHTML = `\
            <div style="font-size:1rem; margin-bottom:5px;">$\{cardData.name\}</div>\
            <div style="color:$\{cardData.orientation === '\uc0\u27491 \u20301 ' ? 'green' : 'red'\}; font-size:0.8rem;">\
                $\{cardData.orientation\}\
            </div>\
        `;\
        \
        // \uc0\u22519 \u34892 \u32763 \u29260 \u21205 \u30059 \
        cardElement.classList.add('flipped');\
        flippedCards[index] = true;\
        \
        // \uc0\u26356 \u26032 \u19979 \u26041 \u21363 \u26178 \u35299 \u29260 \u25552 \u31034 \
        updateInterpretation();\
    \}\
\}\
\
function updateInterpretation() \{\
    const positions = ["\uc0\u36942 \u21435 ", "\u29694 \u22312 ", "\u26410 \u20358 "];\
    let htmlContent = "<h3>\uc0\u30070 \u21069 \u29260 \u38499 \u35299 \u35712 \u25552 \u31034 \u65306 </h3><ul style='list-style:none; padding:10px 0;'>";\
    \
    flippedCards.forEach((isFlipped, idx) => \{\
        if (isFlipped) \{\
            const card = currentSpread[idx];\
            htmlContent += `<li style='margin-bottom:8px;'><strong>\uc0\u12304 $\{positions[idx]\}\u12305 </strong> $\{card.name\} ($\{card.orientation\})\u65306 $\{card.keyword\}</li>`;\
        \}\
    \});\
    \
    htmlContent += "</ul>";\
    document.getElementById('interpretation-zone').innerHTML = htmlContent;\
\}\
\
// \uc0\u30059 \u38754 \u36617 \u20837 \u26178 \u33258 \u21205 \u20808 \u27927 \u19968 \u27425 \u29260 \
window.onload = startShuffle;}
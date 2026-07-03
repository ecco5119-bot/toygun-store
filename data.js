/* ===== 戰術家 TacticalPro — 網站資料設定檔 ===== */
const SiteData = {
  // 網站基本設定
  site: {
    name: '戰術家',
    nameEn: 'TACTICALPRO',
    tagline: '專業玩具槍跨境銷售平台',
    email: 'service@tacticalpro.com',
    line: '@tacticalpro',
    whatsapp: '+852 9123 4567',
    address: '香港九龍灣宏光道1號',
    hours: '週一至週五 09:00-18:00',
    since: '2018',
  },

  // 英雄區
  hero: {
    badge: '🚀 全球配送 · 跨境直達',
    headline: '專業<span class="accent">玩具槍</span>跨境銷售',
    tags: ['全球配送', '正品保障', '專業客服'],
    cta1: '🔫 立即選購',
    cta2: '了解更多',
  },

  // 關於我們
  about: {
    heading: '關於我們',
    subheading: '專業的玩具槍跨境銷售平台',
    title: '戰術家 TacticalPro',
    paragraphs: [
      '戰術家成立於2018年，致力於為全球玩家提供高品質的玩具槍及相關配件。我們擁有豐富的產品線，涵蓋水彈槍、軟彈槍、電動槍、氣動槍等各類產品，滿足不同年齡層與需求的使用者。',
      '我們與多家國際物流合作夥伴建立了長期穩定的合作關係，確保每一筆訂單都能安全、快速地送達您的手中。無論您身在何處，戰術家都能為您提供優質的產品與服務。',
    ],
    features: [
      { icon: '🌍', label: '全球配送' },
      { icon: '✅', label: '正品保障' },
      { icon: '💬', label: '24/7 客服' },
    ],
  },

  // 聯絡我們
  contact: {
    heading: '聯絡我們',
    subheading: '有任何疑問？歡迎與我們聯繫',
    successTitle: '感謝您的來信！',
    successMsg: '我們已收到您的訊息，將在24小時內盡快回覆您。',
  },

  // 購物車結帳
  checkout: {
    title: '感謝您的訂購！',
    msg: '我們將在24小時內與您確認訂單詳情與配送方式。',
  },

  // 商品列表
  products: [
    { id:'wb-001', name:'戰術M4A1 水彈槍', category:'water', price:89.99, desc:'高性能電動連發水彈槍，射程遠、精準度高，適合戶外對戰與收藏。', hue:120, badge:'hot', img:'' },
    { id:'wb-002', name:'HK416 全自動水彈槍', category:'water', price:109.99, desc:'仿HK416外觀設計，全自動連發模式，內建大容量彈匣，續航力強。', hue:160, badge:'new', img:'' },
    { id:'wb-003', name:'AK47 戰術版水彈槍', category:'water', price:79.99, desc:'經典AK造型，強化尼龍槍身，手感紮實，適合初學者入門。', hue:30, badge:null, img:'' },
    { id:'wb-004', name:'MP5 衝鋒水彈槍', category:'water', price:69.99, desc:'輕巧短小設計，便於攜帶，近距離對戰利器，性價比首選。', hue:200, badge:'hot', img:'' },
    { id:'fb-001', name:'Nerf 精英 2.0 軟彈槍', category:'foam', price:49.99, desc:'經典軟彈槍款，安全好玩，適合室內外遊戲，附贈12發軟彈。', hue:280, badge:null, img:'' },
    { id:'fb-002', name:'戰術狙擊軟彈槍', category:'foam', price:59.99, desc:'狙擊款式設計，附瞄準鏡，射程可達20米，精準射擊體驗。', hue:300, badge:'new', img:'' },
    { id:'fb-003', name:'MEGA 大口徑軟彈槍', category:'foam', price:44.99, desc:'大口徑軟彈設計，射擊感十足，旋轉式彈巢，快速裝填。', hue:340, badge:null, img:'' },
    { id:'fb-004', name:'雙槍套裝軟彈槍', category:'foam', price:74.99, desc:'雙槍組合，與朋友一起對戰更有趣，附贈48發軟彈與靶標。', hue:260, badge:'hot', img:'' },
    { id:'eg-001', name:'AR15 金屬電動槍', category:'electric', price:249.99, desc:'全金屬槍身，高性能電動波箱，射速快、穩定性佳，專業玩家首選。', hue:180, badge:null, img:'' },
    { id:'eg-002', name:'SCAR-L 戰術電動槍', category:'electric', price:299.99, desc:'FN SCAR授權造型，金屬上槍身，可調HOP-UP系統，精準射擊。', hue:100, badge:'new', img:'' },
    { id:'eg-003', name:'G36C 突擊電動槍', category:'electric', price:219.99, desc:'輕量化設計，摺疊槍托，CQB近戰利器，德國工藝品質。', hue:140, badge:null, img:'' },
    { id:'eg-004', name:'SR-25 精準射手電動槍', category:'electric', price:329.99, desc:'長槍管設計，內建精密內管，專為中遠距離精準射擊打造。', hue:50, badge:'hot', img:'' },
    { id:'gb-001', name:'Glock 17 氣動槍', category:'gas', price:139.99, desc:'經典手槍款式，強勁後座力回饋，金屬滑套，手感逼真。', hue:10, badge:'hot', img:'' },
    { id:'gb-002', name:'1911 戰術版氣動槍', category:'gas', price:149.99, desc:'百年經典手槍設計，全金屬結構，瓦斯動力，精準可靠。', hue:20, badge:null, img:'' },
    { id:'gb-003', name:'Hi-Capa 競技氣動槍', category:'gas', price:169.99, desc:'競技級手槍，大容量彈匣，快速連發，比賽專用款式。', hue:40, badge:'new', img:'' },
    { id:'ac-001', name:'戰術紅點瞄準鏡', category:'accessory', price:39.99, desc:'高亮度紅點，快拆底座設計，適用各類導軌，精準瞄準。', hue:0, badge:null, img:'' },
    { id:'ac-002', name:'戰術槍背帶', category:'accessory', price:19.99, desc:'軍規尼龍材質，可調式長度，舒適耐用，適合長時間配戴。', hue:60, badge:null, img:'' },
    { id:'ac-003', name:'水彈專用彈匣(3入)', category:'accessory', price:29.99, desc:'大容量彈匣組，快速換彈，兼容多款水彈槍型號。', hue:80, badge:'hot', img:'' },
    { id:'ac-004', name:'戰術護目鏡', category:'accessory', price:15.99, desc:'防霧防衝擊鏡片，可調式頭帶，安全遊戲必備裝備。', hue:220, badge:null, img:'' }
  ],

  // 分類名稱
  categories: {
    all: '全部',
    water: '水彈槍',
    foam: '軟彈槍',
    electric: '電動槍',
    gas: '氣動槍',
    accessory: '配件'
  },

  // 主題顏色設定
  theme: {
    bgDeep: '#0b0c0e',
    bgPrimary: '#111316',
    bgCard: '#1a1d22',
    redPrimary: '#c0392b',
    redBright: '#e74c3c',
  }
};

// 從 localStorage 載入自訂資料，若無則使用預設值
function loadSiteData() {
  try {
    const saved = localStorage.getItem('tacticalpro_site_data');
    if (saved) {
      const custom = JSON.parse(saved);
      // 深度合併
      return deepMerge(JSON.parse(JSON.stringify(SiteData)), custom);
    }
  } catch(e) {}
  return JSON.parse(JSON.stringify(SiteData));
}

// 儲存自訂資料到 localStorage
function saveSiteData(data) {
  try {
    localStorage.setItem('tacticalpro_site_data', JSON.stringify(data));
    return true;
  } catch(e) {
    return false;
  }
}

// 匯出設定檔（供下載）
function exportSiteData(data) {
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'tacticalpro-data-backup.json';
  a.click();
  URL.revokeObjectURL(url);
}

// 匯入設定檔（從檔案）
function importSiteData(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        resolve(data);
      } catch(err) {
        reject(err);
      }
    };
    reader.onerror = reject;
    reader.readAsText(file);
  });
}

// 簡單的深度合併
function deepMerge(target, source) {
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      if (!target[key]) target[key] = {};
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

// 重置所有資料為預設值
function resetSiteData() {
  localStorage.removeItem('tacticalpro_site_data');
  return JSON.parse(JSON.stringify(SiteData));
}

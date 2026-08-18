/**
 * Sahifadagi BARCHA matn shu yerda.
 *
 * Matnlar Figma maketidan bir-bir ko'chirilgan — komponentlar faqat chizadi.
 * Matnni tahrirlash uchun JSX ochish shart emas.
 */

export const BRAND = {
  name: 'Raqamli Sovchi',
  short: 'Sovchi',
  tagline: 'Nikoh uchun jiddiy tanishuv',
}

export const NAV_LINKS = [
  { href: '#qanday-ishlaydi', label: 'Qanday ishlaydi' },
  { href: '#rollar', label: 'Rollar' },
  { href: '#imkoniyatlar', label: 'Imkoniyatlar' },
  { href: '#xavfsizlik', label: 'Xavfsizlik' },
  { href: '#narxlar', label: 'Narxlar' },
  { href: '#savollar', label: 'Savollar' },
]

/** Sarlavhadagi tugma: tor ekranda matn qisqaradi (maketda ham shunday). */
export const NAV_CTA = { long: 'Ilovani yuklab olish', short: 'Yuklab olish' }

export const HERO = {
  badge: 'Oilaviy qadriyatlar asosida tanishuv',
  /** Tor ekranda nishon va matn qisqaradi — maketdagi ikkinchi variant. */
  badgeShort: 'Oilaviy qadriyatlar asosida',
  title: 'Nikoh uchun jiddiy tanishuv — oila roziligi bilan',
  description:
    'Sovchi — 30 savollik moslik tahlili, tasdiqlangan anketalar va vakil orqali boshqaruv. ' +
    'Suratlar parda tartibida himoyalanadi, suhbat esa faqat ikki tomon roziligi bilan boshlanadi.',
  descriptionShort: '30 savollik moslik tahlili, tasdiqlangan anketalar va vakil orqali boshqaruv.',
  primaryCta: 'Bepul boshlash',
  secondaryCta: 'Qanday ishlaydi',
  points: ['Pasport bo‘yicha tasdiqlash', 'Rasm maxfiyligi', 'Vakil nazorati'],
}

/**
 * Raqamlar jonli sanaladi, shuning uchun `value` — SON, `suffix` esa alohida.
 * Formatlash (12000 → "12 000") `formatSum` zimmasida.
 */
export const STATS = [
  { value: 12000, suffix: '+', label: 'Tasdiqlangan anketa' },
  { value: 30, suffix: '', label: 'Moslik savoli' },
  { value: 3, suffix: '', label: 'Rol: kuyov · kelin · vakil' },
  { value: 4200, suffix: '+', label: 'Yopilgan tanishuv' },
]

export const COMPARISON = {
  eyebrow: 'Nega Sovchi',
  title: 'An’anaviy sovchilik sekin, tasodifiy va nazoratsiz',
  subtitle: 'Uch xil muammo — va ilova ularni qanday hal qilishi.',
  solutionLabel: 'Sovchi bilan',
  rows: [
    {
      problem: {
        title: 'Nomzodlar doirasi tor',
        text: 'Tanish-bilish orqali izlash oylar davom etadi va bir necha nomzod bilan cheklanadi.',
      },
      solution: 'Viloyat, yosh, ta’lim va moslik foizi bo‘yicha filtr — mos nomzodlar bir ekranda.',
    },
    {
      problem: {
        title: 'Ma’lumot tekshirilmaydi',
        text: 'Yosh, oila, ta’lim haqidagi gaplar og‘zaki uzatiladi va noto‘g‘ri chiqishi mumkin.',
      },
      solution:
        'Pasport va selfi orqali tasdiqlash, «Tasdiqlangan profil» belgisi va shikoyat tizimi.',
    },
    {
      problem: {
        title: 'Oila jarayondan chetda',
        text: 'Ota-ona yoki qarindosh nomzodni ko‘ra olmaydi, jarayonni kuzatolmaydi.',
      },
      solution:
        'Vakil roli: qarindosh anketani to‘ldiradi va boshqaradi — nomzod roziligi SMS bilan tasdiqlanadi.',
    },
  ],
}

export const STEPS = {
  eyebrow: 'Qanday ishlaydi',
  title: 'To‘rt qadam — ro‘yxatdan suhbatgacha',
  subtitle:
    'Anketa to‘ldirish 9 qadam, moslik testi esa ixtiyoriy: testsiz ham nomzodlarni ko‘rish mumkin.',
  items: [
    {
      no: '01',
      title: 'Ro‘yxatdan o‘tish',
      text: 'Telefon raqami va SMS kod. So‘ng rolni tanlaysiz: kuyov, kelin yoki vakil.',
      textShort: 'Telefon raqami va SMS kod, so‘ng rolni tanlaysiz.',
    },
    {
      no: '02',
      title: 'Anketa to‘ldirish',
      text: 'Ism, yosh, bo‘y, viloyat, ta’lim, suratlar va ovozli tanishtiruv — 9 qadam, progress bilan.',
      textShort: '9 qadam: ism, yosh, bo‘y, viloyat, suratlar, ovoz.',
    },
    {
      no: '03',
      title: 'Moslik testi',
      text: '30 ta savol. AI javoblarni tahlil qilib moslik foizini va bo‘limlar kesimini beradi.',
      textShort: '30 ta savol — AI moslik foizini hisoblaydi. Ixtiyoriy.',
    },
    {
      no: '04',
      title: 'Nomzod va suhbat',
      text: 'Moslik bo‘yicha nomzodlar ro‘yxati. Suhbat faqat ikki tomon roziligidan keyin ochiladi.',
      textShort: 'Suhbat faqat ikki tomon roziligi bilan ochiladi.',
    },
  ],
}

export const ROLES = {
  eyebrow: 'Uch rol',
  title: 'Har bir rol uchun alohida oqim',
  subtitle:
    'Ilova bir xil ekranlarni hammaga ko‘rsatmaydi — kuyov, kelin va vakil turlicha ishlaydi.',
  items: [
    {
      key: 'kuyov',
      name: 'Kuyov',
      icon: 'users',
      tone: 'blue',
      points: [
        'Moslik foizi bo‘yicha nomzodlar ro‘yxati',
        'Nomzod profili va so‘rov yuborish',
        'Saqlangan anketalar va suhbatlar',
        'Premium: kengaytirilgan filtr va limitlar',
      ],
    },
    {
      key: 'kelin',
      name: 'Kelin',
      icon: 'shield',
      tone: 'violet',
      points: [
        'Kelgan so‘rovlarni ko‘rib chiqish',
        'Parda tartibi sukut bo‘yicha yopiq',
        'Birinchi bo‘lib yozish shart emas',
        'Vakil orqali ko‘rib chiqish imkoniyati',
      ],
    },
    {
      key: 'vakil',
      name: 'Vakil',
      icon: 'heart',
      tone: 'green',
      points: [
        'Qarindosh nomzod nomidan anketa',
        'Nomzod roziligi SMS bilan tasdiqlanadi',
        'Mezonlar, takliflar va uchrashuvlar',
        'Shaxsiy yozishmalarga kirish yo‘q',
      ],
    },
  ],
}

/**
 * `tone` — ikonka plitkasining rangi (maketda har bir mexanizm o'z rangida).
 * `titleShort` / `textShort` — tor ekran uchun qisqargan variantlar.
 */
export const FEATURES = {
  eyebrow: 'Imkoniyatlar',
  title: 'Tanishuvni ishonchli qiladigan oltita mexanizm',
  titleShort: 'Tanishuvni ishonchli qiladigan mexanizmlar',
  items: [
    {
      key: 'match',
      icon: 'sparkle',
      tone: 'blue',
      title: 'AI moslik tahlili',
      text: '30 ta savol javoblari asosida umumiy foiz va bo‘limlar kesimi hisoblanadi.',
      textShort: '30 savol asosida foiz va bo‘limlar kesimi.',
    },
    {
      key: 'curtain',
      icon: 'eye',
      tone: 'violet',
      title: 'Parda tartibi',
      text: 'Suratlar sukut bo‘yicha yopiq. Ochish uchun egasining ruxsati so‘raladi.',
      textShort: 'Suratlar yopiq — ochish uchun ruxsat so‘raladi.',
    },
    {
      key: 'guardian',
      icon: 'users',
      tone: 'green',
      title: 'Vakil boshqaruvi',
      text: 'Amma, xola yoki tog‘a nomzod nomidan anketani to‘ldiradi va jarayonni kuzatadi.',
      textShort: 'Qarindosh anketani to‘ldiradi va kuzatadi.',
    },
    {
      key: 'verified',
      icon: 'shield',
      tone: 'blue',
      title: 'Tasdiqlangan profillar',
      titleShort: 'Tasdiqlangan profil',
      text: 'Pasport va selfi tekshiruvi, «Tasdiqlangan» belgisi va shikoyat tizimi.',
      textShort: 'Pasport va selfi tekshiruvi, shikoyat tizimi.',
    },
    {
      key: 'limit',
      icon: 'message',
      tone: 'amber',
      title: 'Suhbat limitlari',
      text: 'Suhbat muddati va xabar chegarasi sozlanadi, ota-ona hisobini ulash mumkin.',
      textShort: 'Muddat va xabar chegarasi, ota-ona nazorati.',
    },
    {
      key: 'psy',
      icon: 'star',
      tone: 'violet',
      title: 'Psixolog konsultatsiyasi',
      titleShort: 'Psixolog',
      text: 'Oilaviy psixologni ilova ichida band qilish va onlayn suhbat.',
      textShort: 'Oilaviy psixologni ilova ichida band qilish.',
    },
  ],
}

export const MATCH = {
  eyebrow: 'Moslik tahlili',
  title: '30 ta savol — bitta aniq javob',
  subtitle:
    'Testni topshirgan foydalanuvchilar bir-birini foiz va bo‘limlar kesimida ko‘radi. ' +
    'Test ixtiyoriy: topshirmasangiz ham nomzodlarni ko‘rasiz, faqat moslik yopiq bo‘ladi.',
  metrics: [
    { value: '60%', label: 'Din va qadriyatlar' },
    { value: '80%', label: 'Qarindoshlar' },
    { value: '65%', label: 'Kelajak' },
  ],
  points: [
    'Savollar 5 bo‘limga bo‘lingan: din va qadriyatlar, moliya, qarindoshlar, xarakter, kelajak',
    'Moslik faqat 30 ta javob to‘liq bo‘lganda hisoblanadi',
    'Natijada har bir bo‘lim foizi va «samimiylik indeksi» ko‘rsatiladi',
    'Javoblarni boshqa foydalanuvchi ko‘rmaydi — faqat umumlashgan foiz ko‘rinadi',
  ],
}

export const PRIVACY = {
  eyebrow: 'Xavfsizlik',
  title: 'Maxfiylik — mahsulotning asosiy qismi',
  subtitle:
    'Rasm va shaxsiy ma’lumot kimga, qachon va qancha muddatga ochilishini foydalanuvchi o‘zi belgilaydi.',
  subtitleShort: 'Rasm va shaxsiy ma’lumot kimga ochilishini foydalanuvchi o‘zi belgilaydi.',
  guarantees: {
    title: 'Nimalar kafolatlanadi',
    /** `desktopOnly` — maketda tor ekranda oxirgi band ko'rsatilmaydi. */
    items: [
      { text: 'Shaxs pasport va selfi orqali tasdiqlanadi' },
      { text: 'Suratlar parda tartibi bilan himoyalanadi' },
      {
        text: 'Suhbat faqat ikki tomon roziligi bilan ochiladi',
        textShort: 'Suhbat ikki tomon roziligi bilan ochiladi',
      },
      { text: 'Bloklash va shikoyat 24 soat ichida ko‘riladi' },
      {
        text: 'Hisobni o‘chirish va ma’lumotni olib tashlash — profil ichida',
        textShort: 'Hisobni o‘chirish — profil ichida',
      },
      { text: 'Ota-ona yoki vakil hisobini ulash mumkin', desktopOnly: true },
    ],
  },
  curtain: {
    title: 'Parda tartibi qanday ishlaydi',
    steps: [
      {
        name: 'Yopiq',
        icon: 'lock',
        tone: 'neutral',
        text: 'Surat xiralashgan holda ko‘rinadi, ustida «Maxfiy rasm» yozuvi.',
      },
      {
        name: 'So‘rov',
        icon: 'message',
        tone: 'amber',
        text: 'Nomzod rasmni ko‘rish uchun so‘rov yuboradi — bildirishnoma keladi.',
      },
      {
        name: 'Ochiq',
        icon: 'eye',
        tone: 'green',
        text: 'Ruxsat berilgach surat ochiladi; istalgan vaqtda qaytarib yopish mumkin.',
      },
    ],
  },
}

export const PSYCHOLOGISTS = {
  eyebrow: 'Yordam',
  title: 'Oilaviy psixolog — ilova ichida',
  subtitle:
    'Tanishuv va nikoh oldidan maslahat: nomzod tanlash, suhbat va oila bilan muloqot bo‘yicha.',
  cta: 'Band qilish',
  items: [
    {
      name: 'Nodira Karimova',
      role: 'Oilaviy psixolog · 8 yil tajriba',
      price: 150000,
      duration: '45 daqiqa',
      tone: 'violet',
    },
    {
      name: 'Sardor Rahimov',
      role: 'Nikoh oldi maslahat · 6 yil tajriba',
      price: 150000,
      duration: '45 daqiqa',
      tone: 'blue',
    },
    {
      name: 'Malika Toshpo‘latova',
      role: 'Yoshlar psixologiyasi · 10 yil tajriba',
      price: 180000,
      duration: '60 daqiqa',
      tone: 'green',
    },
  ],
}

export const PRICING = {
  eyebrow: 'Narxlar',
  title: 'Bepul boshlang — kerak bo‘lsa kengaytiring',
  subtitle: 'To‘lov nomzodlar sonini emas, ishonch va boshqaruv darajasini oshiradi.',
  note: 'Narxlar dastlabki — to‘lov usullari va sinov muddati aniqlanmoqda.',
  plans: [
    {
      name: 'Bepul',
      price: 0,
      period: '',
      caption: 'Tanishuvni boshlash uchun yetarli',
      cta: 'Tanlash',
      featured: false,
      points: [
        'Anketa va 30 savollik moslik testi',
        'Moslik bo‘yicha nomzodlar ro‘yxati',
        'Parda tartibi va maxfiylik sozlamalari',
        'Suhbat — bazaviy limit bilan',
      ],
    },
    {
      name: 'Premium',
      price: 49000,
      period: '/ oy',
      caption: 'Profilingiz ko‘proq ishonch uyg‘otadi',
      cta: 'Premiumni sinash',
      featured: true,
      badge: 'Ommabop',
      points: [
        'Profilingizni kim ko‘rganini bilish',
        'Kengaytirilgan moslik hisoboti va tavsiyalar',
        'Tezkor moderatsiya va «Tasdiqlangan» belgisi',
        'Maxfiylikni nozik sozlash',
        'Psixolog bilan 1 ta konsultatsiya sovg‘a',
      ],
    },
    {
      name: 'Vakil paketi',
      price: 89000,
      period: '/ oy',
      caption: 'Qarindosh nomzodlarni boshqarish uchun',
      cta: 'Tanlash',
      featured: false,
      points: [
        '3 tagacha nomzod anketasini boshqarish',
        'Mezonlar shabloni va takliflar tarixi',
        'Uchrashuvlar taqvimi va eslatmalar',
        'Oila uchun qisqacha hisobot',
      ],
    },
  ],
}

export const FAQ = {
  eyebrow: 'Savol-javob',
  title: 'Ko‘p beriladigan savollar',
  items: [
    {
      q: 'Ilova bepulmi?',
      a: 'Ha. Anketa, moslik testi va nomzodlar ro‘yxati bepul. Premium qo‘shimcha ishonch va boshqaruv imkoniyatlarini beradi.',
    },
    {
      q: 'Moslik testi majburiymi?',
      a: 'Yo‘q, ixtiyoriy. Testsiz ham nomzodlarni ko‘rasiz, lekin moslik foizi yopiq bo‘ladi va uni istalgan vaqtda ochish mumkin.',
    },
    {
      q: 'Suratlarimni kim ko‘radi?',
      a: 'Sukut bo‘yicha hech kim. Parda tartibida surat xiralashgan bo‘ladi; ochish uchun nomzod so‘rov yuboradi va siz ruxsat berasiz.',
    },
    {
      q: 'Vakil nimalarni ko‘ra oladi?',
      a: 'Anketa, mezonlar, kelgan takliflar va moslik foizini. Shaxsiy yozishmalar va xom javoblar vakilga ko‘rinmaydi.',
    },
    {
      q: 'Ma’lumotlarim qanday himoyalanadi?',
      a: 'Shaxs pasport va selfi orqali tasdiqlanadi, ma’lumotlar shifrlangan holda saqlanadi, istalgan vaqtda o‘chirishni talab qilish mumkin.',
    },
    {
      q: 'Hisobni o‘chirsam nima bo‘ladi?',
      a: 'Profil darhol yopiladi. 30 kun ichida tiklash mumkin, undan keyin ma’lumotlar butunlay o‘chiriladi.',
    },
  ],
}

export const CTA = {
  title: 'Bugun anketani to‘ldiring — mos nomzodni ertaga ko‘ring',
  subtitle: 'Ro‘yxatdan o‘tish 2 daqiqa. Anketani keyinroq ham to‘ldirishingiz mumkin.',
  stores: [
    { caption: 'iOS uchun', name: 'App Store' },
    { caption: 'Android uchun', name: 'Google Play' },
  ],
}

export const FOOTER = {
  about: 'Oilaviy qadriyatlarga asoslangan tanishuv ilovasi. O‘zbekiston bo‘ylab ishlaydi.',
  columns: [
    {
      title: 'Mahsulot',
      links: [
        { label: 'Qanday ishlaydi', href: '#qanday-ishlaydi' },
        { label: 'Rollar', href: '#rollar' },
        { label: 'Imkoniyatlar', href: '#imkoniyatlar' },
        { label: 'Narxlar', href: '#narxlar' },
      ],
    },
    {
      title: 'Yordam',
      links: [
        { label: 'Yordam markazi', href: '#savollar' },
        { label: 'Psixologlar', href: '#psixolog' },
        { label: 'Aloqa: +998 90 000-00-00', href: 'tel:+998900000000' },
        { label: 'support@sovchi.app', href: 'mailto:support@sovchi.app' },
      ],
    },
    {
      title: 'Huquqiy',
      links: [
        { label: 'Maxfiylik siyosati', href: '#xavfsizlik' },
        { label: 'Foydalanish shartlari', href: '#xavfsizlik' },
        { label: 'Ommaviy oferta', href: '#narxlar' },
        { label: 'Ma’lumotlarni o‘chirish', href: '#xavfsizlik' },
      ],
    },
  ],
  socials: [
    { label: 'Telegram', href: 'https://t.me' },
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'YouTube', href: 'https://youtube.com' },
  ],
}

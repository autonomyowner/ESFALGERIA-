### ESFALGERIA — Product Requirements Document (PRD)

**Owner**: Abdenacer Djeddi — WhatsApp: 0799303561

**Inspiration**: Premium, modern, conversion-focused layout similar to [futcoinshop.com](https://futcoinshop.com/?fbclid=IwY2xjawMDA9BleHRuA2FlbQIxMABicmlkETFQd1B3OW5UaU02RGJXbTVxAR4zuEjh8JHcWs8-GOCoom75mpFUxtHmj9ut8-7y3_bT7ApCQK1M3_a-teif7g_aem_LFPkc0QlVuDnv6oGD0p_mg)

## 1) Overview
- **Goal**: Sell FC/FIFA coins via WhatsApp (no sign-in). Emphasize trust, speed, and mobile conversion.
- **Brand**: Premium black/silver/gold.
- **Locale**: Arabic (ar-DZ), RTL, mobile-first.

## 2) Audience & KPIs
- **Audience**: لاعبو FC/فيفا في الجزائر والمنطقة العربية.
- **Primary KPI**: عدد محادثات واتساب التي تبدأ من الموقع.
- **Secondary KPIs**: نقرات CTA، وقت المكوث، مشاهدة الأسئلة الشائعة.

## 3) Scope (MVP)
- **Pages**:
  - Trading (التداول)
  - Boosting (البوستينغ)
  - Sell (البيع لنا)
  - Rewards (المكافآت)
  - FAQ (الأسئلة الشائعة)
  - أقسام عالمية: بطل الصفحة، محدد العملات/الأسعار، شارات الثقة، CTA الاتصال
- **بدون تسجيل دخول**؛ جميع الطلبات تبدأ عبر واتساب برسالة مُسبقة التعبئة.

## 4) Core User Flows (Mobile-first)
- **شراء العملات**:
  1) اختيار المنصة: PlayStation / Xbox / PC
  2) اختيار الكمية: منزلق + قيم جاهزة (100K، 250K، 500K، 1M)
  3) إظهار السعر التقديري وطريقة التسليم
  4) زر CTA “اطلب عبر واتساب” → فتح واتساب برسالة عربية مُسبقة تضم: الكمية، المنصة، الاسم، الرقم، طريقة التسليم
- **Boosting**: اختيار المستوى/الهدف → CTA واتساب مع التفاصيل
- **البيع لنا**: تحديد الكمية/المنصة + الطريقة → CTA واتساب
- **Rewards**: شرح البرنامج؛ التتبع يدويًا عبر واتساب (بدون حساب)
- **FAQ**: أسئلة قابلة للطي بإجابات قصيرة واضحة

## 5) WhatsApp Deep Link
- **الصيغة**: `https://wa.me/<countrycode><number>?text=<encoded>`
- **افتراض**: رمز الجزائر +213 → الرقم الدولي: `213799303561` (يرجى التأكيد)
- **رسالة عربية مُسبقة**:
  - "مرحبا عبد الناصر، أريد شراء {amount} عملة FC لمنصة {platform}. اسمي {customer_name}. رقمي {phone}. طريقة التسليم: {delivery_method}. ملاحظات: {notes}"
- **طرق التسليم**: Comfort Trade / Player Auction

## 6) Design System & Brand
- **الألوان/التدرجات**:
  - ذهبي/أسود/فضي فاخر
  - `bg-gradient-to-br from-slate-900 via-yellow-600 to-slate-900`
  - `bg-gradient-to-br from-slate-900 via-slate-400 to-slate-900`
- **عناصر الواجهة**:
  - أزرار CTA بتأثير لمعان ذهبي
  - شريط CTA سفلي مثبت على الجوال: “اطلب الآن”
  - بطاقات خدمات: Trading / Boosting / Sell / Rewards
  - محدد كميات (منزلق + أزرار سريعة)
  - شارات ثقة (تسليم سريع، دعم دائم، دفع آمن)
- **الخطوط (عربية)**: Tajawal أو Cairo، عناوين واضحة، قابلية قراءة عالية على الجوال
- **الحركة**: تدرج متحرك خفيف، انتقالات ناعمة

## 7) Content (Arabic — نماذج نصوص)
- **Hero**:
  - العنوان: "اشحن عملات FC بسرعة وأمان"
  - الوصف: "تسليم فوري، أسعار منافسة، دعم عبر واتساب"
  - الأزرار: "ابدأ الآن"، "تحدث عبر واتساب"
- **Trading**: "تداول آمن بإشراف فريقنا. المنصات: PlayStation / Xbox / PC"
- **Boosting**: "نرفع تقييم فريقك بأمان وشفافية، دون الحاجة لتسجيل"
- **Sell**: "بع عملاتك لنا بأفضل سعر — الدفعات سريعة"
- **Rewards**: "اكسب مكافآت على كل عملية شراء. نقاط تُحتسب عبر واتساب"
- **FAQ** (أمثلة):
  - "كم يستغرق التسليم؟"
  - "ما طرق التسليم المتاحة؟"
  - "هل أحتاج لتسجيل حساب؟" — "لا"
  - "هل الأسعار ثابتة؟" — "قد تتغير حسب السوق"
- **Footer**: "واتساب: 0799303561 — عبد الناصر جدّي"

## 8) SEO, Performance, Accessibility
- **SEO**: لغة عربية `ar-DZ`، اتجاه RTL، عناوين وأوصاف ميتا لكل صفحة، صور Open Graph
- **الأداء**: Vite، تقطيع الكود، خطوط وصور محسّنة، استهداف LCP < 2.5s على 4G
- **الوصولية**: تباين كافٍ، تنقل عبر لوحة المفاتيح، ARIA للأكورديون، حالات تركيز واضحة

## 9) Tech Stack
- **Frontend**: Vite + React + TypeScript
- **Styling**: Tailwind CSS (دعم RTL)
- **Icons**: Tabler Icons
- **State**: بسيط (استخدام معلمات URL حيث يلزم)
- **i18n**: اللغة العربية فقط في MVP (قابل للتوسعة)
- **Analytics**: Google Analytics أو Plausible
- **استضافة**: Static (Vercel/Netlify)
- **Config**:
  - `VITE_OWNER_NAME`, `VITE_WHATSAPP_NUMBER`, `VITE_COUNTRY_CODE`
  - جدول الأسعار: JSON ثابت

## 10) Information Architecture / Navigation
- الترويسة: شعار "ESFALGERIA" + روابط (Trading, Boosting, Sell, Rewards, FAQ) + زر واتساب
- الفوتر: تواصل، سياسات، روابط اجتماعية (اختياري)
- أقسام الهبوط: البطل → محدد العملات/الأسعار → مزايا/شارات → الخدمات → المكافآت → الأسئلة الشائعة → CTA

## 11) Policies & Trust
- تصريح ضمان الاسترجاع (إن وُجد)
- توضيح أمان طرق التسليم
- صفحات الشروط وسياسة الاسترجاع (ثابتة بسيطة)

## 12) Milestones (Timeline)
- M1: نظام التصميم + هيكل الصفحات
- M2: محدد العملات + ربط واتساب
- M3: المحتوى العربي + FAQ + Rewards
- M4: تحسينات (حركات، SEO، تحليلات) + نشر

## 13) Open Items to Confirm
- رمز الدولة لرقم واتساب: هل هو +213؟ إن كان مختلفًا، يرجى التزويد بالصيغة الدولية الصحيحة.
- المنصات: تأكيد PlayStation/Xbox/PC.
- طرق التسليم: Comfort Trade / Player Auction — هل كلاهما مدعوم؟
- باقات الكميات والأسعار الابتدائية (100K، 250K، 500K، 1M ...).
- تفاصيل برنامج المكافآت (نقاط/خصومات).

## 14) Appendices
- **Env**: `VITE_OWNER_NAME=Abdenacer Djeddi`, `VITE_COUNTRY_CODE=213`, `VITE_WHATSAPP_NUMBER=799303561`
- **Reference**: [futcoinshop.com](https://futcoinshop.com/?fbclid=IwY2xjawMDA9BleHRuA2FlbQIxMABicmlkETFQd1B3OW5UaU02RGJXbTVxAR4zuEjh8JHcWs8-GOCoom75mpFUxtHmj9ut8-7y3_bT7ApCQK1M3_a-teif7g_aem_LFPkc0QlVuDnv6oGD0p_mg)



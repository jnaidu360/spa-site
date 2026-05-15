/** UI copy for English and Chinese (matches original site `lang="zh"`). */

export type SiteLang = 'en' | 'zh';

export const SITE_LANG_STORAGE_KEY = 'waples-site-lang';

export const messages: Record<SiteLang, Record<string, string>> = {
	en: {
		'meta.title': 'Waples SPA | Relaxing Massage & Wellness in San Diego',
		'meta.description':
			'Relaxing massage and wellness services at Waples SPA in San Diego.',
		'brand.aria': 'Waples SPA home',
		'nav.about': 'About',
		'nav.treatments': 'Treatments',
		'nav.hours': 'Hours',
		'nav.contact': 'Contact',
		'cta.book': 'Book Now',
		'lang.en': 'English',
		'lang.zh': '中文',
		'lang.switchEn': 'EN',
		'lang.switchZh': '中文',
		'aria.lang': 'Choose language',
		'aria.hero': 'Waples SPA welcome',
		'hero.eyebrow': 'Relaxing massage and wellness in San Diego',
		'hero.lead':
			'A calm massage destination for deep relaxation, focused therapeutic care, and everyday renewal.',
		'hero.reserve': 'Reserve by Phone',
		'hero.viewTreatments': 'View Treatments',
		'intro.eyebrow': 'Welcome to Waples SPA',
		'intro.h2': 'Your San Diego destination for relaxation and wellness.',
		'intro.p1':
			'Located at {address}, Waples SPA offers a tranquil place to unwind, recharge, and receive massage services from skilled therapists.',
		'intro.p2':
			'Whether you want to release muscle tension, improve circulation, or simply take a restorative pause, each visit is tailored around your comfort and needs.',
		'intro.call': 'Call {phone}',
		'panel.therapeutic.eyebrow': 'Therapeutic Massage',
		'panel.therapeutic.h2': 'Focused techniques, delivered with a calm touch.',
		'panel.therapeutic.p':
			'The spa offers deep tissue massage, pain relief massage, hot stone massage, foot reflexology, cupping therapy, and classic full-body relaxation.',
		'panel.therapeutic.cta': 'Explore Services',
		'panel.personal.eyebrow': 'Personalized Care',
		'panel.personal.h2': 'Each appointment begins with what your body needs today.',
		'panel.personal.p':
			'Before every session, therapists discuss pressure preferences, health concerns, and areas that need special attention so the experience feels restorative and complete.',
		'panel.personal.cta': 'Plan a Visit',
		'featured.eyebrow': 'Massage Services',
		'featured.h2': 'Restorative treatments for tension, circulation, and calm.',
		'featured.lead':
			'Choose a service that matches your pace, from targeted deep tissue support to a soothing hot stone escape.',
		'treatment.deep.title': 'Deep Tissue Massage',
		'treatment.deep.text':
			'Focused bodywork for muscle tension, deep stress, and areas that need extra attention.',
		'treatment.pain.price': 'Call for current availability',
		'treatment.hot.price': 'Call for current availability',
		'treatment.pain.title': 'Pain Relief Massage',
		'treatment.pain.text':
			'Therapeutic sessions shaped around discomfort, circulation, and recovery goals.',
		'treatment.hot.title': 'Hot Stone Massage',
		'treatment.hot.text':
			'Warm stone therapy designed to soften tight muscles and encourage full-body relaxation.',
		'treatment.cup.title': 'Cupping Therapy',
		'treatment.cup.text':
			'Targeted cupping support for circulation, mobility, and post-treatment ease.',
		'treatment.book': 'Book treatment',
		'experience.eyebrow': 'The Experience',
		'experience.h2': 'Relaxation is the service and the promise.',
		'exp.skilled.title': 'Skilled Therapists',
		'exp.skilled.text':
			'Every session begins with a conversation about pressure, areas of focus, and wellness goals.',
		'exp.personal.title': 'Personalized Techniques',
		'exp.personal.text':
			'Choose focused deep tissue work, gentle relaxation, hot stone therapy, or reflexology-inspired care.',
		'exp.rest.title': 'Restful Setting',
		'exp.rest.text':
			'A quiet San Diego spa environment for stepping away from daily stress and returning refreshed.',
		'amenities.eyebrow': 'Visit Waples SPA',
		'amenities.h2': 'Open daily for appointments.',
		'amen.hoursTitle': 'Open Hours',
		'amen.hoursBody': 'Mon-Sun: 09:30 AM-09:00 PM',
		'amen.resTitle': 'Reservations',
		'amen.addrTitle': 'Address',
		'footer.tagline': 'Relaxing Massage & Wellness in San Diego',
	},
	zh: {
		'meta.title': 'Waples SPA | 聖地牙哥放鬆按摩與健康護理',
		'meta.description': '聖地牙哥 Waples SPA 放鬆按摩與健康護理服務。',
		'brand.aria': 'Waples SPA 首頁',
		'nav.about': '關於',
		'nav.treatments': '療程',
		'nav.hours': '營業時間',
		'nav.contact': '聯絡我們',
		'cta.book': '立即預約',
		'lang.en': 'English',
		'lang.zh': '中文',
		'lang.switchEn': 'EN',
		'lang.switchZh': '中文',
		'aria.lang': '選擇語言',
		'aria.hero': 'Waples SPA 歡迎',
		'hero.eyebrow': '聖地牙哥放鬆按摩與健康護理',
		'hero.lead':
			'一處讓人放慢腳步的按摩空間，以深度放鬆、針對性理療與日常煥新為核心，為您帶來平靜與舒適。',
		'hero.reserve': '電話預約',
		'hero.viewTreatments': '了解療程',
		'intro.eyebrow': '歡迎來到 Waples SPA',
		'intro.h2': '在聖地牙哥，開啟您的放鬆與健康之旅。',
		'intro.p1':
			'我們位於 {address}，Waples SPA 為您提供安靜舒適的環境，讓您卸下疲憊、補充能量，並由專業理療師為您呈現按摩護理服務。',
		'intro.p2':
			'無論您希望緩解肌肉緊張、促進循環，或只是需要一段身心修復的時光，我們都會依據您的舒適與需求，量身訂製每一次體驗。',
		'intro.call': '致電 {phone}',
		'panel.therapeutic.eyebrow': '理療按摩',
		'panel.therapeutic.h2': '專注技法，溫柔而有力地呵護身體。',
		'panel.therapeutic.p':
			'本店提供深層組織按摩、疼痛舒緩按摩、熱石按摩、足底反射護理、拔罐療法以及經典全身放鬆等多種服務。',
		'panel.therapeutic.cta': '瀏覽服務',
		'panel.personal.eyebrow': '個性化護理',
		'panel.personal.h2': '每一次預約，都從了解您當下的身體需求開始。',
		'panel.personal.p':
			'在療程開始前，理療師會與您溝通力度偏好、健康關注點以及需要重點護理的部位，讓整個過程更安心、更完整。',
		'panel.personal.cta': '預約到訪',
		'featured.eyebrow': '按摩服務',
		'featured.h2': '舒緩緊張、促進循環，找回內心的平靜。',
		'featured.lead':
			'根據您的節奏選擇合適項目，從針對性深層組織護理，到溫柔放鬆的熱石體驗，皆可在此找到答案。',
		'treatment.deep.title': '深層組織按摩',
		'treatment.deep.text': '針對肌肉緊張、深層壓力與需要重點放鬆的部位，提供集中式身體護理。',
		'treatment.pain.price': '請致電洽詢檔期',
		'treatment.hot.price': '請致電洽詢檔期',
		'treatment.pain.title': '疼痛舒緩按摩',
		'treatment.pain.text': '圍繞不適、循環與恢復目標，量身打造具有理療性質的護理過程。',
		'treatment.hot.title': '熱石按摩',
		'treatment.hot.text': '以溫熱的石頭放鬆緊繃肌肉，引導全身進入更深層的舒緩狀態。',
		'treatment.cup.title': '拔罐療法',
		'treatment.cup.text': '針對性拔罐護理，支持循環與活動度，並在療程後帶來更輕鬆的身體感受。',
		'treatment.book': '預約療程',
		'experience.eyebrow': '店內體驗',
		'experience.h2': '放鬆，是我們的服務，也是我們的承諾。',
		'exp.skilled.title': '專業理療師',
		'exp.skilled.text': '每一次護理都會從溝通力度、關注部位與健康目標開始，讓體驗更貼合您的需求。',
		'exp.personal.title': '個性化手法',
		'exp.personal.text':
			'您可以選擇深層組織、輕柔放鬆、熱石護理，或具有反射區護理靈感的放鬆方式。',
		'exp.rest.title': '靜謐空間',
		'exp.rest.text': '在聖地牙哥安靜舒適的水療環境中，暫時遠離日常壓力，帶著煥然一新的感受離開。',
		'amenities.eyebrow': '到訪 Waples SPA',
		'amenities.h2': '全週營業，歡迎預約。',
		'amen.hoursTitle': '營業時間',
		'amen.hoursBody': '週一至週日：09:30–21:00',
		'amen.resTitle': '預約洽詢',
		'amen.addrTitle': '地址',
		'footer.tagline': '聖地牙哥放鬆按摩與健康護理',
	},
};

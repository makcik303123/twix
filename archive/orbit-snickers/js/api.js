const content = document.querySelector(".content__wrapper");

const createElem = (title, name, code, time) => {
	return `<div class="content__row">
    <div class="row__surname">${name}</div>
    <div class="row__gameCode">${code}</div>

    <div class="row__prizes">
       ${title}
    </div>
    <div class="row__date">${time}</div>
    </div>`;
};

const data = [
	{
		title:
			"Победителем Приза № 4 (Денежный приз в размере 50 000 (Пятьдесят тысяч) бел. рублей и дополнительные денежные средства",
		name: "Гаврилович Е.С.",
		gameCode: "0076863",
		time: "22.12.2023",
	}, 
    {
		title:
			"Смартфон Apple iPhone 14 Pro Max 128 Gb Space Black A2896 MQ833CH/A 194253378457, IMEI: 358392248946997, <br />Страна происхождения: КИТАЙ",
		name: "Атрахимович Л.И.",
		gameCode: "0076847",
		time: "22.12.2023",
	},   
	{
		title:
			"Комплект персональное носимое устройство и стикер (Apple Watch Series 8 45mm MNP13 Mid Alu Mid Sp GPS, Model A2771 + Скретч-стикер ''Подписка Иви 3 мес.''), арт. SKIT_AWS845_INP13; Серийный номер:SDWKYXQD6KV, <br />Страна происхождения: КИТАЙ",
		name: "Головач В.Н.",
		gameCode: "0066502",
		time: "22.12.2023",
	},   
	{
		title:
			"Комплект персональное носимое устройство и стикер (Apple Watch Series 8 45mm MNP13 Mid Alu Mid Sp GPS, Model A2771 + Скретч-стикер ''Подписка Иви 3 мес.''), арт. SKIT_AWS845_INP13; Серийный номер:SLM94K439TN, <br />Страна происхождения: КИТАЙ",
		name: "Лагойко Н.А.",
		gameCode: "0067263",
		time: "22.12.2023",
	}, 
	{
		title:
			"Комплект персональное носимое устройство и стикер (Apple Watch Series 8 45mm MNP13 Mid Alu Mid Sp GPS, Model A2771 + Скретч-стикер ''Подписка Иви 3 мес.''), арт. SKIT_AWS845_INP13; Серийный номер:SMVMGQC5JYF, <br />Страна происхождения: КИТАЙ",
		name: "Панахов Р.Г.",
		gameCode: "0060845",
		time: "22.12.2023",
	}, 
	{
		title:
			"Наушники Apple Airpods Pro 2 A2698, A2699, A2700 (MQD83ZE/A), Серийный номер:SLC676J565G, <br />Страна происхождения: КИТАЙ",
		name: "Странковская А.С.",
		gameCode: "0068299",
		time: "22.12.2023",
	}, 
	{
		title:
			"Наушники Apple Airpods Pro 2 A2698, A2699, A2700 (MQD83ZE/A), Серийный номер:SM9R2Q3VXPH, <br />Страна происхождения: КИТАЙ",
		name: "Парейко В.Н.",
		gameCode: "0063914",
		time: "22.12.2023",
	}, 
		{
		title:
			"Наушники Apple Airpods Pro 2 A2698, A2699, A2700 (MQD83ZE/A), Серийный номер:SMFX90DYQ39, <br />Страна происхождения: КИТАЙ",
		name: "Хрещик А.А.",
		gameCode: "0063898",
		time: "22.12.2023",
	}, 
   {
		title:
			"Смартфон Apple iPhone 14 Pro Max 128 Gb Space Black A2896 MQ833CH/A 194253378457, IMEI: 353938208761969, <br />Страна происхождения: КИТАЙ",
		name: "Соколовская А.В.",
		gameCode: "0053364",
		time: "15.12.2023",
	},
	{
		title:
			"Смарт-часы Apple Watch S8 45mm GPS Midnight w/ Mid Sband S/M A2771 (MNUJ3LL/A), Серийный номер: SLHQNCWHKK9, <br />Страна происхождения: ВЬЕТНАМ",
		name: "Козакевич Т.В.",
		gameCode: "0060324",
		time: "15.12.2023",
	},
	{
		title:
			"Смарт-часы Apple Watch Series 8 45 мм, полуночный А2771, Серийный номер:SLWMD6HJRXT, <br />Страна происхождения: ВЬЕТНАМ",
		name: "Краснобород А.А.",
		gameCode: "0059976",
		time: "15.12.2023",
	},
	{
		title:
			"Смарт-часы Apple Watch S8 45mm GPS Midnight w/ Mid Sband S/M A2771 (MNUJ3LL/A), Серийный номер:SMXPWHF4QRT, <br />Страна происхождения: ВЬЕТНАМ",
		name: "Марус Т.А.",
		gameCode: "0059914",
		time: "15.12.2023",
	},
	{
		title:
			"Наушники Apple Airpods Pro 2 A2698, A2699, A2700 (MQD83ZE/A), Серийный номер:SJHXDF9RCG9, <br />Страна происхождения: КИТАЙ",
		name: "Инджи Н. М.",
		gameCode: "0060356",
		time: "15.12.2023",
	},
	{
		title:
			"Наушники Apple Airpods Pro 2 A2698, A2699, A2700 (MQD83ZE/A), Серийный номер:SKW0CWWDW6W, <br />Страна происхождения: КИТАЙ",
		name: "Рыбак Н.И.",
		gameCode: "0054448",
		time: "15.12.2023",
	},
		{
		title:
			"Наушники Apple Airpods Pro 2 A2698, A2699, A2700 (MQD83ZE/A), Серийный номер:SKW416KQ6VQ, <br />Страна происхождения: КИТАЙ",
		name: "Малец О.А.",
		gameCode: "0046280",
		time: "15.12.2023",
	},
    {
		title:
			"Смартфон Apple iPhone 14 Pro Max 128 Gb Space Black A2896 MQ833CH/A 194253378457, IMEI: 353938208449284, <br />Страна происхождения: КИТАЙ",
		name: "Выдрицкий А.И.",
		gameCode: "0044475",
		time: "08.12.2023",
	},
	{
		title:
			"Смарт-часы Apple Watch S8 45mm GPS Midnight w/ Mid Sband S/M A2771 (MNUJ3LL/A), Серийный номер:SKX74931W9L, <br />Страна происхождения: ВЬЕТНАМ",
		name: "Полторак М.А.",
		gameCode: "0035746",
		time: "08.12.2023",
	},
	{
		title: "Смарт-часы Apple Watch Series 8 45 мм, полуночный А2771, Серийный номер:SKXF2D0QM7D, <br />Страна происхождения: ВЬЕТНАМ",
		name: "Монич О.С.",
		gameCode: "0043984",
		time: "08.12.2023",
	},
	{
		title: "Смарт-часы Apple Watch Series 8 45 мм, полуночный А2771, Серийный номер:SLC61L79J0Q, <br />Страна происхождения: ВЬЕТНАМ",
		name: "Щетинец А.В.",
		gameCode: "0037323",
		time: "08.12.2023",
	},
	{
		title:
			"Наушники Apple Airpods Pro 2 A2698, A2699, A2700 (MQD83ZE/A), Серийный номер:SJ91G3Y7RDM, <br />Страна происхождения: КИТАЙ",
		name: "Батура В.Д.",
		gameCode: "0044738",
		time: "08.12.2023",
	},
	{
		title:
			"Наушники Apple Airpods Pro 2 A2698, A2699, A2700 (MQD83ZE/A), Серийный номер:SJC720725T4, <br />Страна происхождения: КИТАЙ",
		name: "Гостило Е.А.",
		gameCode: "0038943",
		time: "08.12.2023",
	},
	{
		title:
			"Наушники Apple Airpods Pro 2 A2698, A2699, A2700 (MQD83ZE/A), Серийный номер:SJHJ92FWHYG, <br />Страна происхождения: КИТАЙ",
		name: "Потоцкий А.Л.",
		gameCode: "0037986",
		time: "08.12.2023",
	},
    {
		title:
			"Смартфон Apple iPhone 14 Pro Max 128 Gb Space Black A2896 MQ833CH/A 194253378457, IMEI: 353938207905252,  <br />Страна происхождения: КИТАЙ  <br />и дополнительные денежные средства",
		name: "Нестер Н.Ф.",
		gameCode: "0032500",
		time: "01.12.2023",
	},
	{
		title:
			"Смарт-часы Watch Series 8 45mm, M/L темная ночь А2771, Серийный номер:SFT9R4P4H4R,  <br />Страна происхождения: ВЬЕТНАМ  <br />и дополнительные денежные средства",
		name: "Полочанина Н.В.",
		gameCode: "0030814",
		time: "01.12.2023",
	},
	{
		title: "Смарт-часы Apple Watch S8 45mm GPS Midnight w/ Mid Sband S/M A2771 (MNUJ3LL/A), Серийный номер:SH0XRT6M6P3,  <br />Страна происхождения: ВЬЕТНАМ  <br />и дополнительные денежные средства",
		name: "Шипица О.В.",
		gameCode: "0023596",
		time: "01.12.2023",
	},
	{
		title: "Смарт-часы Apple Watch S8 45mm GPS Midnight w/ Mid Sband S/M A2771 (MNUJ3LL/A), Серийный номер:SJDXVWTGFXG,  <br />Страна происхождения: ВЬЕТНАМ  <br />и дополнительные денежные средства",
		name: "Василевский П.В.",
		gameCode: "0032140",
		time: "01.12.2023",
	},
	{
		title:
			"Наушники Apple Airpods Pro 2 A2698, A2699, A2700 (MQD83ZE/A), Серийный номер:SGHKVCYD9MF,  <br />Страна происхождения: КИТАЙ  <br />и дополнительные денежные средства",
		name: "Пономарёв Д.В.",
		gameCode: "0027201",
		time: "01.12.2023",
	},
	{
		title:
			"Наушники Apple Airpods Pro 2 A2698, A2699, A2700 (MQD83ZE/A), Серийный номер:SHHDJP9FP6G,  <br />Страна происхождения: КИТАЙ  <br />и дополнительные денежные средства",
		name: "Ленская Т.Е.",
		gameCode: "0021471",
		time: "01.12.2023",
	},
	{
		title:
			"Наушники Apple Airpods Pro 2 A2698, A2699, A2700 (MQD83ZE/A), Серийный номер:SHWL776QF2R,  <br />Страна происхождения: КИТАЙ  <br />и дополнительные денежные средства",
		name: "Евсеева О.М.",
		gameCode: "0031997",
		time: "01.12.2023",
	},
    {
		title:
			"Смартфон Apple iPhone 14 Pro Max 128 Gb Space Black A2896 MQ833CH/A 194253378457, IMEI: 352425467869825, <br />Страна происхождения: КИТАЙ <br />",
		name: "Кадевич И.П.",
		gameCode: "0020733",
		time: "24.11.2023",
	},
	{
		title:
			"Смарт-часы Apple Watch Series 8 45 мм, полуночный А2771, Серийный номер:SCFYMC9WDFJ, <br />Страна происхождения: ВЬЕТНАМ",
		name: "Петринич А.В.",
		gameCode: "0008906",
		time: "24.11.2023",
	},
	{
		title: "Смарт-часы Apple Watch Series 8 45 мм, полуночный А2771, Серийный номер:SCG67R57Y6P, <br />Страна происхождения: ВЬЕТНАМ",
		name: "Пермяков В.В.",
		gameCode: "0020826",
		time: "24.11.2023",
	},
	{
		title:
			"Смарт-часы Apple Watch Series 8 45 мм, полуночный А2771, Серийный номер:SFPVP25FX07, <br />Страна происхождения: ВЬЕТНАМ",
		name: "Пахомов А.А.",
		gameCode: "0020682",
		time: "24.11.2023",
	},
	{
		title: "Наушники Apple Airpods Pro 2 A2698, A2699, A2700 (MQD83ZE/A), Серийный номер:SDJC752LFMF, <br />Страна происхождения: КИТАЙ",
		name: "Русак А.С.",
		gameCode: "0020568",
		time: "24.11.2023",
	},
	{
		title:
			"Наушники Apple Airpods Pro 2 A2698, A2699, A2700 (MQD83ZE/A), Серийный номер:SFHWG63YCFY, <br />Страна происхождения: КИТАЙ",
		name: "Пригожаева Л.М.",
		gameCode: "0020593",
		time: "24.11.2023",
	},
	{
		title:
			"Наушники Apple Airpods Pro 2 A2698, A2699, A2700 (MQD83ZE/A), Серийный номер:SGGQCFJ6M39, <br />Страна происхождения: КИТАЙ",
		name: "Иванов В.С.",
		gameCode: "0011055",
		time: "24.11.2023",
	},
	{
		title:
			"Смартфон Apple iPhone 14 Pro Max 128 Gb Space Black A2896 MQ833CH/A 194253378457, IMEI: 350666809760378, <br />Страна происхождения: КИТАЙ <br />И дополнительные денежные средства",
		name: "Щетко А.Н.",
		gameCode: "0008412",
		time: "17.11.2023",
	},
	{
		title:
			"Смарт-часы Apple Watch Series 8 45 мм, полуночный А2771, Серийный номер:SD6QG4139Y0, <br />Страна происхождения: ВЬЕТНАМ <br />И дополнительные денежные средства",
		name: "Терещенко Н.Ф.",
		gameCode: "0000622",
		time: "17.11.2023",
	},
	{
		title:
			"Комплект персональное носимое устройство и стикер (Apple Watch Series 8 45mm MNP13 Mid Alu Mid Sp GPS, Model A2771 + Скретч-стикер ''Подписка Иви 3 мес.''), арт. SKIT_AWS845_INP13, Серийный номер:SD573Q7DRWR, <br />Страна происхождения: КИТАЙ <br />И дополнительные денежные средства",
		name: "Ковалева О.А.",
		gameCode: "0007722",
		time: "17.11.2023",
	},
	{
		title:
			"Комплект персональное носимое устройство и стикер (Apple Watch Series 8 45mm MNUL3 Mid Alu Mid Sp M/L GPS, Model A2771 + Скретч-стикер ''Подписка Иви 3 мес.''), арт. SKIT_AWS845_INUL3; РБ, Серийный номер:SMCX16MC4NJ, <br />Страна происхождения: ВЬЕТНАМ <br />И дополнительные денежные средства",
		name: "Ганьков А.А.",
		gameCode: "0000949",
		time: "17.11.2023",
	},
	{
		title:
			"Наушники Apple Airpods Pro 2 A2698, A2699, A2700 (MQD83ZE/A), Серийный номер:SCY41H0C3HK, <br />Страна происхождения: КИТАЙ <br />И дополнительные денежные средства",
		name: "Хлимонков С.П.",
		gameCode: "0005335",
		time: "17.11.2023",
	},
	{
		title:
			"Наушники Apple Airpods Pro 2 A2698, A2699, A2700 (MQD83ZE/A), Серийный номер:SD244R04KY0, <br />Страна происхождения: КИТАЙ <br />И дополнительные денежные средства",
		name: "Нестеров С.П.",
		gameCode: "0002741",
		time: "17.11.2023",
	},
	{
		title:
			"Наушники Apple Airpods Pro 2 A2698, A2699, A2700 (MQD83ZE/A), Серийный номер:SDCW49M3PP2, <br />Страна происхождения: КИТАЙ <br />И дополнительные денежные средства",
		name: "Дубовец Е.С.",
		gameCode: "0000953",
		time: "17.11.2023",
	},
];

data.forEach((el) => {
	content.innerHTML += createElem(el.title, el.name, el.gameCode, el.time);
});

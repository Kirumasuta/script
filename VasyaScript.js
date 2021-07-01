<!-- jQuery -->
if (!jQuery) {
    const DOM_jquery = document.createElement('script', {
    type: 'text/javascript',
    src: 'https://code.jquery.com/jquery-3.6.0.min.js'
});
    $('head').append(DOM_jquery);
}

    const sampleData = {
    data: {
    googleKey: 'AIzaSyCkDEmHmCglUsuD_MhwGCVX5Hb45g7LPaI',
    overload: false,
    address: 'Rolna 1, Poznan, Polska',
    options: {
    businessClient: true,
    delayedDelivery: true,
    pickup: true,
},
    holidays: ['2021-05-01', '2021-05-20'],
    schedule: [{},
{"working": true, "open": 6, "close": 23},
{"working": true, "open": 10, "close": 22},
{"working": true, "open": 10, "close": 22},
{"working": true, "open": 10, "close": 22},
{"working": true, "open": 12, "close": 23},
{"working": true, "open": 12, "close": 23},
{"working": true, "open": 3, "close": 23}],
    deliveryZones: [
{m: 1000, cost: 0},
{m: 5000, cost: 15},
{m: 20000, cost: 30}
    ],
    notices: {
    offHours: `
            <b>We are sorry!</b> It's we are not working now, please place your orders during our
            <a class="expand-schedule" style="color: black; text-decoration: underline"> working time </a>
        `,
    holiday: `
            <b>We are sorry!</b> It's holidays, please place your orders during our
            <a class="expand-schedule" style="color: black; text-decoration: underline"> working time </a>
        `,
    overload: `
            <b>We are sorry!</b> It's holidays, please place your orders during our
            <a class="expand-schedule" style="color: black; text-decoration: underline"> working time </a>
                `
},
    deliveryAsap: 'As soon as possible!!!',
    timezone: 1
},
    error: null, // 'Account temporarily disabled', 'Account subscription has expired', 'No valid google key'
}

    const deliveryAsapText = {
    RU: 'Как можно скорее',
    PL: 'As soon as possible',
    EN: 'As soon as possible'
};
    const deliveryTimeText = {
    RU: 'Время доставки:',
    PL: 'Delivery poznan:',
    EN: 'Delivery time:'
};
    const scheduleATimeText = {
    RU: 'Выбирать время',
    PL: 'PLN A want schedule a time',
    EN: 'A want schedule a time'
};
    const deliveryDateText = {
    RU: 'Дата доставки:',
    PL: 'Delivery poznan (date):',
    EN: 'Delivery date:'
};
    const chooseDeliveryTypeText = {
    RU: 'Выберите время доставки',
    PL: 'Choose delivery type (PLN TEXT)',
    EN: 'Choose delivery type'
};
    const offHoursText = {
    RU: 'RU We are not working now!',
    PL: 'PLN We are not working now!',
    EN: 'EN We are not working now!'
};
    const holidayText = {
    RU: 'RU  We are on holidays!',
    PL: 'PLN We are on holidays!',
    EN: 'EN  We are on holidays!'
};
    const overloadText = {
    RU: 'RU  We having an overload now!',
    PL: 'PLN We having an overload now!',
    EN: 'EN  We having an overload now!'
};
    const notWorkingText = {
    RU: 'Выходной',
    PL: 'Dzień wolny',
    EN: 'Day off'
};
    const daysOfWeekDict = [{}, {
    RU: 'Понедельник',
    PL: 'Poniedziałek',
    EN: 'Monday'
}, {
    RU: 'Вторник',
    PL: 'Wtorek',
    EN: 'Tuesday'
}, {
    RU: 'Среда',
    PL: 'Środa',
    EN: 'Wednesday'
}, {
    RU: 'Четверг',
    PL: 'Czwartek',
    EN: 'Thursday'
}, {
    RU: 'Пятница',
    PL: 'Piątek',
    EN: 'Friday'
}, {
    RU: 'Суббота',
    PL: 'Sobota',
    EN: 'Saturday'
}, {
    RU: 'Воскресенье',
    PL: 'Niedziela',
    EN: 'Sunday'
}
    ];
    const checkTypeText = {
    RU: 'Заказать как:',
    EN: 'Order as:',
    PL: 'Opcje rozliczenia:'
};
    const checkBusinessText = {
    RU: 'Юр. лицо',
    EN: 'Company',
    PL: 'Faktura'
};
    const checkDefaultText = {
    RU: 'Физ. лицо',
    EN: 'People',
    PL: 'Paragon'
};
    const companyLabelText = {
    RU: 'Информация компании:',
    PL: 'Informaczia Firmy:',
    EN: 'Company info:'
};
    const companyLabelPlaceholderText = {
    RU: 'Моя фирма ИП Пирожков 51251321',
    PL: 'Twoja Firma Sp. z o.o.',
    EN: 'Your company z o.o.'
};
    const DeliveryPickupText = {
    PL: 'Opcje dostawy:',
    EN: 'Pickup type:',
    RU: 'Доставлять или сами заберете :)'
};
    const selfPickupDeliveryText = {
    PL: 'Odbiór osobisty',
    EN: 'Pickup myself',
    RU: 'Самовывоз'
};
    const deliveryPickupDeliveryText = {
    PL: 'Kurier',
    EN: 'Pickup myself',
    RU: 'Самовывоз'
};
    const deliveryDeliveryText = {
    PL: 'Dostawa',
    EN: 'Delivery',
    RU: 'Доставка'
};
    const deliveryMaxDistancePickupDeliveryText = {
    PL: 'Do', // 10 km
    EN: 'Up to', // 10 kilometers
    RU: 'До' // 10 километров
};
    const deliveryKilometersDeliveryText = {
    PL: 'km.',
    EN: 'km.',
    RU: 'км.'
};
    const defaultDeliveryPlaceholderPlaceholderText = {
    PL: 'Zwierzyniecka 10, Poznań, Polska',
    EN: 'Volskaya Avenue 10, New york, USA',
    RU: 'Проспект Вольской 10, Москва, Россия'
};
    const deliveryAddressFieldText = {
    PL: 'Adres Dostawy',
    EN: 'Delivery address',
    RU: 'Адрес доставки'
};
    const deliveryAddressPlaceholderText = {
    PL: 'Rolna 12, Poznan, Polska',
    EN: 'Volskaya st. 23, London',
    RU: 'Вольская улица, Москва'
};

    class GastroSystems {
    language = (window.navigator.userLanguage || window.navigator.language).toUpperCase() || 'EN';
    overload = false;
    deliveryAsap = deliveryAsapText[this.language] || deliveryAsapText.EN;
    notices = {
    offHours: offHoursText[this.language] || offHoursText.EN,
    holiday: holidayText[this.language] || holidayText.EN,
    overload: overloadText[this.language] || overloadText.EN,
};
    timezone = 0;
    options = {
    businessClient: true,
    delayedDelivery: true,
    pickup: true,
};

    // TODO constructor for autonomous work
    constructor(jsonData) {
    console.log(`Gastro systems 1.0.0. Lang: ${this.language}, ${jsonData.error ? `Error: ${jsonData.error}` : `No errors`}`);

    if (!jQuery) {
    this.error = 'No jQuery connected!'
}
    if (jsonData.error) {
    this.error = jsonData.error;
    return;
}
    let data = jsonData?.data;
    if (!data) {
    this.error = 'Wrong server response';
    return;
}
    this.googleKey = data.googleKey;
    $.getScript(`https://maps.googleapis.com/maps/api/js?key=${this.googleKey}&amp;callback=initAutocomplete&amp;libraries=places&amp;v=weekly`);

    this.overload = data.overload;
    this.address = data.address;
    this.options = data.options;
    this.holidays = data.holidays;
    this.schedule = data.schedule;
    this.deliveryZones = data.deliveryZones;
    this.notices = data.notices;
    this.deliveryAsap = data.deliveryAsap;
    this.timezone = data.timezone || 0;
}

    get maxDeliveryDistance() {
    let maxDistance = 0;
    if (this.error) return maxDistance;
    for (let i = 0; i < this.deliveryZones.length; i++) {
    maxDistance = Math.max(maxDistance, this.deliveryZones[i].m);
}
    return maxDistance / 1000;
}
}

    const gastroSystems = new GastroSystems(sampleData);

    $(document).ready(() => {

    const deliveryTimeTypeHTML = `
<div class="t-input-group t-input-group_sb">
    <div class="t-input-title t-descr t-descr_md" data-redactor-toolbar="no">
        ${chooseDeliveryTypeText[gastroSystems.language] || chooseDeliveryTypeText.EN}
    </div>
    <div class="t-input-block">
        <div class="t-select__wrapper ">
            <select name="deliveryTime" class="t-select js-tilda-rule delivery-time-type" data-tilda-req="1"
                    style="color:#000000; border:1px solid #9e9e9e; border-radius: 12px; -moz-border-radius: 12px; -webkit-border-radius: 12px;">
                <option value="asap" selected="selected">
                    ${gastroSystems.deliveryAsap}
                </option>
                <option value="schedule">
                ${scheduleATimeText[gastroSystems.language] || scheduleATimeText.EN}
                </option>
            </select>
        </div>
        <div class="t-input-error"></div>
    </div>
</div>`;

    const deliveryTimeFieldsHTML = `
<a class="toolate" href="#popup:toolate"></a>
<div class="t-input-group t-input-group_da">
    <div class="t-input-title t-descr t-descr_md" data-redactor-toolbar="no">
        ${deliveryDateText[gastroSystems.language] || deliveryDateText.EN}
    </div>
    <div class="t-input-block">
        <div class="t-datepicker__wrapper"><input type="text" name="delivery-date" id="delivery-date"
                                                  class="t-input t-datepicker js-tilda-rule js-tilda-mask " value=""
                                                  data-tilda-req="1" data-tilda-rule="date"
                                                  data-tilda-dateformat="DD-MM-YYYY" data-tilda-datediv="dash"
                                                  data-tilda-mask="99-99-9999"
                                                  style="color:#000000; border:1px solid #9e9e9e; border-radius: 12px; -moz-border-radius: 12px; -webkit-border-radius: 12px;">
            <svg class="t-datepicker__icon"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69.5 76.2"
                 style="width:25px;">
                <path
                        d="M9.6 42.9H21V31.6H9.6v11.3zm3-8.3H18v5.3h-5.3v-5.3zm16.5 8.3h11.3V31.6H29.1v11.3zm3-8.3h5.3v5.3h-5.3v-5.3zM48 42.9h11.3V31.6H48v11.3zm3-8.3h5.3v5.3H51v-5.3zM9.6 62H21V50.6H9.6V62zm3-8.4H18V59h-5.3v-5.4zM29.1 62h11.3V50.6H29.1V62zm3-8.4h5.3V59h-5.3v-5.4zM48 62h11.3V50.6H48V62zm3-8.4h5.3V59H51v-5.4z"/>
                <path
                        d="M59.7 6.8V5.3c0-2.9-2.4-5.3-5.3-5.3s-5.3 2.4-5.3 5.3v1.5H40V5.3C40 2.4 37.6 0 34.7 0s-5.3 2.4-5.3 5.3v1.5h-9.1V5.3C20.3 2.4 18 0 15 0c-2.9 0-5.3 2.4-5.3 5.3v1.5H0v69.5h69.5V6.8h-9.8zm-7.6-1.5c0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3v7.1c0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3V5.3zm-19.7 0c0-1.3 1-2.3 2.3-2.3S37 4 37 5.3v7.1c0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3V5.3zm-19.6 0C12.8 4 13.8 3 15 3c1.3 0 2.3 1 2.3 2.3v7.1c0 1.3-1 2.3-2.3 2.3-1.3 0-2.3-1-2.3-2.3V5.3zm53.7 67.9H3V9.8h6.8v2.6c0 2.9 2.4 5.3 5.3 5.3s5.3-2.4 5.3-5.3V9.8h9.1v2.6c0 2.9 2.4 5.3 5.3 5.3s5.3-2.4 5.3-5.3V9.8h9.1v2.6c0 2.9 2.4 5.3 5.3 5.3s5.3-2.4 5.3-5.3V9.8h6.8l-.1 63.4z"/>
            </svg>
        </div>
        <link rel="stylesheet" href="https://static.tildacdn.com/css/tiny-date-picker-1.5.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/RunoLight/gastro-systems-assets/gastro-systems-2.css">
        <script src="https://cdn.jsdelivr.net/gh/RunoLight/gastro-systems-assets/tiny-date-picker-1.2.6-gastro-systems.js">

</sc` +
    `ript>
<div class="t-input-error"></div>
</div>
</div>
<div class="t-input-group t-input-group_tm">
    <div class="t-input-title t-descr t-descr_md" data-redactor-toolbar="no">
        ${deliveryTimeText[gastroSystems.language] || deliveryTimeText.EN}
    </div>
    <div class="t-input-block"><input type="text" name="delivery-time" id="delivery-time"
                                      class="t-input t-inputtime js-tilda-rule js-tilda-mask " value=""
                                      data-tilda-req="1" data-tilda-rule="time" data-tilda-mask="99:99"
                                      style="color:#000000; border:1px solid #9e9e9e; border-radius: 12px; -moz-border-radius: 12px; -webkit-border-radius: 12px;">
        <div class="t-input-error"></div>
    </div>
</div>`;

    try {
    setTimeout(() => {
    gastro_systems_datepicker_init(gastroSystems.language);
}, 4000);
} catch (err) {
}

    // Insert fields for delivery date and time
    $('.t-form__inputsbox').prepend(deliveryTimeFieldsHTML);
    $('.t-form__inputsbox').prepend(deliveryTimeTypeHTML);
    // $('.t-form__inputsbox').prepend(deliveryTimeTypeHTML);

    /* Wraps delivery time fields to one column */
    var DOM_delivery_date = $("[name|='delivery-date']").closest('.t-input-group');
    var DOM_delivery_time = $("[name|='delivery-time']").closest('.t-input-group');
    DOM_delivery_date.addClass('gastro-delivery-time');
    DOM_delivery_time.addClass('gastro-delivery-time');

    const DOM_delivery_form_elements = $('.gastro-delivery-time');

    DOM_delivery_form_elements.wrapAll('<div class="ordertimetypewrapper" style="display: flex; justify-content: space-between"></div>');
    DOM_delivery_form_elements.wrap('<div class="column" ></div>');
    /* --- */

    // Init tilda field masks
    setTimeout(() => {
    try {
    window.tildaForm_initMasks();
} catch (e) {
    console.log("Oops! Tilda changed API\'s or masks didn't loaded for some reason");
}
}, 4000);


    let daysOfWeekText = '';
    for (let i = 1; i < 8; i++) {
    daysOfWeekText += `<p>${daysOfWeekDict[i][gastroSystems.language] || daysOfWeekDict[i].EN}</p>`
}
    let scheduleText = '';
    for (let i = 1; i < 8; i++) {
    let thisDaySchedule = gastroSystems.schedule[i];
    scheduleText += (thisDaySchedule.working) ?
    `<p>${(thisDaySchedule.open < 10 ? '0' : '') + thisDaySchedule.open}:00 - ${(thisDaySchedule.close < 10 ? '0' : '') + thisDaySchedule.close}:00</p>` :
    `<p>${notWorkingText[gastroSystems.language] || notWorkingText.EN}</p>`;
}
    const DOM_schedule = `
<div class="t-input-group t-input-group_tx dayoffwarning" style="display: none;">
    <div class="t-input-block">
        <div class="t-text">
            ${gastroSystems.notices.offHours}
        </div>
        <div class="t-input-error"></div>
    </div>
    <div class="t-input-block expanded-text" style="display: none;">
        <div class="t-text">
            <div class="row" style="padding-top: 25px">
                <div class="column">
                    ${daysOfWeekText}
                </div>
                <div class="column" style="alignment: right">
                    ${scheduleText}
                </div>
            </div>
        </div>
        <div class="t-input-error"></div>
    </div>
</div>`;

    // Insert: Schedule for non-working time
    $('.t706__orderform').prepend(DOM_schedule);

    // Toggle hiding
    setTimeout(() => {
    $('.expand-schedule').click(function () {
    const element = $('.dayoffwarning');
    if (element.hasClass('expanded')) {
    element.removeClass('expanded');
    $('.expanded-text').hide();
} else {
    element.addClass('expanded');
    $('.expanded-text').show();
}
});
    // Hide it by default
    $('.expanded-text').hide();
    $('.dayoffwarning').hide();
}, 1000);

    const d = new Date();
    const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    const restaurantTime = new Date(utc + (3600000 * (gastroSystems.timezone || 0)));
    const hour = restaurantTime.getHours();
    let numday = restaurantTime.getDay();
    if (numday === 0) numday = 7;

    function isWorkingTime(numday, hour) {
    return (
    gastroSystems.error || (
    gastroSystems.schedule[numday].working && hour >= gastroSystems.schedule[numday].open && hour < gastroSystems.schedule[numday].close
    )
    )
}

    const IsWorkingHours = isWorkingTime(numday, hour);

    function suggestOrderTime() {
    let suggestedTime;
    let suggestedDate;

    if (isWorkingTime(numday, hour)) {
    suggestedTime = `${(hour + 1) < gastroSystems.schedule[numday].close ? (hour + 1) : hour}:00`;
    suggestedDate = `${restaurantTime.getDate()}-${restaurantTime.getMonth() + 1}-${restaurantTime.getFullYear()}`;
} else {
    let suggestedDayWorking = false;
    let suggestDayNum;
    const suggestDateTime = restaurantTime;
    do {
    suggestDateTime.setDate(suggestDateTime.getDate() + 1);
    suggestDayNum = (suggestDateTime.getDay() === 0) ? 7 : suggestDateTime.getDay();
    suggestedDayWorking = gastroSystems.schedule[suggestDayNum].working;
} while (!suggestedDayWorking);
    suggestedTime = `${gastroSystems.schedule[suggestDayNum].open + 1}:00`;
    suggestedDate = `${suggestDateTime.getDate()}-${suggestDateTime.getMonth() + 1}-${suggestDateTime.getFullYear()}`;
}
    $('.t706 input[name="delivery-date"]')[0].value = suggestedDate;
    $('.t706 input[name="delivery-time"]')[0].value = suggestedTime;
}

    setTimeout(() => {
    suggestOrderTime();
}, 1500);

    const CheckSelectHTML = `
<div class="t-input-group t-input-group_rd ig_invoicetype"">
<div class="t-input-title t-descr t-descr_md" data-redactor-toolbar="no">
    ${checkTypeText[gastroSystems.language] || checkTypeText.EN}
</div>
<div class="t-input-block">
    <div class="t-radio__wrapper">
        <label class="t-radio__control t-text t-text_xs">
            <input type="radio"
                   name="check-type"
                   value="default"
                   class="t-radio js-tilda-rule"
                   data-tilda-req="1">
            <div class="t-radio__indicator"></div>
            ${checkDefaultText[gastroSystems.language] || checkDefaultText.EN}
        </label>
        <label class="t-radio__control t-text t-text_xs" style="">
            <input type="radio"
                   name="check-type"
                   value="business"
                   class="t-radio js-tilda-rule"
                   data-tilda-req="1">
            <div class="t-radio__indicator"></div>
            ${checkBusinessText[gastroSystems.language] || checkBusinessText.EN}
        </label>
    </div>
    <div class="t-input-error">
    </div>
</div>
</div>`;

    $(CheckSelectHTML).insertAfter('.ordertimetypewrapper');
    $('.ordertimetypewrapper').hide();
    $('#delivery-date, #delivery-time').removeClass('js-tilda-rule');

    const CompanyNameHTML =
    `<div class="t-input-group t-input-group_in ig_firmname invoicetype">
    <div class="t-input-title t-descr t-descr_md" data-redactor-toolbar="no">
        ${companyLabelText[gastroSystems.language] || companyLabelText.EN}
    </div>
    <div class="t-input-block"><input type="text" name="company-info" class="t-input js-tilda-rule invoicetypeinput"
                                      value="" placeholder="${companyLabelPlaceholderText[gastroSystems.language] || companyLabelPlaceholderText.EN}" data-tilda-req="1"
                                      style="color:#000000; border:1px solid #9e9e9e; border-radius: 12px; -moz-border-radius: 12px; -webkit-border-radius: 12px;">
        <div class="t-input-error"></div>
    </div>
</div>`;

    $(CompanyNameHTML).insertAfter('.ig_invoicetype');


    const PickupSelectHTML = `
<div class="t-input-group t-input-group_rd ig_deliverytype">
<div class="t-input-title t-descr t-descr_md" data-redactor-toolbar="no">
    ${DeliveryPickupText[gastroSystems.language] || DeliveryPickupText.EN}
</div>
<div class="t-input-block">
    <div class="t-radio__wrapper">
        <label class="t-radio__control t-text t-text_xs">
            <input type="radio"
                   name="pickup-option"
                   value="pickup"
                   class="t-radio js-tilda-rule"
                   data-tilda-req="1">
            <div class="t-radio__indicator"></div>
            ${selfPickupDeliveryText[gastroSystems.language] || selfPickupDeliveryText.EN} ${gastroSystems.error ? '' :
    `(${gastroSystems.address})`}
        </label>
        <label class="t-radio__control t-text t-text_xs">
            <input type="radio"
                   name="pickup-option"
                   value="delivery"
                   class="t-radio js-tilda-rule"
                   data-tilda-req="1">
            <div class="t-radio__indicator"></div>
            ${deliveryDeliveryText[gastroSystems.language] || deliveryDeliveryText.EN} ${gastroSystems.error ? '' :
    `(${deliveryMaxDistancePickupDeliveryText[gastroSystems.language] || deliveryMaxDistancePickupDeliveryText.EN} ${gastroSystems.maxDeliveryDistance} ${
    deliveryKilometersDeliveryText[gastroSystems.language] || deliveryKilometersDeliveryText.EN
})`}
        </label>
    </div>
    <div class="t-input-error">
    </div>
</div>
</div>`;

    $(PickupSelectHTML).insertAfter('.ig_firmname');


    const DeliveryAddressHTML =
    `<div class="t-input-group t-input-group_in ig_deliveryadress">
    <div class="t-input-title t-descr t-descr_md" data-redactor-toolbar="no">
        ${deliveryAddressFieldText[gastroSystems.language] || deliveryAddressFieldText.EN}
    </div>
    <div class="t-input-block"><input type="text" name="delivery-address" class="t-input js-tilda-rule invoicetypeinput"
                                      value="" placeholder="${
    deliveryAddressPlaceholderText[gastroSystems.language] || deliveryAddressPlaceholderText.EN
}" data-tilda-req="1"
           style="color:#000000; border:1px solid #9e9e9e; border-radius: 12px; -moz-border-radius: 12px; -webkit-border-radius: 12px;">
        <div class="t-input-error"></div>
    </div>
</div>`;

    $(DeliveryAddressHTML).insertAfter('.ig_deliverytype');

    // Order time type
    var InpSelect_OrderTimeType = $('.delivery-time-type');
    var InpGroup_OrderTimeType = InpSelect_OrderTimeType.closest('.t-input-group');
    InpGroup_OrderTimeType.addClass('ig_ordertimetype');

    var Inp_DeliveryDate = $('.t706 input[name="delivery-date"]');
    var InpGroup_DeliveryDate = Inp_DeliveryDate.closest('.t-input-group');
    InpGroup_DeliveryDate.addClass('ig_deliverydate ordertimetype');
    Inp_DeliveryDate.addClass('ordertimetypeinput');

    var Inp_DeliveryTime = $('.t706 input[name="delivery-time"]');
    var InpGroup_DeliveryTime = Inp_DeliveryTime.closest('.t-input-group');
    InpGroup_DeliveryTime.addClass('ig_deliverytime ordertimetype');
    Inp_DeliveryTime.addClass('ordertimetypeinput');

    // Invoice type
    var InpRadio_InvoiceType = $('.t706 input[name="check-type"]');
    var InpGroup_InvoiceType = InpRadio_InvoiceType.closest('.t-input-group');
    InpGroup_InvoiceType.addClass('ig_invoicetype checkcheckcheck');

    var Inp_FirmName = $('.t706 input[name="company-info"]');
    var InpGroup_FirmName = Inp_FirmName.closest('.t-input-group');
    InpGroup_FirmName.addClass('ig_firmname invoicetype');
    Inp_FirmName.addClass('invoicetypeinput');

    // // Delivery type
    var InpRadio_DeliveryType = $('.t706 input[name="pickup-option"]');
    var InpGroup_DeliveryType = $('.ig_deliverytype');

    var Inp_DeliveryAddress = $('.t706 input[name="delivery-address"]');
    var InpGroup_DeliveryAddress = $('.ig_deliveryadress');
    // InpGroup_DeliveryAddress.addClass('ig_deliveryaddress deliverytype');
    Inp_DeliveryAddress.addClass('deliverytypeinput');

    /* Select: Schedule order time or get ASAP */
    function EnableOrderTimeType(isEnable) {
    console.log(`EnableOrderTimeType(${isEnable})`)
    // console.log('new TR ' + TR.toString());
    // TR = isEnable;
    if (isEnable) {
    $('.ordertimetypewrapper').show();
    $('.ordertimetypeinput').addClass('js-tilda-rule');
    // changeOrderTimeType(0);
} else {
    $('.ordertimetypewrapper').hide();
    $('.ordertimetypeinput').removeClass('js-tilda-rule');
    // changeOrderTimeType(0);
}
}

    $('.delivery-time-type').change(function () {
    const selectedVal = $(this).children(':selected')[0].text;
    const valueTimedOrder = scheduleATimeText[gastroSystems.language] || scheduleATimeText.EN;
    const chosen = (selectedVal === valueTimedOrder) ? 1 : 0;
    console.log(`Delivery time picker ${(chosen) ? 'enabled' : 'disabled'}`)
    EnableOrderTimeType(chosen);
});

    // Invoice type
    function EnableInvoiceType(isEnable) {
    console.log(`EnableInvoiceType(${isEnable})`);
    if (isEnable) {
    InpGroup_InvoiceType.show();
    InpRadio_InvoiceType.addClass('js-tilda-rule');
} else {
    InpGroup_InvoiceType.hide();
    InpRadio_InvoiceType.removeClass('js-tilda-rule');
}
    changeInvoiceType(-1);
}

    function changeInvoiceType(checkedId) { // -1 to uncheck all the parameters
    if (checkedId === 1) {
    $('.invoicetype').show();
    $('.invoicetypeinput').addClass('js-tilda-rule');
} else {
    $('.invoicetype').hide();
    $('.invoicetypeinput').removeClass('js-tilda-rule');

    if (checkedId === -1) {
    InpRadio_InvoiceType[0].checked = false;
    InpRadio_InvoiceType[1].checked = false;
}
}
}

    InpRadio_InvoiceType.change(function () {
    const option = InpRadio_InvoiceType.index(this);
    changeInvoiceType(option);
});

    // Delivery address
    function EnableDeliveryType(isEnable) {
    if (isEnable) {
    $('.ig_deliverytype').show();

} else {
    $('.ig_deliverytype').hide();
    $('.ig_deliveryadress').hide();
    $('.t706 input[name="delivery-address"]').removeClass('js-tilda-rule');
    changeDeliveryType(0);
}
}

    function changeDeliveryType(checkedId) { // -1 to uncheck all the parameters
    if (checkedId === 1) {
    $('.ig_deliveryadress').show();
    $('.t706 input[name="delivery-address"]').addClass('js-tilda-rule');
} else {
    $('.ig_deliveryadress').hide();
    $('.t706 input[name="delivery-address"]').removeClass('js-tilda-rule');
}
}

    $('.t706 input[name="pickup-option"]').change(function () {
    const option = $('.t706 input[name="pickup-option"]').index(this);
    console.log(option);
    changeDeliveryType(option);
});


    /* Hiding depends on account setup */
    if (!gastroSystems.error) {
    if (!gastroSystems.options.delayedDelivery) {
    $('.ig_ordertimetype').hide();
    EnableOrderTimeType(0);
}

    if (!gastroSystems.options.businessClient) {
    $('.ig_invoicetype').hide();
    $('.ig_invoicetype').removeClass('js-tilda-rule');
    EnableInvoiceType(0);
}

    if (!gastroSystems.options.pickup) {
    EnableDeliveryType(0);
}
} else {
    // TODO AUTONOMOUS MODE
}

    $('.ig_firmname').hide();
    changeInvoiceType(0);

    $('.ig_deliveryadress').hide();
    changeDeliveryType(0);


    if (!IsWorkingHours) {
    $('.dayoffwarning').show();
    setTimeout(function () {
    $('.toolate').click();
}, 1500);
}

    setTimeout(() => {
    var Month = restaurantTime.getMonth() + 1;
    var currentYear = restaurantTime.getFullYear();

    $("form").on('DOMSubtreeModified', () => {
    $('.today').prevAll('tbody tr>td').addClass('pastDay');
    $('.today').parent('tr').prevAll('tr').addClass('pastDay');
    var picM = $('select.dp-select-month option:selected').val();
    var picD = $('select.dp-select-year option:selected').val();
    if (picM < Month && picD <= currentYear || picD < currentYear) {
    $('.cal-month tr').addClass('pastDay');
}

    if (numday === 0) numday = 7;
    if (!gastroSystems.schedule[numday].working) {
    if ($('.today').hasClass('selected-day')) {
    $('.today').removeClass('selected-day').addClass('pastDay').next().addClass('selected-day');
}
}

    for (let iter = 1; iter < gastroSystems.schedule.length; iter++) {
    if (!gastroSystems.schedule[iter].working) {
    $(`.date-picker tr > td:nth-child(${iter}), .date-picker tr > th:nth-child(${iter})`).addClass('calendar-day-off');
}
}
}, 1000);
});

    //Ошибка на случай если введенная дата/время некорректные (дата в прошлом/ не существует/ невалидное время/месяц/день)
    var errorMessageNotExist = "Invalid data!";
    //Ошибка на случай если в введенные дата/время мы не работаем
    var errorMessageNotWorking = "We are not working at this time!";

    var daysInMonth = [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    function leapYear(year) {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

    // RETURNS VALIDATION CODES: -1 - WRONG DATA, -2 - NOT WORKING TIME, 1 - OK
    function validateDeliveryTimeFields() {
    var dataRaw = $('input[name="delivery-date"]')[0].value;
    var timeRaw = $('input[name="delivery-time"]')[0].value;

    console.log(dataRaw + " " + timeRaw);

    // WRONG DATA CHECKING
    if (dataRaw === "" || timeRaw === "") {
    return -1;
}
    var splittedData = dataRaw.split('-');
    if (splittedData[2] < currentYear) {
    return -1;
}
    var pickedYear = parseInt(splittedData[2]);
    var pickedMonth = parseInt(splittedData[1]);
    var pickedDay = parseInt(splittedData[0]);
    if (splittedData[1] > 12 || splittedData[1] < 1) {
    return -1;
}
    if (leapYear(pickedYear)) {
    daysInMonth[2] = 29;
}
    if (pickedDay < 1 || pickedDay > daysInMonth[pickedMonth]) {
    return -1;
}

    var splittedTime = timeRaw.split(':');
    if (splittedTime.length !== 2 || splittedTime[0].length !== 2 || splittedTime[1].length !== 2) {
    return -1;
}
    var pickedHour = parseInt(splittedTime[0]);
    var pickedMinutes = parseInt(splittedTime[1]);
    if (pickedHour < 0 || pickedHour > 23 || pickedMinutes < 0 || pickedMinutes > 59) {
    return -1;
}

    // NOT WORKING TIME CHECKING
    var numday = restaurantTime.getDay();
    if (numday === 0) numday = 7;

    console.log("numday " + numday);

    var curSchedule = gastroSystems.schedule[numday];

    console.log("schedule today " + curSchedule);

    if (curSchedule.working && pickedHour >= curSchedule.open &&
    (!curSchedule.ofnextday && pickedHour < curSchedule.close)) {
    return 1;
}
    return -2;
}

    $('input[name="delivery-date"], input[name="delivery-time"]').change(function () {
    var validateCode = validateDeliveryTimeFields();
    var formSendBtn = $('.t-submit');
    var deliveryData_inpGroup = $('input[name="delivery-date"]').closest('.t-input-group');
    var deliveryTime_inpGroup = $('input[name="delivery-time"]').closest('.t-input-group');

    var errorMessageBox = $('input[name="delivery-date"]').closest('.t-input-block').find('.t-input-error');
    if (validateCode === 1) { // OK
    formSendBtn.removeClass('opbtn');
    deliveryData_inpGroup.removeClass('js-error-control-box');
    deliveryTime_inpGroup.removeClass('js-error-control-box');
    errorMessageBox.html("");
} else { // ERROR
    formSendBtn.addClass('opbtn');
    deliveryData_inpGroup.addClass('js-error-control-box');
    deliveryTime_inpGroup.addClass('js-error-control-box');
    errorMessageBox.html((validateCode === -1) ? errorMessageNotExist : errorMessageNotWorking);
}
    formSendBtn.attr('disabled', validateCode !== 1);
});
    //
    // END OF DATA FIELDS VALIDATION
    //
});
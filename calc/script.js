const XHR = new XMLHttpRequest();
const section = document.getElementsByTagName('section')[0];

const btn = document.getElementById('btn');
const currency = document.getElementById('currency');
const exdate = document.getElementById('date');

btn.addEventListener('click', function() {
    console.log(`currency: ${currency.value}`);
    console.log(`exdate: ${exdate.value}`);

    const date = exdate.value.replaceAll('-', '');
    console.log(`date: ${date}`);

    const url = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${currency.value}&date=${date}&json`;

    console.log(url);

    XHR.open('GET', url);
    XHR.send();

    XHR.addEventListener('readystatechange', function() {
        if (XHR.readyState === 4 && XHR.status === 200) {

            const data_obj = JSON.parse(XHR.responseText);

            if (data_obj.length === 0) {
                section.innerHTML = `<h2>Дані відсутні</h2>`;
            } else {
                section.innerHTML = `<h2>${data_obj[0].rate}</h2>`;
            }
        }
    });
});
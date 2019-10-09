const dataURL = "https://api.myjson.com/bins/jcmhn";

//скрыть правила, формы иконки в начале загрузки страницы
$('div#container').hide();
$('div#rules_text').hide();
$('div#var1_label').hide();
$('div#var2_label').hide();
$('div#var3_label').hide();
$('div#var4_label').hide();
$('div#var5_label').hide();
$('div#var6_label').hide();

//показать правила и исходный текст по кнопке Rules
$("#rules").click (function() {

  $("div#rules_text").toggle(1000);

});

//показать формы по кнопке TRYIT
$("#tryit").click (function() {

  $("div#container").toggle(1000);

});

// взять данные по dataUrl, вытащить их и передать в handleData
function handleButton() {
  $.getJSON(dataURL, handleData);
}
// присвоить значение каждой формы переменной и проверить значения по кнопке Проверить
function handleData (data) {
	let text='';
	let var1=$('input[name=var1]')[0].value;
	if (var1 == 'Старик') {
		$('div#var1_label').show();}
	else {
		$('div#var1_label').hide();
	}
	let var2=$('input[name=var2]')[0].value;
	if (var2 == 'Старуха') {
		$('div#var2_label').show();
	}
	else {
		$('div#var2_label').hide();
	}
	let var3=$('input[name=var3]')[0].value;
	if (var3 == 'курочка Ряба') {
		$('div#var3_label').show();
	}
	else {
		$('div#var3_label').hide();
	}
	let var4=$('input[name=var4]')[0].value;
	if (var4 == 'яичко') {
		$('div#var4_label').show();
	}
	else {
		$('div#var4_label').hide();
	}
	let var5=$('input[name=var5]')[0].value;
	if (var5 == 'Мышка') {
		$('div#var5_label').show();}
	else {
		$('div#var5_label').hide();
	}
	let var6=$('input[name=var6]')[0].value;
	if (var6 == 'хвостиком') {
		$('div#var6_label').show();}
	else {
		$('div#var6_label').hide();
	}
	let speach=$('input[name=speach]')[0].value;

//перебираем и заменяем {var} на инпуты
	data['text'].forEach (function (item) {
		
		item=item.replace('{var1}', var1);
		item=item.replace('{var2}', var2);
		item=item.replace('{var3}', var3);
		item=item.replace('{var4}', var4);
		item=item.replace('{var5}', var5);
		item=item.replace('{var6}', var6);
		item=item.replace('{speach}', speach);

		text=text + item + '<BR>';
	});
	
	$('div#result').html(text);
}

//обработка кнопки button-fetch
function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);

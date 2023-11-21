var BGRed = 0;
var BGGreen = 0;
var BGBlue = 0;
var FGRed = 0;
var FGGreen = 0;
var FGBlue = 0;
var RainbowSpeed = 0;
var ColorChannel = 0;
var ClockStructure = 0;
var BGColorValue = "";
var FGColorValue = "";
var BGColorValue0 = "";
var FGColorValue0 = "";
var ImageSelection = 0;
var IsBGChange = false;
var FontHeader = 0;
var FontBody = 0;
var FontFooter = 0;

var LocalColorType = [];
var LocalMode = [];
var LocalFGColor = [];
var LocalBGColor = [];
var LocalFGColor0 = [];
var LocalBGColor0 = [];
var LocalRainbowSpeed = [];
var LocalLanguageChannel = [];
var LocalImageSelection = [];
var LocalFontHeader = [];
var LocalFontBody = [];
var LocalFontFooter = [];
var LocalHeaderBorder = [];
var LocalBodyBorder = [];

var LanguageChannel = 1;

var $ = function(id)
{
	return document.getElementById(id);
}

var $$ = function(name)
{
	return document.getElementsByName(name);
}

var $$$ = function(TheClass)
{
	return document.getElementsByClassName(TheClass);
}

var LoadFile = function()
{
	var MX = "";
	try
	{
		if (LocalBGColor.length == 0)
		{
			var storage = localStorage.getItem("LocalBGColor");
			LocalBGColor = storage.split("|");
			if (storage.length > 0)
			{
				LocalBGColor = storage.split("|");
			}
		}
		if (LocalBGColor0.length == 0)
		{
			var storage = localStorage.getItem("LocalBGColor0");
			LocalBGColor0 = storage.split("|");
			if (storage.length > 0)
			{
				LocalBGColor0 = storage.split("|");
			}
		}
		if (LocalColorType.length == 0)
		{
			var storage = localStorage.getItem("LocalColorType");
			if (storage.length > 0)
			{
				LocalColorType = storage.split("|");
			}
		}
		if (LocalFGColor.length == 0)
		{
			var storage = localStorage.getItem("LocalFGColor");
			if (storage.length > 0)
			{
				LocalFGColor = storage.split("|");
			}
		}
		if (LocalFGColor0.length == 0)
		{
			var storage = localStorage.getItem("LocalFGColor0");
			LocalFGColor0 = storage.split("|");
			if (storage.length > 0)
			{
				LocalFGColor0 = storage.split("|");
			}
		}
		if (LocalLanguageChannel.length == 0)
		{
			var storage = localStorage.getItem("LocalLanguageChannel");
			if (storage.length > 0)
			{
				LocalLanguageChannel = storage.split("|");
			}
		}
		if (LocalMode.length == 0)
		{
			var storage = localStorage.getItem("LocalMode");
			if (storage.length > 0)
			{
				LocalMode = storage.split("|");
			}
		}
		if (LocalRainbowSpeed.length == 0)
		{
			var storage = localStorage.getItem("LocalRainbowSpeed");
			if (storage.length > 0)
			{
				LocalRainbowSpeed = storage.split("|");
			}
		}
		if (LocalImageSelection.length == 0)
		{
			var storage = localStorage.getItem("LocalImageSelection");
			if (storage.length > 0)
			{
				LocalImageSelection = storage.split("|");
			}
		}
		if (LocalFontHeader.length == 0)
		{
			var storage = localStorage.getItem("LocalFontHeader");
			if (storage.length > 0)
			{
				LocalFontHeader = storage.split("|");
			}
		}
		if (LocalFontBody.length == 0)
		{
			var storage = localStorage.getItem("LocalFontBody");
			if (storage.length > 0)
			{
				LocalFontBody = storage.split("|");
			}
		}
		if (LocalFontFooter.length == 0)
		{
			var storage = localStorage.getItem("LocalFontFooter");
			if (storage.length > 0)
			{
				LocalFontFooter = storage.split("|");
			}
		}
		if (LocalHeaderBorder.length == 0)
		{
			var storage = localStorage.getItem("LocalHeaderBorder");
			if (storage.length > 0)
			{
				LocalHeaderBorder = storage.split("|");
			}
		}
		if (LocalBodyBorder.length == 0)
		{
			var storage = localStorage.getItem("LocalBodyBorder");
			if (storage.length > 0)
			{
				LocalBodyBorder = storage.split("|");
			}
		}
		$("Background Color").value = LocalBGColor[0];
		$("Background Color 0").value = LocalBGColor0[0];
		var BGCat = $$("Background_Category");
		for (index = 0; index < BGCat.length; index++)
		{
			if (BGCat[index].value == LocalColorType[0])
			{
				BGCat[index].checked = true;
			}
		}
		$("Foreground Color").value = LocalFGColor[0];
		$("Foreground Color 0").value = LocalFGColor0[0];
		$("Image Selection").value = LocalImageSelection[0];
		LanguageChannel = LocalLanguageChannel[0];
		$("Language List").value = LanguageChannel;
		var Modes = $$("Modes");6
		Modes[LocalMode[0]].checked = true;
		RainbowSpeed = LocalRainbowSpeed[0];
		$("Rainbow Speed").value = LocalRainbowSpeed[0];
		$("Font Header Selection").value = LocalFontHeader[0];
		$("Font Body Selection").value = LocalFontBody[0];
		$("Font Footer Selection").value = LocalFontFooter[0];
		$("Header Border Selection").value = LocalHeaderBorder[0];
		$("Body Border Selection").value = LocalBodyBorder[0];
		ChangeBackground();
	}
	catch (e)
	{
		
	}
}

var WriteFile = function()
{
	LocalBGColor.length = 0;
	LocalBGColor0.length = 0;
	LocalColorType.length = 0;
	LocalFGColor.length = 0;
	LocalFGColor0.length = 0;
	LocalImageSelection.length = 0;
	LocalLanguageChannel.length = 0;
	LocalMode.length = 0;
	LocalRainbowSpeed.length = 0;
	LocalFontHeader.length = 0;
	LocalFontBody.length = 0;
	LocalFontFooter.length = 0;
	LocalHeaderBorder.length = 0;
	LocalBodyBorder.length = 0;
	var BGCategory = $$("Background_Category");
	for (index = 0; index < BGCategory.length; index++)
	{
		if (BGCategory[index].checked)
		{
			LocalColorType.push(BGCategory[index].value);
		}
	}
	localStorage.LocalColorType = LocalColorType.join("|");
	LocalBGColor.push($("Background Color").value);
	LocalBGColor0.push($("Background Color 0").value);
	for (index = 0; index < BGCategory.length; index++)
	{
		if (BGCategory[index].checked)
		{
			LocalColorType.push(index);
		}
	}
	LocalFGColor.push($("Foreground Color").value);
	LocalFGColor0.push($("Foreground Color 0").value);
	LocalImageSelection.push($("Image Selection").value);
	LocalLanguageChannel.push($("Language List").value);
	var Mode = $$("Modes");
	for (index = 0; index < Mode.length; index++)
	{
		if (Mode[index].checked)
		{
			LocalMode.push(index);
		}
	}
	LocalRainbowSpeed.push($("Rainbow Speed").value);
	LocalFontHeader.push($("Font Header Selection").value);
	LocalFontBody.push($("Font Body Selection").value);
	LocalFontFooter.push($("Font Footer Selection").value);
	LocalHeaderBorder.push($("Header Border Selection").value);
	LocalBodyBorder.push($("Body Border Selection").value);
	localStorage.LocalBGColor = LocalBGColor.join("|");
	localStorage.LocalBGColor0 = LocalBGColor0.join("|");
	localStorage.LocalColorType = LocalColorType.join("|");
	localStorage.LocalFGColor = LocalFGColor.join("|");
	localStorage.LocalFGColor0 = LocalFGColor0.join("|");
	localStorage.LocalImageSelection = LocalImageSelection.join("|");
	localStorage.LocalLanguageChannel = LocalLanguageChannel.join("|");
	localStorage.LocalMode = LocalMode.join("|");
	localStorage.LocalRainbowSpeed = LocalRainbowSpeed.join("|");
	localStorage.LocalFontHeader = LocalFontHeader.join("|");
	localStorage.LocalFontBody = LocalFontBody.join("|");
	localStorage.LocalFontFooter = LocalFontFooter.join("|");
	localStorage.LocalHeaderBorder = LocalHeaderBorder.join("|");
	localStorage.LocalBodyBorder = LocalBodyBorder.join("|");
}

var Timer = function()
{
	var D = new Date();
	var Int_Title = D.getDay();
	var Int_Month = D.getMonth();
	var Int_Day = D.getDate();
	var Int_Year = D.getFullYear();
	var Int_Hour = D.getHours();
	var Int_Minute = D.getMinutes();
	var Int_Second = D.getSeconds();
	var Int_MilliSecond = D.getMilliseconds();
	var Str_Title = "";
	var Str_Month = "";
	var Str_Day = "";
	var Str_Year = "";
	var Str_Hour = "";
	var Str_Minute = "";
	var Str_Second = "";
	var Str_MilliSecond = "";
	var Category = "";
	var Str_Hour_24 = Int_Hour.toString();
	var Is24 = true;
	switch (Int_Title)
	{
		case 0:
			switch (parseInt(LanguageChannel))
			{
				case 0:
					Str_Title = "Sonntag";
					break;
				case 1:
					Str_Title = "Sunday";
					break;
				case 2:
					Str_Title = "Domingo";
					break;
				case 3:
					Str_Title = "Dimanche";
					break;
				case 4:
					Str_Title = "Domenica";
					break;
				case 5:
					Str_Title = "Domingo";
					break;
				case 6:
					Str_Title = "Chủ nhật";
					break;
				case 7:
					Str_Title = "Κυριακή";
					break;
				case 8:
					Str_Title = "Воскресенье";
					break;
				case 9:
					Str_Title = "יוֹם רִאשׁוֹן";
					break;
				case 10:
					Str_Title = "اتوار";
					break;
				case 11:
					Str_Title = "الأحد";
					break;
				case 12:
					Str_Title = "रविवार";
					break;
				case 13:
					Str_Title = "วันอาทิตย์";
					break;
				case 14:
					Str_Title = "일요일";
					break;
				case 15:
					Str_Title = "日曜日";
					break;
				case 16:
					Str_Title = "星期日";
					break;
				case 17:
					Str_Title = "星期日";
					break;
			}
			break;
		case 1:
			switch (parseInt(LanguageChannel))
			{
				case 0:
					Str_Title = "Montag";
					break;
				case 1:
					Str_Title = "Monday";
					break;
				case 2:
					Str_Title = "Lunes";
					break;
				case 3:
					Str_Title = "Lundi";
					break;
				case 4:
					Str_Title = "Lunedi";
					break;
				case 5:
					Str_Title = "Segunda-feira";
					break;
				case 6:
					Str_Title = "Thứ hai";
					break;
				case 7:
					Str_Title = "Δευτέρα";
					break;
				case 8:
					Str_Title = "Понедельник";
					break;
				case 9:
					Str_Title = "יוֹם שֵׁנִי";
					break;
				case 10:
					Str_Title = "پیر";
					break;
				case 11:
					Str_Title = "الاثنين";
					break;
				case 12:
					Str_Title = "सोमवार";
					break;
				case 13:
					Str_Title = "วันจันทร์";
					break;
				case 14:
					Str_Title = "월요일";
					break;
				case 15:
					Str_Title = "月曜日";
					break;
				case 16:
					Str_Title = "周一";
					break;
				case 17:
					Str_Title = "週一";
					break;
			}
			break;
		case 2:
			switch (parseInt(LanguageChannel))
			{
				case 0:
					Str_Title = "Dienstag";
					break;
				case 1:
					Str_Title = "Tuesday";
					break;
				case 2:
					Str_Title = "Martes";
					break;
				case 3:
					Str_Title = "Mardi";
					break;
				case 4:
					Str_Title = "Martedì";
					break;
				case 5:
					Str_Title = "Terça-feira";
					break;
				case 6:
					Str_Title = "Thứ ba";
					break;
				case 7:
					Str_Title = "Τρίτη";
					break;
				case 8:
					Str_Title = "Вторник";
					break;
				case 9:
					Str_Title = "יוֹם שְׁלִישִׁי";
					break;
				case 10:
					Str_Title = "منگل";
					break;
				case 11:
					Str_Title = "يوم الثلاثاء";
					break;
				case 12:
					Str_Title = "मंगलवार";
					break;
				case 13:
					Str_Title = "วันอังคาร";
					break;
				case 14:
					Str_Title = "화요일";
					break;
				case 15:
					Str_Title = "火曜日";
					break;
				case 16:
					Str_Title = "周二";
					break;
				case 17:
					Str_Title = "週二";
					break;
			}
			break;
		case 3:
			switch (parseInt(LanguageChannel))
			{
				case 0:
					Str_Title = "Mittwoch";
					break;
				case 1:
					Str_Title = "Wednesday";
					break;
				case 2:
					Str_Title = "Miércoles";
					break;
				case 3:
					Str_Title = "Mercredi";
					break;
				case 4:
					Str_Title = "Mercoledì";
					break;
				case 5:
					Str_Title = "Quarta-feira";
					break;
				case 6:
					Str_Title = "Thứ Tư";
					break;
				case 7:
					Str_Title = "Τετάρτη";
					break;
				case 8:
					Str_Title = "Среда";
					break;
				case 9:
					Str_Title = "יום רביעי";
					break;
				case 10:
					Str_Title = "بدھ";
					break;
				case 11:
					Str_Title = "الأربعاء";
					break;
				case 12:
					Str_Title = "बुधवार";
					break;
				case 13:
					Str_Title = "วันพุธ";
					break;
				case 14:
					Str_Title = "수요일";
					break;
				case 15:
					Str_Title = "水曜日";
					break;
				case 16:
					Str_Title = "周三";
					break;
				case 17:
					Str_Title = "週三";
					break;
			}
			break;
		case 4:
			switch (parseInt(LanguageChannel))
			{
				case 0:
					Str_Title = "Donnerstag";
					break;
				case 1:
					Str_Title = "Thursday";
					break;
				case 2:
					Str_Title = "Jueves";
					break;
				case 3:
					Str_Title = "Jeudi";
					break;
				case 4:
					Str_Title = "Giovedì";
					break;
				case 5:
					Str_Title = "Quinta-feira";
					break;
				case 6:
					Str_Title = "Thứ năm";
					break;
				case 7:
					Str_Title = "Πέμπτη";
					break;
				case 8:
					Str_Title = "Четверг";
					break;
				case 9:
					Str_Title = "יוֹם חֲמִישִׁי";
					break;
				case 10:
					Str_Title = "جمعرات";
					break;
				case 11:
					Str_Title = "الخميس";
					break;
				case 12:
					Str_Title = "गुरुवार";
					break;
				case 13:
					Str_Title = "วันพฤหัสบดี";
					break;
				case 14:
					Str_Title = "목요일";
					break;
				case 15:
					Str_Title = "木曜日";
					break;
				case 16:
					Str_Title = "周四";
					break;
				case 17:
					Str_Title = "週四";
					break;
			}
			break;
		case 5:
			switch (parseInt(LanguageChannel))
			{
				case 0:
					Str_Title = "Freitag";
					break;
				case 1:
					Str_Title = "Friday";
					break;
				case 2:
					Str_Title = "Viernes";
					break;
				case 3:
					Str_Title = "Vendredi";
					break;
				case 4:
					Str_Title = "Venerdì";
					break;
				case 5:
					Str_Title = "Sexta-feira";
					break;
				case 6:
					Str_Title = "Thứ sáu";
					break;
				case 7:
					Str_Title = "Παρασκευή";
					break;
				case 8:
					Str_Title = "Пятница";
					break;
				case 9:
					Str_Title = "יוֹם שִׁישִׁי";
					break;
				case 10:
					Str_Title = "جمعہ";
					break;
				case 11:
					Str_Title = "الجمعة";
					break;
				case 12:
					Str_Title = "शुक्रवार";
					break;
				case 13:
					Str_Title = "วันศุกร์";
					break;
				case 14:
					Str_Title = "금요일";
					break;
				case 15:
					Str_Title = "金曜日";
					break;
				case 16:
					Str_Title = "星期五";
					break;
				case 17:
					Str_Title = "星期五";
					break;
			}
			break;
		case 6:
			switch (parseInt(LanguageChannel))
			{
				case 0:
					Str_Title = "Samstag";
					break;
				case 1:
					Str_Title = "Saturday";
					break;
				case 2:
					Str_Title = "Sábado";
					break;
				case 3:
					Str_Title = "Samedi";
					break;
				case 4:
					Str_Title = "Sabato";
					break;
				case 5:
					Str_Title = "Sábado";
					break;
				case 6:
					Str_Title = "Thứ bảy";
					break;
				case 7:
					Str_Title = "Σάββατο";
					break;
				case 8:
					Str_Title = "Суббота";
					break;
				case 9:
					Str_Title = "יום שבת";
					break;
				case 10:
					Str_Title = "ہفتہ";
					break;
				case 11:
					Str_Title = "السبت";
					break;
				case 12:
					Str_Title = "शनिवार";
					break;
				case 13:
					Str_Title = "วันเสาร์";
					break;
				case 14:
					Str_Title = "토요일";
					break;
				case 15:
					Str_Title = "土曜日";
					break;
				case 16:
					Str_Title = "周六";
					break;
				case 17:
					Str_Title = "週六";
					break;
			}
			break;
	}
	switch (Int_Month)
	{
		case 0:
			switch (parseInt(LanguageChannel))
			{
				case 0:
					Str_Month = "Januar";
					break;
				case 1:
					Str_Month = "January";
					break;
				case 2:
					Str_Month = "Enero";
					break;
				case 3:
					Str_Month = "Janvier";
					break;
				case 4:
					Str_Month = "Gennaio";
					break;
				case 5:
					Str_Month = "Janeiro";
					break;
				case 6:
					Str_Month = "Tháng Một";
					break;
				case 7:
					Str_Month = "Ιανουαρίου";
					break;
				case 8:
					Str_Month = "январь";
					break;
				case 9:
					Str_Month = "יָנוּאָר";
					break;
				case 10:
					Str_Month = "جنوری";
					break;
				case 11:
					Str_Month = "يناير";
					break;
				case 12:
					Str_Month = "जनवरी";
					break;
				case 13:
					Str_Month = "มกราคม";
					break;
				case 14:
					Str_Month = "일월";
					break;
				case 15:
					Str_Month = "一月";
					break;
				case 16:
					Str_Month = "一月";
					break;
				case 17:
					Str_Month = "一月";
					break;
			}
			break;
		case 1:
			switch (parseInt(LanguageChannel))
			{
				case 0:
					Str_Month = "Februar";
					break;
				case 1:
					Str_Month = "February";
					break;
				case 2:
					Str_Month = "Febrero";
					break;
				case 3:
					Str_Month = "Février";
					break;
				case 4:
					Str_Month = "Febbraio";
					break;
				case 5:
					Str_Month = "Fevereiro";
					break;
				case 6:
					Str_Month = "Tháng hai";
					break;
				case 7:
					Str_Month = "Φεβρουαρίου";
					break;
				case 8:
					Str_Month = "февраль";
					break;
				case 9:
					Str_Month = "פברואר";
					break;
				case 10:
					Str_Month = "فروری";
					break;
				case 11:
					Str_Month = "شهر فبراير";
					break;
				case 12:
					Str_Month = "फ़रवरी";
					break;
				case 13:
					Str_Month = "กุมภาพันธ์";
					break;
				case 14:
					Str_Month = "이월";
					break;
				case 15:
					Str_Month = "二月";
					break;
				case 16:
					Str_Month = "二月";
					break;
				case 17:
					Str_Month = "二月";
					break;
			}
			break;
		case 2:
			switch (parseInt(LanguageChannel))
			{
				case 0:
					Str_Month = "Marsch";
					break;
				case 1:
					Str_Month = "March";
					break;
				case 2:
					Str_Month = "Marzo";
					break;
				case 3:
					Str_Month = "Mars";
					break;
				case 4:
					Str_Month = "Marzo";
					break;
				case 5:
					Str_Month = "Março";
					break;
				case 6:
					Str_Month = "Tháng ba";
					break;
				case 7:
					Str_Month = "Μαρτίου";
					break;
				case 8:
					Str_Month = "Маршировать";
					break;
				case 9:
					Str_Month = "במרץ";
					break;
				case 10:
					Str_Month = "مارچ";
					break;
				case 11:
					Str_Month = "يمشي";
					break;
				case 12:
					Str_Month = "मार्च";
					break;
				case 13:
					Str_Month = "มีนาคม";
					break;
				case 14:
					Str_Month = "삼월";
					break;
				case 15:
					Str_Month = "三月";
					break;
				case 16:
					Str_Month = "三月";
					break;
				case 17:
					Str_Month = "三月";
					break;
			}
			break;
		case 3:
			switch (parseInt(LanguageChannel))
			{
				case 0:
					Str_Month = "April";
					break;
				case 1:
					Str_Month = "April";
					break;
				case 2:
					Str_Month = "Abril";
					break;
				case 3:
					Str_Month = "Avril";
					break;
				case 4:
					Str_Month = "Aprile";
					break;
				case 5:
					Str_Month = "Abril";
					break;
				case 6:
					Str_Month = "Tháng tư";
					break;
				case 7:
					Str_Month = "Απριλίου";
					break;
				case 8:
					Str_Month = "апрель";
					break;
				case 9:
					Str_Month = "אַפּרִיל";
					break;
				case 10:
					Str_Month = "اپریل";
					break;
				case 11:
					Str_Month = "أبريل";
					break;
				case 12:
					Str_Month = "अप्रैल";
					break;
				case 13:
					Str_Month = "เมษายน";
					break;
				case 14:
					Str_Month = "사월";
					break;
				case 15:
					Str_Month = "四月";
					break;
				case 16:
					Str_Month = "四月";
					break;
				case 17:
					Str_Month = "四月";
					break;
			}
			break;
		case 4:
			switch (parseInt(LanguageChannel))
			{
				case 0:
					Str_Month = "Mai";
					break;
				case 1:
					Str_Month = "May";
					break;
				case 2:
					Str_Month = "Mayo";
					break;
				case 3:
					Str_Month = "Mai";
					break;
				case 4:
					Str_Month = "Maggio";
					break;
				case 5:
					Str_Month = "Maio";
					break;
				case 6:
					Str_Month = "Tháng năm";
					break;
				case 7:
					Str_Month = "Μαΐου";
					break;
				case 8:
					Str_Month = "Может";
					break;
				case 9:
					Str_Month = "במאי";
					break;
				case 10:
					Str_Month = "مئی";
					break;
				case 11:
					Str_Month = "يمكن";
					break;
				case 12:
					Str_Month = "मई";
					break;
				case 13:
					Str_Month = "พฤษภาคม";
					break;
				case 14:
					Str_Month = "다섯월";
					break;
				case 15:
					Str_Month = "五月";
					break;
				case 16:
					Str_Month = "五月";
					break;
				case 17:
					Str_Month = "五月";
					break;
			}
			break;
		case 5:
			switch (parseInt(LanguageChannel))
			{
				case 0:
					Str_Month = "Juni";
					break;
				case 1:
					Str_Month = "June";
					break;
				case 2:
					Str_Month = "Junio";
					break;
				case 3:
					Str_Month = "Juin";
					break;
				case 4:
					Str_Month = "Giugno";
					break;
				case 5:
					Str_Month = "Junho";
					break;
				case 6:
					Str_Month = "Tháng sáu";
					break;
				case 7:
					Str_Month = "Ιουνίου";
					break;
				case 8:
					Str_Month = "Июнь";
					break;
				case 9:
					Str_Month = "יוני";
					break;
				case 10:
					Str_Month = "جون";
					break;
				case 11:
					Str_Month = "يونيو";
					break;
				case 12:
					Str_Month = "जून";
					break;
				case 13:
					Str_Month = "มิถุนายน";
					break;
				case 14:
					Str_Month = "육월";
					break;
				case 15:
					Str_Month = "六月";
					break;
				case 16:
					Str_Month = "六月";
					break;
				case 17:
					Str_Month = "六月";
					break;
			}
			break;
		case 6:
			switch (parseInt(LanguageChannel))
			{
				case 0:
					Str_Month = "Juli";
					break;
				case 1:
					Str_Month = "July";
					break;
				case 2:
					Str_Month = "Julio";
					break;
				case 3:
					Str_Month = "Juillet";
					break;
				case 4:
					Str_Month = "Luglio";
					break;
				case 5:
					Str_Month = "Julho";
					break;
				case 6:
					Str_Month = "Tháng bảy";
					break;
				case 7:
					Str_Month = "Ιουλίου";
					break;
				case 8:
					Str_Month = "Июль";
					break;
				case 9:
					Str_Month = "יולי";
					break;
				case 10:
					Str_Month = "جولائی";
					break;
				case 11:
					Str_Month = "يوليو";
					break;
				case 12:
					Str_Month = "जुलाई";
					break;
				case 13:
					Str_Month = "กรกฎาคม";
					break;
				case 14:
					Str_Month = "칠월";
					break;
				case 15:
					Str_Month = "七月";
					break;
				case 16:
					Str_Month = "七月";
					break;
				case 17:
					Str_Month = "七月";
					break;
			}
			break;
		case 7:
			switch (parseInt(LanguageChannel))
			{
				case 0:
					Str_Month = "August";
					break;
				case 1:
					Str_Month = "August";
					break;
				case 2:
					Str_Month = "Agosto";
					break;
				case 3:
					Str_Month = "Août";
					break;
				case 4:
					Str_Month = "Agosto";
					break;
				case 5:
					Str_Month = "Agosto";
					break;
				case 6:
					Str_Month = "Tháng tám";
					break;
				case 7:
					Str_Month = "Αυγούστου";
					break;
				case 8:
					Str_Month = "Август";
					break;
				case 9:
					Str_Month = "אוגוסט";
					break;
				case 10:
					Str_Month = "اگست";
					break;
				case 11:
					Str_Month = "أغسطس";
					break;
				case 12:
					Str_Month = "अगस्त";
					break;
				case 13:
					Str_Month = "สิงหาคม";
					break;
				case 14:
					Str_Month = "팔월";
					break;
				case 15:
					Str_Month = "八月";
					break;
				case 16:
					Str_Month = "八月";
					break;
				case 17:
					Str_Month = "八月";
					break;
			}
			break;
		case 8:
			switch (parseInt(LanguageChannel))
			{
				case 0:
					Str_Month = "September";
					break;
				case 1:
					Str_Month = "September";
					break;
				case 2:
					Str_Month = "Septiembre";
					break;
				case 3:
					Str_Month = "Septembre";
					break;
				case 4:
					Str_Month = "Settembre";
					break;
				case 5:
					Str_Month = "Setembro";
					break;
				case 6:
					Str_Month = "Tháng Chín";
					break;
				case 7:
					Str_Month = "Σεπτεμβρίου";
					break;
				case 8:
					Str_Month = "Сентябрь";
					break;
				case 9:
					Str_Month = "סֶפּטֶמבֶּר";
					break;
				case 10:
					Str_Month = "ستمبر";
					break;
				case 11:
					Str_Month = "سبتمبر";
					break;
				case 12:
					Str_Month = "सितम्बर";
					break;
				case 13:
					Str_Month = "กันยายน";
					break;
				case 14:
					Str_Month = "구월";
					break;
				case 15:
					Str_Month = "九月";
					break;
				case 16:
					Str_Month = "九月";
					break;
				case 17:
					Str_Month = "九月";
					break;
			}
			break;
		case 9:
			switch (parseInt(LanguageChannel))
			{
				case 0:
					Str_Month = "Oktober";
					break;
				case 1:
					Str_Month = "October";
					break;
				case 2:
					Str_Month = "Octubre";
					break;
				case 3:
					Str_Month = "Octobre";
					break;
				case 4:
					Str_Month = "Ottobre";
					break;
				case 5:
					Str_Month = "Outubro";
					break;
				case 6:
					Str_Month = "Tháng Mười";
					break;
				case 7:
					Str_Month = "Οκτωβρίου";
					break;
				case 8:
					Str_Month = "Октябрь";
					break;
				case 9:
					Str_Month = "אוֹקְטוֹבֶּר";
					break;
				case 10:
					Str_Month = "اکتوبر";
					break;
				case 11:
					Str_Month = "اكتوبر";
					break;
				case 12:
					Str_Month = "अक्टूबर";
					break;
				case 13:
					Str_Month = "ตุลาคม";
					break;
				case 14:
					Str_Month = "십월";
					break;
				case 15:
					Str_Month = "十月";
					break;
				case 16:
					Str_Month = "十月";
					break;
				case 17:
					Str_Month = "十月";
					break;
			}
			break;
		case 10:
			switch (parseInt(LanguageChannel))
			{
				case 0:
					Str_Month = "November";
					break;
				case 1:
					Str_Month = "November";
					break;
				case 2:
					Str_Month = "Noviembre";
					break;
				case 3:
					Str_Month = "Novembre";
					break;
				case 4:
					Str_Month = "Novembre";
					break;
				case 5:
					Str_Month = "Novembro";
					break;
				case 6:
					Str_Month = "Tháng mười một";
					break;
				case 7:
					Str_Month = "Νοεμβρίου";
					break;
				case 8:
					Str_Month = "ноябрь";
					break;
				case 9:
					Str_Month = "נוֹבֶמבֶּר";
					break;
				case 10:
					Str_Month = "نومبر";
					break;
				case 11:
					Str_Month = "شهر نوفمبر";
					break;
				case 12:
					Str_Month = "नवंबर";
					break;
				case 13:
					Str_Month = "พฤศจิกายน";
					break;
				case 14:
					Str_Month = "십일월";
					break;
				case 15:
					Str_Month = "十一月";
					break;
				case 16:
					Str_Month = "十一月";
					break;
				case 17:
					Str_Month = "十一月";
					break;
			}
			break;
		case 11:
			switch (parseInt(LanguageChannel))
			{
				case 0:
					Str_Month = "Dezember";
					break;
				case 1:
					Str_Month = "December";
					break;
				case 2:
					Str_Month = "Diciembre";
					break;
				case 3:
					Str_Month = "Décembre";
					break;
				case 4:
					Str_Month = "Dicembre";
					break;
				case 5:
					Str_Month = "Dezembro";
					break;
				case 6:
					Str_Month = "Tháng mười hai";
					break;
				case 7:
					Str_Month = "Δεκεμβρίου";
					break;
				case 8:
					Str_Month = "Декабрь";
					break;
				case 9:
					Str_Month = "דֵצֶמבֶּר";
					break;
				case 10:
					Str_Month = "دسمبر";
					break;
				case 11:
					Str_Month = "ديسمبر";
					break;
				case 12:
					Str_Month = "दिसंबर";
					break;
				case 13:
					Str_Month = "ธันวาคม";
					break;
				case 14:
					Str_Month = "열둘월";
					break;
				case 15:
					Str_Month = "十二月";
					break;
				case 16:
					Str_Month = "十二月";
					break;
				case 17:
					Str_Month = "十二月";
					break;
			}
			break;
	}
	Str_Day = Int_Day.toString();
	Str_Year = Int_Year.toString();
	if (Int_Hour == 0)
	{
		Str_Hour = "12";
		Category = "Ante Meridiem";
	}
	else if (Int_Hour < 12)
	{
		Str_Hour = Int_Hour.toString();
		Category = "Ante Meridiem";
	}
	else if (Int_Hour == 12)
	{
		Str_Hour = Int_Hour.toString();
		Category = "Post Meridiem";
	}
	else
	{
		Str_Hour = (Int_Hour - 12).toString();
		Category = "Post Meridiem";
	}
	if (Int_Minute < 10)
	{
		Str_Minute = "0" + Int_Minute.toString();
	}
	else
	{
		Str_Minute = Int_Minute.toString();
	}
	if (Int_Second < 10)
	{
		Str_Second = "0" + Int_Second.toString();
	}
	else
	{
		Str_Second = Int_Second.toString();
	}
	if (Int_MilliSecond < 10)
	{
		Str_MilliSecond = "00" + Int_MilliSecond.toString();
	}
	else if (Int_MilliSecond < 100)
	{
		Str_MilliSecond = "0" + Int_MilliSecond.toString();
	}
	else
	{
		Str_MilliSecond = Int_MilliSecond.toString();
	}
	var DaySchedule = "";
	var TimeSchedule = "";
	if (LanguageChannel == 0)
	{
		DaySchedule = Str_Title + " " + Str_Day + ". " + Str_Month + " " + Str_Year;
	}
	else if (LanguageChannel == 1)
	{
		Is24 = false;
		DaySchedule = Str_Title + " " + Str_Month + " " + Str_Day + ", " + Str_Year;
	}
	else if (LanguageChannel == 2 || LanguageChannel == 5)
	{
		DaySchedule = Str_Title + " " + Str_Day + " de " + Str_Month + ", " + Str_Year;
	}
	else if (LanguageChannel == 3 || LanguageChannel == 4 || LanguageChannel == 7 || LanguageChannel == 12)
	{
		DaySchedule = Str_Title + " " + Str_Day + " " + Str_Month + " " + Str_Year;
	}
	else if (LanguageChannel == 6)
	{
		DaySchedule = Str_Title + " ngày " + Str_Day + " tháng " + Str_Month + " năm " + Str_Year;
	}
	else if (LanguageChannel == 8)
	{
		DaySchedule = Str_Title + ", " + Str_Day + " " + Str_Month + " " + Str_Year + " г.";
	}
	else if (LanguageChannel == 9)
	{
		DaySchedule = Str_Year + " " + Str_Month + " " + Str_Day + " " + Str_Title + " יום";
	}
	else if (LanguageChannel == 10 || LanguageChannel == 11)
	{
		var Temporary_Day = "";
		var Temporary_Year = "";
		var Temporary_Hour = "";
		var Temporary_Minute = "";
		var Temporary_Second = "";
		var Temporary_MilliSecond = "";
		for (index = 0; index < Str_Day.length; index++)
		{
			if (Str_Day[index] == '0')
			{
				Temporary_Day += "٠";
			}
			else if (Str_Day[index] == "1")
			{
				Temporary_Day += "١";
			}
			else if (Str_Day[index] == "2")
			{
				Temporary_Day += "٢";
			}
			else if (Str_Day[index] == "3")
			{
				Temporary_Day += "٣";
			}
			else if (Str_Day[index] == "4")
			{
				Temporary_Day += "٤";
			}
			else if (Str_Day[index] == "5")
			{
				Temporary_Day += "٥";
			}
			else if (Str_Day[index] == "6")
			{
				Temporary_Day += "٦";
			}
			else if (Str_Day[index] == "7")
			{
				Temporary_Day += "٧";
			}
			else if (Str_Day[index] == "8")
			{
				Temporary_Day += "٨";
			}
			else if (Str_Day[index] == "9")
			{
				Temporary_Day += "٩";
			}
		}
		for (index = 0; index < Str_Year.length; index++)
		{
			if (Str_Year[index] == "0")
			{
				Temporary_Year += "٠";
			}
			else if (Str_Year[index] == "1")
			{
				Temporary_Year += "١";
			}
			else if (Str_Year[index] == "2")
			{
				Temporary_Year += "٢";
			}
			else if (Str_Year[index] == "3")
			{
				Temporary_Year += "٣";
			}
			else if (Str_Year[index] == "4")
			{
				Temporary_Year += "٤";
			}
			else if (Str_Year[index] == "5")
			{
				Temporary_Year += "٥";
			}
			else if (Str_Year[index] == "6")
			{
				Temporary_Year += "٦";
			}
			else if (Str_Year[index] == "7")
			{
				Temporary_Year += "٧";
			}
			else if (Str_Year[index] == "8")
			{
				Temporary_Year += "٨";
			}
			else if (Str_Year[index] == "9")
			{
				Temporary_Year += "٩";
			}
		}
		for (index = 0; index < Str_Hour.length; index++)
		{
			if (Str_Hour_24[index] == "0")
			{
				Temporary_Hour += "٠";
			}
			else if (Str_Hour_24[index] == "1")
			{
				Temporary_Hour += "١";
			}
			else if (Str_Hour_24[index] == "2")
			{
				Temporary_Hour += "٢";
			}
			else if (Str_Hour_24[index] == "3")
			{
				Temporary_Hour += "٣";
			}
			else if (Str_Hour_24[index] == "4")
			{
				Temporary_Hour += "٤";
			}
			else if (Str_Hour_24[index] == "5")
			{
				Temporary_Hour += "٥";
			}
			else if (Str_Hour_24[index] == "6")
			{
				Temporary_Hour += "٦";
			}
			else if (Str_Hour_24[index] == "7")
			{
				Temporary_Hour += "٧";
			}
			else if (Str_Hour_24[index] == "8")
			{
				Temporary_Hour += "٨";
			}
			else if (Str_Hour_24[index] == "9")
			{
				Temporary_Hour += "٩";
			}
		}
		for (index = 0; index < Str_Minute.length; index++)
		{
			if (Str_Minute[index] == "0")
			{
				Temporary_Minute += "٠";
			}
			else if (Str_Minute[index] == "1")
			{
				Temporary_Minute += "١";
			}
			else if (Str_Minute[index] == "2")
			{
				Temporary_Minute += "٢";
			}
			else if (Str_Minute[index] == "3")
			{
				Temporary_Minute += "٣";
			}
			else if (Str_Minute[index] == "4")
			{
				Temporary_Minute += "٤";
			}
			else if (Str_Minute[index] == "5")
			{
				Temporary_Minute += "٥";
			}
			else if (Str_Minute[index] == "6")
			{
				Temporary_Minute += "٦";
			}
			else if (Str_Minute[index] == "7")
			{
				Temporary_Minute += "٧";
			}
			else if (Str_Minute[index] == "8")
			{
				Temporary_Minute += "٨";
			}
			else if (Str_Minute[index] == "9")
			{
				Temporary_Minute += "٩";
			}
		}
		for (index = 0; index < Str_Second.length; index++)
		{
			if (Str_Second[index] == '0')
			{
				Temporary_Second += "٠";
			}
			else if (Str_Second[index] == "1")
			{
				Temporary_Second += "١";
			}
			else if (Str_Second[index] == "2")
			{
				Temporary_Second += "٢";
			}
			else if (Str_Second[index] == "3")
			{
				Temporary_Second += "٣";
			}
			else if (Str_Second[index] == "4")
			{
				Temporary_Second += "٤";
			}
			else if (Str_Second[index] == "5")
			{
				Temporary_Second += "٥";
			}
			else if (Str_Second[index] == "6")
			{
				Temporary_Second += "٦";
			}
			else if (Str_Second[index] == "7")
			{
				Temporary_Second += "٧";
			}
			else if (Str_Second[index] == "8")
			{
				Temporary_Second += "٨";
			}
			else if (Str_Second[index] == "9")
			{
				Temporary_Second += "٩";
			}
		}
		for (index = 0; index < Str_MilliSecond.length; index++)
		{
			if (Str_MilliSecond[index] == "0")
			{
				Temporary_MilliSecond += "٠";
			}
			else if (Str_MilliSecond[index] == "1")
			{
				Temporary_MilliSecond += "١";
			}
			else if (Str_MilliSecond[index] == "2")
			{
				Temporary_MilliSecond += "٢";
			}
			else if (Str_MilliSecond[index] == "3")
			{
				Temporary_MilliSecond += "٣";
			}
			else if (Str_MilliSecond[index] == "4")
			{
				Temporary_MilliSecond += "٤";
			}
			else if (Str_MilliSecond[index] == "5")
			{
				Temporary_MilliSecond += "٥";
			}
			else if (Str_MilliSecond[index] == "6")
			{
				Temporary_MilliSecond += "٦";
			}
			else if (Str_MilliSecond[index] == "7")
			{
				Temporary_MilliSecond += "٧";
			}
			else if (Str_MilliSecond[index] == "8")
			{
				Temporary_MilliSecond += "٨";
			}
			else if (Str_MilliSecond[index] == "9")
			{
				Temporary_MilliSecond += "٩";
			}
		}
		Str_Day = Temporary_Day;
		Str_Year = Temporary_Year;
		Str_Hour = Temporary_Hour;
		Str_Minute = Temporary_Minute;
		Str_Second = Temporary_Second;
		Str_MilliSecond = Temporary_MilliSecond;
		DaySchedule = Str_Title + " " + Str_Day + " " + Str_Month + " " + Str_Year;
	}
	else if (LanguageChannel == 13)
	{
		DaySchedule = Str_Title + "ที่ " + Str_Day + " " + Str_Month + " " + Str_Year;
	}
	else if (LanguageChannel == 14)
	{
		DaySchedule = Str_Year + "년 " + Str_Month + " " + Str_Day + "일 " + " " + Str_Title;
	}
	else if (LanguageChannel == 15)
	{
		DaySchedule = Str_Year + "年 " + Str_Month + " " + Str_Day + "日 " + Str_Title;
	}
	else if (LanguageChannel == 16 || LanguageChannel == 17)
	{
		DaySchedule = Str_Title + " " + Str_Month + " " + Str_Day + ", " + Str_Year;
	}
	$("Time1").innerText = ":";
	$("Time3").innerText = ":";
	$("Time5").innerText = ":";
	if (Is24)
	{
		$("Time0").innerText = Str_Hour_24;
	}
	else
	{
		$("Time0").innerText = Str_Hour;
		$("Time7").innerText = Category;
	}
	$("Time2").innerText = Str_Minute;
	$("Time4").innerText = Str_Second;
	$("Time6").innerText = Str_MilliSecond;
	$("Calendar").innerText = DaySchedule;
	var T = setTimeout(Timer, 0);
}

var Update = function()
{
	$("Font Header Selection").style.fontFamily = GetFont(parseInt($("Font Header Selection").value));
	$("Font Body Selection").style.fontFamily = GetFont(parseInt($("Font Body Selection").value));
	$("Font Footer Selection").style.fontFamily = GetFont(parseInt($("Font Footer Selection").value));
	var T = setTimeout(Update, 0);
}

window.onload = function()
{
	LoadFile();
	$("Save_Button").addEventListener("click", ChangeBackground);
	Timer();
	ColorFunction();
	Language();
	Update();
}

var ChangeBackground = function()
{
	document.body.style.backgroundImage = "";
	var BGCategory = $$("Background_Category");
	var BGCategoryValue = "";
	for (index = 0; index < BGCategory.length; index++)
	{
		if (BGCategory[index].checked)
		{
			BGCategoryValue = BGCategory[index].value;
		}
	}
	if (BGCategoryValue == "Basic")
	{
		ColorChannel = 0;
		var Modes = $$("Modes");
		var ModesValue = "";
		for (index = 0; index < Modes.length; index++)
		{
			if (Modes[index].checked)
			{
				ModesValue = Modes[index].value;
			}
		}
		if (ModesValue == "Light Mode")
		{
			BGColorValue = '#ffffff';
			FGColorValue = '#000000';
			BGRed = 255;
			BGGreen = 255;
			BGBlue = 255;
			FGRed = 0;
			FGGreen = 0;
			FGBlue = 0;
		}
		else
		{
			BGColorValue = '#000000';
			FGColorValue = '#ffffff';
			BGRed = 0;
			BGGreen = 0;
			BGBlue = 0;
			FGRed = 255;
			FGGreen = 255;
			FGBlue = 255;
		}
	}
	else if (BGCategoryValue == "Customized")
	{
		ColorChannel = 0;
		BGColorValue = $("Background Color").value;
		FGColorValue = $("Foreground Color").value;
	}
	else if (BGCategoryValue == "Rainbow")
	{
		ColorChannel = 1;
		var Speed = $("Rainbow Speed").value;
		switch (Speed)
		{
			case "0":
				RainbowSpeed = .1;
				break;
			case "1":
				RainbowSpeed = .5;
				break;
			case "2":
				RainbowSpeed = 1;
				break;
			case "3":
				RainbowSpeed = 5;
				break;
			case "4":
				RainbowSpeed = 15;
				break;
		}
	}
	else if (BGCategoryValue == "Image")
	{
		ColorChannel = 2;
		FGColorValue0 = $("Foreground Color 0").value;
		BGColorValue0 = $("Background Color 0").value;
		if ($("Image Selection").value == 0)
		{
			document.body.style.backgroundImage = 'url("LuisStuff/Comanchitas.gif")';
		}
		else if ($("Image Selection").value == 1)
		{
			document.body.style.backgroundImage = 'url("LuisStuff/Espurr.gif")';
		}
		else if ($("Image Selection").value == 2)
		{
			document.body.style.backgroundImage = 'url("LuisStuff/Skitty.gif")';
		}
		else if ($("Image Selection").value == 3)
		{
			document.body.style.backgroundImage = 'url("LuisStuff/Annabella.gif")';
		}
	}
	LanguageChannel = $("Language List").value;
	Language();
	IsBGChange = true;
	for (index = 0; index < $$$("TEXT").length; index++)
	{
		$$$("TEXT")[index].style.backgroundColor = "";
		$$$("TEXT")[index].style.color = "";
	}
	SetFont();
	SetBorder();
	WriteFile();
}

var ColorFunction = function()
{
	if (ColorChannel == 0)
	{
		if (IsBGChange)
		{
			IsBGChange = false;
			document.body.style.backgroundColor = BGColorValue;
			document.body.style.color = FGColorValue;
		}
	}
	else if (ColorChannel == 1)
	{
		if (IsBGChange)
		{
			IsBGChange = false;
			BGRed = 255;
			BGGreen = 0;
			BGBlue = 0;
			FGRed = 0;
			FGGreen = 255;
			FGBlue = 255;
		}
		if (BGRed == 255 && BGGreen < 255 && BGBlue == 0)
		{
			BGGreen += RainbowSpeed;
		}
		else if (BGRed > 0 && BGGreen == 255 && BGBlue == 0)
		{
			BGRed -= RainbowSpeed;
		}
		else if (BGRed == 0 && BGGreen == 255 && BGBlue < 255)
		{
			BGBlue += RainbowSpeed;
		}
		else if (BGRed == 0 && BGGreen > 0 && BGBlue == 255)
		{
			BGGreen -= RainbowSpeed;
		}
		else if (BGRed < 255 && BGGreen == 0 && BGBlue == 255)
		{
			BGRed += RainbowSpeed;
		}
		else if (BGRed == 255 && BGGreen == 0 && BGBlue > 0)
		{
			BGBlue -= RainbowSpeed;
		}
		if (FGRed == 255 && FGGreen < 255 && FGBlue == 0)
		{
			FGGreen += RainbowSpeed;
		}
		else if (FGRed > 0 && FGGreen == 255 && FGBlue == 0)
		{
			FGRed -= RainbowSpeed;
		}
		else if (FGRed == 0 && FGGreen == 255 && FGBlue < 255)
		{
			FGBlue += RainbowSpeed;
		}
		else if (FGRed == 0 && FGGreen > 0 && FGBlue == 255)
		{
			FGGreen -= RainbowSpeed;
		}
		else if (FGRed < 255 && FGGreen == 0 && FGBlue == 255)
		{
			FGRed += RainbowSpeed;
		}
		else if (FGRed == 255 && FGGreen == 0 && FGBlue > 0)
		{
			FGBlue -= RainbowSpeed;
		}
		document.body.style.backgroundColor = 'rgb(' + BGRed + ',' + BGGreen + ',' + BGBlue + ')';
		document.body.style.color = 'rgb(' + FGRed + ',' + FGGreen + ',' + FGBlue + ')';
	}
	else if (ColorChannel == 2)
	{
		if (IsBGChange)
		{
			IsBGChange = false;
			for (index = 0; index < $$$("TEXT").length; index++)
			{
				$$$("TEXT")[index].style.backgroundColor = BGColorValue0;
				$$$("TEXT")[index].style.color = FGColorValue0;
			}
		}
	}
	var t = setTimeout(ColorFunction, 0);
}

var SetFont = function()
{
	FontHeader = parseInt($("Font Header Selection").value);
	FontBody = parseInt($("Font Body Selection").value);
	FontFooter = parseInt($("Font Footer Selection").value);
	$("Header").style.fontFamily = GetFont(FontHeader);
	$("Main").style.fontFamily = GetFont(FontBody);
	$("Footer").style.fontFamily = GetFont(FontFooter);
	$("Rainbow Speed").style.fontFamily = GetFont(FontFooter);
	$("Image Selection").style.fontFamily = GetFont(FontFooter);
	$("Language List").style.fontFamily = GetFont(FontFooter);
	$("Header Border Selection").style.fontFamily = GetFont(FontFooter);
	$("Body Border Selection").style.fontFamily = GetFont(FontFooter);
	$("Save_Button").style.fontFamily = GetFont(FontFooter);
}

var GetFont = function(Numb)
{
	var FontType = "";
	switch(parseInt(Numb))
	{
		case 0:
			FontType = "Arial, Sans-Serif";
			break;
		case 1:
			FontType = "Brush Script MT, Cursive";
			break;
		case 2:
			FontType = "Copperplate, Fantasy";
			break;
		case 3:
			FontType = "Courier New, Monospace";
			break;
		case 4:
			FontType = "Garamond, Serif";
			break;
		case 5:
			FontType = "Georgia, Serif";
			break;
		case 6:
			FontType = "Helvetica, Sans-Serif";
			break;
		case 7:
			FontType = "Lucida Console, Monospace";
			break;
		case 8:
			FontType = "Lucida Handwriting, Cursive";
			break;
		case 9:
			FontType = "Monaco, Monospace";
			break;
		case 10:
			FontType = "Papyrus, Fantasy";
			break;
		case 11:
			FontType = "Times New Roman, Serif";
			break;
		case 12:
			FontType = "Verdana, Sans-Serif";
			break;
	}
	return FontType;
}

var SetBorder = function()
{
	$("Header").style.borderStyle = GetBorder($("Header Border Selection").value);
	$("Information").style.borderStyle = GetBorder($("Body Border Selection").value);
}

var GetBorder = function(Numb)
{
	var BorderType = "";
	switch(parseInt(Numb))
	{
		case 0:
			BorderType = "solid";
			break;
		case 1:
			BorderType = "double";
			break;
		case 2:
			BorderType = "groove";
			break;
		case 3:
			BorderType = "ridge";
			break;
		case 4:
			BorderType = "dotted";
			break;
		case 5:
			BorderType = "inset";
			break;
		case 6:
			BorderType = "outset";
			break;
		case 7:
			BorderType = "dash";
			break;
	}
	return BorderType;
}

var Language = function()
{
	var TitleName = "";
	var HTML_Description_A = "";
	var HTML_Description_B = "";
	var HTML_Description_C = "";
	var HTML_Options = "";
	var HTML_Colors = "";
	var HTML_Image = "";
	var HTML_Basic = "";
	var HTML_Customize = "";
	var HTML_Rainbow = "";
	var HTML_Light_Mode = "";
	var HTML_Dark_Mode = "";
	var HTML_Foreground = "";
	var HTML_Background = "";
	var HTML_Speed = "";
	var HTML_Very_Slow = "";
	var HTML_Slow = "";
	var HTML_Medium = "";
	var HTML_Fast = "";
	var HTML_Very_Fast = "";
	var HTML_Comanchitas = "";
	var HTML_Espurr = "";
	var HTML_Skitty = "";
	var HTML_Annabella = "";
	var HTML_Language = "";
	var HTML_Font = "";
	var HTML_FontHeader = "";
	var HTML_FontBody = "";
	var HTML_FontFooter = "";
	var HTML_Arial = "";
	var HTML_Brush_Script_MT = "";
	var HTML_Copperplate = "";
	var HTML_Courier_New = "";
	var HTML_Garamond = "";
	var HTML_Georgia = "";
	var HTML_Helvetica = "";
	var HTML_Lucida_Console = "";
	var HTML_Lucida_Handwriting = "";
	var HTML_Monaco = "";
	var HTML_Papyrus = "";
	var HTML_Times_New_Roman = "";
	var HTML_Verdana = "";
	var HTML_Header_Border = "";
	var HTML_Body_Border = "";
	var HTML_Solid = "";
	var HTML_Double = "";
	var HTML_Groove = "";
	var HTML_Ridge = "";
	var HTML_Dotted = "";
	var HTML_Inset = "";
	var HTML_Outset = "";
	var HTML_Dash = "";
	
	var HTML_Save = "";
	if (LanguageChannel == 0) // GERMAN
	{
		TitleName = "Über mich (Ludwig)";
		HTML_Description_A = "Hallo! Ich bin Ludwig Cerrillo und studiere Informatik im Hauptfach. Ich wurde am frühen Freitagabend, dem 21. September 1990, geboren. Ich habe zwei Brüder und eine Schwester. Ich habe auch eine Katze, eine weibliche Bengal-Tabby namens Comanchitas. Ich bin elf Mal umgezogen, weil mein Vater bei der United States Marine Corp. gedient hat. Ich habe einmal außerhalb der Vereinigten Staaten (in Panama) gelebt. Der Grund, warum ich mich für Informatik entschieden habe, ist, dass ich von Robotik, Spielen, Technologie, dem Lernen, wie man eine Webseite gestaltet, dem Bau von Desktop-Computern und anderen Funktionen im Zusammenhang mit der Informationstechnologie fasziniert war. Ich studiere derzeit Informatik an der University of Houston-Downtown im Post-Bachelor-Studium. Während des Unterrichts entwickelte ich eine Faszination für weitere Informatikkategorien wie Robotik, Spieledesign und Internet der Dinge (bei letzterem genieße ich es, Dinge zu erschaffen, aber das Einzige, was mich sehr nervös macht, ist der Teil mit der Elektrizität). Mein aktuelles Ziel ist es, Kurse zu belegen oder zu wiederholen, um die Mindestanforderungen für eine erfolgreiche Einschreibung in einen Masterstudiengang zu erfüllen. Ich arbeite derzeit über Nacht auf dem Gelände von Federal Express (FedEx) als Paketabfertiger. Der Grund, warum ich es vorziehe, über Nacht zu arbeiten, liegt darin, dass es auf dem Weg zur Arbeit nicht nur sehr wenig Verkehr gibt, sondern dass der Arbeitsplatz auch ruhiger und reibungsloser ist. Ich freue mich darauf, einen Job als Informatiker im Hauptfach zu suchen. Zu meinen produktiven Hobbys gehören Programmieren und Spieledesign. Außerdem hier die Listen der Programmiersprachen, mit denen ich bestens vertraut bin:";
		HTML_Description_B = "Ich möchte Zuschauern wie Ihnen eine Website vorstellen. Die Website ist w3schools (";
		HTML_Description_C = "). Diese Website ist nützlich, wenn Sie weitere Programmiersprachen lernen und üben möchten. Es gibt auch einen Programmierspielplatz, auf dem Sie alles, was Sie möchten, frei programmieren können.";
	    HTML_Options = "Optionen";
	    HTML_Colors = "Fabren";
		HTML_Image = "Bild";
		HTML_Basic = "Basic";
		HTML_Customize = "Anpassen";
		HTML_Rainbow = "Regenbogen";
		HTML_Light_Mode = "Lichtmodus";
		HTML_Dark_Mode = "Dunkelmodus";
		HTML_Foreground = "Vordergrund";
		HTML_Background = "Hintergrund";
		HTML_Speed = "Geschwindigkeit";
		HTML_Very_Slow = "Sehr Langsam";
		HTML_Slow = "Langsam";
		HTML_Medium = "Mittel";
		HTML_Fast = "Schnell";
		HTML_Very_Fast = "Sehr Schnell";
		HTML_Comanchitas = "Comanchitas";
		HTML_Espurr = "Psiau";
		HTML_Skitty = "Skitty";
		HTML_Annabella = "Annabella";
		HTML_Language = "Sprache";
		HTML_Font = "Schriftart";
		HTML_FontHeader = "Schriftart-Kopfzeile";
		HTML_FontBody = "Schriftkörper";
		HTML_FontFooter = "Schriftart-Fußzeile";
		HTML_Arial = "Arial";
		HTML_Brush_Script_MT = "Pinselskript MT";
		HTML_Copperplate = "Kupferplatte";
		HTML_Courier_New = "Kurier Neu";
		HTML_Garamond = "Garamond";
		HTML_Georgia = "Georgia";
		HTML_Helvetica = "Helvetica";
		HTML_Lucida_Console = "Lucida-Konsole";
		HTML_Lucida_Handwriting = "Lucida-Handschrift";
		HTML_Monaco = "Monacho";
		HTML_Papyrus = "Papyrus";
		HTML_Times_New_Roman = "Mal Neuer Römischer";
		HTML_Verdana = "Verdana";
		HTML_Header_Border = "";
		HTML_Body_Border = "";
		HTML_Solid = "";
		HTML_Double = "";
		HTML_Groove = "";
		HTML_Ridge = "";
		HTML_Dotted = "";
		HTML_Inset = "";
		HTML_Outset = "";
		HTML_Dash = "";
		HTML_Save = "Speichern";
	}
	else if (LanguageChannel == 1) // ENGLISH
	{
		TitleName = "About Me (Luis)";
		HTML_Description_A = "Hi! I am Luis Cerrillo and I am a Computer Science major. I was born on the early evening of Friday, September 21, 1990. I have two brothers and a sister. I also have a cat, a female Bengal tabby, named Comanchitas. I moved 11 times, because my father served in the United States Marine Corp. I once lived outside the United States (in Panama). The reason I chose computer science is because I was fascinated with robotics, gaming, technology, learning how to design a web page, building desktop computers and other Information Technology-related features. I am currently a student at the University of Houston-Downtown as a Computer Science post-bachelor. While taking classes, I started developing fascination for more computer science categories, such as Robotics, Game Design and Internet of Things (for the latter, I enjoy creating things, but the only thing that gets me very nervous is the electricity part). My current aim is to take or redo classes in order to meet the minimum requirements to successfully enroll in a master’s program. I currently work overnight in Federal Express (FedEx) Grounds as a package handler. The reason why I prefer working overnight is because not only is there very little traffic when I am driving to work, but the workplace is rather calmer and smoother. I look forward to looking for a job as a computer scientist as a major. My productive hobbies include programming and game-designing. In addition, here are the lists of the programming languages I am very familiar with:";
		HTML_Description_B = "I would like to introduce viewers like you to a website. The website is w3schools (";
		HTML_Description_C = "). This website is useful should you want to learn and practice more programming languages. It also has a coding playground, where you can freely code anything you like.";
	    HTML_Options = "Options";
	    HTML_Colors = "Colo(u)rs";
		HTML_Image = "Image";
		HTML_Basic = "Basic";
		HTML_Customize = "Customize";
		HTML_Rainbow = "Rainbow";
		HTML_Light_Mode = "Light Mode";
		HTML_Dark_Mode = "Dark Mode";
		HTML_Foreground = "Foreground";
		HTML_Background = "Background";
		HTML_Speed = "Speed";
		HTML_Very_Slow = "Very Slow";
		HTML_Slow = "Slow";
		HTML_Medium = "Medium";
		HTML_Fast = "Fast";
		HTML_Very_Fast = "Very Fast";
		HTML_Comanchitas = "Comanchitas";
		HTML_Espurr = "Espurr";
		HTML_Skitty = "Skitty";
		HTML_Annabella = "Annabella";
		HTML_Language = "Language";
		HTML_Font = "Font";
		HTML_FontHeader = "Header";
		HTML_FontBody = "Body";
		HTML_FontFooter = "Footer";
		HTML_Arial = "Arial";
		HTML_Brush_Script_MT = "Brush Script MT";
		HTML_Copperplate = "Copperplate";
		HTML_Courier_New = "Courier New";
		HTML_Garamond = "Garamond";
		HTML_Georgia = "Georgia";
		HTML_Helvetica = "Helvetica";
		HTML_Lucida_Console = "Lucida Console";
		HTML_Lucida_Handwriting = "Lucida Handwriting";
		HTML_Monaco = "Monaco";
		HTML_Papyrus = "Papyrus";
		HTML_Times_New_Roman = "Times New Roman";
		HTML_Verdana = "Verdana";
		HTML_Header_Border = "Header Border";
		HTML_Body_Border = "Body Border";
		HTML_Solid = "Solid";
		HTML_Double = "Double";
		HTML_Groove = "Groove";
		HTML_Ridge = "Ridge";
		HTML_Dotted = "Dotted";
		HTML_Inset = "Inset";
		HTML_Outset = "Outset";
		HTML_Dash = "Dash";
		HTML_Save = "Save";
	}
	else if (LanguageChannel == 2) // SPANISH
	{
		TitleName = "Sobre mi (Luis)";
		HTML_Description_A = "¡Hola! Soy Luis Cerrillo y soy estudiante de Informática. Nací la tarde del viernes 21 de septiembre de 1990. Tengo dos hermanos y una hermana. También tengo una gata, una atigrada bengalí, llamada Comanchitas. Me mudé 11 veces porque mi padre sirvió en la Marina de los Estados Unidos. Una vez viví fuera de los Estados Unidos (en Panamá). La razón por la que elegí la informática es porque me fascinaban la robótica, los juegos, la tecnología, aprender a diseñar una página web, construir computadoras de escritorio y otras funciones relacionadas con la tecnología de la información. Actualmente soy estudiante de la Universidad de Houston-Downtown como post-licenciatura en Ciencias de la Computación. Mientras tomaba clases, comencé a desarrollar fascinación por más categorías de informática, como Robótica, Diseño de Juegos e Internet de las Cosas (para este último, disfruto crear cosas, pero lo único que me pone muy nervioso es la parte de electricidad). Mi objetivo actual es tomar o rehacer clases para cumplir con los requisitos mínimos para inscribirme con éxito en un programa de maestría. Actualmente trabajo durante la noche en Federal Express (FedEx) Grounds como manipulador de paquetes. La razón por la que prefiero trabajar durante la noche es porque no sólo hay muy poco tráfico cuando conduzco al trabajo, sino que el lugar de trabajo es bastante más tranquilo y fluido. Espero buscar un trabajo como informático como especialidad. Mis pasatiempos productivos incluyen la programación y el diseño de juegos. Además, aquí están las listas de los lenguajes de programación con los que estoy muy familiarizado:";
		HTML_Description_B = "Me gustaría presentarles un sitio web a espectadores como usted. El sitio web es w3schools (";
		HTML_Description_C = "). Este sitio web es útil si desea aprender y practicar más lenguajes de programación. También tiene un área de juegos de codificación, donde puedes codificar libremente lo que quieras.";
	    HTML_Options = "Opciones";
	    HTML_Colors = "Colores";
		HTML_Image = "Imagen";
		HTML_Basic = "Básico";
		HTML_Customize = "Personalizar";
		HTML_Rainbow = "Arcoíris";
		HTML_Light_Mode = "Modo De Luce";
		HTML_Dark_Mode = "Modo Oscuro";
		HTML_Foreground = "Primer Plano";
		HTML_Background = "Fondo";
		HTML_Speed = "Velocidad";
		HTML_Very_Slow = "Muy Lento";
		HTML_Slow = "Lento";
		HTML_Medium = "Medio";
		HTML_Fast = "Rápido";
		HTML_Very_Fast = "Muy Rápido";
		HTML_Comanchitas = "Comanchitas";
		HTML_Espurr = "Esperánza";
		HTML_Skitty = "Skitty";
		HTML_Annabella = "Annabella";
		HTML_Language = "Idioma";
		HTML_Font = "Fuente";
		HTML_FontHeader = "Cabecera de Fuente";
		HTML_FontBody = "Cuerpo de Fuente";
		HTML_FontFooter = "Pie de Fuente";
		HTML_Arial = "Arial";
		HTML_Brush_Script_MT = "Guión de Pincel MT";
		HTML_Copperplate = "Plato de Cobre";
		HTML_Courier_New = "Mensajero Nuevo";
		HTML_Garamond = "Garamond";
		HTML_Georgia = "Georgia";
		HTML_Helvetica = "Helvética";
		HTML_Lucida_Console = "Consola Lúcida";
		HTML_Lucida_Handwriting = "Escritura Lúcida";
		HTML_Monaco = "Mónaco";
		HTML_Papyrus = "Papiro";
		HTML_Times_New_Roman = "Tiempos Nuevos Romanos";
		HTML_Verdana = "Verdana";
		HTML_Header_Border = "";
		HTML_Body_Border = "";
		HTML_Solid = "";
		HTML_Double = "";
		HTML_Groove = "";
		HTML_Ridge = "";
		HTML_Dotted = "";
		HTML_Inset = "";
		HTML_Outset = "";
		HTML_Dash = "";
		HTML_Save = "Guardar";
	}
	else if (LanguageChannel == 3) // FRENCH
	{
		TitleName = "À propos de moi (Luis)";
		HTML_Description_A = "Salut! Je m'appelle Luis Cerrillo et je suis spécialisé en informatique. Je suis né en début de soirée le vendredi 21 septembre 1990. J'ai deux frères et une sœur. J'ai aussi un chat, une femelle Bengal tabby, nommée Comanchitas. J'ai déménagé 11 fois parce que mon père servait dans le Corps des Marines des États-Unis. J'ai vécu autrefois en dehors des États-Unis (au Panama). La raison pour laquelle j'ai choisi l'informatique est parce que j'étais fasciné par la robotique, les jeux, la technologie, l'apprentissage de la conception d'une page Web, la construction d'ordinateurs de bureau et d'autres fonctionnalités liées aux technologies de l'information. Je suis actuellement étudiant à l'Université de Houston-Downtown en post-licence en informatique. En suivant des cours, j'ai commencé à développer une fascination pour des domaines plus informatiques, comme la robotique, le game design et l'Internet des objets (pour ces derniers, j'aime créer des choses, mais la seule chose qui me rend très nerveux est la partie électricité). Mon objectif actuel est de suivre ou refaire des cours afin de répondre aux exigences minimales pour réussir mon inscription en master. Je travaille actuellement de nuit à Federal Express (FedEx) Grounds en tant que gestionnaire de colis. La raison pour laquelle je préfère travailler la nuit est que non seulement il y a très peu de circulation lorsque je me rends au travail en voiture, mais que le lieu de travail est plutôt plus calme et plus fluide. J'ai hâte de chercher un emploi d'informaticien en tant que majeure. Mes passe-temps productifs incluent la programmation et la conception de jeux. De plus, voici les listes des langages de programmation que je connais très bien :";
		HTML_Description_B = "J'aimerais présenter un site Web à des téléspectateurs comme vous. Le site Web est w3schools (";
		HTML_Description_C = "). Ce site Web est utile si vous souhaitez apprendre et pratiquer davantage de langages de programmation. Il dispose également d’un terrain de jeu de codage, où vous pouvez coder librement tout ce que vous voulez.";
	    HTML_Options = "Options";
	    HTML_Colors = "Couleur";
		HTML_Image = "Image";
		HTML_Basic = "Basique";
		HTML_Customize = "Personnaliser";
		HTML_Rainbow = "Arc-En-Ciel";
		HTML_Light_Mode = "Mode Lumière";
		HTML_Dark_Mode = "Mode Sombre";
		HTML_Foreground = "Premier Plan";
		HTML_Background = "Arrière-Plan";
		HTML_Speed = "Vitesse";
		HTML_Very_Slow = "Très Lent";
		HTML_Slow = "Lent";
		HTML_Medium = "Moyen";
		HTML_Fast = "Rapide";
		HTML_Very_Fast = "Très Rapide";
		HTML_Comanchitas = "Comanchitas";
		HTML_Espurr = "Psystigri";
		HTML_Skitty = "Skitty";
		HTML_Annabella = "Annabelle";
		HTML_Language = "Langue";
		HTML_Font = "Police de Caractère";
		HTML_FontHeader = "En-Tête de Police";
		HTML_FontBody = "Corps de Police";
		HTML_FontFooter = "Pied de Page de Police";
		HTML_Arial = "Arial";
		HTML_Brush_Script_MT = "Script de Pinceau MT";
		HTML_Copperplate = "Plaque de Cuivre";
		HTML_Courier_New = "Courrier Nouveau";
		HTML_Garamond = "Garamond";
		HTML_Georgia = "Géorgie";
		HTML_Helvetica = "Helvétique";
		HTML_Lucida_Console = "Console Lucida";
		HTML_Lucida_Handwriting = "Écriture Manuscrite de Lucida";
		HTML_Monaco = "Monaco";
		HTML_Papyrus = "Papyrus";
		HTML_Times_New_Roman = "Fois Nouveau Romain";
		HTML_Verdana = "Verdane";
		HTML_Header_Border = "";
		HTML_Body_Border = "";
		HTML_Solid = "";
		HTML_Double = "";
		HTML_Groove = "";
		HTML_Ridge = "";
		HTML_Dotted = "";
		HTML_Inset = "";
		HTML_Outset = "";
		HTML_Dash = "";
		HTML_Save = "Enregistrer";
	}
	else if (LanguageChannel == 4) // ITALIAN
	{
		TitleName = "Informazioni su di me (Luigi)";
		HTML_Description_A = "CIAO! Mi chiamo Luigi Cerrillo e mi specializzo in Informatica. Sono nato nella prima serata di venerdì 21 settembre 1990. Ho due fratelli e una sorella. Ho anche un gatto, una femmina di soriano del Bengala, di nome Comanchitas. Mi sono trasferito 11 volte, perché mio padre prestava servizio nella Marina degli Stati Uniti. Una volta vivevo fuori dagli Stati Uniti (a Panama). Il motivo per cui ho scelto l'informatica è perché ero affascinato dalla robotica, dai giochi, dalla tecnologia, dall'imparare a progettare una pagina web, dalla costruzione di computer desktop e da altre funzionalità legate alla tecnologia dell'informazione. Attualmente sono uno studente post-laurea in Informatica presso l'Università di Houston-Downtown. Mentre frequentavo le lezioni, ho iniziato a sviluppare interesse per più categorie di informatica, come Robotica, Game Design e Internet of Things (per quest'ultimo, mi piace creare cose, ma l'unica cosa che mi rende molto nervoso è la parte relativa all'elettricità). Il mio obiettivo attuale è seguire o ripetere le lezioni per soddisfare i requisiti minimi per iscrivermi con successo a un programma di master. Attualmente lavoro di notte presso la Federal Express (FedEx) Grounds come addetto ai pacchi. Il motivo per cui preferisco lavorare di notte è perché non solo c'è pochissimo traffico quando vado al lavoro, ma il posto di lavoro è piuttosto più tranquillo e agevole. Non vedo l'ora di cercare lavoro come informatico come specialista. I miei hobby produttivi includono la programmazione e la progettazione di giochi. Inoltre, ecco gli elenchi dei linguaggi di programmazione con cui ho molta familiarità:";
		HTML_Description_B = "Vorrei presentare agli spettatori come te un sito web. Il sito web è w3schools (";
		HTML_Description_C = "). Questo sito Web è utile se desideri imparare e praticare più linguaggi di programmazione. Ha anche un parco giochi di codifica, dove puoi programmare liberamente tutto ciò che ti piace.";
	    HTML_Options = "Opzioni";
	    HTML_Colors = "Colori";
		HTML_Image = "Immagine";
		HTML_Basic = "Di Base";
		HTML_Customize = "Personalizzare";
		HTML_Rainbow = "Arcobaleno";
		HTML_Light_Mode = "Modalità Luce";
		HTML_Dark_Mode = "Modalità Scura";
		HTML_Foreground = "Primo Piano";
		HTML_Background = "Sfondo";
		HTML_Speed = "Velocità";
		HTML_Very_Slow = "Molto Lento";
		HTML_Slow = "Lento";
		HTML_Medium = "Medio";
		HTML_Fast = "Veloce";
		HTML_Very_Fast = "Molto Veloce";
		HTML_Comanchitas = "Comanchitas";
		HTML_Espurr = "Speranza";
		HTML_Skitty = "Skitty";
		HTML_Annabella = "Annabella";
		HTML_Language = "Lingua";
		HTML_Font = "Carattere";
		HTML_FontHeader = "Intestazione Carattere";
		HTML_FontBody = "Corpo del Carattere";
		HTML_FontFooter = "Piè di Pagina del Carattere";
		HTML_Arial = "Arial";
		HTML_Brush_Script_MT = "Pennello Script MT";
		HTML_Copperplate = "Piastra di Rame";
		HTML_Courier_New = "Corriere Nuovo";
		HTML_Garamond = "Garamond";
		HTML_Georgia = "Georgia";
		HTML_Helvetica = "Helvetica";
		HTML_Lucida_Console = "Consolle di Lucida";
		HTML_Lucida_Handwriting = "Scrittura a Mano di Lucida";
		HTML_Monaco = "Monaco";
		HTML_Papyrus = "Papiro";
		HTML_Times_New_Roman = "Volte Nuovo Romano";
		HTML_Verdana = "Verdana";
		HTML_Header_Border = "";
		HTML_Body_Border = "";
		HTML_Solid = "";
		HTML_Double = "";
		HTML_Groove = "";
		HTML_Ridge = "";
		HTML_Dotted = "";
		HTML_Inset = "";
		HTML_Outset = "";
		HTML_Dash = "";
		HTML_Save = "Salva";
	}
	else if (LanguageChannel == 5) // PORTUGUESE
	{
		TitleName = "Sobre mim (Luis)";
		HTML_Description_A = "Oi! Meu nome é Luis Cerrillo e sou formado em Ciência da Computação. Nasci no início da noite de sexta-feira, 21 de setembro de 1990. Tenho dois irmãos e uma irmã. Também tenho uma gata, uma fêmea malhada de Bengala, chamada Comanchitas. Mudei-me 11 vezes porque meu pai serviu na Corporação de Fuzileiros Navais dos Estados Unidos. Já morei fora dos Estados Unidos (no Panamá). Escolhi ciência da computação porque era fascinado por robótica, jogos, tecnologia, aprender a projetar uma página da web, construir computadores desktop e outros recursos relacionados à tecnologia da informação. Atualmente sou estudante na Universidade de Houston-Downtown como pós-bacharelado em Ciência da Computação. Durante as aulas, comecei a desenvolver fascínio por mais categorias da ciência da computação, como Robótica, Game Design e Internet das Coisas (nessa última, gosto de criar coisas, mas a única coisa que me deixa muito nervoso é a parte da eletricidade). Meu objetivo atual é fazer ou refazer aulas para atender aos requisitos mínimos para ingressar com sucesso em um programa de mestrado. Atualmente trabalho durante a noite na Federal Express (FedEx) Grounds como manipulador de pacotes. A razão pela qual prefiro trabalhar durante a noite é porque não só há muito pouco trânsito quando dirijo para o trabalho, mas o local de trabalho é bastante mais calmo e tranquilo. Estou ansioso para procurar um emprego como cientista da computação com especialização. Meus hobbies produtivos incluem programação e design de jogos. Além disso, aqui estão as listas das linguagens de programação com as quais estou familiarizado:";
		HTML_Description_B = "Gostaria de apresentar um site a espectadores como você. O site é w3schools (";
		HTML_Description_C = "). Este site é útil caso você queira aprender e praticar mais linguagens de programação. Ele também possui um playground de codificação, onde você pode codificar livremente o que quiser.";
	    HTML_Options = "Opções";
	    HTML_Colors = "Cores";
		HTML_Image = "Imagem";
		HTML_Basic = "Básico";
		HTML_Customize = "Customizar";
		HTML_Rainbow = "Arco-Íris";
		HTML_Light_Mode = "Modo De Luce";
		HTML_Dark_Mode = "Modo Escuro";
		HTML_Foreground = "Primeiro Plano";
		HTML_Background = "Fundo";
		HTML_Speed = "Velocidade";
		HTML_Very_Slow = "Muito Lento";
		HTML_Slow = "Lento";
		HTML_Medium = "Médio";
		HTML_Fast = "Rápido";
		HTML_Very_Fast = "Muito Rápido";
		HTML_Comanchitas = "Comanchitas";
		HTML_Espurr = "Esperança";
		HTML_Skitty = "Skitty";
		HTML_Annabella = "Annabella";
		HTML_Language = "Linguagem";
		HTML_Font = "Fonte";
		HTML_FontHeader = "Cabeçalho da Fonte";
		HTML_FontBody = "Corpo da Fonte";
		HTML_FontFooter = "Rodapé da Fonte";
		HTML_Arial = "Arial";
		HTML_Brush_Script_MT = "Pincel Script MT";
		HTML_Copperplate = "Placa de Cobre";
		HTML_Courier_New = "Correio Novo";
		HTML_Garamond = "Garamond";
		HTML_Georgia = "Geórgia";
		HTML_Helvetica = "Helvética";
		HTML_Lucida_Console = "Consola de Lucida";
		HTML_Lucida_Handwriting = "Caligrafia de Lucida";
		HTML_Monaco = "Mônaco";
		HTML_Papyrus = "Papiro";
		HTML_Times_New_Roman = "Vezes Novo Romano";
		HTML_Verdana = "Verdana";
		HTML_Header_Border = "";
		HTML_Body_Border = "";
		HTML_Solid = "";
		HTML_Double = "";
		HTML_Groove = "";
		HTML_Ridge = "";
		HTML_Dotted = "";
		HTML_Inset = "";
		HTML_Outset = "";
		HTML_Dash = "";
		HTML_Save = "Salvar";

	}
	else if (LanguageChannel == 6) // VIETNAMESE
	{
		TitleName = "Giới thiệu về tôi (Luis)";
		HTML_Description_A = "CHÀO! Tôi là Luis Cerrillo và tôi là sinh viên chuyên ngành Khoa học Máy tính. Tôi sinh vào đầu buổi tối thứ sáu ngày 21 tháng 9 năm 1990. Tôi có hai anh trai và một em gái. Tôi cũng có một con mèo, một con mèo mướp Bengal cái, tên là Comanchitas. Tôi đã chuyển đi 11 lần vì cha tôi phục vụ trong Thủy quân lục chiến Hoa Kỳ. Tôi đã từng sống bên ngoài Hoa Kỳ (ở Panama). Lý do tôi chọn khoa học máy tính là vì tôi đam mê robot, chơi game, công nghệ, học cách thiết kế trang web, chế tạo máy tính để bàn và các tính năng khác liên quan đến Công nghệ thông tin. Tôi hiện đang là sinh viên tại Đại học Houston-Downtown với tư cách là sinh viên sau cử nhân Khoa học Máy tính. Trong khi tham gia các lớp học, tôi bắt đầu phát triển niềm đam mê với nhiều danh mục khoa học máy tính hơn, chẳng hạn như Robotics, Thiết kế trò chơi và Internet vạn vật (đối với lĩnh vực sau, tôi thích sáng tạo mọi thứ, nhưng điều duy nhất khiến tôi rất lo lắng là phần điện). Mục tiêu hiện tại của tôi là tham gia hoặc học lại các lớp nhằm đáp ứng các yêu cầu tối thiểu để đăng ký thành công vào chương trình thạc sĩ. Tôi hiện đang làm việc qua đêm tại Federal Express (FedEx) Grounds với tư cách là người xử lý gói hàng. Lý do tại sao tôi thích làm việc qua đêm không chỉ vì khi tôi lái xe đi làm không chỉ có rất ít xe cộ qua lại mà nơi làm việc còn khá yên tĩnh và êm ả hơn. Tôi mong muốn tìm được một công việc với tư cách là một nhà khoa học máy tính với chuyên ngành. Sở thích hiệu quả của tôi bao gồm lập trình và thiết kế trò chơi. Ngoài ra, đây là danh sách các ngôn ngữ lập trình mà tôi rất quen thuộc:";
		HTML_Description_B = "Tôi muốn giới thiệu cho những người xem như bạn một trang web. Trang web là w3schools (";
		HTML_Description_C = "). Trang web này rất hữu ích nếu bạn muốn học và thực hành thêm ngôn ngữ lập trình. Nó cũng có một sân chơi viết mã, nơi bạn có thể tự do viết mã bất cứ thứ gì bạn thích.";
	    Html_Options = "Tùy Chọn";
	    HTML_Colors = "Màu Sắc";
		HTML_Image = "Hình ảnh";
		HTML_Basic = "Nền Tảng";
		HTML_Customize = "Tùy Chỉnh";
		HTML_Rainbow = "Cầu Vồng";
		HTML_Light_Mode = "Chế Độ Sáng";
		HTML_Dark_Mode = "Chế Độ Tối";
		HTML_Foreground = "Vấn Đề Xung Quanh";
		HTML_Background = "Lý Lịch";
		HTML_Speed = "Tốc Độ";
		HTML_Very_Slow = "Rất Chậm";
		HTML_Slow = "Chậm";
		HTML_Medium = "Trung Bình";
		HTML_Fast = "Nhanh";
		HTML_Very_Fast = "Rất Nhanh";
		HTML_Comanchitas = "Comanchitas";
		HTML_Espurr = "Hy vọng";
		HTML_Skitty = "Skitty";
		HTML_Annabella = "Annabella";
		HTML_Language = "Ngôn Ngữ";
		HTML_Font = "Nét Chữ";
		HTML_FontHeader = "Tiêu đề Phông Chữ";
		HTML_FontBody = "Nội Dung Phông Chữ";
		HTML_FontFooter = "Chân Trang Phông Chữ";
		HTML_Arial = "Arial";
		HTML_Brush_Script_MT = "Bàn Chải Script MT";
		HTML_Copperplate = "Đĩa Đồng";
		HTML_Courier_New = "Chuyển Phát Nhanh Mới";
		HTML_Garamond = "Kim Cương";
		HTML_Georgia = "Gruzia";
		HTML_Helvetica = "Chữ Helvetica";
		HTML_Lucida_Console = "Bảng Điều Khiển Lucida";
		HTML_Lucida_Handwriting = "Chữ Viết Tay Lucida";
		HTML_Monaco = "Monaco";
		HTML_Papyrus = "Giấy Cói";
		HTML_Times_New_Roman = "Lần La Mã Mới";
		HTML_Verdana = "Verdana";
		HTML_Header_Border = "";
		HTML_Body_Border = "";
		HTML_Solid = "";
		HTML_Double = "";
		HTML_Groove = "";
		HTML_Ridge = "";
		HTML_Dotted = "";
		HTML_Inset = "";
		HTML_Outset = "";
		HTML_Dash = "";
		HTML_Save = "Lưu Dữ Liệu";
	}
	else if (LanguageChannel == 7) // GREEK
	{
		TitleName = "Σχετικά με εμένα (Λούις)";
		HTML_Description_A = "Γεια! Είμαι ο Λουίς Σερίιλλο και είμαι πτυχιούχος Επιστήμης Υπολογιστών. Γεννήθηκα τα ξημερώματα της Παρασκευής 21 Σεπτεμβρίου 1990. Έχω δύο αδέρφια και μια αδερφή. Έχω επίσης μια γάτα, ένα θηλυκό τιγρέ της Βεγγάλης, που ονομάζεται Comanchitas. Μετακόμισα 11 φορές, επειδή ο πατέρας μου υπηρετούσε στην US Marine Corp. Κάποτε έζησα εκτός των Ηνωμένων Πολιτειών (στον Παναμά). Ο λόγος που επέλεξα την επιστήμη των υπολογιστών είναι επειδή με γοήτευσαν η ρομποτική, τα παιχνίδια, η τεχνολογία, η εκμάθηση πώς να σχεδιάζω μια ιστοσελίδα, η κατασκευή επιτραπέζιων υπολογιστών και άλλα χαρακτηριστικά που σχετίζονται με την Πληροφορική. Αυτήν τη στιγμή είμαι φοιτητής στο Πανεπιστήμιο του Χιούστον-Κάτονταουν ως μεταπτυχιακός στην Επιστήμη Υπολογιστών. Καθώς παρακολουθούσα μαθήματα, άρχισα να γοητεύομαι για περισσότερες κατηγορίες επιστήμης υπολογιστών, όπως η Ρομποτική, η Σχεδίαση Παιχνιδιών και το Διαδίκτυο των Πραγμάτων (για το τελευταίο, μου αρέσει να δημιουργώ πράγματα, αλλά το μόνο πράγμα που με νευριάζει πολύ είναι το κομμάτι της ηλεκτρικής ενέργειας). Ο τρέχων στόχος μου είναι να παρακολουθήσω ή να επαναλάβω μαθήματα προκειμένου να ανταποκριθώ στις ελάχιστες απαιτήσεις για να εγγραφώ επιτυχώς σε ένα μεταπτυχιακό πρόγραμμα. Αυτήν τη στιγμή εργάζομαι όλη τη νύχτα στο Φεδεραλ Εξπρεσς (FedEx) Γρούνδσ ως χειριστής πακέτων. Ο λόγος για τον οποίο προτιμώ να δουλεύω τη νύχτα είναι επειδή όχι μόνο υπάρχει πολύ λίγη κίνηση όταν οδηγώ στη δουλειά, αλλά και ο χώρος εργασίας είναι μάλλον πιο ήρεμος και ομαλός. Ανυπομονώ να ψάξω για δουλειά ως επιστήμονας πληροφορικής ως κύριος. Τα παραγωγικά μου χόμπι περιλαμβάνουν τον προγραμματισμό και το σχεδιασμό παιχνιδιών. Επιπλέον, εδώ είναι οι λίστες των γλωσσών προγραμματισμού με τις οποίες είμαι πολύ εξοικειωμένη:";
		HTML_Description_B = "Θα ήθελα να συστήσω σε θεατές σαν εσάς έναν ιστότοπο. Ο ιστότοπος είναι w3schools (";
		HTML_Description_C = "). Αυτός ο ιστότοπος είναι χρήσιμος εάν θέλετε να μάθετε και να εξασκηθείτε σε περισσότερες γλώσσες προγραμματισμού. Διαθέτει επίσης μια παιδική χαρά κωδικοποίησης, όπου μπορείτε ελεύθερα να κωδικοποιήσετε οτιδήποτε θέλετε.";
	    HTML_Options = "Επιλογές";
	    HTML_Colors = "Χρωματιστά";
		HTML_Image = "Εικόνα";
		HTML_Basic = "Βασικός";
		HTML_Customize = "Προσαρμογή";
		HTML_Rainbow = "Ουράνιο τόξο";
		HTML_Light_Mode = "Λειτουργία φωτός";
		HTML_Dark_Mode = "Σκοτεινή λειτουργία";
		HTML_Foreground = "Σε πρώτο πλάνο";
		HTML_Background = "Ιστορικό";
		HTML_Speed = "Ταχύτητα";
		HTML_Very_Slow = "Πολύ αργή";
		HTML_Slow = "Αργός";
		HTML_Medium = "Μεσαίο";
		HTML_Fast = "Γρήγορα";
		HTML_Very_Fast = "Πολύ γρήγορα";
		HTML_Comanchitas = "Κομανχίτας";
		HTML_Espurr = "Ελπίδα";
		HTML_Skitty = "Σκιτς";
		HTML_Annabella = "Αναμπέλα";
		HTML_Language = "Γλώσσα";
		HTML_Font = "Γραμματοσειρά";
		HTML_FontHeader = "Κεφαλίδα γραμματοσειράς";
		HTML_FontBody = "Σώμα γραμματοσειράς";
		HTML_FontFooter = "Υποσέλιδο γραμματοσειράς";
		HTML_Arial = "Άριαλ";
		HTML_Brush_Script_MT = "Σενάριο πινέλου ΜΤ";
		HTML_Copperplate = "Πλάκα χαλκού";
		HTML_Courier_New = "Ταχυμεταφορέας Νέα";
		HTML_Garamond = "Γκαραμοντ";
		HTML_Georgia = "Γεωργία";
		HTML_Helvetica = "Χελβετίκα";
		HTML_Lucida_Console = "Κονσόλα Λουσίντα";
		HTML_Lucida_Handwriting = "Χειρόγραφο Λουσίντα";
		HTML_Monaco = "Μονακό";
		HTML_Papyrus = "Πάπυρος";
		HTML_Times_New_Roman = "φορές νέος Ρωμαίος";
		HTML_Verdana = "Βερντάνα";
		HTML_Header_Border = "";
		HTML_Body_Border = "";
		HTML_Solid = "";
		HTML_Double = "";
		HTML_Groove = "";
		HTML_Ridge = "";
		HTML_Dotted = "";
		HTML_Inset = "";
		HTML_Outset = "";
		HTML_Dash = "";
		HTML_Save = "Αποθηκεύσετε";
	}
	else if (LanguageChannel == 8) // RUSSIAN
	{
		TitleName = "Обо мне (Луис)";
		HTML_Description_A = "Привет! Меня зовут Луис Серрильо, я специализируюсь на компьютерных науках. Я родился ранним вечером в пятницу, 21 сентября 1990 года. У меня два брата и сестра. Еще у меня есть кошка, бенгальская полосатая девочка по имени Команчитас. Я переезжал 11 раз, потому что мой отец служил в морской пехоте США. Когда-то я жил за пределами США (в Панаме). Причина, по которой я выбрал информатику, заключается в том, что меня увлекали робототехника, игры, технологии, я учился проектировать веб-страницы, создавать настольные компьютеры и другие функции, связанные с информационными технологиями. В настоящее время я учусь в Университете Хьюстона в центре города и получаю степень бакалавра компьютерных наук. Во время занятий я начал увлекаться другими категориями информатики, такими как робототехника, игровой дизайн и Интернет вещей (в последнем мне нравится создавать вещи, но единственное, что меня очень нервирует, — это часть электричества). Моя текущая цель — пройти или повторить занятия, чтобы соответствовать минимальным требованиям для успешного поступления в магистратуру. В настоящее время я работаю по ночам на территории Federal Express (FedEx) обработчиком посылок. Причина, по которой я предпочитаю работать по ночам, заключается не только в том, что когда я еду на работу, там очень мало пробок, но и в том, что рабочее место становится более спокойным и плавным. Я с нетерпением жду возможности найти работу в качестве ученого-компьютерщика по специальности. Мои продуктивные хобби включают программирование и разработку игр. Кроме того, вот списки языков программирования, с которыми я хорошо знаком:";
		HTML_Description_B = "Я хотел бы познакомить таких зрителей, как вы, с веб-сайтом. Сайт w3schools (";
		HTML_Description_C = "). Этот веб-сайт будет полезен, если вы хотите изучить и практиковать больше языков программирования. Здесь также есть игровая площадка для кодирования, где вы можете свободно кодировать все, что захотите.";
	    HTML_Options = "Параметры";
	    HTML_Colors = "Цвета";
		HTML_Image = "Изображение";
		HTML_Basic = "Базовый";
		HTML_Customize = "Настраивать";
		HTML_Rainbow = "Радуга";
		HTML_Light_Mode = "Световой Режим";
		HTML_Dark_Mode = "Темный Режим";
		HTML_Foreground = "Передний План";
		HTML_Background = "Фон";
		HTML_Speed = "Скорость";
		HTML_Very_Slow = "Очень Медленно";
		HTML_Slow = "Медленный";
		HTML_Medium = "Середина";
		HTML_Fast = "Быстрый";
		HTML_Very_Fast = "Очень Быстро";
		HTML_Comanchitas = "Команчитас";
		HTML_Espurr = "Надежда";
		HTML_Skitty = "Скитти";
		HTML_Annabella = "Аннабелла";
		HTML_Language = "Язык";
		HTML_Font = "Шрифт";
		HTML_FontHeader = "Заголовок шрифта";
		HTML_FontBody = "Тело шрифта";
		HTML_FontFooter = "Нижний колонтитул шрифта";
		HTML_Arial = "Ариал";
		HTML_Brush_Script_MT = "Кисть Скрипт MT";
		HTML_Copperplate = "Медная тарелка";
		HTML_Courier_New = "Новый Курьер";
		HTML_Garamond = "Гарамонд";
		HTML_Georgia = "Грузия";
		HTML_Helvetica = "Гельветика";
		HTML_Lucida_Console = "Люцида Консоль";
		HTML_Lucida_Handwriting = "Люсида Почерк";
		HTML_Monaco = "Монако";
		HTML_Papyrus = "Папирус";
		HTML_Times_New_Roman = "Таймс Нью Роман";
		HTML_Verdana = "Вердана";
		HTML_Header_Border = "";
		HTML_Body_Border = "";
		HTML_Solid = "";
		HTML_Double = "";
		HTML_Groove = "";
		HTML_Ridge = "";
		HTML_Dotted = "";
		HTML_Inset = "";
		HTML_Outset = "";
		HTML_Dash = "";
		HTML_Save = "Сохранить Данные";
	}
	else if (LanguageChannel == 9) // HEBREW
	{
		TitleName = "עליי (לואיס)";
		HTML_Description_A = "היי! אני לואיס סריו ואני מתמחה במדעי המחשב. נולדתי בשעות הערב המוקדמות של יום שישי, 21 בספטמבר 1990. יש לי שני אחים ואחות. יש לי גם חתולה, טאבי נקבה בנגלית, בשם קומנצ'יטס. עברתי 11 פעמים, כי אבי שירת בחברת הנחתים של ארצות הברית. פעם גרתי מחוץ לארצות הברית (בפנמה). הסיבה שבחרתי במדעי המחשב היא כי הוקסמתי מרובוטיקה, משחקים, טכנולוגיה, למידה כיצד לעצב דף אינטרנט, בניית מחשבים שולחניים ותכונות אחרות הקשורות לטכנולוגיית מידע. כיום אני סטודנט באוניברסיטת יוסטון-דאונטאון כפוסט-בוגר במדעי המחשב. תוך כדי שיעורים התחלתי לפתח קסם לקטגוריות נוספות של מדעי המחשב, כמו רובוטיקה, עיצוב משחקים ואינטרנט של הדברים (לאחרונים, אני נהנה ליצור דברים, אבל הדבר היחיד שמאוד מעצבן אותי הוא החלק החשמלי). המטרה הנוכחית שלי היא לקחת או לחזור על שיעורים כדי לעמוד בדרישות המינימום כדי להירשם בהצלחה לתכנית לתואר שני. כרגע אני עובד בן לילה בשטחי Federal Express (FedEx) כמטפל בחבילות. הסיבה שבגללה אני מעדיף לעבוד לילה היא כי לא רק שיש מעט מאוד תנועה כשאני נוהג לעבודה, אלא שמקום העבודה די רגוע וחלק יותר. אני מצפה לחפש עבודה כמדען מחשבים כמנהלת. התחביבים הפרודוקטיביים שלי כוללים תכנות ועיצוב משחקים. בנוסף, להלן רשימות שפות התכנות שאני מכיר היטב:";
		HTML_Description_B = "אני רוצה להציג לצופים כמוך אתר אינטרנט. האתר הוא w3schools (";
		HTML_Description_C = "). אתר זה שימושי אם תרצה ללמוד ולתרגל שפות תכנות נוספות. יש לו גם מגרש משחקים לקידוד, שבו אתה יכול לקודד בחופשיות כל דבר שתרצה.";
	    HTML_Options = "אפשרויות";
	    HTML_Colors = "צבעים";
		HTML_Image = "תמונה";
		HTML_Basic = "בסיסי";
		HTML_Customize = "התאמה אישית";
		HTML_Rainbow = "קשת בענן";
		HTML_Light_Mode = "מצב אור";
		HTML_Dark_Mode = "מצב כהה";
		HTML_Foreground = "חֲזִית";
		HTML_Background = "רקע כללי";
		HTML_Speed = "מְהִירוּת";
		HTML_Very_Slow = "איטי מאוד";
		HTML_Slow = "לְהַאֵט";
		HTML_Medium = "בינוני";
		HTML_Fast = "מָהִיר";
		HTML_Very_Fast = "מהר מאוד";
		HTML_Comanchitas = "קאָמאַנטשיטאַס";
		HTML_Espurr = "האָפענונג";
		HTML_Skitty = "סקיטי";
		HTML_Annabella = "אַנאַבעלאַ";
		HTML_Language = "שפה";
		HTML_Font = "גוֹפָן";
		HTML_FontHeader = "כותרת גופן";
		HTML_FontBody = "גוף גופן";
		HTML_FontFooter = "כותרת תחתונה של גופן";
		HTML_Arial = "אריאל";
		HTML_Brush_Script_MT = "מברשת סקריפט MT";
		HTML_Copperplate = "לוח נחושת";
		HTML_Courier_New = "שליח חדש";
		HTML_Garamond = "גארמונד";
		HTML_Georgia = "גאורגיה";
		HTML_Helvetica = "הלבטיקה";
		HTML_Lucida_Console = "קונסולה לוצ'ידה";
		HTML_Lucida_Handwriting = "כתב יד לוסידה";
		HTML_Monaco = "מונקו";
		HTML_Papyrus = "פַּפִּירוּס";
		HTML_Times_New_Roman = "פעמים חדש רומאי";
		HTML_Verdana = "ורדנה";
		HTML_Header_Border = "";
		HTML_Body_Border = "";
		HTML_Solid = "";
		HTML_Double = "";
		HTML_Groove = "";
		HTML_Ridge = "";
		HTML_Dotted = "";
		HTML_Inset = "";
		HTML_Outset = "";
		HTML_Dash = "";
		HTML_Save = "להציל";
	}
	else if (LanguageChannel == 10) // URDU
	{
		TitleName = "میرے بارے میں (لوئس)";
		HTML_Description_A = "ہائے! میں لوئس سیریلو ہوں اور میں کمپیوٹر سائنس کا میجر ہوں۔ میں جمعہ ٢١ سبتمبر، ١٩٩٠کی ابتدائی شام کو پیدا ہوا۔ میرے دو بھائی اور ایک بہن ہے۔ میرے پاس ایک بلی بھی ہے، ایک مادہ بنگال ٹیبی، جس کا نام کومانچیتاس ہے۔ میں ١١ بار منتقل ہوا، کیونکہ میرے والد نے ریاستہائے متحدہ میرین کارپوریشن میں خدمات انجام دیں۔ میں ایک بار ریاستہائے متحدہ سے باہر (پاناما میں) رہتا تھا۔ میں نے کمپیوٹر سائنس کا انتخاب کرنے کی وجہ یہ ہے کہ میں روبوٹکس، گیمنگ، ٹیکنالوجی، ویب پیج کو ڈیزائن کرنے کا طریقہ سیکھنے، ڈیسک ٹاپ کمپیوٹر بنانے اور انفارمیشن ٹیکنالوجی سے متعلق دیگر خصوصیات سے متوجہ تھا۔ میں فی الحال یونیورسٹی آف ہیوسٹن-ڈاؤن ٹاؤن میں کمپیوٹر سائنس پوسٹ بیچلر کے طور پر طالب علم ہوں۔ کلاسز لینے کے دوران، میں نے کمپیوٹر سائنس کی مزید کیٹیگریز، جیسے روبوٹکس، گیم ڈیزائن اور انٹرنیٹ آف تھنگز کے لیے دلچسپی پیدا کرنا شروع کردی (بعد کے لیے، مجھے چیزیں بنانے میں مزہ آتا ہے، لیکن صرف ایک چیز جو مجھے بہت پریشان کرتی ہے وہ ہے بجلی کا حصہ)۔ میرا موجودہ مقصد ماسٹر کے پروگرام میں کامیابی کے ساتھ اندراج کے لیے کم از کم تقاضوں کو پورا کرنے کے لیے کلاسز لینا یا دوبارہ کرنا ہے۔ میں فی الحال فیڈرل ایکسپریس (FedEx) گراؤنڈز میں ایک پیکیج ہینڈلر کے طور پر راتوں رات کام کرتا ہوں۔ میں رات بھر کام کرنے کو ترجیح دینے کی وجہ یہ ہے کہ جب میں کام پر گاڑی چلا رہا ہوں تو نہ صرف بہت کم ٹریفک ہوتی ہے بلکہ کام کی جگہ زیادہ پرسکون اور ہموار ہوتی ہے۔ میں ایک کمپیوٹر سائنسدان کے طور پر ایک میجر کے طور پر نوکری تلاش کرنے کا منتظر ہوں۔ میرے پیداواری مشاغل میں پروگرامنگ اور گیم ڈیزائننگ شامل ہیں۔ اس کے علاوہ، یہاں پروگرامنگ زبانوں کی فہرستیں ہیں جن سے میں بہت واقف ہوں:";
		HTML_Description_B = "میں آپ جیسے ناظرین کو ویب سائٹ سے متعارف کروانا چاہوں گا۔ ویب سائٹ ہے w3schools (";
		HTML_Description_C = ")۔ اگر آپ مزید پروگرامنگ زبانیں سیکھنا اور اس پر عمل کرنا چاہتے ہیں تو یہ ویب سائٹ مفید ہے۔ اس میں ایک کوڈنگ کا کھیل کا میدان بھی ہے، جہاں آپ اپنی پسند کی ہر چیز کو آزادانہ طور پر کوڈ کر سکتے ہیں۔";
	    HTML_Options = "اختیارات";
	    HTML_Colors = "رنگ";
		HTML_Image = "تصویر";
		HTML_Basic = "بنیادی";
		HTML_Customize = "حسب ضرورت بنائیں";
		HTML_Rainbow = "قوس قزح";
		HTML_Light_Mode = "لائٹ موڈ";
		HTML_Dark_Mode = "ڈارک موڈ";
		HTML_Foreground = "پیش منظر";
		HTML_Background = "پس منظر";
		HTML_Speed = "رفتار";
		HTML_Very_Slow = "بہت سست";
		HTML_Slow = "سست";
		HTML_Medium = "درمیانہ";
		HTML_Fast = "تیز";
		HTML_Very_Fast = "بہت تیز";
		HTML_Comanchitas = "کومانچیتاس";
		HTML_Espurr = "امید";
		HTML_Skitty = "سکیٹی";
		HTML_Annabella = "اینابیلا";
		HTML_Language = "زبان";
		HTML_Font = "فونٹ";
		HTML_FontHeader = "فونٹ ہیڈر";
		HTML_FontBody = "فونٹ باڈی";
		HTML_FontFooter = "فونٹ فوٹر";
		HTML_Arial = "ایریل";
		HTML_Brush_Script_MT = "برش اسکرپٹ ایم ٹی";
		HTML_Copperplate = "تانبے کی تختی۔";
		HTML_Courier_New = "کورئیر نیو";
		HTML_Garamond = "گارامنڈ";
		HTML_Georgia = "جارجیا";
		HTML_Helvetica = "ہیلویٹیکا۔";
		HTML_Lucida_Console = "لوسیڈا کنسول";
		HTML_Lucida_Handwriting = "لوسیڈا ہینڈ رائٹنگ";
		HTML_Monaco = "موناکو";
		HTML_Papyrus = "پاپائرس";
		HTML_Times_New_Roman = "ٹائمز نیو رومن";
		HTML_Verdana = "وردانہ";
		HTML_Header_Border = "";
		HTML_Body_Border = "";
		HTML_Solid = "";
		HTML_Double = "";
		HTML_Groove = "";
		HTML_Ridge = "";
		HTML_Dotted = "";
		HTML_Inset = "";
		HTML_Outset = "";
		HTML_Dash = "";
		HTML_Save = "محفوظ کریں۔";
	}
	else if (LanguageChannel == 11) // ARABIC
	{
		TitleName = "عني (لويس)";
		HTML_Description_A = "مرحبًا! أنا لويس سيريلو وأتخصص في علوم الكمبيوتر. لقد ولدت في وقت مبكر من مساء يوم الجمعة، ٢١ سبتمبر، ١٩٩٠. لدي شقيقان وأخت. ولدي أيضًا قطة، وهي أنثى العانس البنغالية ، واسمه كومانشيتاس. لقد انتقلت ١١ مرة، لأن والدي خدم في قوات مشاة البحرية الأمريكية. وكنت أعيش خارج الولايات المتحدة (في بنما). وسبب اختياري لعلوم الكمبيوتر هو أنني كنت مفتونًا بالروبوتات والألعاب والتكنولوجيا، تعلم كيفية تصميم صفحة ويب، وبناء أجهزة كمبيوتر سطح المكتب وغيرها من الميزات المتعلقة بتكنولوجيا المعلومات. أنا حاليًا طالب في جامعة هيوستن-وسط المدينة حيث أدرس مرحلة ما بعد البكالوريوس في علوم الكمبيوتر. وأثناء تلقي الدروس، بدأت في تطوير شغفي بالمزيد من أجهزة الكمبيوتر فئات العلوم، مثل الروبوتات، وتصميم الألعاب، وإنترنت الأشياء (بالنسبة للأخيرة، أستمتع بصنع الأشياء، ولكن الشيء الوحيد الذي يثير توتري الشديد هو الجزء الخاص بالكهرباء). هدفي الحالي هو أخذ دروس أو إعادة تدريسها من أجل تلبية الحد الأدنى من المتطلبات للتسجيل بنجاح في برنامج الماجستير. أعمل حاليًا بين عشية وضحاها في شركة Federal Express (FedEx) Grounds كمتعامل للطرود. السبب الذي يجعلني أفضّل العمل طوال الليل ليس فقط بسبب قلة حركة المرور عندما أقود سيارتي إلى العمل، ولكن مكان العمل أكثر هدوءًا وسلاسة. إنني أتطلع إلى البحث عن وظيفة كعالم كمبيوتر كتخصص. هواياتي الإنتاجية تشمل البرمجة وتصميم الألعاب. بالإضافة إلى ذلك، إليك قوائم لغات البرمجة التي أعرفها جيدًا:";
		HTML_Description_B = "أود أن أقدم للمشاهدين مثلك موقعًا إلكترونيًا. الموقع هو w3schools (";
		HTML_Description_C = "). هذا الموقع مفيد إذا كنت ترغب في تعلم المزيد من لغات البرمجة وممارستها. كما يحتوي أيضًا على ساحة للبرمجة، حيث يمكنك برمجة أي شيء تريده بحرية.";
	    HTML_Options = "خيارات";
	    HTML_Colors = "الألوان";
		HTML_Image = "صورة";
		HTML_Basic = "أساسي";
		HTML_Customize = "يعدل أو يكيف";
		HTML_Rainbow = "قوس المطر";
		HTML_Light_Mode = "وضع الضوء";
		HTML_Dark_Mode = "الوضع المظلم";
		HTML_Foreground = "المقدمة";
		HTML_Background = "خلفية";
		HTML_Speed = "سرعة";
		HTML_Very_Slow = "بطيء جدا";
		HTML_Slow = "بطيء";
		HTML_Medium = "واسطة";
		HTML_Fast = "سريع";
		HTML_Very_Fast = "سريع جدا";
		HTML_Comanchitas = "كومانشيتاس";
		HTML_Espurr = "الأمل";
		HTML_Skitty = "سكيتي";
		HTML_Annabella = "أنابيلا";
		HTML_Language = "لغة";
		HTML_Font = "الخط";
		HTML_FontHeader = "رأس الخط";
		HTML_FontBody = "جسم الخط";
		HTML_FontFooter = "تذييل الخط";
		HTML_Arial = "اريال";
		HTML_Brush_Script_MT = "فرشاة النص MT";
		HTML_Copperplate = "لوحة من النحاس";
		HTML_Courier_New = "ساعي جديد";
		HTML_Garamond = "جاراموند";
		HTML_Georgia = "جورجيا";
		HTML_Helvetica = "هلفتيكا";
		HTML_Lucida_Console = "وحدة تحكم لوسيدا";
		HTML_Lucida_Handwriting = "الكتابة اليدوية لوسيدا";
		HTML_Monaco = "موناكو";
		HTML_Papyrus = "ورق بردي";
		HTML_Times_New_Roman = "مرات الرومانية الجديدة";
		HTML_Verdana = "فيردانا";
		HTML_Header_Border = "";
		HTML_Body_Border = "";
		HTML_Solid = "";
		HTML_Double = "";
		HTML_Groove = "";
		HTML_Ridge = "";
		HTML_Dotted = "";
		HTML_Inset = "";
		HTML_Outset = "";
		HTML_Dash = "";
		HTML_Save = "حفظ البيانات";
	}
	else if (LanguageChannel == 12) // HINDI
	{
		TitleName = "मेरे बारे में (लुइस)";
		HTML_Description_A = "नमस्ते! मैं लुइस सेरिलो हूं और मैं कंप्यूटर साइंस का प्रमुख हूं। मेरा जन्म शुक्रवार, सितंबर 21, 1990 की शाम को हुआ था। मेरे दो भाई और एक बहन हैं। मेरे पास एक बिल्ली भी है, एक मादा बंगाल टैबी, जिसका नाम कोमनचिटास है। मैं 11 बार स्थानांतरित हुआ, क्योंकि मेरे पिता यूनाइटेड स्टेट्स मरीन कॉर्प में कार्यरत थे। मैं एक बार संयुक्त राज्य अमेरिका के बाहर (पनामा में) रहता था। मैंने कंप्यूटर विज्ञान को इसलिए चुना क्योंकि मैं रोबोटिक्स, गेमिंग, प्रौद्योगिकी, वेब पेज डिज़ाइन करना सीखने, डेस्कटॉप कंप्यूटर बनाने और सूचना प्रौद्योगिकी से संबंधित अन्य सुविधाओं से आकर्षित था। मैं वर्तमान में ह्यूस्टन-डाउनटाउन विश्वविद्यालय में कंप्यूटर साइंस पोस्ट-बैचलर के रूप में छात्र हूं। कक्षाएं लेने के दौरान, मैंने रोबोटिक्स, गेम डिज़ाइन और इंटरनेट ऑफ थिंग्स जैसी अधिक कंप्यूटर विज्ञान श्रेणियों के प्रति आकर्षण विकसित करना शुरू कर दिया (बाद के लिए, मुझे चीजें बनाने में आनंद आता है, लेकिन एकमात्र चीज जो मुझे बहुत परेशान करती है वह है बिजली वाला हिस्सा)। मेरा वर्तमान उद्देश्य मास्टर कार्यक्रम में सफलतापूर्वक नामांकन के लिए न्यूनतम आवश्यकताओं को पूरा करने के लिए कक्षाएं लेना या फिर से करना है। मैं वर्तमान में पैकेज हैंडलर के रूप में फेडरल एक्सप्रेस (फेडएक्स) ग्राउंड्स में रात भर काम करता हूं। मैं रात भर काम करना पसंद करता हूं, इसका कारण यह है कि जब मैं काम पर जाता हूं तो न केवल बहुत कम ट्रैफिक होता है, बल्कि कार्यस्थल भी शांत और सहज होता है। मैं एक प्रमुख कंप्यूटर वैज्ञानिक के रूप में नौकरी की तलाश में हूं। मेरे उत्पादक शौक में प्रोग्रामिंग और गेम-डिज़ाइनिंग शामिल हैं। इसके अलावा, यहां उन प्रोग्रामिंग भाषाओं की सूची दी गई है जिनसे मैं बहुत परिचित हूं:";
		HTML_Description_B = "मैं आप जैसे दर्शकों को एक वेबसाइट से परिचित कराना चाहता हूं। वेबसाइट w3schools है (";
		HTML_Description_C = "). यदि आप अधिक प्रोग्रामिंग भाषाएँ सीखना और अभ्यास करना चाहते हैं तो यह वेबसाइट उपयोगी है। इसमें एक कोडिंग खेल का मैदान भी है, जहां आप अपनी पसंद की किसी भी चीज़ को स्वतंत्र रूप से कोड कर सकते हैं।";
	    HTML_Options = "विकल्प";
	    HTML_Colors = "रंग की";
		HTML_Image = "छवि";
		HTML_Basic = "बुनियादी";
		HTML_Customize = "अनुकूलित करें";
		HTML_Rainbow = "इंद्रधनुष";
		HTML_Light_Mode = "लाइट मोड";
		HTML_Dark_Mode = "डार्क मोड";
		HTML_Foreground = "अग्रभूमि";
		HTML_Background = "पृष्ठभूमि";
		HTML_Speed = "रफ़्तार";
		HTML_Very_Slow = "बहुत धीमी गति से";
		HTML_Slow = "धीमा";
		HTML_Medium = "मध्यम";
		HTML_Fast = "तेज़";
		HTML_Very_Fast = "बहुत तेज";
		HTML_Comanchitas = "कॉमंचिटास";
		HTML_Espurr = "आशा";
		HTML_Skitty = "स्किटी";
		HTML_Annabella = "अन्नाबेल्ला";
		HTML_Language = "भाषा";
		HTML_Font = "फ़ॉन्ट";
		HTML_FontHeader = "फ़ॉन्ट शीर्षलेख";
		HTML_FontBody = "फ़ॉन्ट बॉडी";
		HTML_FontFooter = "फ़ॉन्ट पाद लेख";
		HTML_Arial = "एरियल";
		HTML_Brush_Script_MT = "ब्रश स्क्रिप्ट एमटी";
		HTML_Copperplate = "तांबे की परत";
		HTML_Courier_New = "कूरियर नया";
		HTML_Garamond = "गैरामोंड";
		HTML_Georgia = "जॉर्जिया";
		HTML_Helvetica = "हेल्वेटिका";
		HTML_Lucida_Console = "ल्यूसिडा कंसोल";
		HTML_Lucida_Handwriting = "ल्यूसिडा लिखावट";
		HTML_Monaco = "मोनाको";
		HTML_Papyrus = "पेपिरस";
		HTML_Times_New_Roman = "टाइम्स न्यू रोमन";
		HTML_Verdana = "वर्दाना";
		HTML_Header_Border = "";
		HTML_Body_Border = "";
		HTML_Solid = "";
		HTML_Double = "";
		HTML_Groove = "";
		HTML_Ridge = "";
		HTML_Dotted = "";
		HTML_Inset = "";
		HTML_Outset = "";
		HTML_Dash = "";
		HTML_Save = "बचाना";
	}
	else if (LanguageChannel == 13) // THAI
	{
		TitleName = "เกี่ยวกับฉัน (หลุยส์)";
		HTML_Description_A = "สวัสดี! ฉันชื่อ หลุยส์ เซอร์ริลโล และฉันเป็นวิชาเอกวิทยาการคอมพิวเตอร์ ฉันเกิดเย็นวันศุกร์ที่ 21 กันยายน 2533 มีพี่ชายสองคนและน้องสาวหนึ่งคน ฉันยังมีแมวตัวหนึ่งเป็นแมวลายเบงกอลตัวเมียชื่อ โคมันชิตาส ฉันย้ายมา 11 ครั้ง เพราะพ่อของฉันทำงานที่ นาวิกโยธินสหรัฐ ฉันเคยอาศัยอยู่นอกสหรัฐอเมริกา (ในปานามา) เหตุผลที่ฉันเลือกวิทยาการคอมพิวเตอร์ก็เพราะฉันหลงใหลในหุ่นยนต์ เกม เทคโนโลยี เรียนรู้วิธีการออกแบบหน้าเว็บ การสร้างคอมพิวเตอร์เดสก์ท็อป และคุณลักษณะอื่นๆ ที่เกี่ยวข้องกับเทคโนโลยีสารสนเทศ ปัจจุบันฉันเป็นนักศึกษาที่ มหาวิทยาลัยฮูสตัน-ดาวน์ทาวน์ ในตำแหน่งหลังปริญญาตรีวิทยาการคอมพิวเตอร์ ในขณะที่เรียน ฉันเริ่มมีความหลงใหลในหมวดวิทยาการคอมพิวเตอร์มากขึ้น เช่น หุ่นยนต์ การออกแบบเกม และอินเทอร์เน็ตของสรรพสิ่ง (ส่วนหลัง ฉันชอบสร้างสรรค์สิ่งต่าง ๆ แต่สิ่งเดียวที่ทำให้ฉันกังวลมากคือส่วนไฟฟ้า) เป้าหมายปัจจุบันของฉันคือการเรียนหรือเรียนซ้ำเพื่อให้เป็นไปตามข้อกำหนดขั้นต่ำเพื่อให้สามารถลงทะเบียนเรียนในหลักสูตรปริญญาโทได้สำเร็จ ขณะนี้ฉันทำงานค้างคืนใน เฟดเดอรัลเอ็กซ์เพรส (FedEx) บริเวณ ในตำแหน่งผู้จัดการพัสดุ เหตุผลที่ฉันชอบทำงานค้างคืนเพราะไม่เพียงแต่การจราจรจะติดน้อยมากเมื่อฉันขับรถไปทำงาน แต่ที่ทำงานยังค่อนข้างสงบและราบรื่นยิ่งขึ้น ฉันหวังว่าจะหางานเป็นนักวิทยาศาสตร์คอมพิวเตอร์เป็นเอก งานอดิเรกที่มีประสิทธิผลของฉันคือการเขียนโปรแกรมและการออกแบบเกม นอกจากนี้ ต่อไปนี้เป็นรายการภาษาการเขียนโปรแกรมที่ฉันคุ้นเคยมาก:";
		HTML_Description_B = "ฉันอยากจะแนะนำเว็บไซต์แก่ผู้ดูเช่นคุณ เว็บไซต์คือ w3schools (";
		HTML_Description_C = "). เว็บไซต์นี้มีประโยชน์หากคุณต้องการเรียนรู้และฝึกฝนภาษาการเขียนโปรแกรมเพิ่มเติม นอกจากนี้ยังมีพื้นที่สำหรับเขียนโค้ด ซึ่งคุณสามารถเขียนโค้ดอะไรก็ได้ตามใจชอบ.";
	    HTML_Options = "ตัวเลือก";
	    HTML_Colors = "สี";
		HTML_Image = "ภาพ";
		HTML_Basic = "ขั้นพื้นฐาน";
		HTML_Customize = "ปรับแต่ง";
		HTML_Rainbow = "รุ้ง";
		HTML_Light_Mode = "โหมดแสง";
		HTML_Dark_Mode = "โหมดมืด";
		HTML_Foreground = "เบื้องหน้า";
		HTML_Background = "พื้นหลัง";
		HTML_Speed = "ความเร็ว";
		HTML_Very_Slow = "ช้ามาก";
		HTML_Slow = "ช้า";
		HTML_Medium = "ปานกลาง";
		HTML_Fast = "เร็ว";
		HTML_Very_Fast = "เร็วมาก";
		HTML_Comanchitas = "โคมันชิตาส";
		HTML_Espurr = "เนียสเปอร์";
		HTML_Skitty = "ขี้เหนียว";
		HTML_Annabella = "แอนนาเบลล่า";
		HTML_Language = "ภาษา";
		HTML_Font = "แบบอักษร";
		HTML_FontHeader = "ส่วนหัวของแบบอักษร";
		HTML_FontBody = "เนื้อความแบบอักษร";
		HTML_FontFooter = "ส่วนท้ายแบบอักษร";
		HTML_Arial = "อาเรียล";
		HTML_Brush_Script_MT = "แปรงสคริปต์ MT";
		HTML_Copperplate = "แผ่นทองแดง";
		HTML_Courier_New = "เคอรี่ ใหม่";
		HTML_Garamond = "การามอนด์";
		HTML_Georgia = "จอร์เจีย";
		HTML_Helvetica = "เฮลเวติกา";
		HTML_Lucida_Console = "คอนโซลลูซิดา";
		HTML_Lucida_Handwriting = "ลายมือของลูซิดา";
		HTML_Monaco = "โมนาโก";
		HTML_Papyrus = "กระดาษปาปิรัส";
		HTML_Times_New_Roman = "ไทม์สนิวโรมัน";
		HTML_Verdana = "เวอร์ดานา";
		HTML_Header_Border = "";
		HTML_Body_Border = "";
		HTML_Solid = "";
		HTML_Double = "";
		HTML_Groove = "";
		HTML_Ridge = "";
		HTML_Dotted = "";
		HTML_Inset = "";
		HTML_Outset = "";
		HTML_Dash = "";
		HTML_Save = "บันทึก";
	}
	else if (LanguageChannel == 14) // KOREAN
	{
		TitleName = "내 소개(루이스)";
		HTML_Description_A = "안녕! 저는 컴퓨터 공학을 전공하는 루이스 세리요입니다. 저는 1990년 9월 21일 금요일 이른 저녁에 태어났습니다. 저는 두 명의 형제와 한 명의 자매가 있습니다. 나에게는 코만치타스라는 이름의 암컷 벵갈 얼룩무늬 고양이도 있습니다. 아버지가 미국 해병대에서 복무하셨기 때문에 저는 11번이나 이사했습니다. 한때 미국 이외 지역(파나마)에 살았습니다. 제가 컴퓨터 과학을 선택한 이유는 로봇 공학, 게임, 기술, 웹 페이지 디자인 방법 학습, 데스크톱 컴퓨터 구축 및 기타 정보 기술 관련 기능에 매료되었기 때문입니다. 저는 현재 컴퓨터 공학 학사 학위를 취득한 후 압도적인 대학교에 재학 중입니다. 수업을 들으면서 저는 로봇 공학, 게임 디자인, 사물 인터넷(사물 인터넷)과 같은 더 많은 컴퓨터 과학 분야에 매력을 느끼기 시작했습니다(사물 인터넷의 경우 나는 물건을 만드는 것을 좋아하지만 나를 매우 긴장하게 만드는 유일한 것은 전기 부분입니다). 나의 현재 목표는 석사 프로그램에 성공적으로 등록하기 위한 최소 요구 사항을 충족하기 위해 수업을 듣거나 다시 수강하는 것입니다. 저는 현재 페더럴 내부(FedEx) 영역에서 패키지 핸들러로 밤새 일하고 있습니다. 내가 야간 근무를 선호하는 이유는 운전해서 출근할 때 교통량이 매우 적을 뿐 아니라 직장이 오히려 조용하고 매끄러웠기 때문이다. 나는 전공으로 컴퓨터 과학자로서의 직업을 찾기를 고대하고 있습니다. 나의 생산적인 취미에는 프로그래밍과 게임 디자인이 포함됩니다. 또한, 제가 매우 잘 알고 있는 프로그래밍 언어 목록은 다음과 같습니다.";
		HTML_Description_B = "저는 여러분과 같은 시청자에게 웹사이트를 소개하고 싶습니다. 웹사이트는 w3schools(";
		HTML_Description_C = "). 이 웹사이트는 더 많은 프로그래밍 언어를 배우고 연습하고 싶은 경우에 유용합니다. 또한 코딩 놀이터도 있어 원하는 것을 자유롭게 코딩할 수 있습니다.";
	    HTML_Options = "옵션";
	    HTML_Colors = "그림 물감";
		HTML_Image = "영상";
		HTML_Basic = "기초적인";
		HTML_Customize = "사용자 정의";
		HTML_Rainbow = "무지개";
		HTML_Light_Mode = "라이트 모드";
		HTML_Dark_Mode = "다크 모드";
		HTML_Foreground = "전경";
		HTML_Background = "배경";
		HTML_Speed = "속도";
		HTML_Very_Slow = "아주 느린";
		HTML_Slow = "느린";
		HTML_Medium = "중간";
		HTML_Fast = "빠른";
		HTML_Very_Fast = "매우 빠르다";
		HTML_Comanchitas = "코만치타스";
		HTML_Espurr = "냐스퍼";
		HTML_Skitty = "스키티";
		HTML_Annabella = "아나벨라";
		HTML_Language = "언어";
		HTML_Font = "폰트";
		HTML_FontHeader = "글꼴 헤더";
		HTML_FontBody = "글꼴 본문";
		HTML_FontFooter = "글꼴 바닥글";
		HTML_Arial = "굴림";
		HTML_Brush_Script_MT = "브러시 스크립트 MT";
		HTML_Copperplate = "구리판";
		HTML_Courier_New = "택배 신규";
		HTML_Garamond = "가라몬드";
		HTML_Georgia = "그루지야";
		HTML_Helvetica = "헬베티카";
		HTML_Lucida_Console = "루시다 콘솔";
		HTML_Lucida_Handwriting = "루시다 손글씨";
		HTML_Monaco = "모나코";
		HTML_Papyrus = "파피루스";
		HTML_Times_New_Roman = "타임스 뉴 로만";
		HTML_Verdana = "베르다나";
		HTML_Header_Border = "";
		HTML_Body_Border = "";
		HTML_Solid = "";
		HTML_Double = "";
		HTML_Groove = "";
		HTML_Ridge = "";
		HTML_Dotted = "";
		HTML_Inset = "";
		HTML_Outset = "";
		HTML_Dash = "";
		HTML_Save = "데이터를 저장";
	}
	else if (LanguageChannel == 15) // JAPANESE
	{
		TitleName = "私について (ルイス)";
		HTML_Description_A = "こんにちは！ 私はルイス・セリーロです。コンピューターサイエンスを専攻しています。 私は 1990 年 9 月 21 日金曜日の夕方に生まれました。私には 2 人の兄弟と 1 人の妹がいます。 私もコマンチータスという名前のベンガルトラのメスの猫を飼っています。 父が米国海兵隊に勤務していたため、私は 11 回引っ越しをしました。私は米国外 (パナマ) に住んでいたことがあります。 私がコンピューター サイエンスを選んだ理由は、ロボット工学、ゲーム、テクノロジー、ウェブページのデザイン方法の学習、デスクトップ コンピューターの構築、その他の情報テクノロジー関連の機能に興味があったからです。 私は現在、ヒューストン大学ダウンタウン校でコンピュータ サイエンスの学士号を取得している学生です。 授業を受けているうちに、ロボット工学、ゲーム デザイン、モノのインターネットなど、コンピューター サイエンスの分野に興味を持ち始めました (後者に関しては、ものづくりは楽しいのですが、とても緊張するのは電気の部分だけです)。 私の現在の目標は、修士課程に入学するための最低限の要件を満たすために授業を受講またはやり直しすることです。 私は現在、フェデラル エクスプレス (FedEx) グラウンドで荷物の取り扱い手として夜通し働いています。 私が夜勤を好む理由は、車で通勤するときに交通量がほとんどないだけでなく、職場がむしろ静かでスムーズだからです。 私は専攻としてコンピューターサイエンティストとしての仕事を探すことを楽しみにしています。 私の生産的な趣味には、プログラミングとゲーム デザインが含まれます。 さらに、私がよく知っているプログラミング言語のリストを以下に示します。";
		HTML_Description_B = "あなたのような視聴者にウェブサイトを紹介したいと思います。 ウェブサイトは w3schools (";
		HTML_Description_C = "）。 このサイトは、より多くのプログラミング言語を学び、練習したい場合に役立ちます。 好きなものを自由にコーディングできるコーディング プレイグラウンドもあります。";
	    HTML_Options = "オプション";
	    HTML_Colors = "色";
		HTML_Image = "画像";
		HTML_Basic = "ベーシック";
		HTML_Customize = "カスタマイズ";
		HTML_Rainbow = "虹";
		HTML_Light_Mode = "ライトモード";
		HTML_Dark_Mode = "ダークモード";
		HTML_Foreground = "前景";
		HTML_Background = "背景";
		HTML_Speed = "スピード";
		HTML_Very_Slow = "非常に遅い";
		HTML_Slow = "遅い";
		HTML_Medium = "中くらい";
		HTML_Fast = "速い";
		HTML_Very_Fast = "とても早い";
		HTML_Comanchitas = "コマンチタス";
		HTML_Espurr = "ニャスパー";
		HTML_Skitty = "スキティ";
		HTML_Annabella = "アナベラ";
		HTML_Language = "言語";
		HTML_Font = "フォント";
		HTML_FontHeader = "フォントヘッダー";
		HTML_FontBody = "フォントボディ";
		HTML_FontFooter = "フォントフッター";
		HTML_Arial = "エリアル";
		HTML_Brush_Script_MT = "ブラシスクリプトMT";
		HTML_Copperplate = "銅板";
		HTML_Courier_New = "宅配便 新品";
		HTML_Garamond = "ガラモンド";
		HTML_Georgia = "ジョージア";
		HTML_Helvetica = "ヘルベチカ";
		HTML_Lucida_Console = "ルシーダコンソール";
		HTML_Lucida_Handwriting = "ルシーダの手書き";
		HTML_Monaco = "モナコ";
		HTML_Papyrus = "パピルス";
		HTML_Times_New_Roman = "タイムズニューローマン";
		HTML_Verdana = "ヴェルダナ";
		HTML_Header_Border = "";
		HTML_Body_Border = "";
		HTML_Solid = "";
		HTML_Double = "";
		HTML_Groove = "";
		HTML_Ridge = "";
		HTML_Dotted = "";
		HTML_Inset = "";
		HTML_Outset = "";
		HTML_Dash = "";
		HTML_Save = "データを保存する";
	}
	else if (LanguageChannel == 16) // SIMPLIFIED CHINESE
	{
		TitleName = "关于我（路易斯）";
		HTML_Description_A = "你好！ 我是路易斯·塞里略，我是计算机科学专业的。 我出生于 1990 年 9 月 21 日星期五傍晚。我有两个兄弟和一个姐妹。 我还有一只猫，一只雌性孟加拉虎斑猫，名叫科曼奇塔斯。 我搬了11次家，因为我的父亲在美国海军陆战队服役。我曾经住在美国境外（巴拿马）。 我选择计算机科学的原因是因为我对机器人、游戏、技术、学习如何设计网页、构建台式计算机和其他信息技术相关功能着迷。 我目前是休斯顿大学市中心分校的计算机科学学士后学生。 在上课时，我开始对更多计算机科学类别产生兴趣，例如机器人、游戏设计和物联网（对于后者，我喜欢创造东西，但唯一让我非常紧张的是电力部分）。 我目前的目标是参加或重修课程，以满足成功注册硕士课程的最低要求。 我目前在联邦快递 (FedEx) 机场过夜，担任包裹处理员。 我之所以喜欢通宵工作，不仅是因为开车上班时车流很少，而且工作场所也比较平静、顺畅。 我期待着找到一份计算机科学家的工作。 我的业余爱好包括编程和游戏设计。 另外，这里列出了我非常熟悉的编程语言：";
		HTML_Description_B = "我想向像您这样的观众介绍一个网站。 该网站是 w3schools (";
		HTML_Description_C = "）。 如果您想学习和练习更多编程语言，这个网站非常有用。 它还有一个编码游乐场，您可以在这里自由地编写任何您喜欢的代码。";
	    HTML_Options = "选项";
	    HTML_Colors = "颜色";
		HTML_Image = "图像";
		HTML_Basic = "基本的";
		HTML_Customize = "定制";
		HTML_Rainbow = "彩虹";
		HTML_Light_Mode = "灯光模式";
		HTML_Dark_Mode = "深色模式";
		HTML_Foreground = "前景";
		HTML_Background = "背景";
		HTML_Speed = "速度";
		HTML_Very_Slow = "非常慢";
		HTML_Slow = "慢的";
		HTML_Medium = "中等的";
		HTML_Fast = "快速地";
		HTML_Very_Fast = "非常快";
		HTML_Comanchitas = "科曼奇塔斯";
		HTML_Espurr = "妙喵";
		HTML_Skitty = "斯基蒂";
		HTML_Annabella = "安娜贝拉";
		HTML_Language = "语言";
		HTML_Font = "字体";
		HTML_FontHeader = "字体标题";
		HTML_FontBody = "字体主体";
		HTML_FontFooter = "字体页脚";
		HTML_Arial = "宋体";
		HTML_Brush_Script_MT = "刷脚本MT";
		HTML_Copperplate = "铜版";
		HTML_Courier_New = "快递新";
		HTML_Garamond = "加拉蒙德";
		HTML_Georgia = "乔治亚州";
		HTML_Helvetica = "黑体";
		HTML_Lucida_Console = "露西达控制台";
		HTML_Lucida_Handwriting = "露西达手写";
		HTML_Monaco = "摩纳哥";
		HTML_Papyrus = "纸莎草纸";
		HTML_Times_New_Roman = "英语字体格式一种";
		HTML_Verdana = "韦尔达纳";
		HTML_Header_Border = "";
		HTML_Body_Border = "";
		HTML_Solid = "";
		HTML_Double = "";
		HTML_Groove = "";
		HTML_Ridge = "";
		HTML_Dotted = "";
		HTML_Inset = "";
		HTML_Outset = "";
		HTML_Dash = "";
		HTML_Save = "保存数据";
	}
	else if (LanguageChannel == 17) // TRADITIONAL CHINESE
	{
		TitleName = "關於我（路易斯）";
		HTML_Description_A = "你好！ 我是路易斯·塞里略，我是計算機科學專業的。 我出生於 1990 年 9 月 21 日星期五傍晚。我有兩個兄弟和一個姐妹。 我還有一隻貓，一隻雌性孟加拉虎斑貓，名叫科曼奇塔斯。 我搬了11次家，因為我的父親在美國海軍陸戰隊服役。我曾經住在美國境外（巴拿馬）。 我選擇計算機科學的原因是因為我對機器人、遊戲、技術、學習如何設計網頁、構建台式計算機和其他信息技術相關功能著迷。 我目前是休斯頓大學市中心分校的計算機科學學士後學生。 在上課時，我開始對更多計算機科學類別產生興趣，例如機器人、遊戲設計和物聯網（對於後者，我喜歡創造東西，但唯一讓我非常緊張的是電力部分）。 我目前的目標是參加或重修課程，以滿足成功註冊碩士課程的最低要求。 我目前在聯邦快遞 (FedEx) 機場過夜，擔任包裹處理員。 我之所以喜歡通宵工作，不僅是因為開車上班時車流很少，而且工作場所也比較平靜、順暢。 我期待著找到一份計算機科學家的工作。 我的業餘愛好包括編程和遊戲設計。 另外，這裡列出了我非常熟悉的編程語言：";
		HTML_Description_B = "我想向像您這樣的觀眾介紹一個網站。 該網站是 w3schools (";
		HTML_Description_C = "）。 如果您想學習和練習更多編程語言，這個網站非常有用。 它還有一個編碼遊樂場，您可以在那裡自由地編寫任何您喜歡的代碼。";
	    HTML_Options = "選項";
	    HTML_Colors = "顏色";
		HTML_Image = "影像";
		HTML_Basic = "基本的";
		HTML_Customize = "定制";
		HTML_Rainbow = "彩虹";
		HTML_Light_Mode = "燈光模式";
		HTML_Dark_Mode = "深色模式";
		HTML_Foreground = "前景";
		HTML_Background = "背景";
		HTML_Speed = "速度";
		HTML_Very_Slow = "非常慢";
		HTML_Slow = "慢的";
		HTML_Medium = "中等的";
		HTML_Fast = "快速地";
		HTML_Very_Fast = "非常快";
		HTML_Comanchitas = "科曼奇塔斯";
		HTML_Espurr = "妙喵";
		HTML_Skitty = "斯基蒂";
		HTML_Annabella = "安娜貝拉";
		HTML_Language = "語言";
		HTML_Font = "字體";
		HTML_FontHeader = "字體標題";
		HTML_FontBody = "字體主體";
		HTML_FontFooter = "字體頁腳";
		HTML_Arial = "宋體";
		HTML_Brush_Script_MT = "刷腳本MT";
		HTML_Copperplate = "銅版";
		HTML_Courier_New = "快遞新";
		HTML_Garamond = "加拉蒙德";
		HTML_Georgia = "喬治亞州";
		HTML_Helvetica = "黑體";
		HTML_Lucida_Console = "露西達控制台";
		HTML_Lucida_Handwriting = "露西達手寫";
		HTML_Monaco = "摩納哥";
		HTML_Papyrus = "紙莎草紙";
		HTML_Times_New_Roman = "英語字體格式一種";
		HTML_Verdana = "韋爾達納";
		HTML_Header_Border = "";
		HTML_Body_Border = "";
		HTML_Solid = "";
		HTML_Double = "";
		HTML_Groove = "";
		HTML_Ridge = "";
		HTML_Dotted = "";
		HTML_Inset = "";
		HTML_Outset = "";
		HTML_Dash = "";
		HTML_Save = "保存數據";
	}
	$("The Title").innerText = TitleName;
	$("Description A").innerText = HTML_Description_A;
	$("Description B").innerText = HTML_Description_B;
	$("Description C").innerText = HTML_Description_C;
	$("Options").innerText = HTML_Options;
	$("Colors").innerText = HTML_Colors;
	$("Image").innerText = HTML_Image;
	$("Image0").innerText = HTML_Image;
	$("Basic").innerText = HTML_Basic;
	$("Customize").innerText = HTML_Customize;
	$("Rainbow").innerText = HTML_Rainbow;
	$("Light Mode").innerText = HTML_Light_Mode;
	$("Dark Mode").innerText = HTML_Dark_Mode;
	$("Foreground").innerText = HTML_Foreground;
	$("Foreground0").innerText = HTML_Foreground;
	$("Background").innerText = HTML_Background;
	$("Background0").innerText = HTML_Background;
	$("Speed").innerText = HTML_Speed;
	$("Very Slow").innerText = HTML_Very_Slow;
	$("Slow").innerText = HTML_Slow;
	$("Medium").innerText = HTML_Medium;
	$("Fast").innerText = HTML_Fast;
	$("Very Fast").innerText = HTML_Very_Fast;
	$("Comanchitas").innerText = HTML_Comanchitas;
	$("Espurr").innerText = HTML_Espurr;
	$("Skitty").innerText = HTML_Skitty;
	$("Annabella").innerText = HTML_Annabella;
	$("Language").innerText = HTML_Language;
	$("Fonts").innerText = HTML_Font;
	$("Font Header").innerText = HTML_FontHeader;
	$("Font Body").innerText = HTML_FontBody;
	$("Font Footer").innerText = HTML_FontFooter;
	$("Header Border").innerText = HTML_Header_Border;
	$("Body Border").innerText = HTML_Body_Border;
	$("Save_Button").value = HTML_Save;
	for (index = 0; index < $$$("Arial").length; index++)
	{
		$$$("Arial")[index].innerText = HTML_Arial;
	}
	for (index = 0; index < $$$("Brush_Script_MT").length; index++)
	{
		$$$("Brush_Script_MT")[index].innerText = HTML_Brush_Script_MT;
	}
	for (index = 0; index < $$$("Copperplate").length; index++)
	{
		$$$("Copperplate")[index].innerText = HTML_Copperplate;
	}
	for (index = 0; index < $$$("Courier_New").length; index++)
	{
		$$$("Courier_New")[index].innerText = HTML_Courier_New;
	}
	for (index = 0; index < $$$("Garamond").length; index++)
	{
		$$$("Garamond")[index].innerText = HTML_Garamond;
	}
	for (index = 0; index < $$$("Georgia").length; index++)
	{
		$$$("Georgia")[index].innerText = HTML_Georgia;
	}
	for (index = 0; index < $$$("Helvetica").length; index++)
	{
		$$$("Helvetica")[index].innerText = HTML_Helvetica;
	}
	for (index = 0; index < $$$("Lucida_Console").length; index++)
	{
		$$$("Lucida_Console")[index].innerText = HTML_Lucida_Console;
	}
	for (index = 0; index < $$$("Lucida_Handwriting").length; index++)
	{
		$$$("Lucida_Handwriting")[index].innerText = HTML_Lucida_Handwriting;
	}
	for (index = 0; index < $$$("Monaco").length; index++)
	{
		$$$("Monaco")[index].innerText = HTML_Monaco;
	}
	for (index = 0; index < $$$("Papyrus").length; index++)
	{
		$$$("Papyrus")[index].innerText = HTML_Papyrus;
	}
	for (index = 0; index < $$$("Times_New_Roman").length; index++)
	{
		$$$("Times_New_Roman")[index].innerText = HTML_Times_New_Roman;
	}
	for (index = 0; index < $$$("Verdana").length; index++)
	{
		$$$("Verdana")[index].innerText = HTML_Verdana;
	}
	for (index = 0; index < $$$("Solid").length; index++)
	{
		$$$("Solid")[index].innerText = HTML_Solid;
	}
	for (index = 0; index < $$$("Double").length; index++)
	{
		$$$("Double")[index].innerText = HTML_Double;
	}
	for (index = 0; index < $$$("Groove").length; index++)
	{
		$$$("Groove")[index].innerText = HTML_Groove;
	}
	for (index = 0; index < $$$("Ridge").length; index++)
	{
		$$$("Ridge")[index].innerText = HTML_Ridge;
	}
	for (index = 0; index < $$$("Dotted").length; index++)
	{
		$$$("Dotted")[index].innerText = HTML_Dotted;
	}
	for (index = 0; index < $$$("Inset").length; index++)
	{
		$$$("Inset")[index].innerText = HTML_Inset;
	}
	for (index = 0; index < $$$("Outset").length; index++)
	{
		$$$("Outset")[index].innerText = HTML_Outset;
	}
	for (index = 0; index < $$$("Dash").length; index++)
	{
		$$$("Dash")[index].innerText = HTML_Dash;
	}
}

'use strict';

$(document).ready(function () {

    // Executing convertEnglishDateToJapaneseDate() Function at the time of page load
    convertEnglishDateToJapaneseDate();

    // Executing checkSize() Function at the time of page load
    checkSize();

    // Executing checkSize() Function at the time of device change 
    $(window).resize(checkSize);
});

/** 
 * Function : English Date To Japanese Date Format Conversion.
 * Purpose : To display the current English Date in Japanese Date Format (令和４　8月　11日）.
**/
function convertEnglishDateToJapaneseDate() {
    var date = new Date();
    var language = "jp";
    var year = date.toLocaleString(language, {year: "numeric"});
    // var month = date.toLocaleString(language, {month: "numeric"});
    // var day = date.toLocaleString(language, {day: "numeric"});

    // console.log(`${year}年 ${month}月 ${day}日`);

    date.setFullYear(year);
    var japanese_date = date.toLocaleDateString("ja-JP-u-ca-japanese");
    // console.log(japanese_date)

    // S : Showa, R : Reiwa, H : Heisei, M : Meiji, T : Taisho
    if (japanese_date.charAt(0) == 'S') {
        var japanese_year_label = "昭和";
    } else if (japanese_date.charAt(0) == 'T') {
        var japanese_year_label = "大正";
    } else if (japanese_date.charAt(0) == 'H') {
        var japanese_year_label = "平成";
    } else if (japanese_date.charAt(0) == 'M') {
        var japanese_year_label = "明治";
    } else {
        var japanese_year_label = "令和";
    }

    // console.log(japanese_year_label);
    var japanese_date = japanese_year_label + ' ' + japanese_date.substring(1, 2) + "年 " + japanese_date.substring(3, 4) + "月 " + japanese_date.substring(5) + "日 ";
    // console.log(japanese_date);
    var text = japanese_date + " 現在";
    // console.log(text);

    document.getElementById("current-date").innerHTML = text;
}

/** 
 * Function : Check Device Size and adjusting elements accordingly.
 * Purpose : To fix the CSS issue of "dob" field value in a device of width 412px.
 * Explanation : When <td class="dob"></td> has a CSS of attribute "display" having value of "table-cell", convert the colspan from '4' to '3'.
**/
function checkSize() {
    if ($("td.dob").css("display") === "table-cell") {
        $("td.dob[colspan]").attr("colspan", 3);
        $("td.dob[colspan]").attr("Colspan", 3);
    }
}
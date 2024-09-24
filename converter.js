// converter.js
function unicodeToNCR(input) {
    var output = '';
    for (var i = 0; i < input.length; i++) {
        output += '&#' + input.charCodeAt(i) + ';';
    }
    return output;
}

function NCRToUnicode(input) {
    return input.replace(/&#(\d+);/g, function(match, numStr) {
        return String.fromCharCode(parseInt(numStr, 10));
    });
}

function convertText(input) {
    // Define your find and replace arrays
    var find = ["&#39;&#253;", "&#99;&#71;&#115;", "&#33;&#88;&#100;", "&#92;&#114;&#74;", "&#63;&#92;&#83;", "&#118;&#70;", "&#92;&#116;&#47;&#35;", "&#92;&#116;&#68;", "&#114;&#104;&#9;&#38;", "&#116;&#112;&#72;&#9;&#38;", "&#106;&#120;&#72;", "&#63;&#93;", "&#63;&#92;&#83;&#77;", "&#92;&#83;&#77;", "&#124;&#71;&#72;", "&#38;&#45;&#121;&#47;", "&#101;&#72;&#45;&#45;&#39;&#74;&#45;", "&#42;&#45;&#32;", "&#92;&#68;", "&#193;&#45;&#32;", "&#118;&#83;", "&#116;&#49;&#45;", "&#63;&#92;", "&#93;&#125;&#72;", "&#124;&#71;&#72;&#101;", "&#84;", "&#93;&#122;&#104;", "&#63;&#106;&#117;", "&#193;", "&#220;", "&#167;", "&#101;&#62;", "&#76;", "&#48;&#45;", "&#49;&#45;", "&#50;&#45;", "&#51;&#45;", "&#52;&#45;", "&#53;&#45;", "&#54;&#45;", "&#55;&#45;", "&#56;&#45;", "&#57;&#45;", "&#48;&#59;&#48;", "&#48;&#59;&#49;", "&#48;&#59;&#50;", "&#48;&#59;&#51;", "&#48;&#59;&#52;", "&#48;&#59;&#53;", "&#48;&#59;&#54;", "&#48;&#59;&#55;", "&#48;&#59;&#56;", "&#48;&#59;&#57;", "&#49;&#59;&#48;", "&#49;&#59;&#49;", "&#49;&#59;&#50;", "&#49;&#59;&#51;", "&#49;&#59;&#52;", "&#49;&#59;&#53;", "&#49;&#59;&#54;", "&#49;&#59;&#55;", "&#49;&#59;&#56;", "&#49;&#59;&#57;", "&#50;&#59;&#48;", "&#50;&#59;&#49;", "&#50;&#59;&#50;", "&#50;&#59;&#51;", "&#50;&#59;&#52;", "&#50;&#59;&#53;", "&#50;&#59;&#54;", "&#50;&#59;&#55;", "&#50;&#59;&#56;", "&#50;&#59;&#57;", "&#51;&#59;&#48;", "&#51;&#59;&#49;", "&#51;&#59;&#50;", "&#51;&#59;&#51;", "&#51;&#59;&#52;", "&#51;&#59;&#53;", "&#51;&#59;&#54;", "&#51;&#59;&#55;", "&#51;&#59;&#56;", "&#51;&#59;&#57;", "&#52;&#59;&#48;", "&#52;&#59;&#49;", "&#52;&#59;&#50;", "&#52;&#59;&#51;", "&#52;&#59;&#52;", "&#52;&#59;&#53;", "&#52;&#59;&#54;", "&#52;&#59;&#55;", "&#52;&#59;&#56;", "&#52;&#59;&#57;", "&#53;&#59;&#48;", "&#53;&#59;&#49;", "&#53;&#59;&#50;", "&#53;&#59;&#51;", "&#53;&#59;&#52;", "&#53;&#59;&#53;", "&#53;&#59;&#54;", "&#53;&#59;&#55;", "&#53;&#59;&#56;", "&#53;&#59;&#57;", "&#54;&#59;&#48;", "&#54;&#59;&#49;", "&#54;&#59;&#50;", "&#54;&#59;&#51;", "&#54;&#59;&#52;", "&#54;&#59;&#53;", "&#54;&#59;&#54;", "&#54;&#59;&#55;", "&#54;&#59;&#56;", "&#54;&#59;&#57;", "&#55;&#59;&#48;", "&#55;&#59;&#49;", "&#55;&#59;&#50;", "&#55;&#59;&#51;", "&#55;&#59;&#52;", "&#55;&#59;&#53;", "&#55;&#59;&#54;", "&#55;&#59;&#55;", "&#55;&#59;&#56;", "&#55;&#59;&#57;", "&#56;&#59;&#48;", "&#56;&#59;&#49;", "&#56;&#59;&#50;", "&#56;&#59;&#51;", "&#56;&#59;&#52;", "&#56;&#59;&#53;", "&#56;&#59;&#54;", "&#56;&#59;&#55;", "&#56;&#59;&#56;", "&#56;&#59;&#57;", "&#57;&#59;&#48;", "&#57;&#59;&#49;", "&#57;&#59;&#50;", "&#57;&#59;&#51;", "&#57;&#59;&#52;", "&#57;&#59;&#53;", "&#57;&#59;&#54;", "&#57;&#59;&#55;", "&#57;&#59;&#56;", "&#57;&#59;&#57;", "&#48;&#59;", "&#49;&#59;", "&#50;&#59;", "&#51;&#59;", "&#52;&#59;", "&#53;&#59;", "&#54;&#59;", "&#55;&#59;", "&#56;&#59;", "&#57;&#59;", "&#65;", "&#48;&#83;", "&#88;", "&#93;&#99;&#72;", "&#63;&#112;", "&#114;&#115;&#75;&#100;", "&#63;&#119;", "&#111;&#72;&#107;", "&#114;&#88;", "&#124;&#88;&#100;", "&#124;&#83;&#103;", "&#63;&#111;&#70;", "&#63;&#93;&#99;", "&#63;&#101;", "&#93;&#99;", "&#93;&#121;", "&#75;&#63;&#112;", "&#118;&#72;&#107;", "&#117;&#97;&#76;", "&#121;&#72;&#107;", "&#63;&#120;", "&#63;&#93;&#114;", "&#105;", "&#63;&#99;&#115;", "&#109;", "&#75;", "&#229;", "&#111;", "&#106;&#117;", "&#86;&#121;", "&#33;", "&#106;&#98;", "&#33;&#71;", "&#117;", "&#97;", "&#205;", "&#92;&#83;", "&#120;", "&#108;", "&#68;", "&#59;", "&#95;", "&#112;", "&#91;", "&#114;", "&#72;", "&#39;", "&#107;", "&#35;", "&#78;", "&#44;", "&#43;", "&#60;", "&#47;", "&#119;", "&#61;", "&#36;", "&#115;", "&#122;", "&#94;", "&#116;", "&#98;", "&#45;", "&#118;", "&#38;", "&#121;&#83;", "&#121;", "&#123;", "&#104;", "&#59;", "&#90;", "&#113;", "&#99;", "&#71;", "&#103;", "&#100;", "&#74;", "&#101;", "&#68;", "&#125;", "&#62;", "&#42;", "&#92;", "&#124;", "&#82;", "&#77;", "&#102;", "&#110;", "&#48;", "&#49;", "&#50;", "&#51;", "&#52;", "&#53;", "&#54;", "&#55;", "&#56;", "&#57;", "&#dash;", "&#colons;", "&#semicolons;", "&#32;&#4202;&#32;", "&#4202;&#4202;", "&#4114;&#45;", "&#4124;&#4152;&#4202;", "&#inv;", "&#fwdslash;", "&#339;"
]; // Placeholder: Fill with actual patterns
    var replace = ["&#4114;&#4153;&#4114;", "&#4097;&#4155;&#4157;", "&#4116;&#4158;&#4141;&#4143;", "&#4123;&#4121;&#4146;", "&#4193;&#4145;", "&#4124;&#4157;&#4158;", "&#4123;&#4129;&#4199;&#4205;", "&#4123;&#4129;&#4142;", "&#4121;&#4151;&#4123;&#4129;&#4203;", "&#4129;&#4101;&#4150;&#4123;&#4129;&#4203;", "&#4113;&#4156;&#4150;", "&#4117;&#4156;&#4145;", "&#4123;&#4158;&#4145;&#4151;", "&#4123;&#4158;&#4151;", "&#4123;&#4157;&#4150;", "&#4203;&#dash;&#4117;&#4199;", "&#4116;&#4150;&#4202;&#dash;&#4114;&#4146;&#dash;", "&#4204;&#dash;&#32;", "&#4123;&#4142;", "&#inv;&#32;&#dash;&#32;&#10;", "&#4124;&#4158;", "&#4129;&#4161;&#4202;", "&#4123;&#4145;", "&#4098;&#4156;&#4150;", "&#4123;&#4157;&#4150;&#4116;", "&#4151;", "&#4118;&#4156;&#4151;", "&#4096;&#4156;&#4145;", "&#34;", "&#34;", "&#fwdslash;", "&#4116;&#4151;", "&#4144;", "&#48;&#dash;", "&#49;&#dash;", "&#50;&#dash;", "&#51;&#dash;", "&#52;&#dash;", "&#53;&#dash;", "&#54;&#dash;", "&#55;&#dash;", "&#56;&#dash;", "&#57;&#dash;", "&#48;&#colons;&#48;", "&#48;&#colons;&#49;", "&#48;&#colons;&#50;", "&#48;&#colons;&#51;", "&#48;&#colons;&#52;", "&#48;&#colons;&#53;", "&#48;&#colons;&#54;", "&#48;&#colons;&#55;", "&#48;&#colons;&#56;", "&#48;&#colons;&#57;", "&#49;&#colons;&#48;", "&#49;&#colons;&#49;", "&#49;&#colons;&#50;", "&#49;&#colons;&#51;", "&#49;&#colons;&#52;", "&#49;&#colons;&#53;", "&#49;&#colons;&#54;", "&#49;&#colons;&#55;", "&#49;&#colons;&#56;", "&#49;&#colons;&#57;", "&#50;&#colons;&#48;", "&#50;&#colons;&#49;", "&#50;&#colons;&#50;", "&#50;&#colons;&#51;", "&#50;&#colons;&#52;", "&#50;&#colons;&#53;", "&#50;&#colons;&#54;", "&#50;&#colons;&#55;", "&#50;&#colons;&#56;", "&#50;&#colons;&#57;", "&#51;&#colons;&#48;", "&#51;&#colons;&#49;", "&#51;&#colons;&#50;", "&#51;&#colons;&#51;", "&#51;&#colons;&#52;", "&#51;&#colons;&#53;", "&#51;&#colons;&#54;", "&#51;&#colons;&#55;", "&#51;&#colons;&#56;", "&#51;&#colons;&#57;", "&#52;&#colons;&#48;", "&#52;&#colons;&#49;", "&#52;&#colons;&#50;", "&#52;&#colons;&#51;", "&#52;&#colons;&#52;", "&#52;&#colons;&#53;", "&#52;&#colons;&#54;", "&#52;&#colons;&#55;", "&#52;&#colons;&#56;", "&#52;&#colons;&#57;", "&#53;&#colons;&#48;", "&#53;&#colons;&#49;", "&#53;&#colons;&#50;", "&#53;&#colons;&#51;", "&#53;&#colons;&#52;", "&#53;&#colons;&#53;", "&#53;&#colons;&#54;", "&#53;&#colons;&#55;", "&#53;&#colons;&#56;", "&#53;&#colons;&#57;", "&#54;&#colons;&#48;", "&#54;&#colons;&#49;", "&#54;&#colons;&#50;", "&#54;&#colons;&#51;", "&#54;&#colons;&#52;", "&#54;&#colons;&#53;", "&#54;&#colons;&#54;", "&#54;&#colons;&#55;", "&#54;&#colons;&#56;", "&#54;&#colons;&#57;", "&#55;&#colons;&#48;", "&#55;&#colons;&#49;", "&#55;&#colons;&#50;", "&#55;&#colons;&#51;", "&#55;&#colons;&#52;", "&#55;&#colons;&#53;", "&#55;&#colons;&#54;", "&#55;&#colons;&#55;", "&#55;&#colons;&#56;", "&#55;&#colons;&#57;", "&#56;&#colons;&#48;", "&#56;&#colons;&#49;", "&#56;&#colons;&#50;", "&#56;&#colons;&#51;", "&#56;&#colons;&#52;", "&#56;&#colons;&#53;", "&#56;&#colons;&#54;", "&#56;&#colons;&#55;", "&#56;&#colons;&#56;", "&#56;&#colons;&#57;", "&#57;&#colons;&#48;", "&#57;&#colons;&#49;", "&#57;&#colons;&#50;", "&#57;&#colons;&#51;", "&#57;&#colons;&#52;", "&#57;&#colons;&#53;", "&#57;&#colons;&#54;", "&#57;&#colons;&#55;", "&#57;&#colons;&#56;", "&#57;&#colons;&#57;", "&#48;&#semicolons;", "&#49;&#semicolons;", "&#50;&#semicolons;", "&#51;&#semicolons;", "&#52;&#semicolons;", "&#53;&#semicolons;", "&#54;&#semicolons;", "&#55;&#semicolons;", "&#56;&#semicolons;", "&#57;&#semicolons;", "&#4119;", "&#4125;&#4158;", "&#4196;", "&#4097;&#4156;&#4143;&#4150;", "&#4101;&#4145;", "&#4121;&#4155;&#4141;&#4143;", "&#4112;&#4145;", "&#4126;&#4143;&#4150;", "&#4121;&#4158;&#4143;", "&#4123;&#4158;&#4141;", "&#4193;&#4139;", "&#4100;&#4154;&#4153;&#4126;&#4145;", "&#4097;&#4156;&#4145;", "&#4116;&#4145;", "&#4097;&#4156;", "&#4117;&#4156;", "&#4101;&#4145;", "&#4124;&#4143;&#4150;", "&#4096;&#4192;&#4144;", "&#4117;&#4143;&#4150;", "&#4113;&#4145;", "&#4121;&#4156;&#4145;", "&#4100;", "&#4097;&#4155;&#4145;", "&#4140;", "&#4143;", "&#4153;&#4112;", "&#4126;", "&#4096;&#4156;", "&#4117;&#4156;", "&#4116;", "&#4120;&#4156;", "&#4116;&#4157;", "&#4096;", "&#4192;", "&#4110;", "&#4193;", "&#4113;", "&#4144;", "&#4142;", "&#4152;", "&#4202;&#4151;", "&#4101;", "&#4127;", "&#4121;", "&#4150;", "&#4114;", "&#4143;", "&#4205;", "&#4155;&#4151;", "&#44;", "&#4203;&#4151;", "&#4122;", "&#4199;", "&#4112;", "&#4200;", "&#4201;", "&#4155;", "&#4118;", "&#4201;&#4151;", "&#4129;", "&#4120;", "&#4202;", "&#4124;", "&#4203;", "&#4198;", "&#4117;", "&#4135;", "&#4151;", "&#4203;", "&#4103;", "&#4102;", "&#4097;", "&#4157;", "&#4139;", "&#4141;", "&#4146;", "&#4116;", "&#4202;", "&#4098;", "&#4151;", "&#4204;", "&#4123;", "&#4123;&#4158;", "&#4144;", "&#4151;", "&#4154;", "&#4106;", "&#4160;", "&#4161;", "&#4162;", "&#4163;", "&#4164;", "&#4165;", "&#4166;", "&#4167;", "&#4168;", "&#4169;", "&#45;", "&#4152;", "&#59;", "&#32;&#45;&#32;", "&#45;&#45;", "&#4114;&#4202;", "&#4124;&#4152;&#45;", "&#34;", "&#47;", "&#61;"]; // Placeholder: Fill with actual replacements
    for (var i = 0; i < find.length; i++) {
        var regex = new RegExp(find[i], "g");
        input = input.replace(regex, replace[i]);
    }
    return input;
}

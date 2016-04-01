/* typinghuil 版本:1.0*/

(function($){
$.fn.typinghuil=function(options){
	$.fn.typinghuil.defaults ={
		typsd: 100,       //打字速度
		typtjg: 3000,      //一条停顿多少时间
		typfh: "|"        //打字符号
	};

options = $.extend($.fn.typinghuil.defaults,options);
	var typsd =options.typsd;
	var typtjg =options.typtjg;
	var typfh =options.typfh;
return this.each(function(){
    var $typa = $(this).find("li");
    $typa.hide();
    var $typal = $typa.length;  //对象数量
    var $typsd = typsd;  //打字速度
    var $typtjg = typtjg; //一条停顿多少时间
    var $typfh = typfh;
    var $typl = 0;     //第几个对象
    var $typt = "";    //空文本

   typFunYt($typl);
    function typFunYt(typl){  //一条
        $typt = $typa.eq(typl).find("a").text();
        $typa.eq(typl).find("a").html($typfh);
        $typa.eq(typl).show();
        var $typai = 0;
        
        var typaEval = setInterval(function(){
            if($typai < $typt.length){
            	if($typai % 2 == 0){
                	$typa.eq(typl).find("a").html($typt.substr(0, $typai) + $typfh);
            	}else{
                	$typa.eq(typl).find("a").html($typt.substr(0, $typai));
            	}
                $typai++;
            }else{
                $typa.eq(typl).find("a").html($typt.substr(0, $typai));
                if(typaEval){clearInterval(typaEval)}
                setTimeout(function(){
                    $typa.eq(typl).hide();
                    $typl++;
                    if($typl >= $typal){
                        $typl = 0;
                    }
                    typFunYt($typl);
                }, $typtjg);
            }
        }, $typsd);
    }
    
});

}})(jQuery)
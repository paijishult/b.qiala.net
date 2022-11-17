var tim=1;
setInterval("tim++",10);
var autourl=new Array();
for(i=0;i<=6;i++){
autourl[i]=$('.speedlist li').eq(i).find('a').attr("href");
}
function auto(url){
	var str=tim;
	console.log(str);
	if(url==autourl[0]){
		$('#lineMs0').html(str+'ms')
	}
	if(url==autourl[1]){
		$('#lineMs1').html(str+'ms')
	}
	if(url==autourl[2]){
		$('#lineMs2').html(str+'ms')
	}
	if(url==autourl[3]){
		$('#lineMs3').html(str+'ms')
	}
	if(url==autourl[4]){
		$('#lineMs4').html(str+'ms')
	}
	if(url==autourl[5]){
		$('#lineMs5').html(str+'ms')
	}
	if(url==autourl[6]){
		$('#lineMs6').html(str+'ms')
	}
}
function run(){
	for(var i=0;i<autourl.length;i++){
		document.write("<img src="+autourl[i]+"/"+Math.random()+" width=1 height=1 onerror=auto('"+autourl[i]+"') style='display:none'>");
	}
}
run()
((function() {

var callbacks = [],

timeLimit = 50,

open = false;

setInterval(loop, 1);

return {

addListener: function(fn) {

callbacks.push(fn);

},

cancleListenr: function(fn) {

callbacks = callbacks.filter(function(v) {

return v !== fn;

});

}

}

function loop() {

var startTime = new Date();

debugger;

if (new Date() - startTime > timeLimit) {

if (!open) {

callbacks.forEach(function(fn) {

fn.call(null);

});

}

open = true;

window.stop();

alert('小东西别扒了，源码论坛有人发了，https://www.paijishu.net/forum.php?mod=viewthread&tid=12394');

document.body.innerHTML = "";

} else {

open = false;

}

}

})()).addListener(function() {

window.location.reload();

});
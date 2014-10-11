$(document).ready(function(){
	toggleTheme(); 
	wordclock.illuminate();
	setInterval('wordclock.illuminate()',30000);
});

$(window).bind('hashchange',function(){ toggleTheme(); });

function toggleTheme(){
	if(location.hash!=''){
		$('html').removeClass('dark-theme');
		$('html').removeClass('light-theme');
	}
	
	if(location.hash=='#light'){
		$('html').addClass('light-theme');
	}else if(location.hash=='#dark'){
		$('html').addClass('dark-theme');
	}
}

var wordclock=new function(){
	
	this.illuminate=function(){

		this.localDate=new Date();
		this.mins=this.localDate.getMinutes();
		this.hrs=this.localDate.getHours();
		
		console.log(this.hrs+':'+this.mins);
		
		title=new Array();
		
		if(this.mins<10){
			title[0]='The Word Clock - '+this.hrs+':0'+this.mins;
			title[1]='The Word Clock - '+this.hrs+'.0'+this.mins;
		}else{
			title[0]='The Word Clock - '+this.hrs+':'+this.mins;
			title[1]='The Word Clock - '+this.hrs+'.'+this.mins;
		}
		
		document.title=title[1];
		setTimeout('document.title=title[0]',500);
		
		
		$('span').removeClass('illuminate');
		
		this.its();
		
		if(this.mins>=0 && this.mins<5){ this.oclock(); }
		if(this.mins>=5 && this.mins<10){ this.fiveMin(); this.minutes(); this.past(); }
		if(this.mins>=10 && this.mins<15){ this.tenMin(); this.minutes(); this.past(); }
		if(this.mins>=15 && this.mins<20){ this.quarter(); this.past(); }
		if(this.mins>=20 && this.mins<25){ this.twenty(); this.minutes(); this.past(); }
		if(this.mins>=25 && this.mins<30){ this.twenty(); this.fiveMin(); this.minutes(); this.past(); }
		if(this.mins>=30 && this.mins<35){ this.half();  this.past(); }
		if(this.mins>=35 && this.mins<40){ this.twenty(); this.fiveMin(); this.minutes(); this.to(); this.hrs++; }
		if(this.mins>=40 && this.mins<45){ this.twenty(); this.minutes(); this.to(); this.hrs++; }
		if(this.mins>=45 && this.mins<50){ this.quarter(); this.to(); this.hrs++; }
		if(this.mins>=50 && this.mins<55){ this.tenMin(); this.minutes(); this.to(); this.hrs++; }
		if(this.mins>=55 && this.mins<60){ this.fiveMin(); this.minutes(); this.to(); this.hrs++; }
		
		switch(this.hrs){
			case 0:
			case 12:
				this.twelve();
			break;
			
			case 1:
			case 13:
				this.one();
			break;
			
			case 2:
			case 14:
				this.two();
			break;
			
			case 3:
			case 15:
				this.three();
			break;
			
			case 4:
			case 16:
				this.four();
			break;
			
			case 5:
			case 17:
				this.fiveHrs();
			break;
			
			case 6:
			case 18:
				this.six();
			break;
			
			case 7:
			case 19:
				this.seven();
			break;
			
			case 8:
			case 20:
				this.eight();
			break;
			
			case 9:
			case 21:
				this.nine();
			break;
			
			case 10:
			case 22:
				this.tenHrs();
			break;
			
			case 11:
			case 23:
				this.eleven();
			break;
			
			case 12:
			case 0:
			case 24:
				this.twelve();
			break;
		}
	}
	
	this.its=function(){ $('#its').addClass('illuminate'); console.log('it\'s'); }
	this.half=function(){ $('#half').addClass('illuminate'); console.log('half'); }
	this.tenMin=function(){ $('#ten-min').addClass('illuminate'); console.log('ten'); }
	this.quarter=function(){ $('#quarter').addClass('illuminate'); console.log('quarter'); }
	this.twenty=function(){ $('#twenty').addClass('illuminate'); console.log('twenty'); }
	this.fiveMin=function(){ $('#five-min').addClass('illuminate'); console.log('five'); }
	this.minutes=function(){ $('#minutes').addClass('illuminate'); console.log('minutes'); }
	this.past=function(){ $('#past').addClass('illuminate'); console.log('past'); }
	this.to=function(){ $('#to').addClass('illuminate'); console.log('to'); }
	this.one=function(){ $('#one').addClass('illuminate'); console.log('one'); }
	this.three=function(){ $('#three').addClass('illuminate'); console.log('three'); }
	this.two=function(){ $('#two').addClass('illuminate'); console.log('two'); }
	this.four=function(){ $('#four').addClass('illuminate'); console.log('four'); }
	this.fiveHrs=function(){ $('#five-hrs').addClass('illuminate'); console.log('five'); }
	this.six=function(){ $('#six').addClass('illuminate'); console.log('six'); }
	this.seven=function(){ $('#seven').addClass('illuminate'); console.log('seven'); }
	this.eight=function(){ $('#eight').addClass('illuminate'); console.log('eight'); }
	this.nine=function(){ $('#nine').addClass('illuminate'); console.log('nine'); }
	this.tenHrs=function(){ $('#ten-hrs').addClass('illuminate'); console.log('ten'); }
	this.eleven=function(){ $('#eleven').addClass('illuminate'); console.log('eleven'); }
	this.twelve=function(){ $('#twelve').addClass('illuminate'); console.log('twelve'); }
	this.oclock=function(){ $('#oclock').addClass('illuminate'); console.log('o\'clock'); }
}
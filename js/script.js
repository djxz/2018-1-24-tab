
class Tab{
	constructor({head,content}){
		this.head = document.getElementById(head);
		this.content = document.getElementById(content);

		this.init();
	}
	init(){
		this.clickEvent();
	}
	clickEvent(){
		let olis = this.head.getElementsByTagName('li');
		let ulis = this.content.getElementsByTagName('li');
		[...olis].forEach(function(item,ind){
			item.addEventListener('click',()=>{
				[...ulis].forEach(function(item,ind){
					item.style.display='none';
				})
				ulis[ind].style.display = 'block';
			})
		})
	}
}



new Tab({
	head:'ols',
	content:'uls'
})
class UFO {
	static init(conf = {}) {
		const style = document.createElement("style"); // OR, create style.
		style.innerText = (`body, html { overflow-x: hidden; }.fp-loader-a5b2dy7 {position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;background:${conf.background || "rgb(29, 34, 37)"};display: flex;justify-content: center;align-items: center;}.fp-loader-a5b2dy7 .fp-gradient-9z9d4q {display:flex;align-self:center;justify-content:center;width:25vw;height:25vw;border-radius:100%;background:linear-gradient(180deg, ${conf.ringStartColor || "#2af598"} 0%, ${conf.ringEndColor || "#009efd"} 100%);box-shadow: 2px 2px 50px ${conf.ringEndColor || "#009efd"};}.fp-loader-a5b2dy7 .fp-gradient-9z9d4q .fp-hole-a873jv0 {width: 15vw; height: 15vw;background: ${conf.hole || "rgb(29, 34, 37)"};align-self: center; border-radius: 100%;}@keyframes fp-load {0% { transform: none; }100% { transform: skew(360deg); }}`).replace(/\n/g, "").replace(/\t/g, "").trim();
		document.body.appendChild(style);
	}
	constructor(element, config) {
		this.loaderContainer = element;
		this.animateElement = document.createElement("div");
		const holeDiv = document.createElement("div");
		this.animateElement.appendChild(holeDiv);
		this.loaderContainer.appendChild(this.animateElement);
		this.loaderContainer.classList.add("fp-loader-a5b2dy7");
		this.animateElement.classList.add("fp-gradient-9z9d4q");
		holeDiv.classList.add("fp-hole-a873jv0");
	}
	enable() { this.animateElement.style.animation = "fp-load 2.5s infinite"; }
	disable() { this.animateElement.style.animation = "none"; }
	show() { this.loaderContainer.style.display = "flex"; }
	hide() { this.loaderContainer.style.display = "none"; }
}
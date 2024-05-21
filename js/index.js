class Lunbotu {
  constructor(oBox, oL, oR, oLis) {
    this.oBox = oBox;
    this.oL = oL;
    this.oR = oR;
    this.oLis = oLis;
    this.index = 0;

    this.oLis[this.index].style.backgroundColor = "#0bc0f1";
    this.oBox.style.backgroundImage = `url(../img/${this.index + 1}.png) `;
    this.time;
    this.let();
  }

  changeBackGroundAndChangeLedRed() {
    this.oBox.style.backgroundImage = `url(../img/${this.index + 1}.png) `;

    for (let i = 0; i < this.oLis.length; i++) {
      if (i == this.index) {
        this.oLis[i].style.backgroundColor = "#0bc0f1";
      } else {
        this.oLis[i].style.backgroundColor = "rgba(1,1,1,.3)";
      }
    }
  }

  onclickL() {
    console.log(111);
    this.index--;

    if (this.index == -1) {
      this.index = this.oLis.length - 1;
    }

    this.changeBackGroundAndChangeLedRed();
  }

  onclickR() {
    this.index++;
    if (this.index == this.oLis.length) {
      this.index = 0;
    }

    this.changeBackGroundAndChangeLedRed();
  }

  onclickLis() {
    let that = this;
    for (let i = 0; i < this.oLis.length; i++) {
      this.oLis[i].onclick = function () {
        that.index = i;
        that.changeBackGroundAndChangeLedRed();
      };
    }
  }

  set() {
    let that = this;
    this.time = setInterval(function () {
      that.onclickR();
    }, 1500);

    this.oBox.onmouseover = function () {
      clearInterval(that.time);
    };

    this.oBox.onmouseout = function () {
      that.set();
    };
  }

  let() {
    let that = this;
    this.changeBackGroundAndChangeLedRed();

    this.oR.onclick = function () {
      that.onclickR();
    };

    this.oL.onclick = function () {
      that.onclickL();
    };

    this.onclickLis();
    this.set();
  }
}

import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  logs = [
  ];

  cells = [
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
    {data: ""},
  ]

  stripW: any = "";
  centerpos: number;
  centerposcurrent: number;
  currentIndex: number;
  showEye: boolean = true;
  x: number= null;
  y: number= null;
  footerShown: boolean = false;
  operation = '+';

  disableAll: boolean = false;
  state = '0';

  constructor(public navCtrl: NavController, public plt: Platform) {
      this.initialize();
      this.currentIndex = (this.cells.length / 2) - 0.5;
  }

  ionViewDidLoad(){

    document.addEventListener("keypress", (event) => {
      // alert(event.key);
      if (event.key == ',') {
        setTimeout(() => {
        this.move('left', 1);
        },);
      }else if (event.key == '.') {
        setTimeout(() => {
        this.move('right', 1);
        },);
      }else if (event.key == ';' || event.key == ' ' || event.key == 'Backspace') {
        setTimeout(() => {
        this.changeData('');
        },);
      }else if (event.key == "'") {
        setTimeout(() => {
        this.logs.unshift({
          date: new Date().toLocaleTimeString('it-IT'),
          data: '',
        })
        },);
      }else if (event.key == "c") {
        setTimeout(() => {
        this.logs = [];
        },);
      }else if (event.key == "]") {
        setTimeout(() => {
        this.refresh();
        console.log('ddw')
        },);
      }else if (event.key == 'Enter') {
        setTimeout(() => {
        this.clearAll();
        },);
        setTimeout(() => {
          this.center();
        },);
      }else if (event.key == 'h' || event.key == 'H') {
        setTimeout(() => {
        this.halt();
        },);
      }else if (event.key == 'r' || event.key == 'R') {
        setTimeout(() => {
        this.resetstate();
        },);
      }else if (event.key == 'z' || event.key == 'Z') {

        setTimeout(() => {
        this.state = "0";
        },);
        setTimeout(() => {
        this.logs.unshift({
          date: new Date().toLocaleTimeString('it-IT'),
          data: 'changed state to 0',
        })
        document.getElementById('state').style.backgroundColor = 'rgb(0, 27, 63)';
        document.getElementById('eyehand').style.backgroundColor = 'rgb(0, 119, 255)';
        document.getElementById('eye').style.borderColor = 'rgb(0, 119, 255)';
        },);
      }else if (event.key == 'X' || event.key == 'x') {
        setTimeout(() => {
        this.state = "1";
        this.logs.unshift({
          date: new Date().toLocaleTimeString('it-IT'),
          data: 'changed state to 1',
        })
        document.getElementById('state').style.backgroundColor = 'rgb(0, 27, 63)';
        document.getElementById('eyehand').style.backgroundColor = 'rgb(0, 119, 255)';
        document.getElementById('eye').style.borderColor = 'rgb(0, 119, 255)';
        },);
      }else {
        setTimeout(() => {
        this.changeData(event.key);
        },);
      }

      setTimeout(() => {
        this.refresh();
      }, 1000);
    });
   
  }

  refresh(){
    setTimeout(() => {
      console.log('refreshed')
    });
  }

  halt(){
    setTimeout(() => {
    this.state = "Halt (H)";
    this.logs.unshift({
      date: new Date().toLocaleTimeString('it-IT'),
      data: 'state reseted to Halt (H)',
    })
    document.getElementById('state').style.backgroundColor = 'rgb(255,0,99)';
    document.getElementById('eyehand').style.backgroundColor = 'rgb(255,0,99)';
    document.getElementById('eye').style.borderColor = 'rgb(255,0,99)';
    },);
  }

  resetstate(){
    setTimeout(() => {
    this.state = "0";
    this.logs.unshift({
      date: new Date().toLocaleTimeString('it-IT'),
      data: 'changed state to 0 (reset)',
    })
    document.getElementById('state').style.backgroundColor = 'rgb(0, 27, 63)';
    document.getElementById('eyehand').style.backgroundColor = 'rgb(0, 119, 255)';
    document.getElementById('eye').style.borderColor = 'rgb(0, 119, 255)';
    },);
  }

  initialize(){
    setTimeout(() => {
    this.stripW = (this.cells.length * 52 + 20) + "px";
    this.centerpos = (this.cells.length * 52 + 20) / 2;
    this.centerposcurrent = this.centerpos;
    },);
  }

  clearAll(){
    for(let i = 0 ; i< this.cells.length;i++){
      this.cells[i].data = "";
    }
    this.logs.unshift({
      date: new Date().toLocaleTimeString('it-IT'),
      data: '> cleared cells',
    })
  }

  hidefooter(){
    if(this.footerShown){
      if (this.plt.is('ios')) {
        document.getElementById('footer').style.transform = "translateY(185px)";
        this.footerShown = !this.footerShown;
      }else{
        document.getElementById('footer').style.transform = "translateY(170px)";
        this.footerShown = !this.footerShown;
      }
    
    }else{
      document.getElementById('footer').style.transform = "translateY(0px)";
      this.footerShown = !this.footerShown;
    }
  }

  compute(){
    if(this.x <= 25 && this.y <= 25 && this.x>=0 && this.y>=0){
      this.disableAll = !this.disableAll;
      this.hidefooter();
      var back = this.zeroOf(this.x).length;
      var front = this.zeroOf(this.y).length;
      const first_timer = 300;
      const second_timer = 600
      setTimeout(() => {
        this.move('left', back)
      });
  
      setTimeout(() => {
        for(let i=0;i<back;i++){
          setTimeout(() => {
            this.changeData('0');
          },(first_timer + (second_timer*i)));
  
          setTimeout(() => {
            this.move('right', 1);
          },(second_timer + (second_timer*i)));
        }
      });
  
      setTimeout(() => {
        this.changeData('#');
        for(let i=0;i<front;i++){
          setTimeout(() => {
            this.move('right', 1);
          },(first_timer + (second_timer*i)));
  
          setTimeout(() => {
            this.changeData('0');
          },(second_timer + (second_timer*i)));
        }
      },(back*second_timer) + first_timer);
  
      setTimeout(() => {
        this.move('left', front);
        this.disableAll = !this.disableAll;
        this.hidefooter();
      },(front*second_timer) + (back*second_timer) + (first_timer*2));
  
    }else{

    }
  }

  compute2(){
    if(this.x <= 25 && this.y <= 25 && this.x>=0 && this.y>=0){
      this.disableAll = !this.disableAll;
      this.hidefooter();
      var back = this.zeroOf(this.x).length;
      var front = this.zeroOf(this.y).length;
      const first_timer = 500;
      const second_timer = 1000;
      this.state = "Auto";
      setTimeout(() => {
        this.move('left', back)
      });
  
      setTimeout(() => {
        for(let i=0;i<back;i++){
          setTimeout(() => {
            this.changeData('0');
          },(first_timer + (second_timer*i)));
  
          setTimeout(() => {
            this.move('right', 1);
          },(second_timer + (second_timer*i)));
        }
      });
  
      setTimeout(() => {
        this.changeData('#');
        for(let i=0;i<front;i++){
          setTimeout(() => {
            this.move('right', 1);
          },(first_timer + (second_timer*i)));
  
          setTimeout(() => {
            this.changeData('0');
          },(second_timer + (second_timer*i)));
        }
      },(back*second_timer) + first_timer);
  
      setTimeout(() => {
        this.move('left', front + back);
      },(front*second_timer) + (back*second_timer) + (first_timer*2));

      setTimeout(() => {
        this.replace();
      },(front*second_timer) + (back*second_timer) + (first_timer*2));
  
    }else{

    }
  }

  
  replace(){
    const first_timer = 500;
    const second_timer = 2000;
    var back = this.zeroOf(this.x).length;
    var front = this.zeroOf(this.y).length;
    setTimeout(() => {
      for(let i=0;i<(back);i++){
        setTimeout(() => {
          this.changeData('');
        },(first_timer*1 + second_timer*i));
        setTimeout(() => {
          this.move('right', (back + front + 1));
        },(first_timer*2 + second_timer*i));
        setTimeout(() => {
          this.changeData('0');
        },(first_timer*3 + second_timer*i));
        setTimeout(() => {
          this.move('left', (back + front));
        },(first_timer*4 + second_timer*i));
      }
    });

    setTimeout(() => {

      this.changeData('');
    },(second_timer*back + first_timer));

    setTimeout(() => {
      
      this.state = "Halt (H)";
      this.logs.unshift(
        {
          date: new Date().toLocaleTimeString('it-IT'),
          data: ''
        },
        {
        date: new Date().toLocaleTimeString('it-IT'),
        data: 'state reseted to Halt (H)',
      })
      document.getElementById('state').style.backgroundColor = 'rgb(255,0,99)';
      document.getElementById('eyehand').style.backgroundColor = 'rgb(255,0,99)';
      document.getElementById('eye').style.borderColor = 'rgb(255,0,99)';

      this.countAddition();

    },(second_timer*back + first_timer*2));
  }

  countAddition(){
    const first_timer = 500;
    const second_timer = 1000;
    var back = this.zeroOf(this.x).length;
    var front = this.zeroOf(this.y).length;
    
    setTimeout(() => {
      for(let i=0;i<(back+front);i++){
        setTimeout(() => {
          this.move('right', 1);
        },(first_timer + (second_timer*i)));
      }
    });

    setTimeout(() => {
      this.disableAll = !this.disableAll;
      this.hidefooter();
      this.move('left', back+front-1);
      this.logs.unshift({
        date: new Date().toLocaleTimeString('it-IT'),
        data: back + ' + ' + front + ' = ' + this.zeroOf(back + front) + ' = ' + (back + front),
      })
    },(first_timer + (second_timer*(back+front))));

    
  }

  togglescanner(){
   if(this.showEye){
    document.getElementById('eyewrapper').style.display = 'block';
   }else{
     document.getElementById('eyewrapper').style.display = 'none';
   }
  }

  binaryOf(number){
    return (+number).toString(2)
  }

  zeroOf(number){
    let num = '';
    for(let i=0;i<number;i++){
      num += "0"
    }
    return num;
  }

  decimalOf(number){
    return parseInt(number, 2);
  }

  move(direction, n){
    if(direction.toLowerCase() == 'right'){
      if(this.currentIndex >= 0 && this.currentIndex < this.cells.length -1){
        this.centerposcurrent += 52 * n;
        document.getElementById('strip').style.transform = "translateX(-" + this.centerposcurrent + "px)";
        this.currentIndex += n;
        this.logs.unshift({
          date: new Date().toLocaleTimeString('it-IT'),
          data: 'moved right > ' + n,
        })
      }
    }else if(direction.toLowerCase() == 'left'){
      if(this.currentIndex > 0 && this.currentIndex <= this.cells.length -1){
        this.centerposcurrent -= 52 * n;
        document.getElementById('strip').style.transform = "translateX(-" + this.centerposcurrent + "px)";
        this.currentIndex -= n;
        this.logs.unshift({
          date: new Date().toLocaleTimeString('it-IT'),
          data: 'moved left < ' + n,
        })
      }
    }
    // if(this.currentIndex > (this.cells.length - 5)){
    //   this.cells.push(
    //     {data: ""},
    //     );
    //     this.initialize();
    // }
  }

  center(){
    this.currentIndex = (this.cells.length / 2) - 0.5;
    this.centerposcurrent = this.centerpos;
    document.getElementById('strip').style.transform = "translateX(-" + this.centerpos + "px)";
    this.logs.unshift({
      date: new Date().toLocaleTimeString('it-IT'),
      data: 'moved back to center',
    })
  }

  changeData(x){
    var eye = document.getElementById('eye').style;
    eye.backgroundColor = 'rgba(0,0,255,0.85)'
    setTimeout(() => {
      this.cells[this.currentIndex].data = x ;
      this.logs.unshift({
        date: new Date().toLocaleTimeString('it-IT'),
        data: 'changed data on cell ' + this.currentIndex + ' to ' + x,
      })
      eye.backgroundColor = 'rgba(255,0,0,0.85)'
    }, 100);
    setTimeout(() => {
      eye.backgroundColor = 'rgba(0,255,0,0.85)'
    }, 150);
    setTimeout(() => {
      eye.backgroundColor = ''
    }, 200);
  }

  // hard coded stuff
  // changeToZero(){
  //   this.cells[this.currentIndex].data = 0 ;
  // }

  // changeToOne(){
  //   this.cells[this.currentIndex].data = 1 ;
  // }

  backward(){
    if(this.currentIndex > 0 && this.currentIndex <= this.cells.length -1){
      this.centerposcurrent -= 52;
      document.getElementById('strip').style.transform = "translateX(-" + this.centerposcurrent + "px)";
      this.currentIndex--;
    }
  }

  forward(){
    if(this.currentIndex >= 0 && this.currentIndex < this.cells.length -1){
      this.centerposcurrent += 52;
      document.getElementById('strip').style.transform = "translateX(-" + this.centerposcurrent + "px)";
      this.currentIndex++;
    }
  }
}

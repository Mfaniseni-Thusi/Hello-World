
var johns = {
    rawBills: [124, 48, 268, 180, 42],
    finalTips: [],
    finalBills: [],
    billsCalculator: function(){
        var i;
        var tipValue;
        for(i = 0; i < this.rawBills.length; i++){
            switch(true){
                case this.rawBills[i] > 0 && this.rawBills[i] <  50:
                    tipValue =  this.rawBills[i]*0.2   //rawBills[i]*0.2;
                    break;
    
                case this.rawBills[i] > 50 && this.rawBills[i] <  200:
                    tipValue = this.rawBills[i]*0.15;
                    break;
    
                default:
                    tipValue = this.rawBills[i]*0.10;
            }
            this.finalTips.push(tipValue);
            this.finalBills.push(tipValue + this.rawBills[i]);
            
        }
    }
}

var marks = {
    rawBills: [77, 375, 110, 45],
    finalTips: [],
    finalBills: [],
    billsCalculator: function(){
        var i;
        var tipValue;
        for(i = 0; i < this.rawBills.length; i++){
            switch(true){
                case this.rawBills[i] > 0 && this.rawBills[i] <  100:
                    tipValue =  this.rawBills[i]*0.2   //rawBills[i]*0.2;
                    break;
    
                case this.rawBills[i] > 100 && this.rawBills[i] <  300:
                    tipValue = this.rawBills[i]*0.1;
                    break;

                case this.rawBills[i] > 100 && this.rawBills[i] <  300:
                    tipValue = this.rawBills[i]*0.25;
                    break;
                default:
                    tipValue = 0;
            }
            this.finalTips.push(tipValue);
            this.finalBills.push(tipValue + this.rawBills[i]);
            
        }
    }
}

johns.billsCalculator();
marks.
console.log(johns.finalTips);
console.log(johns.finalBills);


/*
var johns = {
    rawBills: [124, 48, 268, 180, 42],
    finalTips: [],
    finalBills: [],
    billsCalculator: function(){
        var i;
        var tipValue;
        for(i = 0; i < this.rawBills.length; i++){
            switch(true){
                case this.rawBills[i] > 0 && this.rawBills[i] <  50:
                    tipValue =  this.rawBills[i]*0.2   //rawBills[i]*0.2;
                    break;
    
                case this.rawBills[i] > 50 && this.rawBills[i] <  200:
                    tipValue = this.rawBills[i]*0.15;
                    break;
    
                default:
                    tipValue = this.rawBills[i]*0.10;
            }
            this.finalTips.push(tipValue);
            this.finalBills.push(tipValue + this.rawBills[i]);
            
        }
    }
}


johns.billsCalculator();
console.log(johns.finalTips);
console.log(johns.finalBills);
*/




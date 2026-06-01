function Car(carColor, carType, carQuantity, date){
    this.carColor = carColor;
    this.carType = carType;
    this.carQuantity = carQuantity;
    this.date = new Date(date);
    this.getDay = function(){
        return this.date.getDay
    }
}


const Car1 = new Car ('Red', '4 Wheeler', '1', '5-30-2026')
    console.log(Car1.date.getDate());
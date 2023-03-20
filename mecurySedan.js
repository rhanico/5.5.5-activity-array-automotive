//this includes the vehicle class as a module
const VehicleModule = require("./vehicle.js")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


class Car extends VehicleModule{
    constructor (make, model, year, color, mileage, maximumPassengers, maximumSpeed, fuel, scheduleService, passengers, numberOfWheels) {
        supper( make, model, year, color, mileage,);
       /*
        this.maximumPassengers = maximumPassengers;
        this.passengers = passengers;
        this.numberOfWheels = numberOfWheels;
        this.maximumSpeed = maximumSpeed;
        this.fuel = fuel;
        this.scheduleService = scheduleService;
        */

        this.maximumPassengers = "5";
        this.passengers = "0";
        this.numberOfWheels = "4";
        this.maximumSpeed = "160";
        this.fuel = "10";
        this.scheduleService = "false";
    }

    loadPassenger(nun){
        if (nun <= this.maximumPassengers) {
            super.passengers = nun;
            return true;
        }
        else {
            return false;
        }
    }

    start () {
        if (this.fuel >0)
            return true;
        else
            return false;
    }

    scheduleService(mileage){
        if (mileage > this.scheduleService){
            return true;
        }
        else{
            return false;
        }
    }
    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;               
            } 
            else {

            }
        }
    }
}


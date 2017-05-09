window.addEventListener('load', function () {

    let ShopModel = require('./shopmodel');
    let ShopView = require('./shopview');

    let carShop = new ShopModel();
    carShop.tires = 2;
    carShop.paint = 'not painted';
    carShop.exhaust = 'broken';
    carShop.horsepower = 400;
    carShop.mpg = 18;
    carShop.bill = 0; 

    let sv = new ShopView({
        el: document.querySelector('section'),
        model: carShop,
    });

    sv.render();

    let repTire = document.querySelector('#repair-tire');
    let pntRed = document.querySelector('#change-red');
    let pntGrn = document.querySelector('#change-green');
    let pntOrng = document.querySelector('#change-orange');
    let pntBlk = document.querySelector('#change-black');
    let fixEx = document.querySelector('#broken');
    let incHP = document.querySelector('#increaseHP');
    let incMPG = document.querySelector('#increaseMPG');

    repTire.addEventListener('click', function () {
        carShop.tires -= 1; 
        carShop.bill += 200; 
    }); 

    pntRed.addEventListener('click', function () {
        carShop.paint = 'red';
        carShop.bill += 300; 
    }); 

    pntGrn.addEventListener('click', function() {
        carShop.paint = 'green'; 
        carShop.bill += 300; 
    }); 

    pntOrng.addEventListener('click', function() {
        carShop.paint = 'orange'; 
        carShop.bill += 300; 
    }); 

    pntBlk.addEventListener('click', function() {
        carShop.paint = 'black'; 
        carShop.bill += 300; 
    }); 

    fixEx.addEventListener('click', function() {
        carShop.exhaust = 'fixed'; 
        carShop.bill += 300; 
    }); 

    incHP.addEventListener('click', function() { 
        carShop.horsepower += 10; 
        carShop.bill += 100; 
    }); 

    incMPG.addEventListener('click', function() {
        carShop.mpg += 5; 
        carShop.bill += 100; 
        carShop.horsepower -= 1; 
    }); 


}); 
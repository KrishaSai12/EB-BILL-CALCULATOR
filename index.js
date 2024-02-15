function calculate() {
    let form = document.querySelector('#form')
    let consumedUnits = Number(document.querySelector('#consumedUnit').value);
    let result = document.getElementById('res')
    console.log(consumedUnits)
    

    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        
   
    if(consumedUnits<=0 || isNaN(consumedUnits)){
        result.textContent =`Please Enter the Consumed Units To Calculate Your Bill`
        return
    }

    let totalAmount = 0;

    if (consumedUnits > 500) {
        // For first 100 units
        totalAmount += Math.min(consumedUnits, 100) * 0;

        // For next 300 units (101 to 400)
        totalAmount += Math.max(Math.min(consumedUnits - 100, 300), 0) * 4.50;

        // For next 100 units (401 to 500)
        totalAmount += Math.max(Math.min(consumedUnits - 400, 100), 0) * 6.00;

        // For next 100 units (501 to 600)
        totalAmount += Math.max(Math.min(consumedUnits - 500, 100), 0) * 8.00;

        // For next 200 units (601 to 800)
        totalAmount += Math.max(Math.min(consumedUnits - 600, 200), 0) * 9.00;

        // For next 200 units (801 to 1000)
        totalAmount += Math.max(Math.min(consumedUnits - 800, 200), 0) * 10.00;

        // For units above 1000
        totalAmount += Math.max(consumedUnits - 1000, 0) * 11.00;
    } else {
        // For units less than or equal to 500
        // For first 100 units
        totalAmount += Math.min(consumedUnits, 100) * 0;

        // For next 100 units (101 to 200)
        totalAmount += Math.max(Math.min(consumedUnits - 100, 100), 0) * 2.25;

        // For next 200 units (201 to 400)
        totalAmount += Math.max(Math.min(consumedUnits - 200, 200), 0) * 4.50;

        // For next 100 units (401 to 500)
        totalAmount += Math.max(Math.min(consumedUnits - 400, 100), 0) * 6.00;
    }
    result.textContent = `Net Amount for the consumed units : Rs. ${totalAmount}`
})

}

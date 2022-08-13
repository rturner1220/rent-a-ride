const reservationModal = document.querySelector("#reservation-modal")
const reservationInput = reservationModal.querySelector('.date-range')
const reservationInputEnd = reservationModal.querySelector('.date-range-end')
const reservationDatePicker = datepicker(
    reservationInput,
    {
        id: 1,
        alwaysShow: true

    }
)
const reservationDatePickerEnd = datepicker(
    reservationInputEnd,
    {
        id: 1,
        alwaysShow: true

    }
)


document.querySelectorAll('#reserve').forEach(item => {
    item.addEventListener('click', event => {

        reservationModal.showModal();

    })
});

reservationModal.querySelector('#reserve-button').addEventListener('click',
    async () => {
        const reservationRange = reservationDatePicker.getRange()
        console.log(reservationRange)
        const response = await fetch('/api/vehicle/reserve', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            // link to the totals page. 
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    });


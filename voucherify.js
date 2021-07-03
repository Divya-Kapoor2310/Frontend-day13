Voucherify.initialize(
    "4dde7477-d8d1-4057-8f91-8a9e7137acee",
    "404c6c0b-4445-4f14-84b1-f4a58f1da2f6"
)

Voucherify.render("#voucher-widget", {
    textPlaceholder: "Your coupon...",
    onValidated: function(response) {
      if (response) {
        const priceTag = document.querySelector('#priceTag') 
        priceTag.innerHTML = Voucherify.utils.calculatePrice(parseInt(priceTag.innerHTML), response)
      }
    }
})

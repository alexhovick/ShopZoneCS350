const CheckoutSuccess = () => {
  return (
    <div className=" text-3xl text-white text-center items-center justify-center">
      <div className="p-36 bg-transparent  items-center justify-center">
        <div className="bg-transparent/20 rounded-lg p-8 shadow-md">
          <div className="text-3xl text-green-600 font-bold mb-4">
            Order Successful
          </div>
          <p className="text-white mb-4 i">
            Thank you for your order. Your order has been successfully processed.
          </p>
          <p className="text-xl mb-8">
          <i> A confirmation email will be sent to you shortly.</i>
          </p>

          <button className="w-[250px]">
            <a
              href="/"
              className="bg-blue-500 hover:bg-blue-600 text-xl text-white py-2 px-4 rounded-full text-center block"
            >
              Continue Shopping
            </a>
          </button>
          
        </div>
      </div>
    </div>
    
  )
}

export default CheckoutSuccess;
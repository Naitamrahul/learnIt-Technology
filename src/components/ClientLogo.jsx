import React from 'react'

const ClientLogo = () => {
  return (
    <div>
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-4">Trusted by Leading Brands</h2>
          <div className="row justify-content-center align-items-center">
            {["google", "microsoft", "ibm", "amazon", "tcs", "infosys"].map((brand, i) => (
              <div className="col-4 col-md-2 mb-3" key={i}>
                <img
                  src={`https://logo.clearbit.com/${brand}.com`}
                  alt={brand}
                  className="img-fluid grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default ClientLogo

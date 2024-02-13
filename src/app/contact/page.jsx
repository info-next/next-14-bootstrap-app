export const metadata = {
  title: 'Contact',
  description: 'Contact page of Info-next',
}

const contactPage = () => {
  return (
   <>
    <section id="sec-contact" className="sec-contact pt-5 pb-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-7">
          <h1 className="h4">Have a question? Get in touch with us!</h1>
          
          <form action="" method="">
            <fieldset className="form-group">
              <label>Your Name:</label>
              <input id="formName" className="form-control" type="text" placeholder="Your Name" required/>
            </fieldset>
              
            <fieldset className="form-group">
              <label>Email address:</label>
              <input id="formEmail1" className="form-control" type="email" placeholder="Enter email" required/>
            </fieldset>
            
            <fieldset className="form-group">
              <label>Your Message:</label>
              <textarea id="formMessage" className="form-control" rows="3" placeholder="Your message" required></textarea>
            </fieldset>
            
            <fieldset className="form-group text-center pt-3">
              <button className="btn btn-primary" type="submit">Send Message</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </section>
   </>
  )
}

export default contactPage
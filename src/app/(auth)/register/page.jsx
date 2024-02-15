import styles from './register.module.css'
const registerPage = () => {
  return (
  
<>
<div className="form-body">
    <div className="row">
        <div className={styles.formHolder}>
            <div className={styles.formContent}>
                <div className={styles.formItems}>
                    <h3>Register Today</h3>
                    <p>Fill in the data below.</p>
                    <form className="requires-validation">

                        <div className="col-md-12 mb-3">
                           <input className="form-control" type="text" name="name" placeholder="Full Name" required/>
                           <div className="valid-feedback">Username field is valid!</div>
                           <div className="invalid-feedback">Username field cannot be blank!</div>
                        </div>

                        <div className="col-md-12 mb-3">
                            <input className="form-control" type="email" name="email" placeholder="E-mail Address" required/>
                             <div className="valid-feedback">Email field is valid!</div>
                             <div className="invalid-feedback">Email field cannot be blank!</div>
                        </div>

                       <div className="col-md-12 mb-3">
                          <input className="form-control" type="password" name="password" placeholder="Password" required/>
                           <div className="valid-feedback">Password field is valid!</div>
                           <div className="invalid-feedback">Password field cannot be blank!</div>
                       </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                      <label className="form-check-label">I confirm that all data are correct</label>
                     <div className="invalid-feedback">Please confirm that the entered data are all correct!</div>
                    </div>
              

                        <div className="form-button mt-3">
                            <button id="submit" type="submit" className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

</>
  )
}

export default registerPage
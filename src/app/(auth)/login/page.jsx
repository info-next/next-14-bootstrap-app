import styles from '../register/register.module.css'
const loginPage = () => {
  return (
    <>
    <div className="form-body">
        <div className="row">
            <div className={styles.formHolder}>
                <div className={styles.formContent}>
                    <div className={styles.formItems}>
                        <h3>Welcom back</h3>
                        <p>Fill in the data below to login</p>
                        <form className="requires-validation">
    
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
                  
    
                            <div className="form-button mt-3">
                                <button id="submit" type="submit" className="btn btn-primary">Login</button>
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

export default loginPage
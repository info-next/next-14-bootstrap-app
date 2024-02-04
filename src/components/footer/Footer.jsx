import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div>
		<section className={styles.copyright}>
			<div className="container">
				<div className="row">
					<div className="col-md-12 ">
						<div className="text-center text-white">
							&copy; 2024 Your Company. All Rights Reserved.
						</div>
					</div>
				</div>
			</div>
		</section>
    </div>
  )
}

export default Footer
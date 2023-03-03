import React from 'react'
import { Link } from 'react-router-dom'
import Styles from "../Styles/error.module.css"

export default function ErrorPage() {
  return (
      <section className={Styles.page_404}>
	<div className={Styles.container}>
		<div className={Styles.row}>	
                  <div className={Styles.col_sm_12}>
		<div className={`${Styles.col_sm_10} ${Styles.col_sm_offset_1} ${Styles.text_center}`}>
                          <div className={Styles.four_zero_four_bg}>
                              <h1 className={Styles.text_center}>404</h1>
		
		
		</div>
		
                          <div className={Styles.contant_box_404}>
                              <h3 className={Styles.h2}>
		Look like you're lost
		</h3>
		
		<p>the page you are looking for not avaible!</p>
		
                              <Link to="/" className={Styles.link_404}>Go to Home</Link>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
  )
}

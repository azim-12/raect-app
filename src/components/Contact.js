import React from 'react'

export default function Contact(props) {
  return (
    <div className="container d-flex justify-content-center" style={{height: '90vh' }}>
        <div style={{width: '40%', margin: 'auto'}}>
            <img src={require('../components/img-01.png')} alt="IMG" style={{width: '75%'}}/>
        </div>
        <div style={{width: '60%', margin: 'auto'}}>   
            <form>
                <h2>Get in touch</h2>
                    <div>
                    <input className="input1 my-3" type="text" name="name" style={{width: '100%' , border: 'none', borderBottom: '1px solid black'}}  placeholder="Name"/>
                    <span className="shadow-input1"></span>
                    </div>

                    <div>
                    <input className="input1 my-3" type="text" name="email" style={{width: '100%' , border: 'none', borderBottom: '1px solid black'}}  placeholder="Email"/>
                    <span className="shadow-input1"></span>
                    </div>

                    <div>
                    <input className="input1 my-3" type="text" name="subject"  style={{width: '100%' , border: 'none', borderBottom: '1px solid black'}} placeholder="Subject"/>
                    <span className="shadow-input1"></span>
                    </div>

                    <div>
                    <textarea className="input1 my-3" name="message" style={{width: '100%' , border: 'none', borderBottom: '1px solid black'}}  placeholder="Message"></textarea>
                    <span className="shadow-input1"></span>
                    </div>

                    <button className="btn btn-success contact1-form-btn">
						<span>
							Send Email
							<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
						</span>
					</button>
            </form>
        </div>
    </div>
  )
}

/*
- Contact
		- Web form
			- email
			- first name
			- last name
			- subject
			- content (text area)
			- Submit button
				- This needs a submit handler, but you just need to display something like an alert, it doesn't have to actually send an email off.
		- Contact information
			- Does not need to actually contain your real info. Fake info is perfect.
*/

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact page</h1>
        </div>
        <div className="contact-information-container">
          <div className="number-wrapper">
            <p>Phone: 555-555-555</p>
          </div>
          <div className="email-wrapper">
            <p>Email: fake.email@fakedomain.com</p>
          </div>
          <div className="address-wrapper">
            <p>Address: 123 Butthead Street, Salt Lake City, UT</p>
          </div>
        </div>
        
        
        <div className="contact-us-container">
          <div className="text-wrapper">
            <h1>Contact Us</h1>
          </div>

          <div className="user-information-wrapper">
            <div className="user-email">
              <input type="email" placeholder="Your email"></input>
            </div>

            <div className="subject-wrapper">
              <input type="text" placeholder="Subject"></input>
            </div>
          </div>

          <div className="users-name">
            <div className="user-full-name">
              <input type="text" placeholder="Your Name"></input>
            </div>
          </div>

          <div className="message-container">
            <div className="text-wrapper">
              <input type="subject" placeholder="Message here"></input>
            </div>

            <div className="submit-wrapper">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
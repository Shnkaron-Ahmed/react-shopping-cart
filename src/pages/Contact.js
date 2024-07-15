const Contact = () => {
    return (
        <section className="contact-section">
        <div className="container">
            <div className="header">
                <h2>Contact Us</h2>
                <p>
                At ForwardBeauty, we offer premium skincare products for radiant, healthy skin. Contact us for any questions or skincare advice.


               </p>
            </div>
            <div className="form-container">
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your email address" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="4" placeholder="Your message"></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
        </div>
    </section>
        



);
};

export default Contact;

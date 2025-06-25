import "./Hire.css"

function Hire() {
    return (
        <div className="Hire">
            <h2>Hire <span>Me</span></h2>
            <form action="#">
                <div className="input-box">
                    <div className="input-field">
                        <input type="text" placeholder="Full Name" required />
                    </div>
                    <div className="input-field">
                        <input type="email" placeholder="Email Address" required />
                    </div>
                </div>
                <div className="input-box">
                    <div className="input-field">
                        <input type="number" placeholder="Mobile Number" required />
                    </div>
                    <div className="input-field">
                        <input type="email" placeholder="Email Subject" required />
                    </div>
                </div>
                <div className="textarea-field">
                    <textarea cols={30} rows={10} placeholder="Your Message" required></textarea>
                </div>
                <button className="hire-btn">Submit</button>
            </form>
        </div>
    )
}

export default Hire
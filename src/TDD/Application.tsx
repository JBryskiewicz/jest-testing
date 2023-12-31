export function Application() {
    return (
        <>
            <h1>Job application form</h1>
            <h2>Section 1</h2>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name"/>
                </div>
                <div>
                    <label htmlFor="bio">Bio</label>
                    <textarea id="bio" name="bio"/>
                </div>
                <div>
                    <label htmlFor="job-location">Job location</label>
                    <select id="job-location">
                        <option value="">Select a country</option>
                        <option value="US">United States</option>
                        <option value="GB">Great Britain</option>
                        <option value="PL">Poland</option>
                        <option value="DE">Germany</option>
                        <option value="AU">Australia</option>
                    </select>
                </div>
                <div>
                    <label>
                        <input type="checkbox" id="terms"/>
                        I agree to the terms and conditions
                    </label>
                </div>
                <button>Submit</button>
            </form>
        </>
    );
}
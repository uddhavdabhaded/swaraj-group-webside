import { PHONE, PHONE_SHOWN, EMAIL } from '../config.js'

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault()
    const f = e.target
    const text = 'Hello Swaraj Group,\nName: ' + f.name.value + '\nPhone: ' + f.phone.value +
      '\nInterest: ' + f.intent.value + '\nMessage: ' + f.msg.value
    window.open('https://wa.me/' + PHONE + '?text=' + encodeURIComponent(text), '_blank', 'noopener')
  }

  return (
    <section id="contact">
      <div className="wrap two">
        <div className="cinfo">
          <h2>Talk to us</h2>
          <p>Send your requirement and we will get back to you. It takes less than a minute.</p>
          <p><b>Address</b>Swaraj Group, Opposite Kunal Aspiree, Balewadi-Baner, Pune, Maharashtra</p>
          <p><b>Phone</b><a href={'tel:+' + PHONE}>{PHONE_SHOWN}</a></p>
          <p><b>Email</b><a href={'mailto:' + EMAIL}>{EMAIL}</a></p>
        </div>
        <form id="enq" onSubmit={onSubmit}>
          <label>Your name<input name="name" required autoComplete="name" /></label>
          <label>Phone number<input name="phone" type="tel" required autoComplete="tel" /></label>
          <label>I want to
            <select name="intent">
              <option>Buy land</option>
              <option>Sell land</option>
              <option>Develop my land</option>
              <option>Property consulting</option>
            </select>
          </label>
          <label>Message<textarea name="msg" rows="3" placeholder="Location, budget, plot size..."></textarea></label>
          <button className="btn" type="submit">Send on WhatsApp</button>
          <p className="note">This opens WhatsApp with your message ready to send.</p>
        </form>
      </div>
    </section>
  )
}

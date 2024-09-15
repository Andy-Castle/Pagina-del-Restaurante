export default function home() {
  return `<div class="home">
<div class="hero">
        <h1>Welcome to odin Restaurant</h1>
        <img
          src="https://cdn.statically.io/gh/TheOdinProject/curriculum/5f37d43908ef92499e95a9b90fc3cc291a95014c/html_css/project-sign-up-form/odin-lined.png"
          alt="Logo de Odin Restaurant" />
      </div>
      <div class="hours">
        <div class="card">
          <h2>Hours</h2>
          <p>
            Our restaurant opens its doors from Monday to Sunday to offer you the
            best service. Check out our hours:
          </p>
          <ul>
            <li>Monday to Friday: 9:00 a.m. - 10:00 p.m.</li>
            <li>Saturday: 10:00 a.m. - 11:00 p.m.</li>
            <li>Sunday: 10:00 a.m. - 9:00 p.m.</li>
          </ul>
          <p>
            We look forward to providing you with an unforgettable dining
            experience!
          </p>
        </div>
      </div>
      <div class="location">
        <div class="card">
          <h1>Location</h1>
          <p>1234 Sunset Boulevard, Los Angeles, CA 90026</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423284.0441664609!2d-118.74138735752983!3d34.02060845586252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20%C3%81ngeles%2C%20California%2C%20EE.%20UU.!5e0!3m2!1ses-419!2smx!4v1726365413353!5m2!1ses-419!2smx"
            width="450"
            height="350"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      </div>`;
}

// export { home };

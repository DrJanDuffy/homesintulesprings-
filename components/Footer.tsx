import Link from 'next/link';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-logo">
              <img src="/images/logo-white.svg" alt="Dr. Jan Duffy - Berkshire Hathaway HomeServices" className="img-fluid" loading="lazy" />
            </div>
            <div className="footer-contact">
              <p><i className="fas fa-map-marker-alt" aria-hidden="true"></i> 2627 Nature Park Dr, North Las Vegas, NV 89084</p>
              <p><i className="fas fa-phone" aria-hidden="true"></i> <a href="tel:+17025001942">(702) 500-1942</a></p>
              <p><i className="fas fa-envelope" aria-hidden="true"></i> <a href="mailto:DrDuffy@bhhsnv.com">DrDuffy@bhhsnv.com</a></p>
            </div>
          </div>
          <div className="col-md-4">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link href="/buyers">Search Homes</Link></li>
              <li><Link href="/listings">Listings</Link></li>
              <li><Link href="/sellers">Sell Your Home</Link></li>
              <li><Link href="/tule-springs">Tule Springs</Link></li>
              <li><Link href="/about">About Dr. Duffy</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Explore Tule Springs</h3>
            <ul className="footer-links">
              <li><Link href="/tule-springs-homes-for-sale">Homes for Sale</Link></li>
              <li><Link href="/tule-springs-real-estate">Real Estate</Link></li>
              <li><Link href="/tule-springs-villages">Villages</Link></li>
              <li><Link href="/tule-springs-schools">Schools</Link></li>
              <li><Link href="/tule-springs-amenities">Amenities</Link></li>
              <li><Link href="/tule-springs-neighborhoods">Neighborhoods</Link></li>
              <li><Link href="/north-las-vegas-tule-springs">North Las Vegas</Link></li>
              <li><Link href="/tule-springs-new-homes">New Homes</Link></li>
              <li><Link href="/why-tule-springs">Why Live Here</Link></li>
            </ul>
            <h3 className="mt-3">Follow Dr. Duffy</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/DrJanDuffy" aria-label="Facebook"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
              <a href="https://www.instagram.com/drjanduffy" aria-label="Instagram"><i className="fab fa-instagram" aria-hidden="true"></i></a>
              <a href="https://www.linkedin.com/in/drjanduffy" aria-label="LinkedIn"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a>
              <a href="https://www.youtube.com/@drjanduffy" aria-label="YouTube"><i className="fab fa-youtube" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-md-6">
              <p>&copy; 2026 Dr. Jan Duffy. All Rights Reserved.</p>
            </div>
            <div className="col-md-6">
              <div className="footer-legal">
                <p>Dr. Jan Duffy | License S.0197614.LLC | Berkshire Hathaway HomeServices Nevada Properties</p>
                <div className="realtor-logos">
                  <span className="equal-housing"><img src="/images/equal-housing.svg" alt="Equal Housing Opportunity" loading="lazy" /></span>
                  <span className="realtor-logo"><img src="/images/realtor-logo.svg" alt="Realtor" loading="lazy" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

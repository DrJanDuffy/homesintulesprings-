import Link from 'next/link';
import { PageBanner } from '@/components/PageBanner';

export const metadata = {
  title: 'Buy a Home in Tule Springs | First-Time Buyer Guide',
  description: 'Looking to buy a home in Tule Springs, North Las Vegas? Search available homes, get pre-approved, and work with Dr. Jan Duffy to find your perfect property.',
  openGraph: { url: 'https://www.homesintulesprings.com/buyers' },
};

export default function BuyersPage() {
  return (
    <>
      <PageBanner title="Buy a Home in Tule Springs" subtitle="Your Dream Home Awaits in North Las Vegas" />
      <section className="buyer-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">For Sale Now</span>
            <h2>Search Available Homes</h2>
            <p>Browse real-time MLS listings in Tule Springs and surrounding areas</p>
          </div>
          <p className="mls-disclaimer text-muted small" style={{ marginBottom: '1rem' }}>
            <strong>Listing disclaimer:</strong> All listing data is deemed reliable but not guaranteed. Listings displayed are from the MLS. &copy; 2026 the listing broker. All rights reserved.
          </p>
          <div className="realscout-widget-container realscout-main">
            {/* @ts-expect-error RealScout custom element */}
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="NEWEST"
              listing-status="For Sale"
              property-types="SFR,MF,TC,OTHER"
              price-min="300000"
              price-max="900000"
            />
          </div>
          <div className="benefits-row">
            <div className="benefit-item">
              <i className="fas fa-bolt"></i>
              <h4>Real-Time Listings</h4>
              <p>See new homes the moment they hit the market</p>
            </div>
            <div className="benefit-item">
              <i className="fas fa-heart"></i>
              <h4>Save Favorites</h4>
              <p>Create an account to save and compare homes</p>
            </div>
            <div className="benefit-item">
              <i className="fas fa-bell"></i>
              <h4>Instant Alerts</h4>
              <p>Get notified when new listings match your criteria</p>
            </div>
            <div className="benefit-item">
              <i className="fas fa-calendar"></i>
              <h4>Schedule Tours</h4>
              <p>Book showings directly through the platform</p>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Find Your Home?</h2>
            <p>Dr. Jan Duffy will guide you every step of the way.</p>
            <div className="cta-buttons">
              <a href="tel:+17025001942" className="btn btn-primary btn-lg"><i className="fas fa-phone"></i> Call (702) 500-1942</a>
              <Link href="/contact" className="btn btn-outline-light btn-lg">Contact Dr. Duffy</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

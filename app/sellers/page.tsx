import Link from 'next/link';
import { PageBanner } from '@/components/PageBanner';

export const metadata = {
  title: 'Sell Your Home in Tule Springs | Free Home Valuation',
  description: 'Sell your Tule Springs home for top dollar. Get a free home valuation, professional marketing, and expert negotiation from Dr. Jan Duffy, REALTOR®.',
  openGraph: { url: 'https://www.homesintulesprings.com/sellers' },
};

export default function SellersPage() {
  return (
    <>
      <PageBanner title="Sell Your Tule Springs Home" subtitle="Get Top Dollar with Expert Marketing & Negotiation" />
      <section className="buyer-section realscout-below-hero">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Homes for Sale</span>
            <h2>Browse Tule Springs Listings</h2>
            <p>Live MLS listings updated in real time.</p>
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
        </div>
      </section>
      <section className="seller-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge seller-badge">Home Value</span>
            <h2>What&apos;s Your Home Worth?</h2>
            <p>Get a free, no-obligation market analysis</p>
          </div>
          <div className="realscout-widget-container">
            {/* @ts-expect-error RealScout custom element */}
            <realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw" />
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Sell?</h2>
            <p>Get your free home valuation and expert marketing plan.</p>
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

import Link from 'next/link';
import { PageBanner } from '@/components/PageBanner';

export const metadata = {
  title: 'Tule Springs Homes for Sale | North Las Vegas Listings',
  description: 'Search Tule Springs homes for sale. Live MLS listings in North Las Vegas. Find your next home with Dr. Jan Duffy.',
  openGraph: { url: 'https://www.homesintulesprings.com/tule-springs-homes-for-sale' },
};

export default function TuleSpringsHomesForSalePage() {
  return (
    <>
      <PageBanner title="Tule Springs Homes for Sale" subtitle="Live MLS Listings in North Las Vegas" />
      <section className="buyer-section realscout-below-hero">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">For Sale</span>
            <h2>Search Tule Springs Listings</h2>
            <p>Real-time MLS listings updated every 15 minutes.</p>
          </div>
          <p className="mls-disclaimer text-muted small" style={{ marginBottom: '1rem' }}><strong>Listing disclaimer:</strong> All listing data is deemed reliable but not guaranteed. Listings displayed are from the MLS. &copy; 2026 the listing broker. All rights reserved.</p>
          <div className="realscout-widget-container realscout-main">
            {/* @ts-expect-error RealScout custom element */}
            <realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="NEWEST" listing-status="For Sale" property-types="SFR,MF,TC,OTHER" price-min="300000" price-max="900000" />
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Buy?</h2>
            <p>Contact Dr. Jan Duffy for showings and expert guidance.</p>
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

import Link from 'next/link';
import { PageBanner } from '@/components/PageBanner';

export const metadata = {
  title: 'Tule Springs Amenities | Parks, Trails & Lifestyle',
  description: 'Discover Tule Springs amenities: parks, trails, recreation, and lifestyle. Find homes near the best amenities with Dr. Jan Duffy.',
  openGraph: { url: 'https://www.homesintulesprings.com/tule-springs-amenities' },
};

export default function TuleSpringsAmenitiesPage() {
  return (
    <>
      <PageBanner title="Tule Springs Amenities" subtitle="Parks, Trails & Lifestyle" breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Tule Springs', href: '/tule-springs' }, { label: 'Amenities' }]} />
      <section className="buyer-section realscout-below-hero">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Homes for Sale</span>
            <h2>Homes Near Tule Springs Amenities</h2>
            <p>Live near parks, trails, and recreation.</p>
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
      <section className="cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Live Where You Play</h2>
            <p>Find your home near Tule Springs best amenities.</p>
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

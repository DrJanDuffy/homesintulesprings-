import Link from 'next/link';
import { PageBanner } from '@/components/PageBanner';

export const metadata = {
  title: 'North Las Vegas & Tule Springs | Real Estate Guide',
  description: 'North Las Vegas and Tule Springs real estate. Find homes for sale, market info, and expert guidance from Dr. Jan Duffy.',
  openGraph: { url: 'https://www.homesintulesprings.com/north-las-vegas-tule-springs' },
};

export default function NorthLasVegasTuleSpringsPage() {
  return (
    <>
      <PageBanner title="North Las Vegas & Tule Springs" subtitle="Real Estate Guide" breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Tule Springs', href: '/tule-springs' }, { label: 'North Las Vegas' }]} />
      <section className="buyer-section realscout-below-hero">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Homes for Sale</span>
            <h2>North Las Vegas & Tule Springs Listings</h2>
            <p>Live MLS listings in the area.</p>
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
            <h2>Explore North Las Vegas Real Estate</h2>
            <p>Dr. Jan Duffy serves Tule Springs and greater North Las Vegas.</p>
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

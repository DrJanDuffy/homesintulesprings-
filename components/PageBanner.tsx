import Link from 'next/link';

type PageBannerProps = {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
};

export function PageBanner({ title, subtitle, breadcrumb }: PageBannerProps) {
  return (
    <section className="page-banner" style={{ backgroundImage: "url('/images/tule-springs-park.jpg')" }}>
      <div className="container">
        <div className="banner-content">
          <h1>{title}</h1>
          {subtitle && <p className="banner-subtitle">{subtitle}</p>}
          {breadcrumb && breadcrumb.length > 0 && (
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                {breadcrumb.map((item, i) => (
                  <li key={i} className={`breadcrumb-item${i === breadcrumb.length - 1 ? ' active' : ''}`} aria-current={i === breadcrumb.length - 1 ? 'page' : undefined}>
                    {item.href && i < breadcrumb.length - 1 ? <Link href={item.href}>{item.label}</Link> : item.label}
                  </li>
                ))}
              </ol>
            </nav>
          )}
        </div>
      </div>
    </section>
  );
}

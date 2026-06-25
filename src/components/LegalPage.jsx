export default function ContentPage({ title, lastUpdated, children, wide }) {
  return (
    <article className="py-16 bg-bg min-h-[60vh] max-tablet:py-12">
      <div className={`${wide ? 'max-w-[1140px]' : 'max-w-[720px]'} mx-auto px-6 max-mobile:px-4`}>
        <h1 className="text-[clamp(28px,4vw,36px)] font-extrabold text-text-heading leading-[1.1] mb-2">{title}</h1>
        {lastUpdated ? <p className="text-[15px] text-text-light mb-10">Last Updated: {lastUpdated}</p> : <div className="mb-10" />}
        <div className="space-y-8 text-text-body leading-[1.75] [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-text-heading [&_h2]:mb-3 [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-text-heading [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_a]:text-accent [&_a]:font-medium [&_a]:hover:underline">
          {children}
        </div>
      </div>
    </article>
  );
}

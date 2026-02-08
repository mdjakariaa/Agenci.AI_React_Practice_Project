import company_logos from "../assets/assets.js";

export default function CompanySection() {
  return (
    <section className="w-full  pt-4 pb-10 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40">
      <div className="grid grid-cols-1 gap-12">
        <p className="text-center text-lg font-semibold text-gray-500">
          Trusted by Leading Companies
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 gap-y-10 md:gap-y-0 w-max mx-auto justify-items-center">
          <img
            src={company_logos.microsoft_logo}
            alt="microsoft"
            className="w-[109px] h-[23px]"
          />
          <img
            src={company_logos.zoom_logo}
            alt="zoom"
            className="w-[80px] h-[23px] w-fit"
          />
          <img
            src={company_logos.airbnb_logo}
            alt="airbnb"
            className="w-[73px] h-[23px]"
          />
          <img
            src={company_logos.coinbase_logo}
            alt="coinbase"
            className="w-[111px] h-[23px]"
          />
          <img
            src={company_logos.rakuten_logo}
            alt="rakuten"
            className="w-[80px] h-[23px]"
          />
          <img
            src={company_logos.google_logo}
            alt="google"
            className="w-[72px] h-[23px]"
          />
        </div>
      </div>
    </section>
  );
}

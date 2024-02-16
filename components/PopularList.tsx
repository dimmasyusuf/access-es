import PopularItem from './PopularItem';

export default function PopularList() {
  return (
    <section className="flex px-6 sm:px-8 md:px-0 max-w-screen-xl w-full">
      <div className="flex flex-col py-8 md:py-10 gap-10 md:gap-16 w-full">
        <h2 className="font-medium text-3xl md:text-5xl">Kelas Terpopuler</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-8">
          <PopularItem
            name="Full Day Camp"
            image="/images/fulldaycamp_2minggu.webp"
            originalPrice={2590000}
            salePrice={1265000}
          />
          <PopularItem
            name="Reguler Camp"
            image="/images/regulercamp_2minggu.webp"
            originalPrice={2489000}
            salePrice={1200000}
          />
          <PopularItem
            name="Reguler Non Camp"
            image="/images/regulernoncamp_2minggu.webp"
            originalPrice={1899000}
            salePrice={900000}
          />
          <PopularItem
            name="English Staycation Bali"
            image="/images/englishstaycation_bali.webp"
            originalPrice={6500000}
            salePrice={2500000}
          />
          <PopularItem
            name="English Staycation Bromo"
            image="/images/englishstaycation_bromo.webp"
            originalPrice={3500000}
            salePrice={1200000}
          />
          <PopularItem
            name="Internship Program"
            image="/images/internship_program.webp"
            originalPrice={16990000}
            salePrice={7500000}
          />
        </div>
      </div>
    </section>
  );
}

import CategoryItem from './CategoryItem';

export default function CategoryList() {
  return (
    <section className="max-w-screen-xl w-full mb-8 md:mb-10">
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-6 px-6 sm:px-8 md:px-0 w-full">
        <CategoryItem
          name="Paket Asrama"
          route="paket-asrama"
        />
        <CategoryItem
          name="Paket Non Asrama"
          route="paket-non-asrama"
        />
        <CategoryItem
          name="Kelas Satuan"
          route="kelas-satuan"
        />
        <CategoryItem
          name="Kelas Online"
          route="kelas-online"
        />
        <CategoryItem
          name="English Staycation"
          route="english-staycation"
        />
        <CategoryItem
          name="Beasiswa"
          route="beasiswa"
        />
      </div>
    </section>
  );
}

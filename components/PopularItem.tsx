import { discountPercentage, formatPrice } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function PopularItem({
  name,
  image,
  originalPrice,
  salePrice,
}: {
  name: string;
  image?: string;
  originalPrice: number;
  salePrice: number;
}) {
  return (
    <div className="flex flex-col">
      <Link
        href="/"
        className="flex items-center justify-center aspect-square rounded-md"
      >
        <Image
          src={image || '/logo_shape.svg'}
          alt={name}
          width={200}
          height={200}
          className="rounded-md object-cover w-full h-full"
        />
      </Link>
      <div className="flex flex-col mt-2">
        <Link href="/">
          <h3 className="hover:underline line-clamp-2">{name}</h3>
        </Link>
        <p className="font-semibold mt-1">{formatPrice(salePrice)}</p>
        <div className="flex items-center gap-2 mt-1">
          <div className="p-1 rounded-sm bg-red-100">
            <p className="text-xs font-semibold text-red-600">
              {discountPercentage(originalPrice, salePrice)}%
            </p>
          </div>
          <p className="text-sm text-muted-foreground line-through">
            {formatPrice(originalPrice)}
          </p>
        </div>
      </div>
    </div>
  );
}

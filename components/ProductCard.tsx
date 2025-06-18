import Image from 'next/image';
import Link from 'next/link'; // Import Link

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    // Wrap the card in a Link component
    <Link href={`/products/${product.id}`}>
      <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer">
        <div className="relative w-full h-48 mb-4">
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-700 mt-2">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
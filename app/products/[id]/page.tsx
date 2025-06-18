 
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  return res.json();
}

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  return (
    <div className="container mx-auto p-4">
      <Link href="/products" className="text-blue-500 hover:underline mb-4 inline-block">← Back to Products</Link>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 relative h-96">
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-gray-800 mb-6">${product.price.toFixed(2)}</p>
          <p className="text-gray-600">
            This is a placeholder description for the {product.name}. In a real e-commerce site, this area would be filled with detailed specifications, features, and user reviews.
          </p>
          <button className="mt-8 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
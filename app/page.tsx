import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Geer.in Assignment</h1>
        <p className="text-lg mb-8">Click the button below to see the products.</p>
        <Link 
          href="/products" 
          className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Products
        </Link>
      </div>
    </main>
  );
}
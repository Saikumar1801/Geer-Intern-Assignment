 import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

// Helper function to get the file path
const getProductsFilePath = () => {
  return path.join(process.cwd(), 'data', 'products.json');
};

// Helper function to read products
const readProducts = async () => {
  const filePath = getProductsFilePath();
  const fileData = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(fileData);
};

// GET: /api/products
// Returns a list of all products.
export async function GET() {
  try {
    const products = await readProducts();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ message: "Error reading products data" }, { status: 500 });
  }
}

// POST: /api/products
// Adds a new product.
export async function POST(request: Request) {
  try {
    const products = await readProducts();
    const newProduct = await request.json();

    // Basic validation
    if (!newProduct.name || !newProduct.price || !newProduct.imageUrl) {
        return NextResponse.json({ message: "Missing required product fields" }, { status: 400 });
    }

    // Add a new ID (simple approach)
    newProduct.id = products.length > 0 ? Math.max(...products.map((p: any) => p.id)) + 1 : 1;
    products.push(newProduct);
    
    // Write back to the file
    await fs.writeFile(getProductsFilePath(), JSON.stringify(products, null, 2));
    
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error creating product" }, { status: 500 });
  }
}
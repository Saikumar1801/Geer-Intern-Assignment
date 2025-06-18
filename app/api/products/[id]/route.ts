import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

// (You can move these helper functions to a shared file later for even cleaner code)
const getProductsFilePath = () => path.join(process.cwd(), 'data', 'products.json');
const readProducts = async () => {
  const fileData = await fs.readFile(getProductsFilePath(), 'utf-8');
  return JSON.parse(fileData);
};

// GET: /api/products/:id
export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const products = await readProducts();
    const product = products.find((p: any) => p.id === parseInt(params.id));

    if (!product) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ message: "Error reading product data" }, { status: 500 });
  }
}

// DELETE: /api/products/:id
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        let products = await readProducts();
        const productIndex = products.findIndex((p: any) => p.id === parseInt(params.id));

        if (productIndex === -1) {
            return NextResponse.json({ message: "Product not found" }, { status: 404 });
        }

        products.splice(productIndex, 1); // Remove the product
        await fs.writeFile(getProductsFilePath(), JSON.stringify(products, null, 2));
        
        return NextResponse.json({ message: "Product deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error deleting product" }, { status: 500 });
    }
}
type ProductProps = {
  id: string;
  name: string;
  image: string;
  price: number;
};

const ProductCard = ({ id, name, image, price }: ProductProps) => {
  return (
    <div className="border rounded p-2 hover:shadow transition">
      <img src={image} alt={name} className="w-full h-32 object-cover mb-2 rounded" />
      <h3 className="text-sm font-semibold">{name}</h3>
      <p className="text-xs text-gray-500">{price} đ</p>
    </div>
  );
};

export default ProductCard;

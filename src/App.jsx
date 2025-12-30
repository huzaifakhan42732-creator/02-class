import React, { useState } from 'react';
import { ShoppingCart, Heart, Star, TrendingUp } from 'lucide-react';

export default function ClothingCard() {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const product = {
    name: "Premium Cotton T-Shirt",
    price: 49.99,
    originalPrice: 79.99,
    rating: 4.8,
    reviews: 234,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#000000", "#FFFFFF", "#3B82F6", "#EF4444"],
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80"
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-8">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.5); }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes bounce-in {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }

        .card-container {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-container:hover {
          transform: translateY(-12px) scale(1.02);
        }

        .image-container {
          overflow: hidden;
          position: relative;
        }

        .product-image {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-container:hover .product-image {
          transform: scale(1.15) rotate(2deg);
        }

        .badge {
          animation: float 3s ease-in-out infinite;
        }

        .heart-icon {
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .heart-icon:hover {
          transform: scale(1.2);
        }

        .heart-icon.liked {
          animation: bounce-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .size-btn {
          transition: all 0.3s ease;
        }

        .size-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .color-btn {
          transition: all 0.3s ease;
          position: relative;
        }

        .color-btn::after {
          content: '';
          position: absolute;
          inset: -4px;
          border: 2px solid transparent;
          border-radius: 50%;
          transition: border-color 0.3s ease;
        }

        .color-btn:hover::after {
          border-color: rgba(59, 130, 246, 0.5);
        }

        .add-to-cart-btn {
          position: relative;
          overflow: hidden;
        }

        .add-to-cart-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .add-to-cart-btn:hover::before {
          left: 100%;
        }

        .price-tag {
          transition: all 0.3s ease;
        }

        .card-container:hover .price-tag {
          transform: scale(1.05);
        }

        .star {
          transition: all 0.2s ease;
        }

        .star:hover {
          transform: scale(1.3) rotate(72deg);
        }
      `}</style>

      <div 
        className="card-container bg-white rounded-3xl shadow-2xl overflow-hidden max-w-sm w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Section */}
        <div className="image-container relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="product-image w-full h-72 object-cover"
          />
          
          {/* Badge */}
          <div className="badge absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
            <TrendingUp size={14} />
            {product.badge}
          </div>

          {/* Discount Badge */}
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
            -{discount}%
          </div>

          {/* Heart Icon */}
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`heart-icon ${isLiked ? 'liked' : ''} absolute bottom-4 right-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl`}
          >
            <Heart 
              size={24} 
              className={`transition-colors ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
            />
          </button>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4">
          {/* Title & Rating */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={`star ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="price-tag flex items-baseline gap-3">
            <span className="text-3xl font-bold text-blue-600">${product.price}</span>
            <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
          </div>

          {/* Sizes */}
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-2">Size:</p>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button 
                  key={size}
                  className="size-btn px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-500 font-medium"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-2">Color:</p>
            <div className="flex gap-3">
              {product.colors.map((color, index) => (
                <button 
                  key={index}
                  className="color-btn w-10 h-10 rounded-full shadow-md hover:shadow-lg"
                  style={{ backgroundColor: color }}
                  aria-label={`Color ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="add-to-cart-btn w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 mt-6">
            <ShoppingCart size={20} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
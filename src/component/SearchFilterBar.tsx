import React from 'react';

interface Props {
  searchTerm: string;
  onSearch: (term: string) => void;
  filterPrice: string;
  onFilterPrice: (value: string) => void;
}

const SearchFilterBar: React.FC<Props> = ({ searchTerm, onSearch, filterPrice, onFilterPrice }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Tìm sản phẩm..."
        className="border p-2 rounded w-full md:w-1/2"
      />
      <select
        value={filterPrice}
        onChange={(e) => onFilterPrice(e.target.value)}
        className="border p-2 rounded w-full md:w-1/4"
      >
        <option value="">Tất cả mức giá</option>
        <option value="duoi200">Dưới 200K</option>
        <option value="200-500">Từ 200K - 500K</option>
        <option value="tren500">Trên 500K</option>
      </select>
    </div>
  );
};

export default SearchFilterBar;

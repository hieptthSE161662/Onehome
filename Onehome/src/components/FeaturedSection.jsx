import { properties } from "../data/fakeData";
import PropertyCard from "./PropertyCard";

const FeaturedSection = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Phân khu mới mở bán</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;

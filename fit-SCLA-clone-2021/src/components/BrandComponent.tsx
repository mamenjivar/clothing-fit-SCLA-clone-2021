import './BrandComponent.css';

interface ContainerProps { }

const BrandComponent: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <h1>Brands</h1>
    </div>
  );
};

export default BrandComponent;

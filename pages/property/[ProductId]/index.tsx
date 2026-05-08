import { useRouter } from "next/router";

const PropertyDetail = () => {
  const router = useRouter();
  const { ProductId } = router.query;
  return <div>Property Detail {ProductId}</div>;
};

export default PropertyDetail;


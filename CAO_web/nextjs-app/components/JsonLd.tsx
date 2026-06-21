export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Dây cổ Glamorosa",
    "image": "https://caofinejewellery.com.vn/images/glamorosa.jpg",
    "description": "Tác phẩm fine jewellery lấy cảm hứng từ sắc hoa và nhịp kết nối.",
    "brand": {
      "@type": "Brand",
      "name": "CAO Fine Jewellery"
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

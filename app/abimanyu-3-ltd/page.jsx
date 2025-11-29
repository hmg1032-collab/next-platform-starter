import { CompanyInfo } from "../../components/company-info";

export default function Abimanyu3LTD() {
  const companyData = {
    name: "Abimanyu 3 LTD",
    tagline: "Your trusted partner in wholesale distribution.",
    about:
      "Abimanyu 3 LTD is a leading wholesale company dedicated to providing high-quality products to our clients. With years of experience in the industry, we have built a reputation for excellence and reliability.",
    products:
      "We offer a wide range of products to meet the diverse needs of our customers. From electronics to consumer goods, we have it all.",
    contact: {
      email: "Email: contact@abimanyu3ltd.com",
      phone: "Phone: 123-456-7890",
    },
  };

  return <CompanyInfo {...companyData} />;
}

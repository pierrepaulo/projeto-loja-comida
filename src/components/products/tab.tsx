import { getAllProducts } from "@/services/product";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { title } from "process";
import { Product } from "@/types/product";

type Tab = {
  title: string;
  value: string;
  products: Product[];
};

export const ProductsTab = async () => {
  const products = await getAllProducts();

  const tabs: Tab[] = [
    {
      title: "Sushi",
      value: "sushi",
      products: [],
    },
    {
      title: "Temaki",
      value: "temaki",
      products: [],
    },
    {
      title: "Combinados",
      value: "pack",
      products: [],
    },
    {
      title: "Bebidas",
      value: "beverage",
      products: [],
    },
  ];
  return (
    <Tabs defaultValue="sushi">
      <TabsList className="flex">
        {tabs.map((item) => (
          <TabsTrigger key={item.value} value={item.value} className="flex-1">
            {item.title}{" "}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((item) => (
        <TabsContent value={item.value} className="mt-6">
          ...
        </TabsContent>
      ))}
    </Tabs>
  );
};

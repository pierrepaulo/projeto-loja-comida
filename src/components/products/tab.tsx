import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export const ProductsTab = () => {
  return (
    <Tabs defaultValue="tab1">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="tab1">Tab1</TabsTrigger>
        <TabsTrigger value="tab2">Tab2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="mt-6">
        Conteudo da TAB 1
      </TabsContent>
      <TabsContent value="tab2" className="mt-6">
        Conteudo da TAB 2
      </TabsContent>
    </Tabs>
  );
};

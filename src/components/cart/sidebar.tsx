import { RocketIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";

export const CartSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button>
          <RocketIcon className="mr-2" />
          <p>Carrinho</p>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-5 my-3 px-5">...</div>
        <Separator className="my-4 " />
        <div className="flex justify-between items-center text-xs px-5">
          <div>Subtotal</div>
          <div>...</div>
        </div>
        <Separator className="my-4" />
        <div className="text-center">
          <Button>Finalizar Compra</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

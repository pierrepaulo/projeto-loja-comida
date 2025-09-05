import { useCheckoutstore } from "@/stores/checkout-store";
import { Button } from "../ui/button";
import Link from "next/link";
import { generateMessage } from "@/lib/generate-message";

export const StepFinish = () => {
  const { name } = useCheckoutstore((state) => state);
  const message = generateMessage();
  const linkZap = `https://wa.me//${
    process.env.NEXT_PUBLIC_ZAP
  }?text=${encodeURI(message)}`;
  return (
    <div className="text-center flex flex-col gap-5">
      <p>
        Perfeito <strong>{name}</strong>!
      </p>
      <p>Agora envise seu pedido ao nosso WhatsApp para concluir.</p>
      <Button>
        <Link target="_blank" href={linkZap}>
          Enviar para WhatsApp
        </Link>
      </Button>
    </div>
  );
};

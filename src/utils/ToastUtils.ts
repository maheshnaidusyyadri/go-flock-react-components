import { useIonToast } from "@ionic/react";

const useToastUtils = () => {
  const [present] = useIonToast();

  const presentToast = (
    message: string,
    position: "top" | "middle" | "bottom" = "bottom",
    color: "success" | "danger" | "warning" | "primary" = "success",
    duration: number = 1500
  ) => {
    present({
      message,
      color,
      duration,
      position,
    });
  };

  return { presentToast };
};

export default useToastUtils;

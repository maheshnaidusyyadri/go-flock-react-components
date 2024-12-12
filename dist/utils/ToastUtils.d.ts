declare const useToastUtils: () => {
    presentToast: (message: string, position?: "top" | "middle" | "bottom", color?: "success" | "danger" | "warning" | "primary", duration?: number) => void;
};
export default useToastUtils;

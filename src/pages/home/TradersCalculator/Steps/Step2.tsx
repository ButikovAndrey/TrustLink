import { Crypto, KaspiBank, Ok, OzonBank, SBP, TBank } from "@/icons";
import { useAppStore } from "@/store";
import { Button } from "@mui/material";

export const Step2 = () => {
  const value = useAppStore((store) => store.step2value);
  const setValue = useAppStore((store) => store.setStep2value);
  return (
    <>
      {[
        { name: "SBP", bgcolor: "#E6E5F5", color: "#302E60", Icon: SBP },
        {
          name: "T-Bank",
          bgcolor: "#FFF8D6",
          color: "#333333",
          Icon: TBank,
        },
        {
          name: "Ozon",
          bgcolor: "#E8F1FF",
          color: "#002C78",
          Icon: OzonBank,
        },
        {
          name: "Kaspi",
          bgcolor: "#FFECEB",
          color: "#A32A1E",
          Icon: KaspiBank,
        },
        {
          name: "Crypto",
          bgcolor: "#F0FEED",
          color: "#259800",
          Icon: Crypto,
        },
      ].map(({ name, color, bgcolor, Icon }) => {
        const isSelected = value.includes(name);
        return (
          <Button
            key={name}
            color="secondary"
            variant={isSelected ? "outlined" : "contained"}
            onClick={() => setValue(name)}
            startIcon={
              isSelected ? (
                <Ok style={{ marginRight: "2px" }} />
              ) : (
                <Icon style={{ width: "25px", height: "25px" }} />
              )
            }
            sx={{
              textWrap: "nowrap",
              textTransform: "none",
              borderRadius: 30,
              boxShadow: "none",
              bgcolor: isSelected ? undefined : bgcolor,
              color: isSelected ? "#A808C8" : color,
              fontFamily: '"Manrope", sans-serif',
              fontWeight: 500,
              fontSize: 25,
              width: 142,
              py: 1,
            }}
          >
            {name}
          </Button>
        );
      })}
    </>
  );
};

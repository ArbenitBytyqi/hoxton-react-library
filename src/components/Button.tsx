type Props = {
  children: string;
  size?: "small" | "medium" | "big";
  secondary?: boolean;
};

export function Button({
  children,
  size = "medium",
  secondary,
  ...props
}: Props) {
  let style: any = { paddingTop: "1rem", paddingBottom: "1rem" };

  if (size === "small") {
    style.paddingTop = "0.5rem";
    style.paddingBottom = "0.5rem";
  }

  if (size === "medium") {
    style.paddingTop = "1rem";
    style.paddingBottom = "1rem";
  }

  if (size === "big") {
    style.paddingTop = "1.5rem";
    style.paddingBottom = "1.5rem";
  }

  if (secondary) {
    style.backgroundColor = "white";
    style.color = "rgb(0, 223, 0)";
    style.border = "solid 2px rgb(0, 223, 0) ";
  }

  return (
    <button className="button" style={style} {...props}>
      {children}
    </button>
  );
}

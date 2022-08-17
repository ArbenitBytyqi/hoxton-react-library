type Props = {
  size?: "small" | "medium" | "big";
  mode?: "light" | "dark";
};

export function Input({ size = "medium", mode = "light", ...props }: Props) {
  let style: any = { width: "50px", height: "20px" };

  if (size === "small") {
    style.width = "100px";
    style.height = "20px";
  }

  if (size === "medium") {
    style.width = "200px";
    style.height = "30px";
  }

  if (size === "big") {
    style.width = "400px";
    style.height = "40px";
  }

  if (mode === "light") {
    style.backgroundColor = "white";
  }

  if (mode === "dark") {
    style.backgroundColor = "grey";
  }

  return <input className="input" style={style} {...props} />;
}

import clx from "classnames";
interface IGatewayButton {
  text: string;
  btnClass: string;
}
const GatewayButton = ({ text, btnClass }: IGatewayButton) => {
  return (
    <button
      className={`${clx(
        btnClass
      )} hover:bg-opacity-60 transition hover:shadow-md ease-in h-12 p-3 text-center min-w-[134px] rounded-xl text-sm md:text-base`}
    >
      {text}
    </button>
  );
};

export default GatewayButton;

// IconCart.js //Flaticon

export default function IconCart(props) {
  const colorFill = props.colorFill || "black"
  const colorFill1 = props.colorFill1 || colorFill
  const colorFill2 = props.colorFill2 || colorFill
  const colorFill3 = props.colorFill3 || colorFill
  const colorStroke = props.colorStroke || "red"
  const colorStroke1 = props.colorStroke1 || colorStroke
  const colorStroke2 = props.colorStroke2 || colorStroke
  const colorStroke3 = props.colorStroke3 || colorStroke
  const width = props.width || "64"
  const height = props.height || "64"

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 512 512">
      <circle
        cx="176"
        cy="416"
        r="16"
        fill={colorFill}
        stroke={colorStroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      ></circle>
      <circle
        cx="400"
        cy="416"
        r="16"
        fill={colorFill1}
        stroke={colorStroke1}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      ></circle>
      <path
        fill={colorFill2}
        stroke={colorStroke2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M48 80L112 80 160 352 416 352"
      ></path>
      <path
        fill={colorFill3}
        stroke={colorStroke3}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128"
      ></path>
    </svg>
  )
  //
}

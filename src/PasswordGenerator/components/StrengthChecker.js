
const StrengthChecker = ({password = ""}) => {

    let color = "";
    const getPasswordStrength = () =>{
        const passwordLength = password.length;

        if(passwordLength < 1){
            return ""
        } else if(passwordLength < 4){
            color += "text-danger"
            return "Very Weak"
        } else if(passwordLength < 8) {
            color += "text-danger"
            return "Poor"
        } else if(passwordLength < 12){
            color += "text-warning"
            return "Medium"
        } else if(passwordLength < 16){
            color += "text-success"
            return "Strong"
        } else {
            color += "text-success"
            return "Very Strong"
        }
    }

    const passwordStrength = getPasswordStrength();

    console.log(passwordStrength, "passwordStrength");

    if(!passwordStrength) return <></>

  return (
    <div className="text-white text-end mt-4">
        strength: <span className={`${color}`}>{passwordStrength}</span>
    </div>
  )
}

export default StrengthChecker
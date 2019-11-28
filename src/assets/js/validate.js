export const  emailValidation=(validateEmail)=>{
if (validateEmail===" "|| validateEmail.length<5|| !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(validateEmail))
{
    return false
}else{
    return true
}

}

export const validateUserInput=(useremail, userpassword)=>{
    if(!validatedUserInput(useremail)||useremail===""||userpassword===""){
        return false
    }else{
        return true
    }

}


export const validateRecordInput=()=>{

    if(!validatedRecordInput(email, password)||email===""||password===""||password.length<6){
        return false
    }else{
        return true
    }
}
import axios from "axios";

const useEmailVerification = () => {
    const checkEmailDuplicated = async (email) => {
        try {
            const response = await axios.post('/signup/email-auth/send',{email:email});
            if(response.status === 200){
                return false;
            }
        }catch (error) {
            if(error.response.status === 409){
                return true;
            }
        }
    };

    return {checkEmailDuplicated};
}

export default useEmailVerification;
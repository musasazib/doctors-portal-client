const { useContext } = require("react")
const { AuthContext } = require("../context/AuthProvider/AuthProvider")

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth
}

export default useAuth; 
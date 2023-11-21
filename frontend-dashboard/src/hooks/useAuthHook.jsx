import { useSelector } from 'react-redux';

const useAuthHook = () => {

    const { user } = useSelector((state) => state.auth);

    return { user };
}

export default useAuthHook;
